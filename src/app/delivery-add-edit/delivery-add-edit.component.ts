import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { Checkpoint } from '../checkpoint';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-delivery-add-edit',
  templateUrl: './delivery-add-edit.component.html',
  styleUrls: ['./delivery-add-edit.component.scss']
})
export class DeliveryAddEditComponent {

  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  deliveryForm: FormGroup;

  deliveryTypes: string[] = ['Air', 'Sea', 'Land'];
  deliveryStatuses: string[] = ['Pending', 'Stock', 'In Progress', 'Delivered'];
  checkpoints: Checkpoint[] = [
    new Checkpoint('Checkpoint 1', 'Location 1'),
    new Checkpoint('Checkpoint 2', 'Location 2'),
    new Checkpoint('Checkpoint 3', 'Location 3'),
    new Checkpoint('Checkpoint 1', 'Location 1'),
    new Checkpoint('Checkpoint 2', 'Location 2'),
    new Checkpoint('Checkpoint 3', 'Location 3'),
    new Checkpoint('Checkpoint 1', 'Location 1'),
    new Checkpoint('Checkpoint 2', 'Location 2'),
    new Checkpoint('Checkpoint 3', 'Location 3'),
    new Checkpoint('Checkpoint 1', 'Location 1'),
    new Checkpoint('Checkpoint 2', 'Location 2'),
    new Checkpoint('Checkpoint 3', 'Location 3'),
    new Checkpoint('Checkpoint 1', 'Location 1'),
    new Checkpoint('Checkpoint 2', 'Location 2'),
    new Checkpoint('Checkpoint 3', 'Location 3'),
    new Checkpoint('Checkpoint 1', 'Location 1'),
    new Checkpoint('Checkpoint 2', 'Location 2'),
    new Checkpoint('Checkpoint 3', 'Location 3'),
    new Checkpoint('Checkpoint 1', 'Location 1'),
    new Checkpoint('Checkpoint 2', 'Location 2'),
    new Checkpoint('Checkpoint 3', 'Location 3'),
    new Checkpoint('Checkpoint 1', 'Location 1'),
    new Checkpoint('Checkpoint 2', 'Location 2'),
    new Checkpoint('Checkpoint 3', 'Location 3'),
    new Checkpoint('Checkpoint 1', 'Location 1'),
    new Checkpoint('Checkpoint 2', 'Location 2'),
    new Checkpoint('Checkpoint 3', 'Location 3'),
    new Checkpoint('Checkpoint 1', 'Location 1'),
    new Checkpoint('Checkpoint 2', 'Location 2'),
    new Checkpoint('Checkpoint 3', 'Location 3'),
  ];

  constructor(private _fb: FormBuilder, private _deliveryService: DeliveryService) {
    this.deliveryForm = this._fb.group({
      deliveryNo: '',
      deliveryType: '',
      deliveryStatus: '',
      consignor: this._fb.group({
        consignorFullName: '',
        consignorCountry: '',
        consignorCity: '',
      }),
      consignee: this._fb.group({
        consigneeFullName: '',
        consigneeCountry: '',
        consigneeCity: '',
      })
    }); 
  }

  onFormSubmit() {
    if (this.deliveryForm.valid) {
      console.log(this.deliveryForm.value); 
      this._deliveryService.addDelivery(this.deliveryForm.value).subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (error: any) => {
          console.error(error);
        }
      });       
    }
  }
 
  onCloseDialog() {
    throw new Error('Method not implemented.');
  }

}
