import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../interfaces/job';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = 'http://localhost:3000/JobList';

  constructor(private http: HttpClient) {}

  getAllJobData(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}`);
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }
}
