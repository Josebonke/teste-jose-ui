import { Component,inject } from '@angular/core';
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
import { Router } from '@angular/router'; // Importando o Router
@Component({
  selector: 'app-base-component-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatButtonModule,MatDividerModule, ReactiveFormsModule,CommonModule],
  templateUrl: './base-component-form.component.html',

})
export class BaseComponentFormComponent {
  router = inject(Router); // Injetando o Router
  constructor(public apiService : ApiService,public  http : HttpClient, public formBuilder: FormBuilder,public cookieService: CookieService){
  }


}
