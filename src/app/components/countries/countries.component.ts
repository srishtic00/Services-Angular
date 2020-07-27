import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public data:any;
  constructor(private _service:CountriesService) { }

  ngOnInit(): void {
    this._service.getCountries().subscribe(
      response=>{
        this.data=response;
    },
    error=>{
      console.error(error);
      }
    )
  }

}
