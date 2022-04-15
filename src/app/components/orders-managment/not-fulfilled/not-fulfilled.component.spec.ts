import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFulfilledComponent } from './not-fulfilled.component';

describe('NotFulfilledComponent', () => {
  let component: NotFulfilledComponent;
  let fixture: ComponentFixture<NotFulfilledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFulfilledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFulfilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
