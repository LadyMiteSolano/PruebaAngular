import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PropertiesItem } from '../../interfaces/menuitem.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',

})
export class MenuComponent implements OnInit, OnChanges{
  @Input()
  menuItems!: PropertiesItem[];
  rolUser: number = 2;
  menuItemsPorRol: PropertiesItem[] = [];

  ngOnInit(): void {
    this.menuItemsPorRol = this.menuItems.filter(item => item.idrol === this.rolUser);
    /*
    this.menuItems.forEach(item =>{
      if(item.idrol === this.rolUser){
        this.menuItemsPorRol.push(item);
      }
    });*/
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

}
