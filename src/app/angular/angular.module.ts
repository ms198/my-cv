import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular-list/angular.component';

@NgModule({
  imports: [
    CommonModule,
    AngularRoutingModule
  ],
  declarations: [AngularComponent]
})
export class AngularModule { }
