import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EruptingPageRoutingModule } from './erupting-routing.module';

import { EruptingPage } from './erupting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EruptingPageRoutingModule
  ],
  declarations: [EruptingPage]
})
export class EruptingPageModule {}
