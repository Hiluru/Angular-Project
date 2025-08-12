import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { Menus } from './Interface/Types';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,RouterOutlet,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Comefromchild=''
  colorchange=''
  recive(data:any)
  {
    this.Comefromchild=data
  }
  recivecolor(color:any)
  {
    this.colorchange=color
  }
  
  // menu list 
  Menus:Menus[]=[
    {'name':'TypeScript Basics','path':'/TS/'},
    {'name':'Components','path':'/comp/'},
    {'name':'Data Binding','path':'/data/'},
    {'name':'Directives','path':'/dir/'},
    {'name':'Pipes','path':'/pipe/'},
    {'name':'Single Page Application','path':'/login/'},
    {'name':'Feature Module',"path":'/admin/'},
    {'name':'Internationalization (i18n)','path':'/lang/'},
    {'name':'Lifecyclehook','path':'/hook/'},
    {'name':'Parent','path':'/parent/'}
  ]
}
