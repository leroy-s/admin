import { Routes } from '@angular/router';
import { GestionusuariosComponent } from './gestionusuarios/gestionusuarios.component';
import { MantenerFacultadesComponent } from './mantener-facultades/mantener-facultades.component';
import { MantenerElementosComponent } from './mantener-elementos/mantener-elementos.component';
import { HistorialComponent } from './historial/historial.component';
import { RedireccionamientoComponent } from './redireccionamiento/redireccionamiento.component';
import { SidebarComponent } from './sidebar/sidebar.component'
export const routes: Routes = [
    {
        path: '',
        component: GestionusuariosComponent,
        title: 'Componente de personas'
    }
    ,
    {
        path: 'escuelafacultad',
        component:  MantenerFacultadesComponent,
        title: 'Componente de escuelas y facultades'
    }
    ,
    {
        path: 'elementos',
        component:  MantenerElementosComponent,
        title: 'Componente de roles'
    }
    ,
    {
        path: 'historial',
        component:  HistorialComponent,
        title: 'Componente de historiales'
    }
    ,
    {
        path: 'redireccionamiento',
        component:  RedireccionamientoComponent,
        title: 'Componente de redireccionamiento'
    }
    ,
    {
        path: 'sidebar',
        component: SidebarComponent,
        title: 'Sidebar'
    }
    ,
    {
        path: '**',
        redirectTo :''
    }
];
