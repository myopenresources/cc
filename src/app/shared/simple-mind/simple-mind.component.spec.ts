import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMindComponent } from './simple-mind.component';

describe('SimpleMindComponent', () => {
  let component: SimpleMindComponent;
  let fixture: ComponentFixture<SimpleMindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleMindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
