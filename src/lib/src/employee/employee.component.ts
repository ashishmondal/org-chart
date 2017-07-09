import { Component, Input } from '@angular/core';
import { IEmployee } from '../employee';

@Component({
	selector: 'oc-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

	@Input() employee: IEmployee;
	@Input() hasManager = false;
}
