import { Component, OnInit } from '@angular/core';
import { administradorService } from '../../services/Administrador.service';
import { Deportista } from '../../models/deportistas'

@Component({
  selector: 'app-deportista',
  templateUrl: './deportista.component.html',
  styleUrls: ['./deportista.component.scss']
})
export class DeportistaComponent implements OnInit {

  constructor(public AdministradorService:administradorService) { }

  ngOnInit(): void {
    this.getDeportistas();
  }
  getDeportistas(){
    this.AdministradorService.getEndpoint().
    subscribe(res => {
      this.AdministradorService.deportista = res as Deportista[];
    })
  }
}
