import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '@app/material.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
