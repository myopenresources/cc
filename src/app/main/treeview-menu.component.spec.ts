import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeviewMenuComponent } from './treeview-menu.component';

describe('TreeviewMenuComponent', () => {
  let component: TreeviewMenuComponent;
  let fixture: ComponentFixture<TreeviewMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeviewMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeviewMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
