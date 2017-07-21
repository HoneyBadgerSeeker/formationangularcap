import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  @Input() id: string;

  constructor(private http: HttpClientModule) { }

  ngOnInit() {

  }

  getWeatherInfo() {
  }


}
