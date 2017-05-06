import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutesModule } from './app.routes';
import { ItemRoutesModule } from './items.routes';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Item1Component,
    Item2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule,
    ItemRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
