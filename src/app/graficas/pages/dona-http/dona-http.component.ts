import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficasService: GraficasService) { }


  //obtenemos la infirmacion del servicio que viene en un object
  //desestructuramos esta informacion utilizano las propiedades del object que nos
  //permiten acceder a las keys y los values
  ngOnInit(): void {
    this.graficasService.getGraficData()
    .subscribe(respuesta => {
        console.log(respuesta)
        //key va a ser un array de las keys como strings
        const labels = Object.keys(respuesta);
        //values va a ser un array de data que son numbers
        const values = Object.values(respuesta);
        //doughnutChartLabels recibe un array de Label[] que a su vez es un simple array de strings
        //por lo cual podemos asignar este valor sin problemas
        this.doughnutChartLabels = labels
        //doughnutChartData recibe un MultiDataSet que es un array que a su
        //vez contiene arrays e inicializamos como un array vacio por lo cual podemos
        //utilizar la propiedad push para meter nuestro array 
        this.doughnutChartData.push(values)


        //opcion 2
        //el servicio ya regresa el objeto separado en keys y values por lo cual podemos asignarlo directamente
        //bien sea resp.keys y resp.values o desestructurando como lo tenemos en la suscripcion

        // this.graficasService.getUsuariosRedesSocialesDonaData()
        // .subscribe(({labels,values}) =>{
        //   this.doughnutChartLabels = labels
        //   this.doughnutChartData.push(values)
        // });

      });
  }

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
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
