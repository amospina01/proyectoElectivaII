import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipovacunaAddComponent } from './tipovacuna-add.component';

describe('TipovacunaAddComponent', () => {
  let component: TipovacunaAddComponent;
  let fixture: ComponentFixture<TipovacunaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipovacunaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipovacunaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
