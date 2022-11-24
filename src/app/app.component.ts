import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/Auth.service';
import { BreadcrumbService } from './service/Breadcrumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BreadcrumbService]
})
export class AppComponent  implements OnInit{
  title = 'Maxqlt';
  breadcrumbs: {path: string, title: string}[] = [];

  constructor(private authService: AuthService){

  }
  ngOnInit(): void {
    this. authService.autoLogin();
  }
}