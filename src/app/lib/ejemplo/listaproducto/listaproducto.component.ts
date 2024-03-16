
import { Component } from '@angular/core';
import { ProductoDetail } from '../interface/ProductDetail.interface';
import { PropertiesBtnTabla } from '../../interfaces/botonestabla.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaproducto',
  templateUrl: './listaproducto.component.html',
  providers: [Router]
})
export class ListaproductoComponent {

  constructor (private router: Router){};

  btnTablaLProductos: PropertiesBtnTabla ={
    bootstrapEditar: "success",
    bootstrapEliminar: "danger",
    labelEditar: "EDditar producto",
    labelEliminar: "Eliminar producto",
    mostrarEditar: true,
    mostrarEliminar: true
  }

  listaproducto: ProductoDetail[] = [

    {
      productoid: 1,
      producto: 'Play Station 5',
      modelo: 'Ultra Slim',
      proveedor: 'H&B sa',
      precio: 600.05223,
      stock: 40,
      categoria: 'OC',
      accesorios: {
        incluyecontrol: 1,
        incluyegearAR: 0,
      },
    },
    {
      productoid: 2,
      producto: 'PC Gammer',
      modelo: 'AS-001-wm',
      proveedor: 'Asus',
      precio: 850.01,
      stock: 10001,
      categoria: 'OC',
      accesorios: {
        incluyemouse: 0,
      },
    },
    {
      productoid: 3,
      producto: 'MousePad',
      modelo: 'MP-2001-A',
      proveedor: 'Juan Marcet',
      precio: 10.5665,
      stock: 3,
      categoria: 'VA',
      accesorios: {},
    },
    {
      productoid: 4,
      producto: 'Doppler',
      modelo: '2HXDB',
      proveedor: 'General Electric',
      precio: 120.22,
      stock: 11,
      categoria: 'HT',
    },
    {
      productoid: 5,
      producto: 'AirFried',
      modelo: 'ZY 2020',
      proveedor: 'Hometech',
      precio: 230.856,
      stock: 20,
      categoria: 'CO',
      accesorios: {},
    },
    {
      productoid: 6,
      producto: 'Parlante Bosse',
      modelo: 'ABC 123',
      proveedor: 'Bosse',
      precio: 190.00,
      stock: 1,
      categoria: 'VA',
      accesorios: {},
    },
    {
      productoid: 7,
      producto: 'Aro d eluz',
      modelo: 'XYZ 987',
      proveedor: 'Castell',
      precio: 90.00,
      stock: 11,
      categoria: 'VA',
      accesorios: {},
    },
  ];

  editarProducto(producto: ProductoDetail){
    this.router.navigate(['/editarproducto/'+producto.productoid]);
  }
  eliminarProducto(producto: ProductoDetail){

  }

}
