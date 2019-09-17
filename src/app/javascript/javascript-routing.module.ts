import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavascriptListComponent } from './javascript-list/javascript-list.component';


const routes: Routes = [
  {
    path: '',
    component: JavascriptListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }