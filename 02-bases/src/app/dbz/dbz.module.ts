import { NgModule } from '@angular/core';

import { DbzComponent } from './pages/main-page.component';
import { ListdbzComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    DbzComponent,
    ListdbzComponent,
    AddCharacterComponent
  ],
  exports: [
    DbzComponent
  ]
})
export class DbzModule { }
// 