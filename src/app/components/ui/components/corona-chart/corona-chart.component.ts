import {Component, Input, OnInit, ViewChild} from '@angular/core';

import {ChartComponent} from 'ng-apexcharts';
import {DayOneCountry} from '../../../../services/covid-date.types';

@Component({
  selector: 'app-chart',
  templateUrl: './corona-chart.component.html',
  styleUrls: ['./corona-chart.component.scss'],
})
export class CoronaChartComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: any;
  @Input() countryData!: Array<DayOneCountry>;
  responsive = [
    {
      breakpoint: 1000,
      options: {
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: 'Confirmed',
          data: this.generateDayWiseTimeSeries(this.countryData, 'Confirmed'),
        },
        {
          name: 'Recovered',
          data: this.generateDayWiseTimeSeries(this.countryData, 'Recovered'),
        },
        {
          name: 'Deaths',
          data: this.generateDayWiseTimeSeries(this.countryData, 'Deaths'),
        },
      ],
      chart: {
        type: 'area',
        height: 350,
        stacked: true,
        width: '100%',
      },
      colors: ['#FD4E71', '#6DD400', '#9475FF'],
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0,
          opacityTo: 0.1,
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
      },
      xaxis: {
        type: 'datetime',
      },
    };
  }

  private generateDayWiseTimeSeries(items: Array<DayOneCountry>, key: string) {
    const stats = items.map((item: any) => [new Date(item.Date).getTime(), item[key]]);
    return stats.splice(0, 50);
  };
}
