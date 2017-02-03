import { NewRoomComponent } from './room/new-room/new-room.component';
import { AuthGuard } from './authguard';
import { AuthService } from './services/auth.service';



import { AlertService } from './services/alert.service';
import { Userservice } from './services/userservice.service';
import { ROUTES } from './routes';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartModule, GMapModule, GalleriaModule, PanelModule, FieldsetModule, GrowlModule, CarouselModule } from 'primeng/primeng';



import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmcarouselComponent } from './emcarousel/emcarousel.component';
import { ChartsComponent } from './charts/charts.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';
import { ListUsersComponent } from './list-users/list-users.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    IncidentsComponent,
    IncidentsComponent,
    LoginComponent,
    MapComponent,
    DashboardComponent,
    EmcarouselComponent,
    ChartsComponent,
    RegisterComponent,
    AlertComponent,
    ListUsersComponent,
    NewRoomComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GMapModule,
    GalleriaModule,
    PanelModule,
    FieldsetModule,
    GrowlModule,
    CarouselModule,
    ChartModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [
    Userservice,
    AlertService,
    AuthService,
    AuthGuard


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
