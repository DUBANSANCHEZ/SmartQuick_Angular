import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/Users';

@Injectable({
    providedIn: 'root'
})
export class usersService{

   Value_login: any;
    
    usuarios: Users[] = [{Id_user:1, Nombre:'Usuario1', Rol:'Administrador', Password:'123456'},
    {Id_user:2, Nombre:'Usuario2', Rol:'Coordinador', Password:'098765'}];

    authentication(Usuarios:Users){
        this.Value_login = this.usuarios.find(usuarios => usuarios.Nombre === Usuarios.Nombre && usuarios.Password == Usuarios.Password)
        return this.Value_login;
    }
    logout(){
        
    }

}