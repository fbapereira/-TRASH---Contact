import { AddressApiService } from 'src/app/services/address.service';
import { ContactApiService } from 'src/app/services/contact.service';
import { CountryApiService } from 'src/app/services/country.service';
import { loadAddress } from 'src/app/store/address/address.actions';
import { AppState } from 'src/app/store/app.state';
import { loadContact } from 'src/app/store/contact/contact.actions';
import { loadCountries } from 'src/app/store/country/country.actions';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private contactApiService: ContactApiService,
    private countryApiService: CountryApiService,
    private addressApiService: AddressApiService,
  ) {}

  ngOnInit() {
    this.contactApiService.getContacts()
      .subscribe((contacts) => this.store.dispatch(loadContact({contacts})));

    this.countryApiService.getCountries().
      subscribe((countries) => this.store.dispatch(loadCountries({countries})));

    this.addressApiService.getAddresses().
      subscribe((addresses) => this.store.dispatch(loadAddress({addresses})));
  }
}
