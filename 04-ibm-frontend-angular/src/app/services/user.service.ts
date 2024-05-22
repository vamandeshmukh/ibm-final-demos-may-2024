import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginStatus: boolean = false;

  private expressUrl: string = 'http://localhost:2000';
  private userProfileSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private loggedInUserProfile: Observable<any> = this.userProfileSubject.asObservable();

  constructor(private http: HttpClient) { }

  getProfile = (): any => {
    console.log(this.loggedInUserProfile);
    return this.loggedInUserProfile;
  };

  setProfile = (user: any): void => {
    console.log(user);
    this.userProfileSubject.next(user);
  }

  register = (user: any): Observable<any> => {
    console.log(user);
    return this.http.post(`${this.expressUrl}/register`, user);
  };

  login = (user: any): Observable<any> => {
    console.log(user);
    this.loginStatus = true;
    return this.http.post(`${this.expressUrl}/login`, user);
  };

  updateProfile = (user: any): Observable<any> => {
    console.log(user);
    return this.http.put(`${this.expressUrl}/users/${user._id}`, user);
  };

  logout = () => {
    console.log(this.loggedInUserProfile);
    this.loginStatus = false;
    this.userProfileSubject.next(null);
    console.log(this.loggedInUserProfile);
  };

  getLoginStatus = () => {
    console.log(this.loginStatus);
    return this.loginStatus;
  };

}





// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, tap } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasValidToken());
//   private expressUrl: string = 'http://localhost:2000';
//   private userProfileSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
//   private loggedInUserProfile: Observable<any> = this.userProfileSubject.asObservable();

//   constructor(private http: HttpClient) { }

//   private hasValidToken(): boolean {
//     const token = localStorage.getItem('authToken');
//     const expiration = localStorage.getItem('authTokenExpiration');
//     if (token && expiration) {
//       const now = new Date().getTime();
//       return now < Number(expiration);
//     }
//     return false;
//   }

//   getProfile = (): Observable<any> => {
//     return this.loggedInUserProfile;
//   };

//   setProfile = (user: any): void => {
//     this.userProfileSubject.next(user);
//   };

//   register = (user: any): Observable<any> => {
//     return this.http.post(`${this.expressUrl}/register`, user);
//   };

//   login = (user: any): Observable<any> => {
//     return this.http.post(`${this.expressUrl}/login`, user).pipe(
//       tap((response: any) => {
//         if (response && response.token) {
//           this.setSession(response.token);
//           this.loginStatus.next(true);
//         }
//       })
//     );
//   };

//   updateProfile = (user: any): Observable<any> => {
//     return this.http.put(`${this.expressUrl}/users/${user._id}`, user);
//   };

//   logout = () => {
//     this.clearSession();
//     this.loginStatus.next(false);
//     this.userProfileSubject.next(null);
//   };

//   getLoginStatus = (): Observable<boolean> => {
//     return this.loginStatus.asObservable();
//   };

//   private setSession(token: string): void {
//     const now = new Date().getTime();
//     const expiration = now + 10 * 60 * 1000; // 10 minutes from now
//     localStorage.setItem('authToken', token);
//     localStorage.setItem('authTokenExpiration', expiration.toString());
//   }

//   private clearSession(): void {
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('authTokenExpiration');
//   }
// }


