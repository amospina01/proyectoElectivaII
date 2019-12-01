import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipomascotaEditComponent } from './tipomascota-edit.component';

describe('TipomascotaEditComponent', () => {
  let component: TipomascotaEditComponent;
  let fixture: ComponentFixture<TipomascotaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipomascotaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipomascotaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
