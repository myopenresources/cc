import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyViewComponent } from './hierarchy-view.component';

describe('HierarchyViewComponent', () => {
  let component: HierarchyViewComponent;
  let fixture: ComponentFixture<HierarchyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
