import { async, PageFixture, TestBed } from '@angular/core/testing';

import { InterviewerFeedbackApprovalDialogPage } from './interviewer-feedback-approval-dialog.page';

describe('InterviewerFeedbackApprovalDialogPage', () => {
  let page: InterviewerFeedbackApprovalDialogPage;
  let fixture: PageFixture<InterviewerFeedbackApprovalDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewerFeedbackApprovalDialogPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(InterviewerFeedbackApprovalDialogPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
