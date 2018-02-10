import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, {
    path: 'game',
    component: GameComponent,
  },
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class LessonRoutingModule { }
