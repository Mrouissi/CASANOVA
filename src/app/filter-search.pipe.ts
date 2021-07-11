import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch',
  pure: false
})

@Injectable({
  providedIn: 'root'
})
export class FilterSearchPipe implements PipeTransform {

  transform(Items: any[], value: string): any [] {

    if (!Items || !value) {
      return Items;
    }
    return Items.filter((item) =>
      item.nom.toLowerCase().includes(value.toLowerCase()) ||
      item.prenom.toLowerCase().includes(value.toLowerCase()) ||
      item.tel_portable.toLowerCase().includes(value.toLowerCase()) ||
      item.email.toLowerCase().includes(value.toLowerCase())
      
    );
  }

}
