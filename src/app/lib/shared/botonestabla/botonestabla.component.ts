import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { PropertiesBtnTabla } from '../../interfaces/botonestabla.interface';

@Component({
  selector: 'app-botonestabla',
  templateUrl: './botonestabla.component.html',

})
export class BotonestablaComponent {

  @Output()
  eventoEditar = new EventEmitter();

  @Output()
  eventoEliminar = new EventEmitter();

  @Input()
  propertiesBtn: PropertiesBtnTabla = {
    labelEditar: "Actualizar",
    labelEliminar: "Eliminar",
    mostrarEditar: true,
    mostrarEliminar: true,
    bootstrapEditar: "primary",
    bootstrapEliminar: "warning"

  };

  eventEliminar(){
    this.eventoEliminar.emit();
  }

  eventEditar(){
    this.eventoEditar.emit();
  }

}
