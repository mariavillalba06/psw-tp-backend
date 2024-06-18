import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http:HttpClient) { }

  getTickets():Observable<any>{
    let httpOptions={
      headers:new HttpHeaders({
      })
    }
    return this._http.get('http://localhost:3000/api/tickets',httpOptions);
  }

  deleteTicket(id:string):Observable<any>{
    let httpOptions={
      headers:new HttpHeaders({
      })
    }
    return this._http.delete('http://localhost:3000/api/ticket/'+id,httpOptions);
  }

  getTicketById(id:string):Observable<any>{
    let httpOptions={
      headers:new HttpHeaders({
      })
    }
    return this._http.get('http://localhost:3000/api/ticket/'+id,httpOptions);
  }

  addTicket(ticket:Ticket):Observable<any>{
    let httpOptions={
      headers:new HttpHeaders({
        'content-type': 'application/json'
      }),
    }
    let body: any = JSON.stringify(ticket);

    return this._http.post('http://localhost:3000/api/ticket',body,httpOptions);
  }

  updateTicket(ticket:Ticket):Observable<any>{
    let httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    let body: any = JSON.stringify(ticket);
    return this._http.put('http://localhost:3000/api/ticket/'+ticket._id,body,httpOptions);
  }

  getTicketsByCategoria(categoria:string):Observable<any>{
    let httpOptions={
      headers:new HttpHeaders({
        'content-type': 'application/json'
      }),
      params:new HttpParams()
      .append('categoriaEspectador',categoria)
    }
    return this._http.get('http://localhost:3000/api/tickets/categoria',httpOptions);
  }
}
