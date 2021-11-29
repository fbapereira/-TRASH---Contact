import { NgModule } from '@angular/core';

import { NamePipe } from './name.pipe';

@NgModule({
  declarations: [
    NamePipe
  ],
  exports: [
    NamePipe
  ]
})
export class PipesModule {}