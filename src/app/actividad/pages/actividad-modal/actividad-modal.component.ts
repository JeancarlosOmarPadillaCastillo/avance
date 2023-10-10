import { Component } from '@angular/core';
import {AdolescenteModalService} from "@soa/teenager/services/adolescente-modal.service";

@Component({
  selector: 'app-adolescente-modal',
  templateUrl: './actividad-modal.component.html',
  styleUrls: ['./actividad-modal.component.scss']
})
export class ActividadModalComponent {
  constructor(private modalService: AdolescenteModalService) {}



}
