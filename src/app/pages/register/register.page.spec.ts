import { async, PageFixture, TestBed } from '@angular/core/testing';

import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let page: RegisterPage;
  let fixture: PageFixture<RegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPage ]
    })
    .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(RegisterPage);
    page = fixture.pageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
