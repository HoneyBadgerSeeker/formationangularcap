import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    cities = [
    {title:  'Atlanta', id:  '2357024'},
    {title:  'Boston', id:  '2367105'}
  ];
  constructor() { }

  ngOnInit() {
  }



}
