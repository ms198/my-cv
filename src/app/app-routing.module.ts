import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found.component';
import { HomeComponent } from './home/home.component';

const indexRoute = {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
};

const fallbackRoute = {
    path: '**',
    component: PageNotFoundComponent
};

const appRoutes: Routes = [
  indexRoute,  
    {
      path: 'home',
      component:HomeComponent
    },
    {
        path: 'angular',
        loadChildren: './angular/angular.module#AngularModule'
    },
    {
      path: 'javascript',
      loadChildren: './javascript/javascript.module#JavascriptModule'
    },
  fallbackRoute,
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations:[
    HomeComponent,
    PageNotFoundComponent
  ]
})
export class AppRoutingModule {}