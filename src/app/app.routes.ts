import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { ComponentsComponent } from './components/components.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { InternationalizationComponent } from './internationalization/internationalization.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { ParentComponent } from './parent/parent.component';


export const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'TS',component:TypescriptComponent},
 {path:'comp',component:ComponentsComponent},
 {path:'data',component:DataBindingComponent},
 {path:'dir',component:DirectivesComponent},
 {path:'pipe',component:PipesComponent},
 {path:'lang',component:InternationalizationComponent},
 {path:'hook',component:LifecyclehookComponent},
 {path:'parent',component:ParentComponent},
 {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
];
