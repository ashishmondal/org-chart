# Hierarchical Organization Chart for Angular (4+)

The `ng-org-chart` component displays heirarchal Organizational Chart.

### Usage
`app.component.html`:
```html
<ng-org-chart [topEmployee]="topEmployee"></ng-org-chart>
```
`app.component.ts`:
```ts
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
```

Here is the rendered output:

![Sample Organizational Chart](/sample-org-chart.png?raw=true "Sample Organizational Chart")
