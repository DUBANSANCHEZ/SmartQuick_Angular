import { Component, OnInit } from '@angular/core';
import { administradorService } from '../../services/Administrador.service';
import { Deportista } from '../../models/deportistas';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@Component({
  selector: 'app-deportista',
  templateUrl: './deportista.component.html',
  styleUrls: ['./deportista.component.scss']
})
export class DeportistaComponent implements OnInit {

  constructor(public AdministradorService:administradorService) { }
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      athlete: {
        title: 'Athlete',
      },
      age: {
        title: 'Age',
      },
      country: {
        title: 'Country',
      },
      year: {
        title: 'Year',
      },
      date: {
        title: 'Date',
      },
      sport: {
        title: 'Sport',
      },
      gold: {
        title: 'Gold',
      },
      silver: {
        title: 'Silver',
      },
      bronze: {
        title: 'Bronze',
      },
      total: {
        title: 'Total',
      },
    },
  };

  ngOnInit(): void {
    this.getDeportistas();
  }
  getDeportistas():void {
    this.AdministradorService.getEndpoint().
    subscribe(res => {
      this.AdministradorService.deportista = res as Deportista[];
    })
  }
}
