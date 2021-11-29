import { Action, createReducer, on } from '@ngrx/store';

import { Country } from '../../models/country.model';
import { loadCountries } from './country.actions';

export const initialState: Country[] = [];

const _countryReducer = createReducer(
    initialState,
    on(loadCountries, (state: Country[] | undefined, {countries}: any) => state = countries)
);

export const countryReducer = (state: Country[] | undefined, action: Action) => _countryReducer(state, action);
