import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { Job } from './interfaces/job';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'job-listing-app';

  jobList: Job[] = [];
  job!: Job;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllJobData().subscribe((data) => {
      console.log(data);
      this.jobList = data;
    });

    // this.dataService.getJobById(1).subscribe((data) => {
    //   console.log(data);
    //   this.job = data;
    // });
  }

  getJobTags(job: any): string[] {
    return [
      job.role,
      job.level,
      ...(job.languages || []),
      ...(job.tools || []),
    ];
  }
}
