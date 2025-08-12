import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Loginform:FormGroup;

  constructor(private fb:FormBuilder, private service:LoginService, private rout:Router){
    this.Loginform=fb.group(
      {
        uname:['',Validators.required],
        pass:['',Validators.required]
      }
    )
  }
  generateMockToken(): string {
    return Math.random().toString(36).substring(2) + '.' +
           Math.random().toString(36).substring(2) + '.' +
           Math.random().toString(36).substring(2);
  }
   

  LoginUser() {     
    const { uname, pass } = this.Loginform.value;

    this.service.GetUser().subscribe(res => {
      
      const user = res.find((u: any) => u.email === uname && u.pass === pass);

      if (user) {
        const token = this.generateMockToken();
        localStorage.setItem('Tokens', token);
        localStorage.setItem('user',JSON.stringify(user))
        this.rout.navigate(['view']);
      
      } else {
        alert('Invalid credentials');
      }
    });
  }

  get uname()
  {
    return this.Loginform.get('uname')
  }
  get pass()
  {
    return this.Loginform.get('pass')
  }
}
