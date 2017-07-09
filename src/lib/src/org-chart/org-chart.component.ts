import { Component, Input } from '@angular/core';
import { IEmployee } from '../employee';

@Component({
	selector: 'ng-org-chart',
	templateUrl: './org-chart.component.html',
	styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent {
	@Input() topEmployee: IEmployee;
	@Input() hasManager = false;
}
