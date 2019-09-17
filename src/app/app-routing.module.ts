import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found.component';
import { AppComponent } from './app.component';

const index = {
    path: '',
    component: AppComponent
};

const fallback = {
    path: '**',
    component: PageNotFoundComponent
};

const appRoutes: Routes = [
    index,
    {
        path: 'angular',
        loadChildren: () => import('./angular/angular.module').then(mod => mod.AngularModule)
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
  ]
})
export class AppRoutingModule {}