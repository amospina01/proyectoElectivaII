import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipovacunaGetComponent } from './tipovacuna-get.component';

describe('TipovacunaGetComponent', () => {
  let component: TipovacunaGetComponent;
  let fixture: ComponentFixture<TipovacunaGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipovacunaGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipovacunaGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
