import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastBoxComponent } from './toast-box.component';

describe('ToastBoxComponent', () => {
  let component: ToastBoxComponent;
  let fixture: ComponentFixture<ToastBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
