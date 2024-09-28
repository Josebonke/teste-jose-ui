import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from "rxjs/internal/Subject";
import { UsuarioGRID,UsuarioFilter } from "../usuario/usuario.model";
import { bootstrapApplication } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl: string = 'https://localhost:7232'


  constructor(public http: HttpClient) {}
  changeItemSubject = new Subject<number>();



  get usuarios_subscribeCat(){
    return this.changeItemSubject.asObservable()
  }

  Logar( parameter: UsuarioFilter = new UsuarioFilter()): Promise<UsuarioGRID[]> {

    const url = `${this.apiUrl}/Login`;
    let params = new HttpParams();

    Object.entries(parameter).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params = params.set(key, value.toString());
      }

    });

    return new Promise<UsuarioGRID[]>((resolve, reject) => {
      const body = { ...params };
      this.http.post<UsuarioGRID[]>(url, parameter)
          .subscribe({
              next: (data: UsuarioGRID[]) => {
                  resolve(data);
              },
              error: (error: any) => {
                  reject(error);
              }
          });
  });
  }
}
