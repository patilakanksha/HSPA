import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties:Array<any> = [
    {
      "Id":1,
      "Name":"Birala House",
      "Type":"House",
      "Price" : 12000
    },
    {
      "Id":2,
      "Name":"Mohite House",
      "Type":"House",
      "Price" : 12000
    },
    {
      "Id":3,
      "Name":"Patil House",
      "Type":"House",
      "Price" : 12000
    },
    {
      "Id":4,
      "Name":"Sunshine House",
      "Type":"House",
      "Price" : 12000
    },
    {
      "Id":5,
      "Name":"Deshmukh House",
      "Type":"House",
      "Price" : 12000
    },
]

  constructor() { }

  ngOnInit() {
  }

}
