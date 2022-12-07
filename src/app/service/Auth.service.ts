import { Injectable } from '@angular/core';
import{ HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs'
import { User } from '../model/user.model';
import { Router } from '@angular/router';

interface AuthResponseData{
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({providedIn: 'root'})
export class AuthService{
    public user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;

    public errorSub = new BehaviorSubject<string>(null);


    constructor(private http: HttpClient, private router: Router) {}


    signup(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyChKyIITmJTF5GcQnxpK8aeU4HRb3eaHq4',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.handleError),
            tap(resData => {
                this.handleAuthentication(
                    resData.email, resData.localId, resData.idToken, +resData.expiresIn
                );
            })
        );
    }
    autoLogin(){
        const userData:{
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }
    login(email: string, password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyChKyIITmJTF5GcQnxpK8aeU4HRb3eaHq4',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.handleError),
            tap(resData => {
                this.handleAuthentication(
                    resData.email, resData.localId, resData.idToken, +resData.expiresIn
                );
            })
        );
    }
    autoLogout(expirationDuration: number){
        this.tokenExpirationTimer = setTimeout(()=>{
            this.logout();
        }, expirationDuration)
    }
    logout(){
        this.user.next(null);
        this.router.navigate(['/'])
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer)
        }
        this.tokenExpirationTimer = null;
    }

    private handleAuthentication(email: string,userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(
            new Date().getTime() + +expiresIn * 1000
        );
        const user = new User(
            email,
            userId,
            token,
            expirationDate
        );
        this.user.next(user);
        this.autoLogout(expiresIn * 1000)
        localStorage.setItem('userData', JSON.stringify(user))
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMsg = 'An unknown error occured!';
        console.log(errorRes);
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMsg);
        }
        switch (errorRes.error.error.message){

            case 'EMAIL_EXISTS':
                errorMsg = 'This email allready exists';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMsg = 'This email does not exists';
                break;
            case 'INVALID_PASSWORD':
                errorMsg = 'This password is not correct!';
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.':
                errorMsg = 'Too many login attempts, try later';
                break;
        }
        // this.error.next('test');

        return throwError(errorMsg);
    }

}
