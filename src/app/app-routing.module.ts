import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { CourseModule } from './modules/course/course.module';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => HomeModule
  },
  {
    path: 'course',
    loadChildren: () => CourseModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
