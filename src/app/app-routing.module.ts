import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule'
    // loadChildren: () => HomeModule universal is not working with loadchildren: () =>
  },
  {
    path: 'course',
    // loadChildren: () => CourseModule
    loadChildren: "./modules/course/course.module#CourseModule"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
