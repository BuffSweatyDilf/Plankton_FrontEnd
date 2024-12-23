import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GreenhousesComponent } from './greenhouses/greenhouses.component';
import { PotsComponent } from './pots/pots.component';
import { PlantsComponent } from './plants/plants.component';
import { SensorsComponent } from './sensors/sensors.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'greenhouses', component: GreenhousesComponent },
  { path: 'pots', component: PotsComponent },
  { path: 'plants', component: PlantsComponent },
  { path: 'sensors', component: SensorsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
