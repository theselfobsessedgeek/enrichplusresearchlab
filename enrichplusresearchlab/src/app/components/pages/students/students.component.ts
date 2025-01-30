import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  students = [
    { name: 'Sahil Raheja', job: 'TGT Computer Science in Govt. School Delhi', image: 'assets/images/Sahil Raheja.jpg' },
    { name: 'Rohit Beniwal', job: 'Assistant Professor', image: 'assets/images/Rohit Beniwal.jpg' },
    { name: 'Dipika Jain', job: 'Assistant Professor', image: 'assets/images/Dipika Jain.jpg' },
    { name: 'Dr Arunima Jaiswal', job: 'Assistant Professor', image: 'assets/images/arunima jaiswal.jpg' },
    { name: 'Nitin Sachdeva', job: 'Assistant Professor', image: 'assets/images/Nitin Sachdeva.jpg' },
    { name: 'Dr. Aditi Sharma', job: 'Assistant Professor', image: 'assets/images/aditi sharma.jpeg' },
    { name: 'Ravi Ranjan', job: 'Research Scholar', image: 'assets/images/Ravi Ranjan.jpeg' },
    { name: 'Dr. Geetanjali Garg', job: 'Assistant Professor', image: 'assets/images/geetanjali.png' },
    { name: 'Vikas Sharma', job: 'Research Scholar', image: 'assets/images/Vikas Sharma.jpg' },
    { name: 'Abhilasha Sharma', job: 'Assistant Professor', image: 'assets/images/RAVLEEN KAUR.jpeg' }
  ];

}
