import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {

  @ViewChild('chart')
  chartCanvas: ElementRef;

  context: CanvasRenderingContext2D;

  chart: any;

  constructor() { }

  private stringToDate(date: string): Date {
    return moment(date).toDate();
  }

  ngAfterViewInit() {
    let canvas = this.chartCanvas.nativeElement;
    this.context = canvas.getContext('2d');
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        datasets: [{
          label: 'wu',
          data: [
            {
              x: this.stringToDate('2016-07-29'),
              y: 386
            },
            {
              x: this.stringToDate('2016-07-30'),
              y: 388
            },
            {
              x: this.stringToDate('2016-07-31'),
              y: 390
            },
            {
              x: this.stringToDate('2016-08-27'),
              y: 405
            },
            {
              x: this.stringToDate('2016-10-16'),
              y: 421
            }
          ]
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "黒ウィズ:Lv推移"
        },
        scales: {
          xAxes: [{
            type: 'time',
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Date'
            }//,
            // time: {
            //   // unit: TimeUnit.day
            // }
          }]
        }
      }
    });
  }

}
