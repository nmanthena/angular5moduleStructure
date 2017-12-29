import { async, PageFixture, TestBed } from '@angular/core/testing';

import { ApprovalDialogPage } from './approval-dialog.page';

describe('ApprovalDialogPage', () => {
  let page: ApprovalDialogPage;
  let fixture: PageFixture<ApprovalDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalDialogPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(ApprovalDialogPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
