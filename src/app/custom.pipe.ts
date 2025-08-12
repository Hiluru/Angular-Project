import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: Date | number | string):any  {
    const inputDate = new Date(value).getTime(); 
    const today = new Date().getTime();         

    const diffTime = today - inputDate; 
    const convertDays = Math.floor(diffTime / ( 60 * 1000 * 60 * 24));
    if(value=='') return ``
    if (convertDays < 7) {
      return `A ${convertDays} day${convertDays === 1 ? '' : 's'} ago`;
    } else if (convertDays < 30) {
      const weeks = Math.floor(convertDays / 7);
      return `A ${weeks} week${weeks === 1 ? '' : 's'} ago`;
    } else {
      const months = Math.floor(convertDays / 30);
      return `A ${months} month${months === 1 ? '' : 's'} ago`;
    }
  }
}