import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'earthquake',
    loadChildren: () => import('./earthquake/earthquake.module').then( m => m.EarthquakePageModule)
  },
  {
    path: 'tsunami',
    loadChildren: () => import('./tsunami/tsunami.module').then( m => m.TsunamiPageModule)
  },
  {
    path: 'emergency',
    loadChildren: () => import('./emergency/emergency.module').then( m => m.EmergencyPageModule)
  },
  {
    path: 'route',
    loadChildren: () => import('./route/route.module').then( m => m.RoutePageModule)
  },

  {
    path: 'chatroom',
    loadChildren: () => import('./chatroom/chatroom.module').then( m => m.ChatroomPageModule)
  },
  {
    path: 'erupting',
    loadChildren: () => import('./erupting/erupting.module').then( m => m.EruptingPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
