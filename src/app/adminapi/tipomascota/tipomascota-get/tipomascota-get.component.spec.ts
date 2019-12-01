import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipomascotaGetComponent } from './tipomascota-get.component';

describe('TipomascotaGetComponent', () => {
  let component: TipomascotaGetComponent;
  let fixture: ComponentFixture<TipomascotaGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipomascotaGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipomascotaGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
