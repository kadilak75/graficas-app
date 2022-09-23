import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {

  //@Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  //@Input()
   public barChartLabels: Label[] = [
     '2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];
  
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  //@Input() 
  public barChartData: ChartDataSets[] = [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' },
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#F763C4', hoverBackgroundColor: 'red' },
    { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Series C', backgroundColor: '#D665E0', hoverBackgroundColor: 'red' },
  ];

  constructor() {}

  ngOnInit(): void {
    // if ( this.horizontal ){
    //   this.barChartType = 'horizontalBar';
    // }
  }

  //valores random para la grafica
  public randomize(): void {
    
    //primer grupo de data
    this.barChartData[0].data = [
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
    ];


    //segundo grupo de data
    this.barChartData[1].data = [
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
    ];


    //tercer grupo de data
    this.barChartData[2].data = [
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
    ];
  }
}

