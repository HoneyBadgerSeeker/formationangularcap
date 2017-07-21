import { CapMeteoPage } from './app.po';

describe('cap-meteo App', () => {
  let page: CapMeteoPage;

  beforeEach(() => {
    page = new CapMeteoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
