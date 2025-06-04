import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-tag-list',
  imports: [CommonModule],
  templateUrl: './filter-tag-list.component.html',
  styleUrl: './filter-tag-list.component.css',
})
export class FilterTagListComponent {
  removeFilterTag() {}
}
