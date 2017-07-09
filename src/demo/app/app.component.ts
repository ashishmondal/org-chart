import { Component } from '@angular/core';
import { IEmployee } from 'ng-org-chart';

@Component({
	selector: 'demo-app',
	templateUrl: './app.component.html'
})
export class AppComponent {
	topEmployee: IEmployee = {
		name: 'Ashish',
		designation: 'CEO',
		subordinates: [
			{
				name: 'Mark',
				designation: 'CFO',
				subordinates: []
			},
			{
				name: 'Sundar',
				designation: 'COO',
				subordinates: []
			}
		]
	};
}
