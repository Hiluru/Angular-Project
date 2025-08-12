import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from '../home/home.component';
import { AdmHomeComponent } from './adm-home/adm-home.component';

const routes: Routes = [
  {path:'ad-abt',component:AboutComponent},
  {path:'ad-home',component:AdmHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
