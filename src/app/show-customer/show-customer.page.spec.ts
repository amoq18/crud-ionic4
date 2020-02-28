import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomerPage } from './show-customer.page';

describe('ShowCustomerPage', () => {
  let component: ShowCustomerPage;
  let fixture: ComponentFixture<ShowCustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCustomerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
