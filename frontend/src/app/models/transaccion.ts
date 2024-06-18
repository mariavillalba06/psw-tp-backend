export class Transaccion {
    _id!: string;
    monedaOrigen: string;
    cantidadOrigen: number;
    monedaDestino: string;
    cantidadDestino!: number;
    emailCliente: string;

    constructor(){
        this.monedaOrigen = '';
        this.cantidadOrigen = 0;
        this.monedaDestino = '';
        this.emailCliente = '';
    }
}
