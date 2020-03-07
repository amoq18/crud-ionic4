import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreatePage } from './student-create.page';

describe('StudentCreatePage', () => {
  let component: StudentCreatePage;
  let fixture: ComponentFixture<StudentCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
