import { Espectador } from "./espectador";

export class Ticket {
    _id!: string;
    precioReal: number;
    precioCobrado:number;
    categoriaEspectador: string;
    fechaCompra: string;
    espectador: Espectador;

    constructor(){
        this.precioReal = 0;
        this.precioCobrado=0;
        this.categoriaEspectador = "";
        this.fechaCompra = "";
        this.espectador = new Espectador();
    }
}
