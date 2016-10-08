import { Brickify2Page } from './app.po';

describe('brickify2 App', function() {
  let page: Brickify2Page;

  beforeEach(() => {
    page = new Brickify2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
