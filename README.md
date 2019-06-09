# Hierarchical Organization Chart for Angular (4+)

**This repo is deprecated and no longer maintained. Please consider using `@mondal/org-chart` from [Mondal UI](https://github.com/ashishmondal/mondal-ui).**

The `ng-org-chart` component displays heirarchal Organizational Chart.

## Table of Contents

 * [Usage](#usage)
 * [Custom CSS](#custom-css)

## Usage
```bash
npm i ng-org-chart -S
```

### Include default styles in your `index.html`
```html
	<link rel="stylesheet" href="node_modules/ng-org-chart/styles.css">
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

## Custom CSS
You can override default styles with your custom CSS. Make sure you include your custom CSS *after* including the default CSS so that your styles override the default styles.
```css
.oc-border {
	border: 1px solid green;
}

.oc-background {
	background-color: limegreen;
}

.oc-name {
	font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;
	white-space: nowrap;
}

.oc-designation {
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	font-style: italic;
	white-space: nowrap;
}
```
