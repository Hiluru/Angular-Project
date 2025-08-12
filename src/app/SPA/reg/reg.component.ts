import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { emailvalid, passwordequal, passwordvalid } from './customvalid';
import { CommonModule } from '@angular/common';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-reg',
  imports: [RouterModule,RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent {
    RegForm:FormGroup

    constructor(private fb:FormBuilder, private service:RegisterService, private router:Router){
      this.RegForm=fb.group(
        {
          name:['',[Validators.required, Validators.minLength(3)]],
          lname:['',[Validators.required,Validators.minLength(3)]],
          email:['',[Validators.required,emailvalid]],
          pass:['',[Validators.required,passwordvalid]],
          cpass:['',[Validators.required]],
        },
        {
          validators:passwordequal ('pass','cpass')
        }
      )
    }
get name()
{
  return this.RegForm.get('name')
}
get lname()
{
  return this.RegForm.get('lname')
}
get email()
{
  return this.RegForm.get('email')
}
get pass()
{
  return this.RegForm.get('pass')
}
get cpass()
{
  return this.RegForm.get('cpass')
}

Register()
{
  this.service.UserRegister(this.RegForm.value).subscribe(data=>{
    this.router.navigate(['login'])
  })
}
isFormDirty = true; 
}
