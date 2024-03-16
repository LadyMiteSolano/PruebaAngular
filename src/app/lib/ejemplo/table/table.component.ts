import { TablecarritoComponent } from './../tablecarrito/tablecarrito.component';
import { PropertiesBtnTabla } from './../../interfaces/botonestabla.interface';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ProductoDetail } from '../interface/ProductDetail.interface';
import { PropertiesItem } from '../../interfaces/menuitem.interface';
import { ValorespagoComponent } from '../valorespago/valorespago.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent /*implements AfterViewChecked*/ {
  @ViewChild(TablecarritoComponent)
  tablecarrito!: TablecarritoComponent;

  @ViewChild(ValorespagoComponent)
  valoresPago!: ValorespagoComponent;

  @ViewChild('divAgregarProducto', { static: false })
  divAgregarProducto!: ElementRef;

  ItemsMenu: any[] = [
    {
      text: 'login',
      link: '/login',
    },
    {
      text: 'Table componente',
      link: '/table',
    },
    {
      text: 'No existe',
      link: '/cualquier cosa',
    },
  ];

  opciones: PropertiesItem[] = [
    {
      idopcion: 1,
      idrol: 1,
      ruta: "/listaproducto",
      opcion: "Productos",
      icon: "house-door-fill"
    },
    {
      "idopcion": 4,
      "idrol": 1,
      "ruta": "/users",
      "opcion": "Users",
      "icon": "person-fill-gear"
    },
    {
      "idopcion": 1,
      "idrol": 2,
      "ruta": "/listaproducto",
      "opcion": "Productos",
      "icon": "house-door-fill"
    },
    {
      "idopcion": 1,
      "idrol": 3,
      "ruta": "/listaproducto",
      "opcion": "Productos",
      "icon": "house-door-fill"
    },
    {
      "idopcion": 2,
      "idrol": 2,
      "ruta": "/table",
      "opcion": "Comprar",
      "icon": "cart-fill"
    },
    {
      "idopcion": 2,
      "idrol": 3,
      "ruta": "/table",
      "opcion": "Comprar",
      "icon": "cart-fill"
    },
    {
      "idopcion": 3,
      "idrol": 2,
      "ruta": "/docs",
      "opcion": "Docs",
      "icon": "clipboard2-fill"
    }
  ];

  btnTablaProperties: PropertiesBtnTabla = {
    mostrarEditar: false,
    mostrarEliminar: true,
    labelEliminar: 'Quitar',
    labelEditar: '',
    bootstrapEditar: '',
    bootstrapEliminar: 'success',
  };

  totalProductos: number = 0;
  subtotal: number = 0;
  impuesto: number = 0;
  totalPago: number = 0;

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
  ];

  listaCarrito: ProductoDetail[] = [];

  agregarProducto(producto: ProductoDetail) {
    this.validarCarrito();
    this.tablecarrito.eventoLog();
    if (this.tablecarrito.listaCarrito.length === 0) {
      producto.cantidad = 1;
      this.tablecarrito.listaCarrito.push(producto);
    } else {
      let productoAgg = this.tablecarrito.listaCarrito.filter(
        (reg) => reg.productoid === producto.productoid
      );
      if (productoAgg.length > 0) {
        this.tablecarrito.listaCarrito.forEach((productoCarrito) => {
          if (productoCarrito.productoid === producto.productoid) {
            if (productoCarrito.cantidad != undefined) {
              productoCarrito.cantidad += 1;
            }
          }
        });
      } else {
        producto.cantidad = 1;
        this.tablecarrito.listaCarrito.push(producto);
      }
    }
    this.realizarCalculo();
  }

  eliminarProducto(producto: ProductoDetail) {
    this.validarCarrito();
    let posicionProducto = this.listaCarrito.indexOf(producto);
    this.listaCarrito.splice(posicionProducto, 1);
    this.realizarCalculo();
  }

  realizarCalculo() {
    if (this.listaCarrito.length == 0) {
      this.totalProductos = 0;
      this.subtotal = 0;
      this.impuesto = 0;
      this.totalPago = 0;
    }
    this.listaCarrito.forEach((producto) => {
      this.totalProductos += producto.cantidad ?? 0;
      this.subtotal += producto.precio * (producto.cantidad ?? 0);
      this.impuesto += producto.precio * (producto.cantidad ?? 0) * 0.12;
      this.totalPago += this.subtotal + this.impuesto;
    });
  }

  validarStock(prodSeleccionado: ProductoDetail): boolean {
    let isValid: boolean = true;
    this.listaproducto.forEach((producto) => {
      if (producto.productoid === prodSeleccionado.productoid) {
        let cantidad = prodSeleccionado.cantidad ?? 0;
        if (producto.stock > cantidad) {
          isValid = true;
        } else {
          isValid = false;
        }
      }
    });
    return isValid;
  }

  nuevoProducto(producto: ProductoDetail) {
    /*let ultimoId = this.listaproducto.length + 1;
    producto.productoid = ultimoId;
    this.listaproducto.push(producto);*/

    //let ultimoId = this.listaproducto.reduce((x,y)=> Math.max(x.productid, y.productid));
    let ultimoId = this.listaproducto.length + 1;
  }

  mensajeCerrar(e: any) {}

  validarCarrito() {
    if (this.tablecarrito.listaCarrito.length !== 0) {
      this.divAgregarProducto.nativeElement.style.display = 'none';
    } else {
      this.divAgregarProducto.nativeElement.style.display = 'flex';
    }
  }

  /*
  ngAfterViewChecked(): void {
    if (this.tablecarrito.listaCarrito.length == 0) {
      this.valoresPago.totalProductos = 0;
      this.valoresPago.subtotal = 0;
      this.valoresPago.impuesto = 0;
      this.valoresPago.totalPago = 0;
    }
    this.tablecarrito.listaCarrito.forEach(producto => {
      this.valoresPago.totalProductos += producto.cantidad ?? 0;
      this.valoresPago.subtotal += (producto.precio * (producto.cantidad ?? 0));
      this.valoresPago.impuesto += (producto.precio * (producto.cantidad ?? 0)) * 0.12;
      this.valoresPago.totalPago += this.subtotal + this.impuesto;
    })
  }*/
}
