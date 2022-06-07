import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student';
import { students } from '../../data/students';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  @Output() studentAdded: EventEmitter<Student> = new EventEmitter<Student>();

  newStudent?: Student;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.initStudent();
  }

  initStudent() {
    this.newStudent = {
      id: 0,
      firstName: "",
      lastName: "",
      birthYear: 2000,
      phoneNumber: 0,
    }
  }

  addStudent(e: SubmitEvent) {
    e.preventDefault();
    this.newStudent && (this.newStudent.id = students.length + 1);
    students.push(this.newStudent as Student);
    this.studentAdded.emit(this.newStudent);
    this.initStudent();

    this.router.navigateByUrl('/students');
  }
}
