import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-grid',
  templateUrl: './pie-grid.component.html',
  styleUrls: ['./pie-grid.component.scss']
})
export class PieGridComponent implements OnInit {
  fitContainer = false;

  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  arcWidth = 0.25;

  view: any[] = [800, 300];

  animation = true;


  schemeType = 'ordinal';
  colorScheme = {
    domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886']
  };

  dateDataWithRange: any[];

  get single() {
    return this.dateDataWithRange;
  }


  async ngOnInit() {
    this.dateDataWithRange = await this.getData();
    setInterval(async () => {
      this.dateDataWithRange = await this.updateData();
    }, 6500);
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
