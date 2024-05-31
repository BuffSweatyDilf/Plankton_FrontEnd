import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { GreenhousesComponent } from './greenhouses/greenhouses.component';
import { PotsComponent } from './pots/pots.component';
import { PlantsComponent } from './plants/plants.component';
import { SensorsComponent } from './sensors/sensors.component';

import { AuthConfig, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8080/realms/ILV',
  requireHttps: false,
  redirectUri: "http://localhost:4200",
  postLogoutRedirectUri: "http://localhost:4200",
  clientId: 'demoapp',
  scope: 'openid profile roles offline_access',
  responseType: 'code',
  showDebugInformation: true,
  requestAccessToken: true,
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  silentRefreshTimeout: 500,
  clearHashAfterLogin: true,
};

export function storageFactory(): OAuthStorage {
  return sessionStorage;
}


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    GreenhousesComponent,
    PotsComponent,
    PlantsComponent,
    SensorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot({resourceServer: {sendAccessToken: true}}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
