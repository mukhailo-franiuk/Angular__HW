import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home04Component } from './home04.component';

describe('Home04Component', () => {
  let component: Home04Component;
  let fixture: ComponentFixture<Home04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
