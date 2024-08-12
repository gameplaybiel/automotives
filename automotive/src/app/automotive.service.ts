import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutomotiveService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAutomotive(){
    return this.http.get(this.apiUrl + '/automotive')
    .pipe(
      catchError(error => {
        console.error('Error fetching automotive', error);
        throw error;
      })
    );
  }
}
