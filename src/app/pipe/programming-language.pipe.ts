import { Pipe, PipeTransform } from '@angular/core';
import { ProgrammLanguage } from '../models/entity/programmingLanguage';

@Pipe({
  name: 'programmingLanguagePipe'
})
export class ProgrammingLanguagePipe implements PipeTransform {

  transform(value: ProgrammLanguage[], filterText: string): ProgrammLanguage[] {
    return filterText? value.filter((p : ProgrammLanguage) => p.name.toString().toLowerCase().indexOf(filterText) != -1):value;
  }

}
