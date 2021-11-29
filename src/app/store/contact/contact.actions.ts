import { Contact } from 'src/app/models/contact.model';

import { createAction, props } from '@ngrx/store';

export const loadContact = createAction('[CONTACT] - Load', props<{ contacts: Contact[] }>());
export const selectContact = createAction('[CONTACT] - Select', props<{ selectedContact: Contact }>());
export const addContact = createAction('[CONTACT] - Add', props<{ contact: Contact }>());
export const addContactSuccess = createAction('[CONTACT] - Add success');