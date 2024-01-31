 
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../shared/user.interface';
import { MatTableDataSource } from '@angular/material/table';
 
interface Student {
  name: string;
  avatar: string;
  email: string;
  subject1: number;
  subject2: number;
  subject3: number;
  subject4: number;
  subject5: number;
}
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})

 
export class EditStudentComponent {
 
  id?:number;
 
 
  constructor(private route: ActivatedRoute,private dataServices:DataService) {}
 
  ngOnInit(): void {
   
   
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.fetchStudentDetails(this.id);
        }
      );
    }
    studentdata!: Student [];
    dataSource2:any;

    displayedColumns: string[] = ['name', 'id', 'avatar','email','sub1','sub2','sub3','sub4','sub5']; 
   
    fetchStudentDetails(id: number): void {
      this.dataServices.getUserData(id).subscribe({
        next: (userData2) => {
          this.dataSource2 = [userData2];
         
          console.log("Student data received:", this.dataSource2); 
        },
       
    });
 
    }
    finder(){
      console.log("this bro this",this.studentdata);
    }
 
  }