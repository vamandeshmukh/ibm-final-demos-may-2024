import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employeeId: string = '';
  empData: any;
  empList: any;

  constructor(private employeeService: EmployeeService) { }

  getAllEmps = () => {
    console.log('getAllEmps');
    this.employeeService.getAllEmployees()
      .subscribe({
        next: (response) => {
          console.log(response);
          this.empList = response;
        },
        error: (error) => { console.error(error); }
      });
  }

  getEmpById = () => {
    console.log(this.employeeId);
    this.employeeService.getEmployeeById(this.employeeId)
    // here 
      .subscribe({
        next: (response) => {
          console.log(response);
          this.empData = response;
        },
        error: (error) => { console.error(error); }
      });
  };

}



