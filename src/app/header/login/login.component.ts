import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = false;
  hasVisitedSite: boolean = false;
  

  constructor(private authService: AuthService, private router: Router) { 
   }

  ngOnInit(): void {
  }
  OnSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;


    this.authService.login(email, password).subscribe(
      {
        next: (resData) => {
        console.log('res', resData)
        
      },
        error: (error) => {
          console.log('error', error);
          this.router.navigateByUrl('/angular/auth');
          },
        complete: () => console.log('Log in success!')
      }
    );
  }
}
