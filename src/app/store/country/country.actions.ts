import { createAction, props } from "@ngrx/store";
import { Country } from "src/app/models/country.model";

export const loadCountries = createAction('[COUNTRY] - Load', props<{ countries: Country[] }>());