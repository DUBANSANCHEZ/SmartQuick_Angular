import {Component, OnInit} from '@angular/core';
import {administradorService} from '../../services/Administrador.service';
import {Medallas} from 'src/app/models/medallas';
import {Medal} from '../../models/medal';

@Component({
  selector: 'app-medallas',
  templateUrl: './medallas.component.html',
  styleUrls: ['./medallas.component.scss']
})
export class MedallasComponent implements OnInit {

  medals: Medal [] = [
    {
      medalla: 'Gold',
      imagen: '../../../assets/Medalla_oro.png',
      descripcion: 'Una medalla de oro es una medalla que se otorga al ganador por una institución de competiciones como los\n' +
        '          Juegos Olímpicos',
      activo: false,
      numeroMedallas: null
    },
    {
      medalla: 'Silver',
      imagen: '../../../assets/Medalla_plata.png',
      descripcion: 'Una medalla de plata es una medalla que se otorga al competidor o competidora que queda en segunda posición\n' +
        '          de una competición',
      activo: false,
      numeroMedallas: null
    },
    {
      medalla: 'Bronze',
      imagen: '../../../assets/Medalla_bronce.png',
      descripcion: 'Una medalla de bronce es una medalla que se otorga al tercer clasificado de diversas competiciones como los\n' +
        '          Juegos Olímpicos',
      activo: false,
      numeroMedallas: null
    }
  ];

  constructor(public AdministradorService:administradorService){}

  ngOnInit()
  :
  void {
    this.getMedallas();
  }
  getMedallas()
  {
    this.AdministradorService.getEndpoint().subscribe(res => {
      this.AdministradorService.medallas = res as Medallas[];
      for (let i = 0; i < this.AdministradorService.medallas.length; i++) {
        this.medals[0].numeroMedallas = this.medals[0].numeroMedallas + this.AdministradorService.medallas[i].gold;
        this.medals[1].numeroMedallas = this.medals[1].numeroMedallas + this.AdministradorService.medallas[i].silver;
        this.medals[2].numeroMedallas = this.medals[2].numeroMedallas + this.AdministradorService.medallas[i].bronze;
      }
    })
  }
  clickMedal(medal:number){
    if (this.medals[medal].activo === true) {
      this.medals[medal].activo = false;
    }else{
      this.medals[medal].activo = true;
    }
  }
}
