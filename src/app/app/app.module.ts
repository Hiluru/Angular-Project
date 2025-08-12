import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { EmployeeModule } from '../employee/employee.module';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { EmployeeRoutingModule } from '../employee/employee-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class AppModule { }
