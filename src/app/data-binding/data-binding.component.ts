import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { filter, pipe } from 'rxjs';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule,CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  color:string='color'
  keys:string[]=['A','Z']
 
  keypressevent(event:any)
  {
    console.log('event',event)
    // const input=event.target as HTMLInputElement
    // this.color=input.value
    this.color=event.target.value
  }
  blockAandZ(event: KeyboardEvent) {
    const key = event.key.toUpperCase(); // Convert to uppercase (for lowercase too)
    if (key === 'A' || key === 'Z') {
      event.preventDefault(); // ❌ Don't allow key
     
    }
  }
  notificationList:any=['hello','hi','welcome']
}
