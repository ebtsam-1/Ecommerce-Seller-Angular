import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickedOrdersComponent } from './picked-orders.component';

describe('PickedOrdersComponent', () => {
  let component: PickedOrdersComponent;
  let fixture: ComponentFixture<PickedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickedOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
