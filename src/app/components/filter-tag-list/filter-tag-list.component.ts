import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TagFilterService } from '../../services/tag-filter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter-tag-list',
  imports: [CommonModule],
  templateUrl: './filter-tag-list.component.html',
  styleUrl: './filter-tag-list.component.css',
})
export class FilterTagListComponent {
  selectedTags$: Observable<string[]>;
  public notificationMessage = '';
  public showNotification = false;

  constructor(private tagFilterService: TagFilterService) {
    this.selectedTags$ = this.tagFilterService.selectedTags$;
  }

  ngOnInit() {
    this.tagFilterService.notification$.subscribe((msg) => {
      this.notificationMessage = msg;
      this.showNotification = true;

      setTimeout(() => {
        this.showNotification = false;
      }, 3000); // hide after 3s
    });
  }

  removeFilterTag(tag: string) {
    this.tagFilterService.removeTag(tag);
  }

  clearAll() {
    this.tagFilterService.clearAll();
  }
}
