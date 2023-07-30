import { Component, OnInit } from '@angular/core';
import { HausingService } from 'src/app/services/hausing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty> = [];
  SellRent = 1
  
  constructor(private route: ActivatedRoute, private hausingService : HausingService) { }
 
  ngOnInit() {
    if(this.route.snapshot.url.toString())
    {
      this.SellRent = 2
    }
    this.hausingService.getAllProperties(this.SellRent).subscribe(
      
      data=>{this.properties = data;
        console.log(data)
      },
      error=>console.log(error)
      
      );
    }

    // this.http.get('data/properties.json').subscribe(
    //   data=>{this.properties = data}
    // );
    
  }


