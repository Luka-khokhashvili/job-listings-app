import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './components/job-list/job-list.component';
import { FilterTagListComponent } from './components/filter-tag-list/filter-tag-list.component';
import { TagFilterService } from './services/tag-filter.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    JobListComponent,
    FilterTagListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'job-listing-app';

  constructor(private tagFilterService: TagFilterService) {}

  public notificationMessage = '';
  public showNotification = false;

  ngOnInit() {
    this.tagFilterService.notification$.subscribe((msg) => {
      this.notificationMessage = msg;
      this.showNotification = true;

      setTimeout(() => {
        this.showNotification = false;
      }, 3000); // hide after 3s
    });
  }
}
