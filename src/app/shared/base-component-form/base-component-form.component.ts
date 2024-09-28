import { Component } from '@angular/core';
import { CookieService } from '../../cookieService/cookie.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ApiService } from '../../apiService/apiService';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-base-component-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatButtonModule,MatDividerModule, ReactiveFormsModule,CommonModule],
  templateUrl: './base-component-form.component.html',

})
export class BaseComponentFormComponent {
  constructor(public apiService : ApiService,public  http : HttpClient, public formBuilder: FormBuilder,public cookieService: CookieService){
  }


  // Criar um cookie
  setCookie() {
    this.cookieService.setCookie('username', 'John Doe', 7);  // Duração de 7 dias
  }

  // Ler o valor de um cookie
  getCookie() {
    const username = this.cookieService.getCookie('username');
    console.log(username);
  }

  // Apagar um cookie
  deleteCookie() {
    this.cookieService.deleteCookie('username');
  }

}
