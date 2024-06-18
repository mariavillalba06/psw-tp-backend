import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: Array<Producto>;
  productosDestacados: Array<Producto>;
  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {
    this.productos = new Array<Producto>();
    this.productosDestacados = new Array<Producto>();
    this.obtenerProductos();
    this.obtenerProductosDestacados();
  }

  obtenerProductos(): void {
    this.productoService.getProductos().subscribe(
      (result) => {
        let vproducto: Producto = new Producto();
        result.forEach((e: any) => {
          Object.assign(vproducto, e);
          this.productos.push(vproducto);
          vproducto = new Producto();
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }
  obtenerProductosDestacados(): void {
    this.productoService.getProductosDestacados().subscribe(
      (result) => {
        let vproducto: Producto = new Producto();
        result.forEach((e: any) => {
          Object.assign(vproducto, e);
          this.productosDestacados.push(vproducto);
          vproducto = new Producto();
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  agregar(): void {
    this.router.navigate(['producto-form']);
  }
}
