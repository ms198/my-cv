import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularListComponent } from './angular-list/angular-list.component';

@NgModule({
  imports: [
    CommonModule,
    AngularRoutingModule
  ],
  declarations: [AngularListComponent]
})
export class AngularModule { }
