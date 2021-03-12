import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import { NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLogin: boolean;
  isCoordinador: boolean;
  isMedallas: boolean;
  currentRoute: string;
  constructor(private router: Router, location: Location) {
    this.routeEvent(this.router);
  }
  routeEvent(router: Router){
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd){
        this.isLogin = e.url === '/login';
        this.isCoordinador = e.url === '/coordinador';
        this.isMedallas = e.url === '/medallas';
      }
    });
  }
    ngOnInit(): void {
    }
}
