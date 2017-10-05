import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBrowserComponent } from './page-browser.component';

describe('PageBrowserComponent', () => {
  let component: PageBrowserComponent;
  let fixture: ComponentFixture<PageBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
