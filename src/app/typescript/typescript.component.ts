import { Component } from '@angular/core';
import { User } from '../Interface/Types';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-typescript',
  imports: [CommonModule],
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.css'
})
export class TypescriptComponent {
  // StringType 
   StringType:string='Welcome'
  //  NumberType 
   NumberType:number=100;
  //  AnyType 
   AnyType:any[]=['Hello',123,true]
  //  BooleanType 
   BooleanType:boolean=true
  //  Interface 
   userData:User[]=[{'name':'Ram','age':25,'city':'CBE'}]
  //  AliesType 
   AliesType:string|number|undefined|null='any'
   
   functionType(name:string, a:number,b:number )
   {
    return `hello ${name},total marks ${a+b}`
   } 
   user:string='arun'
   eng=60
   math=80
  //  TuplesType 
   TuplesType:[string,number]=['Raja',50]
  
}
