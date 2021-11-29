import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsModule } from './contacts/contacts.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PipesModule } from './pipes/pipes.module';
import { AddressEffects } from './store/address/address.effect';
import { addressReducer } from './store/address/address.reducer';
import { ContactEffects } from './store/contact/contact.effect';
import { contactReducer } from './store/contact/contact.reducer';
import { countryReducer } from './store/country/country.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatInputModule,
    ContactsModule,
    HttpClientModule,
    StoreModule.forRoot({ countries: countryReducer, contacts: contactReducer, addresses: addressReducer }),
    EffectsModule.forRoot([ContactEffects, AddressEffects]),
    PipesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
