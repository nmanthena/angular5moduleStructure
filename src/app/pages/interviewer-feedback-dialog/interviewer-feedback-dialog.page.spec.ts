import { async, PageFixture, TestBed } from '@angular/core/testing';

import { InterviewerFeedbackDialogPage } from './interviewer-feedback-dialog.page';

describe('InterviewerFeedbackDialogPage', () => {
  let page: InterviewerFeedbackDialogPage;
  let fixture: PageFixture<InterviewerFeedbackDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewerFeedbackDialogPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(InterviewerFeedbackDialogPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
