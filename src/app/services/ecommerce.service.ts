import { IProduct, Ar, Ibasket, IAdres, AdresType, ICards, Icard } from './../models/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EcommerceService {
  private mainUrl = 'http://localhost:5500/api/';
  private baseUrl = 'https://json-rosy.vercel.app/api/';
  private apiUrl = 'https://ecommerce-back-end-theta.vercel.app/api/';
  constructor(private http: HttpClient) { }

  getProduct(type: string) {
    return this.http.get<Ar>(`${this.apiUrl}${type}`).pipe(
      switchMap(res => {
        return of(res);
      })
    );
  }

  post(productId: any, userId: string) {
    return this.http.post(`${this.apiUrl}addCart/${userId}/products/${productId}`, { userId, productId });
  }

  postx(productId: any, userId: string, count: number): Observable<any> {
    return this.http.put(`${this.apiUrl}updateCart/${userId}/update/${productId}`, { count });
  }

  Adrespost(item: any, userId: string): Observable<any> {
    console.log(item);

    return this.http.post(`${this.apiUrl}addProfile/${userId}`, item);
  }

  updateAdres(item: any, userId: string) {
    return this.http.put(`${this.apiUrl}updateProfile/${userId}`, item);
  }

  getBasket(userId: any) {
    return this.http.get<any>(`${this.apiUrl}getCart/${userId}`).pipe(
      switchMap(res => {
        return of(res.products);
      })
    );
  }

  delete(productId: string, userId: string) {
    return this.http.delete(`${this.apiUrl}deleteCart/${userId}/delete/${productId}`);
  }

  getItemDetails(id: number) {
    return this.http.get<IProduct>(`${this.apiUrl}getDetail/${id}`);
  }

  getAdress(userId: any) {
    return this.http.get<any>(`${this.apiUrl}getProfile/${userId}`).pipe(
      switchMap(res => {
        return of(res);
      })
    );
  }
  getCards() {
    return this.http.get<ICards>(`${this.apiUrl}card`).pipe(
      switchMap(res => {
        return of(res);
      })
    );
  }
  getCardsId(id: any) {
    return this.http.get<Icard>(`${this.apiUrl}card/${id}`).pipe(
      switchMap(res => {
        return of(res);
      })
    );
  }

  getSearch(name: string) {
    return this.http.get<IProduct>(`${this.apiUrl}/search?search=${name}`).pipe(
      switchMap(res => {
        return of(res);
      })
    );
  }
}
