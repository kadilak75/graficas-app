import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getGraficData(){
    return this.http.get('http://localhost:3000/grafica')
  }

  //esta es otra manera de obtener los datos de la peticion y desestructurarlos
  //al llamar el mtodo getGraficData al este regresar un observable podemos hacer
  //uso de los operadores rxjs para trabajarlo
  getUsuariosRedesSocialesDonaData() {
    return this.getGraficData()
        .pipe(
          //utilizamos map para definir que el resultado de este observable va a regresar las keys
          //y los values de el objeto del servidor y esto es lo que vamos a utilizar en el subscribe
          map( data => {
            const labels = Object.keys( data );
            const values = Object.values( data );
            return { labels, values };
          })
        )
  }
}
