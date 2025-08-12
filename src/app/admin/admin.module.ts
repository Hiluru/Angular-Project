import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdmHomeComponent } from './adm-home/adm-home.component';


@NgModule({
  declarations: [AdmHomeComponent,AdmHomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
