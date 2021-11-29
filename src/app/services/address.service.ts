import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Address } from '../models/address.model';

@Injectable({
    providedIn: 'root'
})
export class AddressApiService {
    constructor(private http: HttpClient) {}

    getAddresses(): Observable<Address[]> {
        return this.http.get<Address[]>('/addresses');
    }

    AddAddress(address: Address) {
        return this.http.post('http://localhost:3000/addresses', address);
    }
}