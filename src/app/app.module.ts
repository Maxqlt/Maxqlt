import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbComponent } from './header/breadcrumb/breadcrumb.component';
import { HitPageComponent } from './pages/hit-page/hit-page.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { AngularTestsComponent } from './pages/angular-tests/angular-tests.component';
import { TestServiceComponent } from './pages/angular-tests/test-service/test-service.component';
import { LoginComponent } from './header/login/login.component';
import { AuthComponent } from './pages/angular-tests/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ForbiddenComponent } from './pages/angular-tests/forbidden/forbidden.component';
import { CssButtonsComponent } from './pages/angular-tests/css-buttons/css-buttons.component';

import { AppRoutingModule } from './app-routing.module';

import { BreadcrumbService } from './service/Breadcrumb.service';
import { AnimationComponent } from './Pages/angular-tests/animation/animation.component';
import { CollapsableComponent } from './Pages/angular-tests/animation/collapsable/collapsable.component';


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
    ForbiddenComponent,
    CssButtonsComponent,
    AnimationComponent,
    CollapsableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
