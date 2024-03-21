import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAddEditComponent } from './delivery-add-edit.component';

describe('DeliveryAddEditComponent', () => {
  let component: DeliveryAddEditComponent;
  let fixture: ComponentFixture<DeliveryAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryAddEditComponent]
    });
    fixture = TestBed.createComponent(DeliveryAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
