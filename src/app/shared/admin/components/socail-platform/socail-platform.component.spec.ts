import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocailPlatformComponent } from './socail-platform.component';

describe('SocailPlatformComponent', () => {
  let component: SocailPlatformComponent;
  let fixture: ComponentFixture<SocailPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocailPlatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocailPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
