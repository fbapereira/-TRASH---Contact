import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

export const selectContacts = createSelector(
    (state: AppState) => state.contacts.contacts,
    (contacts) => contacts,
)

export const selectContact = createSelector(
    (state: AppState) => state.contacts.selectedContact,
    (contacts) => contacts,
)