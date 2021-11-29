import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { NamePipe } from '../pipes/name.pipe';
import { PipesModule } from '../pipes/pipes.module';
import { ContactAddressComponent } from './contact-address/contact-address.component';
import { ContactAddressesComponent } from './contact-addresses/contact-addresses.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactAddressesComponent,
    ContactListComponent,
    ContactAddressComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    PipesModule
  ],
  exports: [
    ContactsComponent,
  ]
})
export class ContactsModule { }
