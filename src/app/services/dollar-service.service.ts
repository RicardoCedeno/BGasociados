import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Money } from '../classes/money';


@Injectable({
  providedIn: 'root'
})
export class DollarServiceService {
  constructor(private http:HttpClient){}


  urlAllExchanges="https://openexchangerates.org/api/latest.json?app_id=fc2501623fa64dbf8f415c6e817c9d49"


  getAllExchanges():Observable<Money>{
    return this.http.get<Money>(this.urlAllExchanges)
  }

}
