import { async, PageFixture, TestBed } from '@angular/core/testing';

import { NewJobDialogPage } from './new-job-dialog.page';

describe('NewJobDialogPage', () => {
  let page: NewJobDialogPage;
  let fixture: PageFixture<NewJobDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJobDialogPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(NewJobDialogPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
