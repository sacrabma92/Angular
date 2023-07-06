import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ShearchBoxComponent } from './components/shearch-box/shearch-box.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    CardComponent,
    CardListComponent,
    HomePageComponent,
    ShearchBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent,
    ShearchBoxComponent,
    CardListComponent,
    CardComponent
  ]
})
export class GifsModule { }
