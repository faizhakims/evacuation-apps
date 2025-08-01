import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsunamiPage } from './tsunami.page';

const routes: Routes = [
  {
    path: '',
    component: TsunamiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsunamiPageRoutingModule {}
