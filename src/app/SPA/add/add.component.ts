import { Component } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AddService } from '../add.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  Obj: obj = { "name": "", "age": 0, "city": "", "createdBY": localStorage.getItem('user') }

  constructor(private service: AddService, private rout: Router) {
    this.Obj.createdBY = JSON.parse(this.Obj.createdBY).id
  }

  submit() {
    this.service.AddUserData(this.Obj).subscribe(dt => {
      this.rout.navigate(['view'])
    }
    )
  }
}
class obj {
  constructor(public name: string, public age: number, public city: string, public createdBY: any) { }
}
