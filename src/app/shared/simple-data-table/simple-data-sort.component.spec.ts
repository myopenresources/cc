import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDataSortComponent } from './simple-data-sort.component';

describe('SimpleDataSortComponent', () => {
  let component: SimpleDataSortComponent;
  let fixture: ComponentFixture<SimpleDataSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDataSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDataSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
