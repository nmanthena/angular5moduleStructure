import { async, PageFixture, TestBed } from '@angular/core/testing';

import { ScheduleInterviewDialogPage } from './schedule-interview-dialog.page';

describe('ScheduleInterviewDialogPage', () => {
  let page: ScheduleInterviewDialogPage;
  let fixture: PageFixture<ScheduleInterviewDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleInterviewDialogPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(ScheduleInterviewDialogPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
