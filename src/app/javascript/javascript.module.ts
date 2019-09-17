import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { JavascriptListComponent } from './javascript-list/javascript-list.component';

@NgModule({
  imports: [
    CommonModule,
    JavascriptRoutingModule
  ],
  declarations: [JavascriptListComponent]
})
export class JavascriptModule { }
