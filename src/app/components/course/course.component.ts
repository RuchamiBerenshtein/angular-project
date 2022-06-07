import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { courses } from 'src/app/data/courses';
import { students } from 'src/app/data/students';
import { Course } from 'src/app/interfaces/course';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course?: Course;

  conectStudents: Student[] = [];
  unConectStudents: Student[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id']);
      this.course = courses.find(c => c.code === id);
      // console.log(`we are now in the ${this.course?.name} course`);
      this.conectStudents = [];
      this.unConectStudents = [];
      this.editStudents();
    })
    
  }


  ngOnInit(): void {
  //   this.conectStudents = [];
  //   this.editStudents();
  //   console.log(`we are now in the ${this.course?.name} course`);
  }

  // ngOnChanges(): void {
  //   this.conectStudents = [];
  //   this.editStudents();
  //   console.log(`we are now in the ${this.course?.name} course`);
  // }

  editStudents(): void {
    students.forEach((s: Student) => {
      const connect = this.course?.students.find(id => id === s.id);
      if (connect) {
        this.conectStudents.push(s);
      }
      else {
        this.unConectStudents.push(s);
      }
    })
  }

  removeStudent(student: Student): void {
    this.conectStudents = this.conectStudents.filter(s => s !== student);
    this.course?.students.forEach(() => { this.course?.students.pop() })
    this.conectStudents.forEach(student => {
      this.course?.students.push(student.id);
    })
    this.unConectStudents.push(student);
  }

  addStudent(student: Student): void {
    const index = this.unConectStudents.indexOf(student);
    this.unConectStudents.splice(index, 1);

    this.conectStudents.push(student);
  }

}
