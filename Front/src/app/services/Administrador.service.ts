import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deportista } from '../models/deportistas';
import { Medallas } from '../models/medallas';


@Injectable({
    providedIn: 'root'
})
export class administradorService{

    deportista: Deportista[];
    medallas: Medallas[];

    constructor(private http: HttpClient) {}

    getEndpoint(){
        return this.http.get(" https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json");
    }

}