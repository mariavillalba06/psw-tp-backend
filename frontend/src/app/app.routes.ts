import { Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { DivisasFormComponent } from './components/divisas-form/divisas-form.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: 'productos', component: ProductosComponent},
    {path:'producto-form', component: ProductoFormComponent},
    {path:'divisas', component: DivisasComponent},
    {path:'divisas-form', component: DivisasFormComponent},
    {path:'tickets', component: TicketsComponent},
    {path:'ticket-form/:id', component: TicketFormComponent},
    {path:'home',component:HomeComponent},
    {path:'',component:HomeComponent}
];
