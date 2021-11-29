import { combineLatest, of } from 'rxjs';
import { filter, first, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { AddressApiService } from 'src/app/services/address.service';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';

import { AppState } from '../app.state';
import { selectContact } from '../contact/contact.selector';
import { addAddress, addAddressSuccess } from './address.actions';

@Injectable()
export class AddressEffects {
    addFavorite$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addAddress),
            switchMap(({address}) => this.addressApiService.AddAddress(address)),
            map(() => addAddressSuccess())
        )
    )

    constructor(
        private actions$: Actions,
        private addressApiService: AddressApiService
    ) { }
}