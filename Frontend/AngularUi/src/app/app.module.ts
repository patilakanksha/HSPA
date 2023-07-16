import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

import { HausingService } from './services/hausing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';

const appRoutes: Routes=[
  {path:'', component:PropertyListComponent},
  {path:'rent-property', component:AddPropertyComponent},
  {path:'add-property', component:AddPropertyComponent}
]

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
      NavBarComponent,
      PropertyListComponent,
      AddPropertyComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HausingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
