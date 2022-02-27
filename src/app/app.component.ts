import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  allHours!: any;

  getHours() { 
    this.allHours = [...this.bus1A, ...this.bus2A, ...this.bus5C];
    this.allHours.sort((a: { busTime: number; }, b: { busTime: number; }) => a.busTime - b.busTime);
    return this.allHours;
  }

  ngOnInit() {
    this.getHours();
  }

  bus1A = [
    { busNo: '1A', busTime: 8.12 },
    { busNo: '1A', busTime: 9.15 },
    { busNo: '1A', busTime: 10.1 },
    { busNo: '1A', busTime: 11.21 },
    { busNo: '1A', busTime: 12.32 },
    { busNo: '1A', busTime: 13.05 },
    { busNo: '1A', busTime: 14.37 },
    { busNo: '1A', busTime: 15.15 },
    { busNo: '1A', busTime: 16.08 },
    { busNo: '1A', busTime: 17.17 },
    { busNo: '1A', busTime: 18.04 },
    { busNo: '1A', busTime: 19.21 },
    { busNo: '1A', busTime: 20.21 },
    { busNo: '1A', busTime: 21.02 },
    { busNo: '1A', busTime: 22.22 },
    { busNo: '1A', busTime: 23.11 },
  ];

  bus2A = [
    { busNo: '2A', busTime: 8.01 },
    { busNo: '2A', busTime: 9.05 },
    { busNo: '2A', busTime: 10.13 },
    { busNo: '2A', busTime: 11.11 },
    { busNo: '2A', busTime: 12.12 },
    { busNo: '2A', busTime: 13.15 },
    { busNo: '2A', busTime: 14.17 },
    { busNo: '2A', busTime: 15.25 },
    { busNo: '2A', busTime: 16.38 },
    { busNo: '2A', busTime: 17.37 },
    { busNo: '2A', busTime: 18.44 },
    { busNo: '2A', busTime: 19.51 },
    { busNo: '2A', busTime: 20.31 },
    { busNo: '2A', busTime: 21.12 },
    { busNo: '2A', busTime: 22.42 },
    { busNo: '2A', busTime: 23.41 },
  ];

  bus5C = [
    { busNo: '5C', busTime: 8.04 },
    { busNo: '5C', busTime: 9.25 },
    { busNo: '5C', busTime: 11.13 },
    { busNo: '5C', busTime: 11.31 },
    { busNo: '5C', busTime: 12.02 },
    { busNo: '5C', busTime: 13.35 },
    { busNo: '5C', busTime: 14.57 },
    { busNo: '5C', busTime: 15.05 },
    { busNo: '5C', busTime: 15.38 },
    { busNo: '5C', busTime: 16.27 },
    { busNo: '5C', busTime: 17.27 },
    { busNo: '5C', busTime: 18.24 },
    { busNo: '5C', busTime: 19.01 },
    { busNo: '5C', busTime: 20.01 },
    { busNo: '5C', busTime: 21.11 },
    { busNo: '5C', busTime: 22.43 },
    { busNo: '5C', busTime: 23.31 },
  ];
}
