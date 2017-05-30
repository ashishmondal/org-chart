import { OrgChartPage } from './app.po';

describe('org-chart App', () => {
  let page: OrgChartPage;

  beforeEach(() => {
    page = new OrgChartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
