import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAboutComponent } from './emp-about.component';

describe('EmpAboutComponent', () => {
  let component: EmpAboutComponent;
  let fixture: ComponentFixture<EmpAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
