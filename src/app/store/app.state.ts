import { Address } from '../models/address.model';
import { Country } from '../models/country.model';
import { ContactState } from './contact/contact.reducer';

export interface AppState {
    addresses: ReadonlyArray<Address>;
    countries: ReadonlyArray<Country>;
    contacts: ContactState;
}
