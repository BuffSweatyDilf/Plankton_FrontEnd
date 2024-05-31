import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GreenhousesComponent } from './greenhouses/greenhouses.component';
import { PotsComponent } from './pots/pots.component';
import { PlantsComponent } from './plants/plants.component';
import { SensorsComponent } from './sensors/sensors.component';
import { appCanActivate } from './guard/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'greenhouses', component: GreenhousesComponent, canActivate: [appCanActivate] },
  { path: 'pots', component: PotsComponent, canActivate: [appCanActivate] },
  { path: 'plants', component: PlantsComponent, canActivate: [appCanActivate] },
  { path: 'sensors', component: SensorsComponent, canActivate: [appCanActivate] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
