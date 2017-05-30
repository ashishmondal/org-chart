import { Component } from '@angular/core';
import { Employee } from "app/org-chart/employee";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	topEmployee: Employee;

	constructor() {
	}

	doTextareaValueChange(ev) {
		try {
			this.topEmployee = new Employee(ev.target.value.split('\n'));
		} catch (e) {
			console.info('could not set textarea-value: ' + e);
		}
	}
}