import { Component, Input, OnInit } from '@angular/core';
import { FormularioEntrada } from '../../interfaces/InputForm.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input()
  Items!: FormularioEntrada[];
  rolUser: number = 2;
  ItemsPorRol: FormularioEntrada[] = [];

  ngOnInit(): void {
    this.Items.forEach(item =>{
      if(item.idrol === this.rolUser){
        this.ItemsPorRol.push(item);
      }
    });
  }
}
