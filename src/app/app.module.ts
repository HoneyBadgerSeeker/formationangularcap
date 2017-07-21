import { ResultatModule } from './resultat/resultat.module';
import { ResultatComponent } from './resultat/resultat.component';
import { SearchComponent } from './search/search.component';import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    ResultatModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
