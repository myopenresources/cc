import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDistributeComponent } from './role-distribute.component';

describe('RoleDistributeComponent', () => {
  let component: RoleDistributeComponent;
  let fixture: ComponentFixture<RoleDistributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleDistributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleDistributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
