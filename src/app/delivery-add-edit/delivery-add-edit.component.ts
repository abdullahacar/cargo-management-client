import { Component, ViewChild } from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-delivery-add-edit',
  templateUrl: './delivery-add-edit.component.html',
  styleUrls: ['./delivery-add-edit.component.scss']
})
export class DeliveryAddEditComponent { 
 
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  deliveryTypes: string[] = ['Air', 'Sea', 'Land'];

  onSaveDelivery() {
    throw new Error('Method not implemented.');
  }


  onCloseDialog() {
    throw new Error('Method not implemented.');
  }

}
