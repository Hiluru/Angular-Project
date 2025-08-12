import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-emp-home',
  imports: [RouterModule,RouterLink],
  templateUrl: './emp-home.component.html',
  styleUrl: './emp-home.component.css',
  standalone: true
})
export class EmpHomeComponent {

}
