import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaccion } from '../models/transaccion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private _http:HttpClient) { }

  addTransaccion(transaccion:Transaccion):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body: any = JSON.stringify(transaccion);
    return this._http.post("http://localhost:3000/api/transaccion",body, httpOptions);
  }

  getTransacciones():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      })
    }
    return this._http.get("http://localhost:3000/api/transacciones", httpOptions);
  }

  getTransaccionesByFilter(monedaOrigen:string, monedaDestino:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
      .append('monedaOrigen',monedaOrigen)
      .append('monedaDestino',monedaDestino)
    }
    return this._http.get("http://localhost:3000/api/transacciones/divisas", httpOptions);
  }
}
