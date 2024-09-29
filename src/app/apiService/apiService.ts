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
  apiUrl: string = 'https://localhost:7232/login'

  constructor(private http: HttpClient) { }

  login(model: UsuarioFilter): Observable<UsuarioGRID> {
    return this.http.post<UsuarioGRID>(this.apiUrl, model)
    .pipe(
      map(response => response)
    )
  }
}
