import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HitPageComponent } from "./pages/hit-page/hit-page.component";
import { FoodPageComponent } from "./pages/food-page/food-page.component";
import { AngularTestsComponent } from "./pages/angular-tests/angular-tests.component";
import { HomeComponent } from "./home/home.component";
import { TestServiceComponent } from "./pages/angular-tests/test-service/test-service.component";

const appRoutes: Routes = [

    { path: '', component: HomeComponent, title: 'Home'},
    { path: 'hit', component: HitPageComponent, title: 'Hit' },
    { path: 'food', component: FoodPageComponent, title: 'Food' },
    { path: 'angular', component: AngularTestsComponent, title: 'Angular',
        children:[
            { path: 'testService', component: TestServiceComponent, title: 'Testservice' },
            
        ]
    },
    

]
 

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
