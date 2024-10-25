import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  //my own transformation
  transform(value:any,term:any){
    if(term ==null){return value}
else {
  return value.filter((item:any)=>(item.name.includes(term)))
}
  }

}
