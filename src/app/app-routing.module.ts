import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found.component';
import { HomeComponent } from './home/home.component';

const index = {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
};

const fallback = {
    path: '**',
    component: PageNotFoundComponent
};

const appRoutes: Routes = [
    index,
    {
        path: 'angular',
        loadChildren: './angular/angular.module#AngularModule'
    },
    {
      path: 'javascript',
      loadChildren: './javascript/javascript.module#JavascriptModule'
    },
    fallback
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