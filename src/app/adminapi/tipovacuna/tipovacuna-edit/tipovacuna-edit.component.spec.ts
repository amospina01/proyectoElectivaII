import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipovacunaEditComponent } from './tipovacuna-edit.component';

describe('TipovacunaEditComponent', () => {
  let component: TipovacunaEditComponent;
  let fixture: ComponentFixture<TipovacunaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipovacunaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipovacunaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
