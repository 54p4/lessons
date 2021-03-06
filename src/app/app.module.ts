import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LessonRoutingModule } from './router.component';
import { AppComponent } from './app.component';
import { HeaderxComponent } from './header/headerx.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent, HeaderxComponent, NavigationComponent, HomeComponent, GameComponent
  ],
  imports: [
    BrowserModule, LessonRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderxComponent]
})
export class AppModule { }
