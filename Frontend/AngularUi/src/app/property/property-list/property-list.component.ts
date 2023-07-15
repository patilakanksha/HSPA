import { Component, OnInit } from '@angular/core';
import { HausingService } from 'src/app/services/hausing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties!: any;
  constructor(private hausingService : HausingService) { }

  ngOnInit() {
    this.hausingService.getAllProperties().subscribe(data=>{this.properties = data});
    // this.http.get('data/properties.json').subscribe(
    //   data=>{this.properties = data}
    // );
    
  }

}
