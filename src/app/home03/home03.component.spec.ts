import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home03Component } from './home03.component';

describe('Home03Component', () => {
  let component: Home03Component;
  let fixture: ComponentFixture<Home03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
