import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LayoutModule { }
