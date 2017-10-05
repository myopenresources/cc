import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyViewNodeComponent } from './hierarchy-view-node.component';

describe('HierarchyViewNodeComponent', () => {
  let component: HierarchyViewNodeComponent;
  let fixture: ComponentFixture<HierarchyViewNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchyViewNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchyViewNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
