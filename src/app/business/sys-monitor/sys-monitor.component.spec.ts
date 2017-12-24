import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysMonitorComponent } from './sys-monitor.component';

describe('SysMonitorComponent', () => {
  let component: SysMonitorComponent;
  let fixture: ComponentFixture<SysMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
