import { Component, OnInit } from '@angular/core';
import { approuteService } from './services/approute.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[approuteService]
})
export class AppComponent  implements OnInit{
  title = 'Maxqlt';
  breadcrumbs: {path: string, title: string}[] = [];

  constructor(private aRouteService: approuteService){

  }
  ngOnInit(): void {
    this.breadcrumbs = this.aRouteService.urlParams;
  }
}