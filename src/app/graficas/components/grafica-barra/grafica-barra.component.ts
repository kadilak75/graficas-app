import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  // array de strings que va a representar la leyenda inferior de la grafica
  @Input() barChartLabels: Label[] = [];
     //'2020', '2021', '2022', '2023', '2024', '2025', '2026'
  
  //puede ser bar u horizontalBar
  public barChartType: ChartType= 'bar';
  //se muestra la leyenda por defecto
  public barChartLegend = true;


  //array de objects que van a tener las siguientes propiedades
  //data: es un array de numeros que va a tener las cantiddades que se expresan en las barras
  //label: leyenda que aparece en la parte superior explicando a que pertenece cada barra
  //backgroundColor: es el color de cada barra
  //hoverBackgroundColor: color de las barras cuando se posiciona encima de estas (opcional)


  @Input() barChartData: ChartDataSets[] = [];
    // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' },
    // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#F763C4', hoverBackgroundColor: 'red' },
    // { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Series C', backgroundColor: '#D665E0', hoverBackgroundColor: 'red' },
  

  constructor() {}

  ngOnInit(): void {
    if ( this.horizontal ){
      this.barChartType = 'horizontalBar';
    }
  }

  randomize(){
    
  }
}
