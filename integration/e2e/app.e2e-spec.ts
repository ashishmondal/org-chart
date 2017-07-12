import { browser, element, by, $$ } from 'protractor';

describe('Organizational Chart E2E Tests', function () {

	beforeEach(() => browser.get(''));

	afterEach(() => {
		browser.manage().logs().get('browser').then((browserLog: any[]) => {
			expect(browserLog).toEqual([]);
		});
	});

	it('should display org-chart', () => {
		const orgCharts = $$('ng-org-chart');
		expect(orgCharts.count()).toEqual(7);
	});

	it('should display employees', () => {
		const orgCharts = $$('oc-employee');
		expect(orgCharts.count()).toEqual(7);
	});

});
