import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HitPageComponent } from "./pages/hit-page/hit-page.component";
import { FoodPageComponent } from "./pages/food-page/food-page.component";
import { AngularTestsComponent } from "./pages/angular-tests/angular-tests.component";
import { HomeComponent } from "./home/home.component";
import { TestServiceComponent } from "./pages/angular-tests/test-service/test-service.component";
import { AuthComponent } from "./pages/angular-tests/auth/auth.component";

const appRoutes: Routes = [

    { path: '', component: HomeComponent, title: 'Home', data: { breadcrumb: 'Home' }}, 
    { path: 'hit', component: HitPageComponent, title: 'Hit', data: { breadcrumb: 'Hit' }},
    { path: 'food', component: FoodPageComponent, title: 'Food', data: { breadcrumb: 'Food' }},
    { path: 'angular', component: AngularTestsComponent, title: 'Angular', data: { breadcrumb: 'Angular' },
        children:[
            { path: 'testService', component: TestServiceComponent, title: 'Testservice', data: { breadcrumb: 'TestService' } },
            { path: 'auth', component: AuthComponent, title: 'Sign Up!', data: { breadcrumb: 'Sign up!' } },
            // data: { breadcrumb: (data: any) => `${data.user.name}` }, use: getLabel(data: Data) in component data[user: name]
        ]
    },
    

]
 

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
