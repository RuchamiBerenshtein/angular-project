import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { students } from 'src/app/data/students';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = students;

  selectedStudent?: Student;

  // @Output() studentChoosed: EventEmitter<Student> = new EventEmitter<Student>();

  constructor() { }

  ngOnInit(): void { }

  // studentClicked(student: Student): void {
  //   this.studentChoosed.emit(student);
  // }

  studentAdded(student: Student) {

  }

}
