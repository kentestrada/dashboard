import { Component, OnInit } from '@angular/core';
import { generateData } from '../data';
import * as shape from 'd3-shape';
import { APIService } from '../service/APIService';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  fitContainer = false;

  view: any[] = [800, 300];
  // options
  // timeline = true;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Legend';
  legendPosition = 'right';
  showXAxisLabel = true;
  tooltipDisabled = false;
  showText = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  innerPadding = '10%';
  barPadding = 30;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  showSeriesOnHover = true;
  roundEdges = true;
  animation = true;
  xScaleMin: any;
  xScaleMax: any;
  yScaleMin: number;
  yScaleMax: number;
  showDataLabel = false;
  noBarWhenZero = true;
  trimXAxisTicks = true;
  trimYAxisTicks = true;
  rotateXAxisTicks = true;
  maxXAxisTickLength = 16;
  maxYAxisTickLength = 16;
  autoScale = true;

  curves = {
    Basis: shape.curveBasis,
    'Basis Closed': shape.curveBasisClosed,
    Bundle: shape.curveBundle.beta(1),
    Cardinal: shape.curveCardinal,
    'Cardinal Closed': shape.curveCardinalClosed,
    'Catmull Rom': shape.curveCatmullRom,
    'Catmull Rom Closed': shape.curveCatmullRomClosed,
    Linear: shape.curveLinear,
    'Linear Closed': shape.curveLinearClosed,
    'Monotone X': shape.curveMonotoneX,
    'Monotone Y': shape.curveMonotoneY,
    Natural: shape.curveNatural,
    Step: shape.curveStep,
    'Step After': shape.curveStepAfter,
    'Step Before': shape.curveStepBefore,
    default: shape.curveLinear
  };

  // line interpolation
  curveType = 'Linear';
  curve: any = this.curves[this.curveType];
  interpolationTypes = [
    'Basis',
    'Bundle',
    'Cardinal',
    'Catmull Rom',
    'Linear',
    'Monotone X',
    'Monotone Y',
    'Natural',
    'Step',
    'Step After',
    'Step Before'
  ];

  closedCurveType = 'Linear Closed';
  closedCurve: any = this.curves[this.closedCurveType];
  closedInterpolationTypes = ['Basis Closed', 'Cardinal Closed', 'Catmull Rom Closed', 'Linear Closed'];

  schemeType = 'ordinal';
  colorScheme = {
    domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886']
  };
  rangeFillOpacity = 0.15;

  margin = false;
  marginTop = 40;
  marginRight = 40;
  marginBottom = 40;
  marginLeft = 40;

  // gauge
  gaugeMin = 0;
  gaugeMax = 100;
  gaugeLargeSegments = 10;
  gaugeSmallSegments = 5;
  gaugeTextValue = '';
  gaugeUnits = 'alerts';
  gaugeAngleSpan = 240;
  gaugeStartAngle = -120;
  gaugeShowAxis = true;
  gaugeValue = 50; // linear gauge value
  gaugePreviousValue = 70;


  dateDataWithRange: any[];

  get dateDataWithOrWithoutRange() {
    return this.dateDataWithRange;
  }

  constructor(private service: APIService) {
    this.service._baseUrl = 'http://localhost:3200';
    this.service._uri = '/v1/country';
    this.service.method = 'GET';

  }

  async ngOnInit() {
    this.dateDataWithRange = await this.getData();
    setInterval(async () => {
      this.dateDataWithRange = await this.updateData();
    }, 5000);
  }

  public onSelect(selected: any) {
    const selectedDate = new Date(selected.name);
    this.xScaleMin = selectedDate.setDate( selectedDate.getDate() - 3);
    this.xScaleMax = selectedDate.setDate( selectedDate.getDate() + 6);
    console.log(this.xScaleMax, this.xScaleMax);
  }

  updateData() {
    return [
      {
        name: 'Germany',
        value: Math.floor(10000 + Math.random() * 50000)
      },
      {
        name: 'USA',
        value: Math.floor(10000 + Math.random() * 50000)
      },
      {
        name: 'France',
        value: Math.floor(10000 + Math.random() * 50000)
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
        value: Math.floor(10000 + Math.random() * 50000)
      },
    ];
  }

  getData() {
    return [
      {
        name: 'Germany',
        value: 8940000
      },
      {
        name: 'USA',
        value: 5000000
      },
      {
        name: 'France',
        value: 7200000
      },
      {
        name: 'Phillipines',
        value: 6200000
      },
      {
        name: 'Japan',
        value: 5200000
      },
      {
        name: 'spain',
        value: 4200000
      },
    ];
  }

}
