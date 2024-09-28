import { Component,inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ApiService } from '../apiService/apiService';
import { UsuarioFilter } from '../usuario/usuario.model';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

 apiService : ApiService
@Component({
  selector:'login-app',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatButtonModule,MatDividerModule, ReactiveFormsModule],
  templateUrl:'./login.component.html'

})
export class LoginComponent{
  constructor(public apiService : ApiService,public  http : HttpClient, public formBuilder: FormBuilder){
  }

  private _snackBar = inject(MatSnackBar);
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  formulario: FormGroup
  senha : string = ''
  email : string = ""

 async ngOnInit() : Promise<void>{
  this.formulario = new FormGroup({
    email: new FormControl(this.email, [
      Validators.required,
      Validators.email
    ]),
    senha: new FormControl(this.senha, [
      Validators.required,
      Validators.minLength(6)
    ])
  });


  }




  logar(){
    let usuarioFilter: UsuarioFilter = new UsuarioFilter()
    usuarioFilter.email = this.formulario.value['email']
    usuarioFilter.senha = this.formulario.value['senha']

    if(!usuarioFilter.email.includes("@")){
      // const snackBarRef = this._snackBar.open(`'Digite Um e-mail Válido ${usuarioFilter.email}` , '', {
      //   duration: 2000,
      //   horizontalPosition: 'center',
      //   verticalPosition: 'top',
      // });


      // setTimeout(() => {
      //   snackBarRef.dismiss();
      // }, 2000);
    }






  }

}
