import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { DetalleproductoComponent } from './detalleproducto/detalleproducto.component';
import { TablecarritoComponent } from './tablecarrito/tablecarrito.component';
import { ValorespagoComponent } from './valorespago/valorespago.component';
import { ListaproductoComponent } from './listaproducto/listaproducto.component';
import { EditarproductoComponent } from './editarproducto/editarproducto.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    TableComponent,
    DetalleproductoComponent,
    TablecarritoComponent,
    ValorespagoComponent,
    ListaproductoComponent,
    EditarproductoComponent,


  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    TableComponent,
    DetalleproductoComponent,

  ]
})
export class EjemploModule { }


