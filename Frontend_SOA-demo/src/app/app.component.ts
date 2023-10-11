import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {DocumentoModalComponent} from "./documento-modal/documento-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bsModalRef: BsModalRef | undefined;

  adolescentes = [
    {
      dni: '88888888',
      nombre: 'Juan',
      apellido: 'Pérez',
      fechaNacimiento: '15/05/1985',
      celular: '555-123-456',
      direccion: 'Calle Principal 123',
      nivel: 'Avanzado'
    },
    {
      dni: '72428921',
      nombre: 'Juan',
      apellido: 'Pérez',
      fechaNacimiento: '10/08/1990',
      celular: '555-987-654',
      direccion: 'Avenida Secundaria 456',
      nivel: 'Intermedio'
    },
    {
      dni: '34567890',
      nombre: 'Juan',
      apellido: 'Pérez',
      fechaNacimiento: '20/02/1988',
      celular: '555-456-789',
      direccion: 'Calle Terciaria 789',
      nivel: 'Bajo'
    },
  ];

  constructor(private modalService: BsModalService) {}

  openDocumentoModal(dni:string) {
    const initialState = {
      dni:dni
    };

    const modalConfig = {
      class: 'modal-xl', 
      initialState
    };
    this.bsModalRef = this.modalService.show(DocumentoModalComponent, modalConfig);
  }
}

