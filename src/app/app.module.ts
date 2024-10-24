import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { RouterModule } from '@angular/router';
import { GameSettingComponent } from './components/atoms/game-setting/game-setting.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    GameSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
