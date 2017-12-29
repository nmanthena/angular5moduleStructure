import { async, PageFixture, TestBed } from '@angular/core/testing';

import { ViewPositionPage } from './view-position.page';

describe('ViewPositionPage', () => {
  let page: ViewPositionPage;
  let fixture: PageFixture<ViewPositionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPositionPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(ViewPositionPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
