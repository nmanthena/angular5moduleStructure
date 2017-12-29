import { async, PageFixture, TestBed } from '@angular/core/testing';

import { ViewCandiateProfilePage } from './view-candiate-profile.page';

describe('ViewCandiateProfilePage', () => {
  let page: ViewCandiateProfilePage;
  let fixture: PageFixture<ViewCandiateProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCandiateProfilePage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(ViewCandiateProfilePage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
