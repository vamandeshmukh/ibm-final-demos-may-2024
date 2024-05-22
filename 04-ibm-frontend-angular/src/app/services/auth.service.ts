import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  constructor() { }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  private hasToken(): boolean {
    if (this.isBrowser()) {
      return !!localStorage.getItem('authToken');
    }
    return false;
  }

  login(token: string): void {
    // console.log(token);
    if (this.isBrowser()) {
      localStorage.setItem('authToken', token);
      this.loggedIn.next(true);
    }
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('authToken');
      this.loggedIn.next(false);
    }
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}

