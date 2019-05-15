import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortnum'
})
export class SortnumPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if(args === 'asc'){
      return value.sort(this.sortNumbers)
    }
    if(args === 'dsc'){
      return value.sort(this.sortNumbers).reverse()
    }
    return value.sort(this.sortNumbers)
  }
  sortNumbers = (a, b)=>{
    return a-b
  }
}
