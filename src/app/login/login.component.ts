import { Component,inject } from '@angular/core';
import {MatInputModule } from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatDividerModule } from '@angular/material/divider';
import {MatButtonModule } from '@angular/material/button';
import { ApiService } from '../apiService/apiService';
import { UsuarioFilter } from '../usuario/usuario.model';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,Validators,FormControl} from '@angular/forms';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { BaseComponentFormComponent } from '../shared/base-component-form/base-component-form.component';




apiService : ApiService
@Component({
  selector:'login-app',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatButtonModule,MatDividerModule, ReactiveFormsModule,CommonModule],
  templateUrl:'./login.component.html'

})
export class LoginComponent extends BaseComponentFormComponent{

  _snackBar = inject(MatSnackBar);
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
  })
  this.cookieService.deleteCookie('jwt')
  }

  getClassCssbtnLogar():string{
    return  this.formulario.invalid ? "btn-inactive"  : "btn-active"
  }

  logar(){
    let usuarioFilter: UsuarioFilter = new UsuarioFilter()
    usuarioFilter.email = this.formulario.value['email']
    usuarioFilter.senha = this.formulario.value['senha']

    this.apiService.login(usuarioFilter,'Login').subscribe({
      next: (response) => {
        const token = response
        if(token)
        {
          this.cookieService.setCookie('jwtToken', token.token,7 )
          this.router.navigate(['/Home'])
        }

      },
      error: (reject) => {
        const snackBarRef = this._snackBar.open(`Erro  ${reject.error}` , '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        })
        setTimeout(() => {
          snackBarRef.dismiss();
        }, 2000)
      }
    })
  }
}
