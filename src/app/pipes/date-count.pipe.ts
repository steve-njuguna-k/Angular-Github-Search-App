import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number { 
    let today:Date = new Date(); // get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    value = value.split('');
    let createdYear: any = (value.splice(0,4)).join('');
    value.shift();
    let createdMonth: any = ((value.splice(0,2)).join(''))-1;
    value.shift();
    let createdDate: any = (value.splice(0,2)).join('');
    let timeCreated: any = new Date(createdYear , createdMonth, createdDate);

    let dateDifference = Math.abs(todayWithNoTime - timeCreated); // returns value in miliseconds
    const secondsInDay = 86400; // 60 seconds * 60 minutes in an hour * 24 hours in a day
    let dateDifferenceSeconds = dateDifference*0.001; // converts miliseconds to seconds
    let dateCounter = Math.floor(dateDifferenceSeconds/secondsInDay);

    if (dateCounter >= 1 && todayWithNoTime > timeCreated) {
      return dateCounter;
    }
    else {
      return 0;
    }
    

  }

}
