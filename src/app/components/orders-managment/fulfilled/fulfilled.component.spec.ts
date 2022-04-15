import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfilledComponent } from './fulfilled.component';

describe('FulfilledComponent', () => {
  let component: FulfilledComponent;
  let fixture: ComponentFixture<FulfilledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulfilledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FulfilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
