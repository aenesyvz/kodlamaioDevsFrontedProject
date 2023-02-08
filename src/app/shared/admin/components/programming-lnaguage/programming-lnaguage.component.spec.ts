import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingLnaguageComponent } from './programming-lnaguage.component';

describe('ProgrammingLnaguageComponent', () => {
  let component: ProgrammingLnaguageComponent;
  let fixture: ComponentFixture<ProgrammingLnaguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingLnaguageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingLnaguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
