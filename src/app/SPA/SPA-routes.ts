import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegComponent } from "./reg/reg.component";
import { ViewComponent } from "./view/view.component";
import { AdminComponent } from "./admin/admin.component";
import { AddComponent } from "./add/add.component";
import { authGuard ,authchild, deactive} from "./auth.guard";

export const rout: Routes =[
    {path:'login',component:LoginComponent},
    {path:'reg',component:RegComponent,canDeactivate:[deactive]},
    {path:'view',component:ViewComponent, canActivate:[authGuard],canActivateChild:[authchild],
        children:[{path:'add',component:AddComponent}]
    },
    {path:'admin',component:AdminComponent},
]