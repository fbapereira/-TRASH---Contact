import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Contact } from '../models/contact.model';

@Injectable({
    providedIn: 'root'
})
export class ContactApiService {
    constructor(private http: HttpClient) {}

    getContacts(): Observable<Contact[]> {
        return this.http.get<Contact[]>('http://localhost:3000/contacts'); 
    }

    addContacts(contact: Contact) {
        return this.http.post('http://localhost:3000/contacts', contact); 
    }
}