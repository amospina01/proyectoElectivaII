import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioGetComponent } from './propietario-get.component';

describe('PropietarioGetComponent', () => {
  let component: PropietarioGetComponent;
  let fixture: ComponentFixture<PropietarioGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropietarioGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropietarioGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
