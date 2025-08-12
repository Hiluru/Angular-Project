import { Component } from '@angular/core';
import { LifecyclehookComponent } from '../lifecyclehook/lifecyclehook.component';

@Component({
  selector: 'app-parent',
  imports: [LifecyclehookComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  studentMarks = 45;

  changeMarks() {
    this.studentMarks = 90;
  }
}
