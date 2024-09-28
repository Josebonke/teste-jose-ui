import { Component, Inject, Injectable } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ApiService } from '../apiService/apiService';
import { UsuarioFilter } from '../usuario/usuario.model';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';

 apiService : ApiService
@Component({
  selector:'login-app',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatButtonModule,MatDividerModule, ReactiveFormsModule],
  templateUrl:'./login.component.html'

})
export class LoginComponent{
  constructor(public apiService : ApiService,public  http : HttpClient, public formBuilder: FormBuilder){}
  formulario: FormGroup
  senha : string = ''
  email : string = ""
  ngOnInit(){
    this.formulario = this.formBuilder.group({
      email:[this.email,Validators.required],
      senha:[this.senha,Validators.minLength(6)]
    })
  }




  logar(){
    let usuarioFilter: UsuarioFilter = new UsuarioFilter();

    usuarioFilter.email = this.formulario.value['email'];
    usuarioFilter.senha = this.formulario.value['senha'];
    alert(usuarioFilter.email)
  }

}
