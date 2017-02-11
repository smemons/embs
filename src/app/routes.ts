import {
  ListpostsComponent
} from './post/listposts/listposts.component';
import {
  ChatComponent
} from './chat/chat.component';
import {
  ListincidentsComponent
} from './incidents/listincidents/listincidents.component';
import {
  CreateIncComponent
} from './incidents/createInc/createInc.component';
import {
  ListRoomComponent
} from './room/listRoom/listRoom.component';
import {
  NewRoomComponent
} from './room/new-room/new-room.component';
import {
  ListUsersComponent
} from './list-users/list-users.component';
import {
  AuthGuard
} from './authguard';


import {
  CanActivate,
  RouterModule
} from '@angular/router';
import {
  RegisterComponent
} from './register/register.component';
import {
  ChartsComponent
} from './charts/charts.component';
import {
  DashboardComponent
} from './dashboard/dashboard.component';
import {
  MapComponent
} from './map/map.component';
import {
  LoginComponent
} from './login/login.component';

import {
  PageNotFoundComponent
} from './page-not-found/page-not-found.component';
import {
  HomeComponent
} from './home/home.component';

export const ROUTES = [{
    path: 'home',
    component: HomeComponent,

  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'map',
    component: MapComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]


  },
  {
    path: 'listPosts',
    component: ListpostsComponent,
    canActivate: [AuthGuard]


  },
  {
    path: 'register',
    component: RegisterComponent,

  },
  {
    path: 'charts',
    component: ChartsComponent


  },

  {
    path: 'listUsers',
    component: ListUsersComponent,
    canActivate: [AuthGuard]


  },

  {
    path: 'listRooms',
    component: ListRoomComponent,
    canActivate: [AuthGuard]


  },

  {
    path: 'newRoom',
    component: NewRoomComponent,
    canActivate: [AuthGuard]


  },

  {
    path: 'chat',
    component: ChatComponent


  },
  {
    path: 'newIncident',
    component: CreateIncComponent,
    canActivate: [AuthGuard]



  },
  {
    path: 'listIncident',
    component: ListincidentsComponent,
    canActivate: [AuthGuard]



  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

