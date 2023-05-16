import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number):string {
    const formatedValue=value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formatedValue
  }

}
