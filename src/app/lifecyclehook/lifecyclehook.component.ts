import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclehook',
  imports: [],
  templateUrl: './lifecyclehook.component.html',
  styleUrl: './lifecyclehook.component.css'
})
export class LifecyclehookComponent {
  @Input() marks!: number;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Marks updated to', this.marks);
  }
  
  ngDoCheck() {
    console.log('ngDoCheck: Checking for manual changes');
  }
  
  ngAfterContentInit() {
    console.log('ngAfterContentInit: Content initialized');
  }
  
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: Content checked');
  }
  
  ngAfterViewInit() {
    console.log('ngAfterViewInit: View initialized');
  }
  
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: View checked');
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy: Component is destroyed');
  }
  
}
