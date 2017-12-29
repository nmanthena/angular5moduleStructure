import { async, PageFixture, TestBed } from '@angular/core/testing';

import { AddResumeDialogPage } from './add-resume-dialog.page';

describe('AddResumeDialogPage', () => {
  let page: AddResumeDialogPage;
  let fixture: PageFixture<AddResumeDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResumeDialogPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(AddResumeDialogPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
