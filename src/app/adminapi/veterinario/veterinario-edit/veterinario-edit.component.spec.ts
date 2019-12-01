import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioEditComponent } from './veterinario-edit.component';

describe('VeterinarioEditComponent', () => {
  let component: VeterinarioEditComponent;
  let fixture: ComponentFixture<VeterinarioEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinarioEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
