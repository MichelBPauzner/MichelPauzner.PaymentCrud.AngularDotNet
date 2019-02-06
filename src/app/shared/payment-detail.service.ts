import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;

  //TODO: Implement api url from api const

  constructor(private http: HttpClient) { }

  postPaymentDetail(formData: PaymentDetail){
    return this.http.post('',formData);
  }
}
