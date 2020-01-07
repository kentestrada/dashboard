import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss']
})
export class NumberCardComponent implements OnInit {
  fitContainer = false;

  view: any[] = [800, 300];
  animation = true;

  colorScheme = {
    domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886']
  };

  dateDataWithRange: any[];

  get single() {
    return this.dateDataWithRange;
  }

  constructor() { }

  async ngOnInit() {
    this.dateDataWithRange = await this.getData();
    setInterval(async () => {
      this.dateDataWithRange = await this.updateData();
    }, 7000);
  }

  getData() {
    return [
      {
        name: 'Germany',
        value: 89400
      },
      {
        name: 'USA',
        value: 50000
      },
      {
        name: 'France',
        value: 72000
      },
      {
        name: 'Phillipines',
        value: 62000
      },
      {
        name: 'Japan',
        value: 52000
      },
      {
        name: 'spain',
        value: 42000
      },
      {
        name: 'Autria',
        value: 52000
      },
      {
        name: 'Belize',
        value: 42000
      },
    ];
  }

  updateData() {
    return [
      {
        name: 'Germany',
        value: 89400
      },
      {
        name: 'USA',
        value: Math.floor(10000 + Math.random() * 50000)
      },
      {
        name: 'France',
        value: 72000
      },
      {
        name: 'Phillipines',
        value: Math.floor(10000 + Math.random() * 50000)
      },
      {
        name: 'Japan',
        value: Math.floor(10000 + Math.random() * 50000)
      },
      {
        name: 'spain',
        value: 42000
      },
      {
        name: 'Autria',
        value: Math.floor(10000 + Math.random() * 50000)
      },
      {
        name: 'Belize',
        value: Math.floor(10000 + Math.random() * 50000)
      },
    ];
  }


}
