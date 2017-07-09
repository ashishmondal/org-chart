import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgChartComponent } from './org-chart.component';

describe('OrgChartComponent', () => {
  let component: OrgChartComponent;
  let fixture: ComponentFixture<OrgChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
