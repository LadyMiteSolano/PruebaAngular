import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signupreactivo',
  templateUrl: './signupreactivo.component.html'
})
export class SignupreactivoComponent implements OnInit{


  frmGroupValidador!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.frmGroupValidador = this.initForm();
  }

  nombre: string = '';
  apellido: string = '';
  celular: string = '';
  email: string = '';
  password: string = '';
  passwordConfirm: String = '';

  signup(){

  }

  initForm() : FormGroup{
    return this.fb.group({
      nombre:['', [Validators.required, Validators.minLength(30), Validators.max(50)]],
      apellido:['', Validators.required]
    });
  }
}
