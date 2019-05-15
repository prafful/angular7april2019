import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortstring'
})

export class SortstringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    console.log(args)
    if(args === 'asc'){
      return value.sort()
    }
    if(args === 'dsc'){
      return value.sort().reverse()
    }

    return value.sort()

  }

}
