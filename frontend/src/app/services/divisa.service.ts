import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  constructor(private _http:HttpClient) { }

  getCurrencies():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'x-rapidapi-key': 'c6458a0ce9mshc2c3ffc803748f4p1110bajsn48d094a14b7b',
        'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
      }),
    }
    return this._http.get('https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies',httpOptions);
  }
  convert(transaccion:Transaccion):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'x-rapidapi-key': 'c6458a0ce9mshc2c3ffc803748f4p1110bajsn48d094a14b7b',
        'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
      }),
      params: new HttpParams()
      .append('from',transaccion.monedaOrigen)
      .append('to',transaccion.monedaDestino)
      .append('amount',transaccion.cantidadOrigen.toString())
    }
    return this._http.get('https://currency-converter18.p.rapidapi.com/api/v1/convert',httpOptions);
  }

}
