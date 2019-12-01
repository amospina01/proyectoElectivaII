import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaGetComponent } from './mascota-get.component';

describe('MascotaGetComponent', () => {
  let component: MascotaGetComponent;
  let fixture: ComponentFixture<MascotaGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
