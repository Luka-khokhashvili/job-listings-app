import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { Job } from './interfaces/job';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './components/job-list/job-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, JobListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'job-listing-app';
}
