import { Component, Input } from '@angular/core';

import { Address } from '../../models/address.model';

@Component({
  selector: 'app-contact-address',
  templateUrl: './contact-address.component.html',
  styleUrls: ['./contact-address.component.scss']
})
export class ContactAddressComponent {
  @Input()
  public address: Address | undefined;
}
