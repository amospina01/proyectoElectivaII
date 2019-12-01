import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioAddComponent } from './veterinario-add.component';

describe('VeterinarioAddComponent', () => {
  let component: VeterinarioAddComponent;
  let fixture: ComponentFixture<VeterinarioAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinarioAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
