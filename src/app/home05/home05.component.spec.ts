import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home05Component } from './home05.component';

describe('Home05Component', () => {
  let component: Home05Component;
  let fixture: ComponentFixture<Home05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
