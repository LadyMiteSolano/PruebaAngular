import { Component, EventEmitter, Output } from '@angular/core';
import { ProductoDetail } from '../../ejemplo/interface/ProductDetail.interface';

@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.component.html'
})
export class AgregarproductoComponent {

  @Output()
  eventoGuardar = new EventEmitter<ProductoDetail>();

  @Output()
  eventoCerrar = new EventEmitter<any>();

  nuevoProducto: ProductoDetail ={
    productoid: 0,
    producto: '',
    modelo: '',
    proveedor: '',
    precio: 0.00,
    categoria: '',
    stock: 0
  };

  handleEventoCierreModal(){
    this.eventoCerrar.emit('none');
  }

  handleEventoGuardar(){
    this.eventoGuardar.emit(this.nuevoProducto);
  }

}
