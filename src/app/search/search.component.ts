import { ResultatComponent } from './../resultat/resultat.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() Out: EventEmitter<string>= new EventEmitter();
  selectedId: string;

    cities = [
    {title:  'Atlanta', id:  '2357024'},
    {title:  'Boston', id:  '2367105'}
  ];
  constructor() { }

  ngOnInit() {
  }

  search() {
    this.Out.emit('1');
  }
}
