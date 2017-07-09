import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
	selector: 'oc-org-chart',
	templateUrl: './org-chart.component.html',
	styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {

	@Input() topEmployee: Employee;

	constructor() { }

	ngOnInit() {
	}

}
