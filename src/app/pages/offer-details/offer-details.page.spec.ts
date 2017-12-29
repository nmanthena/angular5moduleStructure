import { async, PageFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsPage } from './offer-details.page';

describe('OfferDetailsPage', () => {
  let page: OfferDetailsPage;
  let fixture: PageFixture<OfferDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferDetailsPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(OfferDetailsPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
