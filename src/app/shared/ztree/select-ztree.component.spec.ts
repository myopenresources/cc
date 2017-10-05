import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectZtreeComponent } from './select-ztree.component';

describe('SelectZtreeComponent', () => {
  let component: SelectZtreeComponent;
  let fixture: ComponentFixture<SelectZtreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectZtreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectZtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
