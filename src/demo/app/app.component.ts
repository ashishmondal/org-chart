import { Component } from '@angular/core';
import { IEmployee } from 'ng-org-chart';

@Component({
	selector: 'demo-app',
	templateUrl: './app.component.html'
})
export class AppComponent {
	topEmployee: IEmployee = {
		name: 'Janis Martin',
		designation: 'CEO',
		subordinates: [
			{
				name: 'Matthew Wikes',
				designation: 'VP',
				subordinates: [
					{
						name: 'Tina Landry',
						designation: 'Budget Analyst',
						subordinates: []
					}

				]
			},
			{
				name: 'Patricia Lyons',
				designation: 'VP',
				subordinates: [
					{
						name: 'Dylan Wilson',
						designation: 'Web Manager',
						subordinates: []
					},
					{
						name: 'Deb Curtis',
						designation: 'Art Director',
						subordinates: []
					}
				]
			},
			{
				name: 'Larry Phung',
				designation: 'VP',
				subordinates: []
			}
		]
	};
}
