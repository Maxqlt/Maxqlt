import { Component, OnInit } from '@angular/core';
import { approuteService } from 'src/app/services/approute.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.css'],
  providers:[]
})
export class TestServiceComponent implements OnInit {

  constructor(public BreadcrumbService: approuteService, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const subscribedARoute = this.aRoute.snapshot.routeConfig
    // const subscribedARoute = this.aRoute.params.subscribe((params)=>{
    //   this.BreadcrumbService.getUrl(params);
    // })

    
    this.BreadcrumbService.getUrl(subscribedARoute);
  }
  
}
