import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WormsComponent } from './worms.component';

describe('WormsComponent', () => {
  let component: WormsComponent;
  let fixture: ComponentFixture<WormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
