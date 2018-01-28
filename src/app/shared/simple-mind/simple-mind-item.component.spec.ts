import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMindItemComponent } from './simple-mind-item.component';

describe('SimpleMindItemComponent', () => {
  let component: SimpleMindItemComponent;
  let fixture: ComponentFixture<SimpleMindItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleMindItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMindItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
