import { Component, OnDestroy, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/Auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoading = false;

  errorSub2: any = this.authService.errorSub.value;
  public errorSub: Subscription;
  errorMSG: string = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.errorSub = this.authService.errorSub.subscribe(error=>{
      console.log('OnInit', error);
      this.errorMSG = error;
    });
  }
  OnSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    this.authService.signup(email, password).subscribe(
      {
        next: (resData) => {
        console.log('res', resData)
        this.isLoading = false;
      },
        error: (error) => {
          this.authService.errorSub.next(error);
          this.isLoading = false;
        },
        complete: () => console.log('Sign success!')
      }
    );
  

  }
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}