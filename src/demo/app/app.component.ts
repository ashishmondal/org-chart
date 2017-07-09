import { Component } from '@angular/core';
import { Employee } from 'org-chart';

@Component({
	selector: 'demo-app',
	templateUrl: './app.component.html'
})
export class AppComponent {
	topEmployee = new Employee(['Ashish (CEO)', ' ABC (CFO)']);
}
