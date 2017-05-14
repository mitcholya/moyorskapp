import { MoyorskappPage } from './app.po';

describe('moyorskapp App', () => {
  let page: MoyorskappPage;

  beforeEach(() => {
    page = new MoyorskappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
