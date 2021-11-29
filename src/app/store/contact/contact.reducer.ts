import { Action, createReducer, on } from '@ngrx/store';

import { Contact } from '../../models/contact.model';
import { addContact, loadContact, selectContact } from './contact.actions';

export interface ContactState {
    contacts: Contact[];
    selectedContact: Contact | undefined;
}

export const initialState: ContactState = {
    contacts: [],
    selectedContact: undefined
};

const _contactReducer = createReducer(
    initialState,
    on(loadContact, (state: ContactState, {contacts}: any) => { return { ...state,  contacts } }),
    on(selectContact, (state: ContactState, {selectedContact}: any) => { return { ...state,  selectedContact } }),
    on(addContact, (state: ContactState, {contact}: any) => {
        if (contact) {
            let contacts = JSON.parse(JSON.stringify(state.contacts));
            contacts.push(contact);
            return { ...state, contacts };
        }
        return state;
    })
);

export const contactReducer = (state: ContactState = initialState, action: Action) => _contactReducer(state, action);
