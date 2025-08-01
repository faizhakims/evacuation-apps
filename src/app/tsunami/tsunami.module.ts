import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsunamiPageRoutingModule } from './tsunami-routing.module';

import { TsunamiPage } from './tsunami.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsunamiPageRoutingModule
  ],
  declarations: [TsunamiPage]
})
export class TsunamiPageModule {}
