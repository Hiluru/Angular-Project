import { Component,OnInit } from '@angular/core';
import { ViewService } from '../view.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-view',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
   
  searchcontrol = new FormControl('')

   array:any[]=[]

   constructor(private service:ViewService){}

ngOnInit(): void {

  const user=JSON.parse(localStorage.getItem("user") || '{}')
  const UserID=user.id
  this.service.viewUser(UserID).subscribe(dt=>{
    debugger
    this.array=dt
  })
  this.search()
}
search()
{
  this.searchcontrol.valueChanges.pipe(
    debounceTime(400),
    switchMap(val=>this.service.searchUser(val??''))
  ).subscribe(dt=>{
    this.array=dt
  })
}

}
