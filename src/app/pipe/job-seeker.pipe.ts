import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobSeekerPipe'
})
export class JobSeekerPipe implements PipeTransform {

  transform(value: any[], searchString: string): unknown {
    if(!searchString){
      return value;
    }

    return value.filter(i =>{
      const firstName = i.firstName.toLowerCase().toString().includes(searchString.toLocaleLowerCase());
      const lastName = i.lastName.toLowerCase().toString().includes(searchString.toLocaleLowerCase());
      return (firstName + lastName);
    });
  }

}
