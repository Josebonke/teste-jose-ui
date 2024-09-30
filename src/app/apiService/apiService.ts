import { Injectable } from "@angular/core";
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioGRID,UsuarioFilter } from "../usuario/usuario.model";
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl: string = 'https://localhost:7232'

  constructor(private http: HttpClient) { }

  login(filter: UsuarioFilter,endpoint): Observable<UsuarioGRID> {
    return this.http.post<UsuarioGRID>(`${this.apiUrl}/${endpoint}`, filter)
    .pipe(
      map(response => response)
    )
  }

  logout(token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/Logout/Logout`, { token }, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    });
  }
}
