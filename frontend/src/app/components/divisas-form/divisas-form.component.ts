import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DivisaService } from '../../services/divisa.service';
import { Divisa } from '../../models/divisa';
import { Transaccion } from '../../models/transaccion';
import { TransaccionService } from '../../services/transaccion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-divisas-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './divisas-form.component.html',
  styleUrl: './divisas-form.component.css'
})
export class DivisasFormComponent {
  divisas!: Array<Divisa>;
  transaccion!: Transaccion;

  constructor(
    private router: Router,
    private divisaService: DivisaService,
    private transaccionService: TransaccionService
  ) {
    this.iniciarVariables();
  }
  iniciarVariables() {
    this.divisas = new Array<Divisa>();
    this.transaccion = new Transaccion();
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
  convertirDivisa(): void {
    this.divisaService.convert(this.transaccion).subscribe(
      (result) => {
        this.transaccion.cantidadDestino = result.result.convertedAmount;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  guardarTransaccion(): void {
    this.transaccionService.addTransaccion(this.transaccion).subscribe(
      result => {
        if (result.status == 1) {
          alert("La transaccion se añadio correctamente");
          this.router.navigate(['divisas']);
        }
      },
      error => {
        alert("Ha ocurrido un error");
        console.log(error);
      }
    )
  }
}
