import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
