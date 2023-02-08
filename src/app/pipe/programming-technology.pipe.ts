import { Pipe, PipeTransform } from '@angular/core';
import { ProgrammingTechnologyListDto } from '../models/dtos/programmingTechnologyListDto';
import { ProgrammingTechnology } from '../models/entity/programmingTechnology';

@Pipe({
  name: 'programmingTechnologyPipe'
})
export class ProgrammingTechnologyPipe implements PipeTransform {

  transform(value: ProgrammingTechnologyListDto[], filterText: string): ProgrammingTechnologyListDto[] {
    return filterText? value.filter((p : ProgrammingTechnologyListDto) => p.programmingLanguageName.toString().toLowerCase().indexOf(filterText) != -1):value;
  }

}
