import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private _httpClient: HttpClient) { }

  addDelivery(delivery: any): Observable<any> {
    return this._httpClient.post('http://localhost:3000/deliveries', delivery);
  }

  getDeliveries(): Observable<any> {
    return this._httpClient.get('http://localhost:3000/deliveries');
  }

  getDeliveryById(id: number): Observable<any> {
    return this._httpClient.get(`http://localhost:3000/deliveries/${id}`);
  }

  updateDelivery(id: number, delivery: any): Observable<any> {
    return this._httpClient.put(`http://localhost:3000/deliveries/${id}`, delivery);
  }

  deleteDelivery(id: number): Observable<any> {
    return this._httpClient.delete(`http://localhost:3000/deliveries/${id}`);
  }
}
