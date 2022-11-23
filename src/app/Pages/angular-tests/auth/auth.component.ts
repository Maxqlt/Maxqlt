import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from 'src/app/service/Auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoading = false;
  error: string = this.authService.error;;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.error){
    }
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
          console.log('error', error);
          this.error = error;
          this.isLoading = false;
        },
        complete: () => console.log('Sign success!')
      }
    );
  

  }
}