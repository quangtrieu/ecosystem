import { EcoSystem } from './app.po';

describe('Eco-System App', function() {
  let page: EcoSystem;

  beforeEach(() => {
    page = new EcoSystem();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
