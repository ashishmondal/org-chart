import { Component, OnInit, Input } from '@angular/core';
import { Employee } from "app/org-chart/employee";

@Component({
	selector: 'oc-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

	@Input() employee: Employee;

	constructor() { }

	ngOnInit() {
	}

}
