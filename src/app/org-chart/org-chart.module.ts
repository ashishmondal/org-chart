import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [OrgChartComponent, EmployeeComponent],
	exports: [OrgChartComponent]
})
export class OrgChartModule { }
