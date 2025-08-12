import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpAboutComponent } from './emp-about/emp-about.component';
import { EmpHomeComponent } from './emp-home/emp-home.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDataComponent } from './emp-data/emp-data.component';

const routes: Routes = [
  {path:'em-abt',component:EmpAboutComponent},
  {path:'em-home',component:EmpHomeComponent,
    children:[
      {path:'list',component:EmpListComponent,loadChildren:()=>import('../employee/emp-list/emp-list.component').then(l=>l.EmpListComponent)},
      {path:'em-data',component:EmpDataComponent,loadChildren:()=>import('../employee/emp-data/emp-data.component').then(d=>d.EmpDataComponent)}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
