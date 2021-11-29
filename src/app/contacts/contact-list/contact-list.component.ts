import { Contact } from 'src/app/models/contact.model';
import { AppState } from 'src/app/store/app.state';
import { addContact, selectContact } from 'src/app/store/contact/contact.actions';
import { selectContacts } from 'src/app/store/contact/contact.selector';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  public contact: Contact | undefined;
  public form: FormGroup;

  public contacts$ = this.store.pipe(select(selectContacts));

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      avatar: ['', Validators.required ]
    });
  }

  public selectContact(selectedContact: Contact) {
    this.store.dispatch(selectContact({ selectedContact }))
  }

  public addContact() {
    if (this.form.valid) {
      this.store.dispatch(addContact({contact: this.form.value }));
      this.form.reset();
    }
  }
}
