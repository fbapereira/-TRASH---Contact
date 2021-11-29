import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

export const selectCountries = createSelector(
    (state: AppState) => state.countries,
    (countries) => countries,
)