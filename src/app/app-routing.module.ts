import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './contacts/contacts/contacts.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
