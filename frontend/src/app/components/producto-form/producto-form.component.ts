import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export class ProductoFormComponent {
  producto!: Producto;
  files: { base64: string, safeurl: SafeUrl }[] = [];

  constructor(
    private router: Router,
    private domSanitizer: DomSanitizer,
    private productoService: ProductoService
  ) {
    this.iniciarVariable();
  }


  iniciarVariable() {
    this.producto = new Producto();
  }

  agregarProducto(): void {
    this.productoService.addProducto(this.producto).subscribe(
      result => {
        if (result.status == 1) {
          alert("El producto se agrego correctamente");
          this.router.navigate(['productos']);
        }
      },
      error => {
        alert("Ha ocurrido un error");
        console.log(error);
      }
    )
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();

    reader.onload = () => {
      const base64: string = reader.result as string;
      const safeurl: SafeUrl = this.domSanitizer.bypassSecurityTrustUrl(base64);

      this.producto.imagen = base64;

      this.files.push({ base64, safeurl });
    };

    reader.readAsDataURL(file);
    
    reader.onerror = (error) => {
      console.error('Error converting file to base64:', error);
    };
  }
}
