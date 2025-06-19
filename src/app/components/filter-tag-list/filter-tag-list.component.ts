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

  constructor(private tagFilterService: TagFilterService) {
    this.selectedTags$ = this.tagFilterService.selectedTags$;
  }

  removeFilterTag(tag: string) {
    this.tagFilterService.removeTag(tag);
  }

  clearAll() {
    this.tagFilterService.clearAll();
  }
}
