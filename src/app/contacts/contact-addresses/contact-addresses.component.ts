import { filter, first, tap } from 'rxjs/operators';
import { addAddress } from 'src/app/store/address/address.actions';
import { selectAddress } from 'src/app/store/address/address.selector';
import { AppState } from 'src/app/store/app.state';
import { selectContact } from 'src/app/store/contact/contact.selector';
import { selectCountries } from 'src/app/store/country/country.selector';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-contact-addresses',
  templateUrl: './contact-addresses.component.html',
  styleUrls: ['./contact-addresses.component.scss']
})
export class ContactAddressesComponent {
  public selectedContact$ = this.store.pipe(select(selectContact));
  public countries$ = this.store.pipe(select(selectCountries));
  public form: FormGroup;
  public address$ = this.store.pipe(select(selectAddress))
  
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      street1: ['', Validators.required ],
      street2: ['', Validators.required ],
      town: ['', Validators.required ],
      country: ['', Validators.required ]
    });
  }

  addAddress() {
    if (this.form.valid) {
      this.selectedContact$.pipe(
        tap((contact) => {
          let address = this.form.value;
          address.contactId = contact?.id;
          this.store.dispatch(addAddress({address}));
        }),
        first()
      ).subscribe();
      this.form.reset();
    }
  }
}