import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipomascotaAddComponent } from './tipomascota-add.component';

describe('TipomascotaAddComponent', () => {
  let component: TipomascotaAddComponent;
  let fixture: ComponentFixture<TipomascotaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipomascotaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipomascotaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
