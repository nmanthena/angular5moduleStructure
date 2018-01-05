import { async, PageFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsViewDialogPage } from './offer-details-view-dialog.page';

describe('OfferDetailsViewDialogPage', () => {
  let page: OfferDetailsViewDialogPage;
  let fixture: PageFixture<OfferDetailsViewDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferDetailsViewDialogPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(OfferDetailsViewDialogPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
