import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {

  constructor(private _http:HttpClient) { }

  getEspectadores():Observable<any>{
    let httpOptions={
      headers:new HttpHeaders({
      })
    }
    return this._http.get('http://localhost:3000/api/espectadores',httpOptions);
  }
}
