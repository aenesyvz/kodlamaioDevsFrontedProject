import { Pipe, PipeTransform } from '@angular/core';
import { OperationClaim } from '../models/entity/operationClaim';


@Pipe({
  name: 'operatioClaimPipe'
})
export class OperatioClaimPipe implements PipeTransform {

  transform(value: OperationClaim[], filterText: string): OperationClaim[] {
    return filterText? value.filter((p:OperationClaim) => p.name.toString().toLowerCase().indexOf(filterText)!= -1):value;
  }

}
