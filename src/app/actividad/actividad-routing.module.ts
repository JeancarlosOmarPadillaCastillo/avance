import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeActividadComponent } from '@soa/actividad/pages/home-actividad/home-actividad.component';
import {TeenagerFormComponent} from "@soa/teenager/pages/teenager-form/teenager-form.component";
import {AdolescenteModalComponent} from "@soa/teenager/pages/adolescente-modal/adolescente-modal.component";

const routes: Routes = [
  {
    path: '',
    component: HomeActividadComponent
  },
  {
    path: 'form',
    component: TeenagerFormComponent
  },{
    path: 'direcciones',
    component: AdolescenteModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadRoutingModule { }
