import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbComponent } from './header/breadcrumb/breadcrumb.component';
import { HitPageComponent } from './pages/hit-page/hit-page.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { AngularTestsComponent } from './pages/angular-tests/angular-tests.component';

import { AppRoutingModule } from './app-routing.module';
import { TestServiceComponent } from './pages/angular-tests/test-service/test-service.component';
import { BreadcrumbService } from './service/Breadcrumb.service';
import { LoginComponent } from './header/login/login.component';
import { AuthComponent } from './pages/angular-tests/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BreadcrumbComponent,
    HitPageComponent,
    FoodPageComponent,
    AngularTestsComponent,
    TestServiceComponent,
    LoginComponent,
    AuthComponent,
    LoadingSpinnerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
