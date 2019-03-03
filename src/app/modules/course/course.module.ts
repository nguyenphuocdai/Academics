import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CourseRoutingModule } from './course-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule
  ],
  declarations: [CourseComponent],
  exports: [CourseComponent]
})
export class CourseModule { }
