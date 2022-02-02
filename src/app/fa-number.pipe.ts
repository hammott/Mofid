import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'faNumber'})
export class PersianNumberPipe implements PipeTransform {

  transform(n:number , colorChange?:string): string {
    if (n === null || n === undefined) {
      return '';
    }
    const number = new Intl.NumberFormat('fa',{}).format(n)
    return number
  }
}

