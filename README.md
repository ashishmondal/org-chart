# Hierarchical Organization Chart for Angular (4+)
[![Build Status](https://travis-ci.org/nulldev07/org-chart.svg?branch=master)](https://travis-ci.org/nulldev07/org-chart)

The `ng-org-chart` component displays heirarchal Organizational Chart.

## Usage
```bash
npm i ng-org-chart -S
```

### `app.module.ts`
```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrgChartModule } from 'ng-org-chart';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, OrgChartModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

### `app.component.html`:
```html
<ng-org-chart [topEmployee]="topEmployee"></ng-org-chart>
```

### `app.component.ts`:
```js
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

![Sample Organizational Chart](https://raw.githubusercontent.com/nulldev07/org-chart/master/sample-org-chart.png)
