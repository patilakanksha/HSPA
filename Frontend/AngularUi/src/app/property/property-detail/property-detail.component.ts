import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId!: number; 
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.propertyId = + this.route.snapshot.params["id"];
    // wih adding + symbol in convertinto number type

    //the below code is useful to reflect url changed value on page also at the time of pagination
    this.route.params.subscribe(

      (params) =>{
        this.propertyId = + params['id']
      }
    )
  }

  onSelectNext(){
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId])
  }

}
