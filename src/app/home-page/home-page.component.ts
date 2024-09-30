import { Component } from '@angular/core';
import { BaseComponentFormComponent } from '../shared/base-component-form/base-component-form.component';
import {jwtDecode} from 'jwt-decode';
import {MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'home-page',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent extends BaseComponentFormComponent {

  NomeUsuario : string = ""
  decodedToken : any
  token :any
  ngOnInit():void{
    this.token =this.cookieService.getCookie('jwtToken')
    if(this.token){
      this.decodedToken = jwtDecode(this.token)

      this.NomeUsuario = this.decodedToken.Nome
      console.log(this.decodedToken)
    }
    else{
      this.router.navigate(['/Login'])
    }

  }

  logout(){
    this.apiService.logout(this.token).subscribe({
      next: (response) => {
          const tokenResponse = response;
          if (tokenResponse) {
              this.cookieService.deleteCookie('jwtToken');
              this.router.navigate(['/Login']);
          }
      },
      error: (reject) => {
        console.error('Erro ao fazer logout:', reject)
      }
  });


  }
}
