import { Component, OnInit } from '@angular/core';
import { courses } from 'src/app/data/courses';
import { Course } from 'src/app/interfaces/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = courses;

  showStudents = false

  constructor() {
  }

  ngOnInit(): void { }

  showStudentsClicked(): void {
    this.showStudents = !this.showStudents;
  }

  // addStudentToCourse(student: Student): void {
  //   let flag = true;
  //   this.selectedCourse &&
  //     (this.selectedCourse.students.forEach((id: number) => {
  //       if (id == student.id) {
  //         flag = false;
  //       }
  //     }))
  //   if (flag) {
  //     this.selectedCourse?.students?.push(student.id);
  //   }
  // }

  removeCourse(course: Course): void {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

}
