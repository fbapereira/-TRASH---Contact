import { Pipe, PipeTransform } from '@angular/core';

import { Contact } from '../models/contact.model';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: Contact): string {
    return value.first_name + ' ' + value.last_name;
  }

}
