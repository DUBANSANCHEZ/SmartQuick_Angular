import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router'
import { usersService } from '../../services/Users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() scrollEvent: EventEmitter<any> = new EventEmitter();

  valueName: any;
  valueRole: any;

  constructor(private UsersService: usersService, private router: Router) { }

  ngOnInit(): void {
    this.valueName = this.UsersService.Value_login.Nombre;
    this.valueRole = this.UsersService.Value_login.Rol;
  }
  logout(): void{
    this.router.navigate(['login']);
  }

}
