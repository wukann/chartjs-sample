import { ChartjsSamplePage } from './app.po';

describe('chartjs-sample App', function() {
  let page: ChartjsSamplePage;

  beforeEach(() => {
    page = new ChartjsSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
