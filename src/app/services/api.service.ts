import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:5500/api';
  private apiUrl = 'https://ecommerce-back-end-theta.vercel.app/api/';


  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { email, password }, { responseType: 'text' });
  }
}
