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

  getWeatherInfo(id: string) {
    this.http.get('https://www.metaweather.com/api/location/' + id)
    .subscribe()
  }


}
