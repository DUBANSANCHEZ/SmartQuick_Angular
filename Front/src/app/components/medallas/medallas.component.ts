import { Component, OnInit } from '@angular/core';
import { administradorService } from '../../services/Administrador.service';
import { Medallas } from 'src/app/models/medallas';

@Component({
  selector: 'app-medallas',
  templateUrl: './medallas.component.html',
  styleUrls: ['./medallas.component.scss']
})
export class MedallasComponent implements OnInit {

  Medalla_Gold = 0;
  Medalla_Silver = 0;
  Medalla_Bronze = 0;
  constructor(public AdministradorService:administradorService) { }

  ngOnInit(): void {
    this.getMedallas();
  }
  getMedallas(){
    this.AdministradorService.getEndpoint().
    subscribe(res => {
      this.AdministradorService.medallas = res as Medallas[];    
      for (let i = 0; i < this.AdministradorService.medallas.length; i++) {
        this.Medalla_Gold = this.Medalla_Gold + this.AdministradorService.medallas[i].gold;   
        this.Medalla_Silver = this.Medalla_Silver + this.AdministradorService.medallas[i].silver;
        this.Medalla_Bronze = this.Medalla_Bronze + this.AdministradorService.medallas[i].bronze;      
      } 
    })
  }
}
