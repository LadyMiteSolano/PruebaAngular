import { Component, Input, OnInit } from '@angular/core';
import { PropertiesItem } from '../../interfaces/menuitem.interface';

@Component({
  selector: 'app-menuoffcanvas',
  templateUrl: './menuoffcanvas.component.html'
})
export class MenuoffcanvasComponent implements OnInit{


  idrol: number=1;

  show: boolean = false;

  @Input()
  menuitems!: PropertiesItem[];

  menuItemRol: PropertiesItem[] =[];

  open(){
    this.show = true;
  }

  close(){
    this.show = false;
  }

  ngOnInit(): void {
    for(let i=0; i<this.menuitems.length; i++){
      if(this.menuitems[i].idrol === this.idrol)
        this.menuItemRol.push(this.menuitems[i])
    }
  }
}


