import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() childtoparent=new EventEmitter<any>()
  @Output () changetheme=new EventEmitter<any>()
  childData:boolean=false;
  
  bgcolor:boolean=false
  
  isIcon:boolean=false

  bgchange()
  {
    this.changetheme.emit(this.bgcolor =!this.bgcolor)
  }

  sendevent()
  {
    this.childtoparent.emit(this.childData = !this.childData)
  }
}
