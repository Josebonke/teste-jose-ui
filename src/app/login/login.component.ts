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
import { tap,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
apiService : ApiService
@Component({
  selector:'login-app',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatButtonModule,MatDividerModule, ReactiveFormsModule,CommonModule],
  templateUrl:'./login.component.html'

})
export class LoginComponent extends BaseComponentFormComponent{

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


getClassCssbtnLogar():string{
  return  this.formulario.invalid ? "btn-inactive"  : "btn-active"
}
  logar(){
    let usuarioFilter: UsuarioFilter = new UsuarioFilter()
    usuarioFilter.email = this.formulario.value['email']
    usuarioFilter.senha = this.formulario.value['senha']

    this.apiService.login(usuarioFilter).subscribe({
      next: (response) => {
        const token = response;
        this.cookieService.setCookie('jwtToken', '',7 ); // Salva o token no localStorage
        console.log('Login realizado com sucesso!', token)
      },
      error: (reject) => {
        const snackBarRef = this._snackBar.open(`Erro  ${reject.error}` , '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        })
        setTimeout(() => {
          snackBarRef.dismiss();
        }, 2000);


      }
    });




  }

}
