import { createSelector } from '@ngrx/store';

import { Address } from '../../models/address.model';
import { AppState } from '../app.state';

export const selectAddress = createSelector(
    ((state: AppState) => state.addresses.filter((address: Address) => address.contactId == state.contacts.selectedContact?.id)),
    (addresses) => addresses,
)
