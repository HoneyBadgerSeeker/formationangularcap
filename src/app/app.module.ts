import { ResultatComponent } from './resultat/resultat.component';
import { ResultatModule } from './resultat/resultat.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ResultatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
