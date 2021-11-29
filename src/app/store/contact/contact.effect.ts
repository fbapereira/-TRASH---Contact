import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ContactApiService } from '../../services/contact.service';
import { addContact, addContactSuccess } from './contact.actions';

@Injectable()
export class ContactEffects {
    addFavorite$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addContact),
            switchMap(({contact}) => this.contactApiService.addContacts(contact)),
            map(() => addContactSuccess())
        )
    )

    constructor(
        private actions$: Actions,
        private contactApiService: ContactApiService
    ) { }
}