import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  private urlBase: string = "http://localhost:3000/grafica"

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(this.urlBase);
  }

  getDataArrays(){
    return this.getData().pipe(
      delay(1000),
      map(data => {
        const labels: string[] = Object.keys( data );
        const values: number[] = Object.values( data );
        return {labels, values}
      })
    )    
  }
  
}
