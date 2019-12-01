import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioGetComponent } from './veterinario-get.component';

describe('VeterinarioGetComponent', () => {
  let component: VeterinarioGetComponent;
  let fixture: ComponentFixture<VeterinarioGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinarioGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
