import { Component } from '@angular/core';
import { ProductoDetail } from '../interface/ProductDetail.interface';

@Component({
  selector: 'app-valorespago',
  templateUrl: './valorespago.component.html'
})
export class ValorespagoComponent {

  totalProductos: number = 0;
  subtotal: number = 0;
  impuesto: number = 0;
  totalPago: number = 0;

}

