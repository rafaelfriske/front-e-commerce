import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgortPasswordComponent } from './forgot-password.component';

describe('ForgortPasswordComponent', () => {
  let component: ForgortPasswordComponent;
  let fixture: ComponentFixture<ForgortPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgortPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgortPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
