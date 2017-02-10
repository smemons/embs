import { ChatService } from './services/chat.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { IncidentService } from './services/incidentService';
import { RoomService } from './services/room.service';
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
import { DialogModule,ChartModule, GMapModule, GalleriaModule, PanelModule, FieldsetModule, GrowlModule, CarouselModule } from 'primeng/primeng';



import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmcarouselComponent } from './emcarousel/emcarousel.component';
import { ChartsComponent } from './charts/charts.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListRoomComponent } from './room/listRoom/listRoom.component';
import { CreateIncComponent } from './incidents/createInc/createInc.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ListincidentsComponent } from './incidents/listincidents/listincidents.component';
import { ChatComponent } from './chat/chat.component';
import { CasualityComponent } from './casuality/casuality.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,

    LoginComponent,
    MapComponent,
    DashboardComponent,
    EmcarouselComponent,
    ChartsComponent,
    RegisterComponent,
    AlertComponent,
    ListUsersComponent,
    NewRoomComponent,
    ListRoomComponent,
    CreateIncComponent,
    BreadcrumbComponent,
    ListincidentsComponent,
    ChatComponent,
    CasualityComponent
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
    DialogModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [
    Userservice,
    AlertService,
    AuthService,
    AuthGuard,
    RoomService,
    IncidentService,
    BreadcrumbService,
    ChatService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
