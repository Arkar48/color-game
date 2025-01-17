import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'game',
    component:GameComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
