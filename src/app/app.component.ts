import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  allHours: any[] = [];

  getHours() {
    //all 3 buses hours put together
    //sort them by time
    //display them using date pipe
    const hours = [...this.bus1A, ...this.bus2A, ...this.bus5C];

    hours.sort(
      (a: { busTime: any }, b: { busTime: any }) => a.busTime - b.busTime
    );
    this.allHours = hours; 

    return this.allHours;
  }

  ngOnInit() {
    this.getHours();
  }

  bus1A = [
    { busNo: '1A', busTime: new Date('2021-05-23 08:12') },
    { busNo: '1A', busTime: new Date('2021-05-23 09:15') },
    { busNo: '1A', busTime: new Date('2021-05-23 10:01') },
    { busNo: '1A', busTime: new Date('2021-05-23 11:21') },
    { busNo: '1A', busTime: new Date('2021-05-23 12:32') },
    { busNo: '1A', busTime: new Date('2021-05-23 13:05') },
    { busNo: '1A', busTime: new Date('2021-05-23 14:37') },
    { busNo: '1A', busTime: new Date('2021-05-23 15:15') },
    { busNo: '1A', busTime: new Date('2021-05-23 16:08') },
    { busNo: '1A', busTime: new Date('2021-05-23 17:17') },
    { busNo: '1A', busTime: new Date('2021-05-23 18:04') },
    { busNo: '1A', busTime: new Date('2021-05-23 19:21') },
    { busNo: '1A', busTime: new Date('2021-05-23 20:21') },
    { busNo: '1A', busTime: new Date('2021-05-23 21:02') },
    { busNo: '1A', busTime: new Date('2021-05-23 22:22') },
    { busNo: '1A', busTime: new Date('2021-05-23 23:11') },
  ];

  bus2A = [
    { busNo: '2A', busTime: new Date('2021-05-23 08:01') },
    { busNo: '2A', busTime: new Date('2021-05-23 09:05') },
    { busNo: '2A', busTime: new Date('2021-05-23 10:13') },
    { busNo: '2A', busTime: new Date('2021-05-23 11:11') },
    { busNo: '2A', busTime: new Date('2021-05-23 12:12') },
    { busNo: '2A', busTime: new Date('2021-05-23 13:15') },
    { busNo: '2A', busTime: new Date('2021-05-23 14:17') },
    { busNo: '2A', busTime: new Date('2021-05-23 15:25') },
    { busNo: '2A', busTime: new Date('2021-05-23 16:38') },
    { busNo: '2A', busTime: new Date('2021-05-23 17:37') },
    { busNo: '2A', busTime: new Date('2021-05-23 18:44') },
    { busNo: '2A', busTime: new Date('2021-05-23 19:51') },
    { busNo: '2A', busTime: new Date('2021-05-23 20:31') },
    { busNo: '2A', busTime: new Date('2021-05-23 21:12') },
    { busNo: '2A', busTime: new Date('2021-05-23 22:42') },
    { busNo: '2A', busTime: new Date('2021-05-23 23:41') },
  ];

  bus5C = [
    { busNo: '5C', busTime: new Date('2021-05-23 08:04') },
    { busNo: '5C', busTime: new Date('2021-05-23 09:25') },
    { busNo: '5C', busTime: new Date('2021-05-23 11:13') },
    { busNo: '5C', busTime: new Date('2021-05-23 11:31') },
    { busNo: '5C', busTime: new Date('2021-05-23 12:02') },
    { busNo: '5C', busTime: new Date('2021-05-23 13:35') },
    { busNo: '5C', busTime: new Date('2021-05-23 14:57') },
    { busNo: '5C', busTime: new Date('2021-05-23 15:05') },
    { busNo: '5C', busTime: new Date('2021-05-23 15:38') },
    { busNo: '5C', busTime: new Date('2021-05-23 16:27') },
    { busNo: '5C', busTime: new Date('2021-05-23 17:27') },
    { busNo: '5C', busTime: new Date('2021-05-23 18:24') },
    { busNo: '5C', busTime: new Date('2021-05-23 19:01') },
    { busNo: '5C', busTime: new Date('2021-05-23 20:01') },
    { busNo: '5C', busTime: new Date('2021-05-23 21:11') },
    { busNo: '5C', busTime: new Date('2021-05-23 22:43') },
    { busNo: '5C', busTime: new Date('2021-05-23 23:31') },
  ];
}

// var d = new Date(1469433907836); // Parameter should be long value

// d.toLocaleString()     // 7/25/2016, 1:35:07 PM
// d.toLocaleDateString() // 7/25/2016
// d.toDateString()       // Mon Jul 25 2016
// d.toTimeString()       // 13:35:07 GMT+0530 (India Standard Time)
// d.toLocaleTimeString() // 1:35:07 PM
// d.toISOString();       // 2016-07-25T08:05:07.836Z
// d.toJSON();            // 2016-07-25T08:05:07.836Z
// d.toString();          // Mon Jul 25 2016 13:35:07 GMT+0530 (India Standard Time)
// d.toUTCString();       // Mon, 25 Jul 2016 08:05:07 GMT
