import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _httpClient:HttpClient) { }

  public getCountries():any{
    return this._httpClient.get('https://restcountries.eu/rest/v2/all').pipe(map(response=>{
    return response;
  },
  error=>{
    this.handleError(error)
  }
    ));
  }

  public handleError(error){
    console.error("Error is "+error);
    return Observable.throw(error || "Internal Server Error");
  }
}
