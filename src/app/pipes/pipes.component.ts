import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from '../custom.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,FormsModule,CustomPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
  dates:any=''
  
}
