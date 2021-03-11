import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { usersService } from '../../services/Users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  Value_Nombre : any;
  Value_Rol : any;
  constructor(private UsersService:usersService, private router:Router) { }

  ngOnInit(): void {
    this.Value_Nombre = this.UsersService.Value_login.Nombre;
    this.Value_Rol = this.UsersService.Value_login.Rol;
  }
  logout(){        
    this.router.navigate(['login']);
  }

}
