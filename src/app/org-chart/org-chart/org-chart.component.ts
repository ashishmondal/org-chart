import { Component, OnInit, Input } from '@angular/core';
import { Employee } from "app/org-chart/employee";

@Component({
	selector: 'oc-org-chart',
	templateUrl: './org-chart.component.html',
	styleUrls: ['./org-chart.component.scss']
})
export class OrgChartComponent implements OnInit {

	@Input() topEmployee: Employee;

	constructor() { }

	ngOnInit() {
	}

}
