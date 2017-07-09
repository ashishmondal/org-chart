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
