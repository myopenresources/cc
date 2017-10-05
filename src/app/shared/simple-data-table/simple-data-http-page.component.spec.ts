import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDataHttpPageComponent } from './simple-data-http-page.component';

describe('SimpleDataHttpPageComponent', () => {
  let component: SimpleDataHttpPageComponent;
  let fixture: ComponentFixture<SimpleDataHttpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDataHttpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDataHttpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
