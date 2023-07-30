import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

import { HausingService } from './services/hausing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

const appRoutes: Routes=[
  {path:'', component:PropertyListComponent},
 
  {path:'add-property', component:AddPropertyComponent},
  {path:'property-detail/:id', component:PropertyDetailComponent},
  {path:'**', component:PropertyListComponent},
]

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
      NavBarComponent,
      PropertyListComponent,
      AddPropertyComponent,
      PropertyDetailComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [HausingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
