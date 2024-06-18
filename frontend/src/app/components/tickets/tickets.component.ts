import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Array<Ticket>;
  categoria:string="";

  constructor(
    private router:Router,
    private ticketService: TicketService
  ) {
    this.tickets = new Array<Ticket>();
    this.obtenerTickets();
  }

  obtenerTickets(): void {
    this.ticketService.getTickets().subscribe(
      result => {
        this.tickets = result;
      },
      error => {
        console.log(<any>error);
      }
    )
  }
  agregar():void{
    this.router.navigate(['ticket-form','0']);
  }
  eliminar(id:string):void{
    this.ticketService.deleteTicket(id).subscribe(
      result => {
        this.obtenerTickets();
      },
      error => {
        console.log(error);
      }
    )
  }
  editar(ticket:Ticket):void{
    this.router.navigate(['ticket-form',ticket._id]);
  }

  obtenerTicketsPorCategoria(categoria:string):void{
    this.ticketService.getTicketsByCategoria(categoria).subscribe(
      result=>{
        this.tickets=result;
      },
      error=>{
        console.log(error);
      }
    )
  }

  onCategoriaChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const categoria = selectElement.value;
    this.obtenerTicketsPorCategoria(categoria);
  }
}
