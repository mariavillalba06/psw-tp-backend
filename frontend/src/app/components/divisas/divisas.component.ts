import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransaccionService } from '../../services/transaccion.service';
import { Transaccion } from '../../models/transaccion';
import { DivisaService } from '../../services/divisa.service';
import { Divisa } from '../../models/divisa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-divisas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './divisas.component.html',
  styleUrl: './divisas.component.css'
})
export class DivisasComponent {
  transacciones:Array<Transaccion>;
  monedaOrigen:string="";
  monedaDestino:string="";
  divisas!: Array<Divisa>;

  constructor
  (private router:Router,
    private transaccionService:TransaccionService, 
    private divisaService:DivisaService
  ){
    this.transacciones=new Array<Transaccion>();
    this.obtenerTransacciones();
    //this.obtenerDivisas();
  }

  obtenerDivisas(): void {
    this.divisaService.getCurrencies().subscribe(
      (result) => {
        this.divisas = result;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  obtenerTransacciones():void{
    this.transaccionService.getTransacciones().subscribe(
      (result)=>{
        this.transacciones=result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  obtenerTransaccionesPorFiltro():void{
    this.transaccionService.getTransaccionesByFilter(this.monedaOrigen, this.monedaDestino).subscribe(
      (result)=>{
        this.transacciones=result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  agregarTransaccion():void{
    this.router.navigate(['divisas-form']);
  }
}
