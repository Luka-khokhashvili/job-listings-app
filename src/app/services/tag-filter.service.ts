import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TagFilterService {
  constructor() {}

  private _tagList = new BehaviorSubject<string[]>([]);
  public selectedTags$ = this._tagList.asObservable();

  private _notification = new Subject<string>();
  notification$ = this._notification.asObservable();

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
