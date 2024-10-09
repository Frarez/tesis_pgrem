import { Routes } from '@angular/router';
import { TecnicoIndexComponent } from './tecnico/tecnico-index/tecnico-index.component';
import { TecnicoViewComponent } from './tecnico/tecnico-view/tecnico-view.component';
import { TecnicoCreateComponent } from './tecnico/tecnico-create/tecnico-create.component';
import { TecnicoEditComponent } from './tecnico/tecnico-edit/tecnico-edit.component';
import { TicketIndexComponent } from './ticket/ticket-index/ticket-index.component';
import { TicketCreateComponent } from './ticket/ticket-create/ticket-create.component';
import { TicketEditComponent } from './ticket/ticket-edit/ticket-edit.component';
import { TicketViewComponent } from './ticket/ticket-view/ticket-view.component';



export const routes: Routes = [
//rutas tecnico
    { path: '', redirectTo: 'tecnico/tecnico-index', pathMatch: 'full'},
    { path: 'tecnico/tecnico-index', component: TecnicoIndexComponent },
    { path: 'tecnico/:tecnicoId/tecnico-view', component: TecnicoViewComponent },
    { path: 'tecnico/tecnico-create', component: TecnicoCreateComponent },
    { path: 'tecnico/:tecnicoId/tecnico-edit', component: TecnicoEditComponent } ,


//rutas ticket
    { path: 'ticket/ticket-index', component: TicketIndexComponent} ,
    { path: 'ticket/:ticketId/ticket-edit', component: TicketEditComponent} ,
    { path: 'ticket/ticket-create', component: TicketCreateComponent} ,
    { path: 'ticket/:ticketId/ticket-view', component: TicketViewComponent} ,



];
