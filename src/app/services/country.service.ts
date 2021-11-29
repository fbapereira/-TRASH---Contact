import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Country } from '../models/country.model';

@Injectable({
    providedIn: 'root'
})
export class CountryApiService {
    constructor(private http: HttpClient) {}

    getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>('http://localhost:3000/countries');
    }
}