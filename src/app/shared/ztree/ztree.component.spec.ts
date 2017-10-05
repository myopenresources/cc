import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZtreeComponent } from './ztree.component';

describe('ZtreeComponent', () => {
  let component: ZtreeComponent;
  let fixture: ComponentFixture<ZtreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZtreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
