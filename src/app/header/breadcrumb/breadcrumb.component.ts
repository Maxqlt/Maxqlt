import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from './breadcrumb.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { approuteService } from 'src/app/services/approute.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  providers:[]
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = []

  constructor(
      public BreadcrumbService: approuteService

    ) {
     
   }

  ngOnInit(){
    
    this.breadcrumbs = [
      new Breadcrumb('Home','/'),
      new Breadcrumb('Angular','/angular'),
      new Breadcrumb('Breadcrumb','/breadcrumb'),
    ]

    
  }

}
