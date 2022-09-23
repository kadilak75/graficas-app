import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {


  //labels superiores para la data y nombre de los campos
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 150],
    [350, 450, 100, 150]
  ];
  public doughnutChartType: ChartType = 'doughnut';


  //arreglo de objetos para cada data un color 
  //para cada circulo un objeto diferente con su arreglo de colores respectivo
  public colors: Color[] = [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63',
        
      ],
    },
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63',
        
      ],
    }
  ]
}
