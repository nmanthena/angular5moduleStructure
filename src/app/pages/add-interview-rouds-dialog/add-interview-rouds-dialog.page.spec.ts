import { async, PageFixture, TestBed } from '@angular/core/testing';

import { AddInterviewRoudsDialogPage } from './add-interview-rouds-dialog.page';

describe('AddInterviewRoudsDialogPage', () => {
  let page: AddInterviewRoudsDialogPage;
  let fixture: PageFixture<AddInterviewRoudsDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInterviewRoudsDialogPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(AddInterviewRoudsDialogPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
