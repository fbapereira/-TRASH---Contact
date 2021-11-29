import { createAction, props } from "@ngrx/store";
import { Address } from "src/app/models/address.model";

export const loadAddress = createAction('[ADDRESS] - Load', props<{ addresses: Address[] }>());
export const addAddress = createAction('[ADDRESS] - Add', props<{ address: Address }>());
export const addAddressSuccess = createAction('[ADDRESS] - Add success');