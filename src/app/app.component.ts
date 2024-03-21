import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeliveryAddEditComponent } from './delivery-add-edit/delivery-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cargo-management';

  constructor(private _dialog: MatDialog) {}

  onOpenDelvieryAddEdit() {
    this._dialog.open(DeliveryAddEditComponent);
  }

}
