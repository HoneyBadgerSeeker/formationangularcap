import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultatComponent } from './resultat.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ResultatComponent],
  exports: [ ResultatComponent ]
})
export class ResultatModule {

}
