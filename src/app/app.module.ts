import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProfileComponent} from "./dashboards/profile/profile.component";
import {ProfileEffects} from "./shared/redux/profile/profile.effects";
import {EffectsModule} from "@ngrx/effects";
import {profileReducer} from "./shared/redux/profile/profile.reducer";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ profile: profileReducer }),
    EffectsModule.forRoot([ProfileEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
