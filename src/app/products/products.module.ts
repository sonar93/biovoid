import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ProductsComponent } from './products.component';
import { PDescriptionComponent } from './p-description/p-description.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {HeaderComponent} from './header/header.component';
import {HeaderTopComponent} from './header-top/header-top.component';


@NgModule({
  declarations: [
    ProductsComponent,
    PDescriptionComponent,
    FeedbackComponent,
    HeaderComponent,
    HeaderTopComponent
  ],
  exports: [
    ProductsComponent,
    PDescriptionComponent,
    FeedbackComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: []
})
export class ProductsModule { }
