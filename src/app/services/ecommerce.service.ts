import { IProduct, Ar, Ibasket, IAdres, AdresType } from './../models/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EcommerceService {
  baseUrl = 'http://localhost:3300/';
  constructor(private http: HttpClient) {}

  getProduct(type: string) {
    return this.http.get<Ar>(`${this.baseUrl}${type}`).pipe(
      switchMap(res => {
        return of(res);
      })
    );
  }
  post(item: Ar) {
    console.log(item);

    return this.http.post(`${this.baseUrl}basket`, item);
  }
  postx(item: IProduct): Observable<any> {
    console.log(item);

    return this.http.put(`${this.baseUrl}basket/${item.id}`, item);
  }
  Adrespost(item: any, type: string): Observable<any> {
    console.log(item);

    return this.http.put(`${this.baseUrl}${type}/${item.id}`, item);
  }
  getBasket() {
    return this.http.get<Ar>(`${this.baseUrl}basket`).pipe(
      switchMap(res => {
        return of(res);
      })
    );
  }

  delete(item: any) {
    return this.http.delete(`${this.baseUrl}basket/${item.id}`, item);
  }

  getItemDetails(id: number) {
    return this.http.get<IProduct>(`${this.baseUrl}items/${id}`);
  }

  getAdress() {
    return this.http.get<AdresType>(`${this.baseUrl}adress`).pipe(
      switchMap(res => {
        return of(res);
      })
    );
  }
}
