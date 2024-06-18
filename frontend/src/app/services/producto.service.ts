import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http: HttpClient) { }

  getProductos(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
      })
    }
    return this._http.get("http://localhost:3000/api/productos", httpOptions);
  }

  getProductosDestacados():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      })
    }
    return this._http.get("http://localhost:3000/api/productos/productos-destacados", httpOptions);
  }

  addProducto(producto:Producto):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    let body: any = JSON.stringify(producto);
    
    return this._http.post("http://localhost:3000/api/producto",body, httpOptions);
  }
}
