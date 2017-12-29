import { async, PageFixture, TestBed } from '@angular/core/testing';

import { IntroGraphPage } from './intro-graph.page';

describe('IntroGraphPage', () => {
  let page: IntroGraphPage;
  let fixture: PageFixture<IntroGraphPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroGraphPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(IntroGraphPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
