import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadRoutingModule } from './actividad-routing.module';
import { HomeActividadComponent } from '@soa/actividad/pages/home-actividad/home-actividad.component';
import { ActividadFormComponent } from '@soa/actividad/pages/actividad-form/actividad-form.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ActividadModalComponent } from '@soa/actividad/pages/actividad-modal/actividad-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    HomeActividadComponent,
    ActividadFormComponent,
    ActividadModalComponent
  ],
  imports: [
    CommonModule,
    ActividadRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatMenuModule
  ]
})
export class ActividadModule { }
