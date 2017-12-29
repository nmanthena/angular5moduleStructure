import { async, PageFixture, TestBed } from '@angular/core/testing';

import { MainPage } from './main.page';

describe('MainPage', () => {
  let page: MainPage;
  let fixture: PageFixture<MainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(MainPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
