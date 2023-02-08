import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingTecnologyComponent } from './programming-tecnology.component';

describe('ProgrammingTecnologyComponent', () => {
  let component: ProgrammingTecnologyComponent;
  let fixture: ComponentFixture<ProgrammingTecnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingTecnologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingTecnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
