import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
import { CoordinadorComponent } from './components/coordinador/coordinador.component';
import { DeportistaComponent } from './components/deportista/deportista.component';
import { MedallasComponent } from './components/medallas/medallas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'coordinador', component: CoordinadorComponent },
  { path: 'deportista', component: DeportistaComponent },
  { path: 'medallas', component: MedallasComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
