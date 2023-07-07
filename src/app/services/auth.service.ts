import { BehaviorSubject, tap } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'token';
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  user: UserModel | null;

  isLoggedIn() {
    return this._isLoggedIn$.value;
  }

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  private userId: any;

  constructor(private apiService: ApiService) {
    this.user = this.getUser(this.token);
    // console.log(this.user?._id);
    this.setUserId(this.user?._id);
    this.tokenCheck();
  }

  private tokenCheck() {
    const token = localStorage.getItem(this.TOKEN_NAME);

    if (token) {
      this.user = this.getUser(token);
      this._isLoggedIn$.next(true);
    } else {
      this._isLoggedIn$.next(false);
    }
  }

  setUserId(userId: string) {
    this.userId = this.token;
    console.log('s', this.userId);
  }

  getUserId() {
    return this.userId;
  }

  hasRole(isAdmin: boolean): boolean {
    console.log(this.user._id);
    return this.user?.isAdmin === isAdmin || false;
  }

  getUsers() {
    const id = this.user;
    return id?._id;
  }

  login(email: string, password: string) {
    return this.apiService.login(email, password).pipe(
      tap((res: any) => {
        localStorage.setItem(this.TOKEN_NAME, res);
        this.user = this.getUser(res);
        this._isLoggedIn$.next(true);
        console.log(this.user._id);
        console.log(res);
        this.setUserId(res);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.TOKEN_NAME);
    this._isLoggedIn$.next(false);
  }

  private getUser(token: string): UserModel | null {
    if (!token) {
      return null;
    }

    return JSON.parse(atob(token.split('.')[1])) as UserModel;
  }
}
