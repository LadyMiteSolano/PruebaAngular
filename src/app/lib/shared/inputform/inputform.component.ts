import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormularioEntrada } from '../../interfaces/InputForm.interface';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
})
export class InputformComponent implements OnInit{
  @Input()
  Items!: FormularioEntrada[];
  rolUser: number = 2;
  ItemsPorRol: FormularioEntrada[] = [];

  opciones: FormularioEntrada[] = [
    {
        idopc: 1,
        idrol: 1,
        opc: "Home",
        icon:"house-door-fill"
    },
    {
        idopc: 4,
        idrol: 1,
        opc: "Users",
        icon:"person-fill-gear"
    },
    {
        idopc: 2,
        idrol: 2,
        opc: "Comprar",
        icon:"cart-fill"
    },
    {
        idopc: 3,
        idrol: 2,
        opc: "informacion",
        icon:"database-check"
    }
    ];

  ngOnInit(): void {
    this.Items.forEach(item =>{
      if(item.idrol === this.rolUser){
        this.ItemsPorRol.push(item);
      }
    });
  }
}
