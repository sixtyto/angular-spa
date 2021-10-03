import { Component, OnInit } from '@angular/core';
import { Countries } from '../classes/countries';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  myCountries = "My countries"

  randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  countries = [
    new Countries('Poland', 321000),
    new Countries('Russia', 9984670),
    new Countries('Canada', 9706961),
    new Countries('China', 9372610),
    new Countries('United States', 8515767),
    new Countries('Brazil', 7692024),
    new Countries('Australia', 3287590),
    new Countries('India', 2780400),
    new Countries('Argentina', 2724900),
    new Countries('Kazakhstan', 2381741),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
