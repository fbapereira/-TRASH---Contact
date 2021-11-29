import { createReducer, on, Action } from '@ngrx/store';
import { Address } from 'src/app/models/address.model';
import { loadAddress, addAddress } from './address.actions';

export const initialState: Address[] = [];

const _addressReducer = createReducer(
    initialState,
    on(loadAddress, (state: Address[], {addresses}: any) => { return addresses }),
    on(addAddress, (state: Address[], {address}: any) => {
        if (address) {
            let addresses = JSON.parse(JSON.stringify(state));
            addresses.push(address);
            return addresses;
        }
        return state;
    })
);

export const addressReducer = (state = initialState, action: Action) => _addressReducer(state, action);
