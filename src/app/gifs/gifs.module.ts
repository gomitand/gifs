import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CarlistComponent } from './components/carlist/carlist.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchBoxComponent,
    CarlistComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[

  ],
  exports:[
    HomeComponent,

  ]
})
export class GifsModule { }
