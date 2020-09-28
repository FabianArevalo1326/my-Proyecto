import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";


import {HomePageRoutingModule} from './home-routing.module';
import { HomeComponent} from "./home.component";
import {LayoutModulo} from "../../shared/layout/layout.modulo";

@NgModule({

  imports:  [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    LayoutModulo,
  ],
   declarations: [ HomeComponent,],
  exports: [ ]
})
export class HomePageModule{}
