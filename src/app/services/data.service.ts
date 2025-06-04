import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Job } from '../interfaces/job';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  localApiUrl = 'http://localhost:3000/JobList'; // Local API endpoint, for testing
  publicApiUrl = 'https://683fece55b39a8039a561fb8.mockapi.io/api/v1/jobs'; // Hosted API endpoint for better maintainability and scalability

  constructor(private http: HttpClient) {}

  getAllJobData(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.publicApiUrl}`);
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.publicApiUrl}/${id}`);
  }
}
