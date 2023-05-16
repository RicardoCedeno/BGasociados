import { Component, OnInit } from '@angular/core';
import { DollarServiceService } from '../services/dollar-service.service';
import { Money } from '../classes/money';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private dollarService:DollarServiceService){}
  ngOnInit(): void {
    this.getAllExchanges()

    }

    exchangeRates:any[]

    getAllExchanges(){
      this.dollarService.getAllExchanges().subscribe((data:any)=>{
        this.exchangeRates=Object.entries(data.rates).map(([name, rate]) => ({name, rate}))
      })
    }

    copRate:number

    setCopRate(rate:number){
      this.copRate=rate
    }

  }
