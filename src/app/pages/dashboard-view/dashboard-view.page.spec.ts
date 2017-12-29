import { async, PageFixture, TestBed } from '@angular/core/testing';

import { DashboardViewPage } from './dashboard-view.page';

describe('DashboardViewPage', () => {
  let page: DashboardViewPage;
  let fixture: PageFixture<DashboardViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardViewPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(DashboardViewPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
