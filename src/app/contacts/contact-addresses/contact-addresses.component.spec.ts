import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAddressesComponent } from './contact-addresses.component';

describe('ContactAddressesComponent', () => {
  let component: ContactAddressesComponent;
  let fixture: ComponentFixture<ContactAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
