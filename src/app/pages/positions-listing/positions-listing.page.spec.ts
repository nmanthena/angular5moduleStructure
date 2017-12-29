import { async, PageFixture, TestBed } from '@angular/core/testing';

import { PositionsListingPage } from './positions-listing.page';

describe('PositionsListingPage', () => {
  let page: PositionsListingPage;
  let fixture: PageFixture<PositionsListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionsListingPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(PositionsListingPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
