import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarCropperComponent } from './avatar-cropper.component';

describe('AvatarCropperComponent', () => {
  let component: AvatarCropperComponent;
  let fixture: ComponentFixture<AvatarCropperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarCropperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
