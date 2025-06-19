import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Job } from '../../interfaces/job';
import { TagFilterService } from '../../services/tag-filter.service';

@Component({
  selector: 'app-job-list',
  imports: [CommonModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
})
export class JobListComponent {
  jobList: Job[] = [];
  @Output() tagList: string[] = [];

  constructor(
    private dataService: DataService,
    private tagFilter: TagFilterService
  ) {}

  ngOnInit() {
    this.dataService.getAllJobData().subscribe((data) => {
      console.log(data);
      this.jobList = data;
    });
  }

  getJobTags(job: any): string[] {
    return [
      job.role,
      job.level,
      ...(job.languages || []),
      ...(job.tools || []),
    ];
  }

  addFilterTag(tag: string) {
    this.tagFilter.addTag(tag);
  }
}
