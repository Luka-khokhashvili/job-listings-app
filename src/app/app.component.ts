import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { Job } from './interfaces/job';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './components/job-list/job-list.component';
import { FilterTagListComponent } from './components/filter-tag-list/filter-tag-list.component';

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
}
