import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioAddComponent } from './propietario-add.component';

describe('PropietarioAddComponent', () => {
  let component: PropietarioAddComponent;
  let fixture: ComponentFixture<PropietarioAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropietarioAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropietarioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
