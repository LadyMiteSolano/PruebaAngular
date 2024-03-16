import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  @Output()
  eventoSignup = new EventEmitter<any>();


  nombre: string = '';
  apellido: string = '';
  celular: string = '';
  email: string = '';
  password: string = '';
  passwordConfirm: String = '';

  signup(){
    console.log("Prueba de submit");
  }

  volver(){
    this.eventoSignup.emit(true);
  }

}




