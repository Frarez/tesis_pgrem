import { Routes } from '@angular/router';
import { TecnicoIndexComponent } from './tecnico/tecnico-index/tecnico-index.component';
import { TecnicoViewComponent } from './tecnico/tecnico-view/tecnico-view.component';
import { TecnicoCreateComponent } from './tecnico/tecnico-create/tecnico-create.component';
import { TecnicoEditComponent } from './tecnico/tecnico-edit/tecnico-edit.component';

export const routes: Routes = [

    { path: '', redirectTo: 'tecnico/tecnico-index', pathMatch: 'full'},

    { path: 'tecnico/tecnico-index', component: TecnicoIndexComponent },

    { path: 'tecnico/:tecnicoId/tecnico-view', component: TecnicoViewComponent },

    { path: 'tecnico/tecnico-create', component: TecnicoCreateComponent },

    { path: 'tecnico/:tecnicoId/tecnico-edit', component: TecnicoEditComponent } 

];
