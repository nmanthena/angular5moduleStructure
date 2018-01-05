import { async, PageFixture, TestBed } from '@angular/core/testing';

import { OfferApprovalDialogPage } from './offer-approval-dialog.page';

describe('OfferApprovalDialogPage', () => {
  let page: OfferApprovalDialogPage;
  let fixture: PageFixture<OfferApprovalDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferApprovalDialogPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(OfferApprovalDialogPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
