import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Subject } from 'rxjs';
import { Job } from '../interfaces/job';

@Injectable({
  providedIn: 'root',
})
export class TagFilterService {
  constructor() {}

  private _jobs = new BehaviorSubject<Job[]>([]);
  public jobs$ = this._jobs.asObservable();

  setJobs(jobs: Job[]) {
    this._jobs.next(jobs);
  }

  private _tagList = new BehaviorSubject<string[]>([]);
  public selectedTags$ = this._tagList.asObservable();

  getJobTags(job: any): string[] {
    return [
      job.role,
      job.level,
      ...(job.languages || []),
      ...(job.tools || []),
    ];
  }

  public filteredJobs$ = combineLatest([this.jobs$, this.selectedTags$]).pipe(
    map(([jobs, tags]) => {
      if (!tags.length) return jobs;
      return jobs.filter((job) => {
        const jobTags = this.getJobTags(job);
        return tags.every((tag) => jobTags.includes(tag));
      });
    })
  );

  private _notification = new Subject<string>();
  public notification$ = this._notification.asObservable();

  addTag(newTag: string) {
    const currTagList = this._tagList.value;
    if (currTagList.includes(newTag)) {
      this._notification.next(`Tag "${newTag}" is already selected`);
      return;
    }
    this._tagList.next([...currTagList, newTag]);
  }

  removeTag(tagToRemove: string) {
    if (this._tagList.getValue().includes(tagToRemove)) {
      const currTagList = this._tagList.getValue();

      const updatedTagList = currTagList.filter((tag) => tag !== tagToRemove);

      this._tagList.next(updatedTagList);
    }
  }

  clearAll() {
    this._tagList.next([]);
  }
}
