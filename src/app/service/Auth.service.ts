import { Injectable } from '@angular/core';
import{ HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'

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
    public error: string = null;

    constructor(private http: HttpClient){}

    signup(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyChKyIITmJTF5GcQnxpK8aeU4HRb3eaHq4',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError));
    }
    login(email: string, password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyChKyIITmJTF5GcQnxpK8aeU4HRb3eaHq4',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError));
    }


    private handleError(errorRes: HttpErrorResponse){
        let errorMsg = 'An unknown error occured!';

        if(!errorRes.error || !errorRes.error.error){
            this.error = errorMsg;
            return throwError(() => new Error(errorMsg));
        }
        console.log(errorRes);
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
        }
        return throwError(() => new Error(errorMsg));
        }
    
}