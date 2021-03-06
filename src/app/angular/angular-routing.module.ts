import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularListComponent } from './angular-list/angular-list.component';


const routes: Routes = [
  {
    path: '',
    component: AngularListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }