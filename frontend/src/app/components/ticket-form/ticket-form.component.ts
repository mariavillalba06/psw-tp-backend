import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../models/ticket';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { Espectador } from '../../models/espectador';
import { EspectadorService } from '../../services/espectador.service';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent {
  ticket!: Ticket;
  accion: string='new';
  espectadores!:Array<Espectador>;

  constructor(private activatedRoute: ActivatedRoute,
    private ticketService: TicketService,
    private espectadorService:EspectadorService,
    private router:Router
  ) {
    this.iniciarVariable();
    this.cargarEspectadores();
  }
  ngOnInit():void{
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0"){
        this.accion = "new";
        this.iniciarVariable();
      }
      else{
        this.accion = "update";
        this.cargarTicket(params['id']);
      }
    });
  }

  iniciarVariable(): void {
    this.ticket = new Ticket();
    this.espectadores = new Array<Espectador>();
  }
  registrarVenta():void{
    this.ticketService.addTicket(this.ticket).subscribe(
      result=>{
        if(result.status==1){
          alert("El ticket se agrego correctamente");
          this.router.navigate(['tickets']);
        }
      },
      error=>{
        alert("Ha ocurrido un error");
        console.log(error);
      }
    )
  }

  actualizarVenta():void{
    this.ticketService.updateTicket(this.ticket).subscribe(
      result=>{
        if(result.status==1){
          alert("La venta se actualizo correctamente");
          this.router.navigate(['tickets']);
        }
      },
      error=>{
        alert("Ha ocurrido un error");
        console.log(error);
      }
    )
  }
  cargarTicket(id:string):void{
    this.ticketService.getTicketById(id).subscribe(
      result =>{
        Object.assign(this.ticket,result);
        this.ticket.espectador=this.espectadores.find(e => (e._id ==this.ticket.espectador._id))!;
      }
    )
  }

  cargarEspectadores():void{
    this.espectadores = new Array<Espectador>();
    this.espectadorService.getEspectadores().subscribe(
      result=>{
        let vespectador: Espectador = new Espectador();
      result.forEach((element:any) => {
        Object.assign(vespectador,element);
        this.espectadores.push(vespectador);
        vespectador = new Espectador();
      });
      }
    );
  }

  listado():void{
    this.router.navigate(['tickets']);
  }

  mostrarPrecioCobrado(){
    if (!this.ticket.precioReal || !this.ticket.categoriaEspectador) {
      return false;
    }
    else {
      this.calcularPrecioCobrado();
      return true;
    }
  }

  calcularPrecioCobrado():void {
    if (this.ticket.categoriaEspectador == 'l') {
      this.ticket.precioCobrado = this.ticket.precioReal * 0.8;
    }
    else{
      this.ticket.precioCobrado = this.ticket.precioReal;
    }
  }
}
