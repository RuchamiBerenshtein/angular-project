import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [{
  path: 'courses',
  component: CoursesComponent,
  children: [{
    path: ':id',
    component: CourseComponent,
  }]
}, {
  path: 'students',
  component: StudentsComponent,
  children: [{
    path: 'new',
    component: NewStudentComponent,
  }]
}, {
  path: '',
  component: HomeComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
