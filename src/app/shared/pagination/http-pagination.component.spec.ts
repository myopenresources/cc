import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPaginationComponent } from './http-pagination.component';

describe('HttpPaginationComponent', () => {
  let component: HttpPaginationComponent;
  let fixture: ComponentFixture<HttpPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
