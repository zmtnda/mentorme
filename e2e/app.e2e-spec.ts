import { MentorMePage } from './app.po';

describe('mentor-me App', function() {
  let page: MentorMePage;

  beforeEach(() => {
    page = new MentorMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
