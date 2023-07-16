import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root' 
})
export class HausingService {

  constructor(private http:HttpClient) { }
  getAllProperties(SellRent: number): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data =>{
        const propertiesArray: Array<IProperty> = [];
        
        for(const id in data)
        {
          if(data.hasOwnProperty(id) && (data as any)[id].SellRent === SellRent)
          { 
            propertiesArray.push((data as any)[id]);
          }
        }
        return propertiesArray
      })
    );
  }
}
