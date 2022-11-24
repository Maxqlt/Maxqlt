import { Component, OnDestroy, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  isLoggedIn: boolean = false;
  hasVisitedSite: boolean = false;
  private userSub: Subscription;
  

  constructor(private authService: AuthService, private router: Router) { 
   }

  ngOnInit(){
    this.userSub = this.authService.user.subscribe(user=>{
      this.isLoggedIn = !!user; // !user ? false : true;
    });
  }
  onLogout(){
    this.authService.logout();
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
          this.authService.errorSub.next(error);
          this.router.navigateByUrl('/angular/auth');
          },
        complete: () => console.log('Log in success!')
      }
    );
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
