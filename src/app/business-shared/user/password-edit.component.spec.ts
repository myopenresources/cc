import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordEditComponent } from './password-edit.component';

describe('PasswordEditComponent', () => {
  let component: PasswordEditComponent;
  let fixture: ComponentFixture<PasswordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
