import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServiceTsService } from '../services/dbz.service.ts.service';

@Component({
  selector: 'app--dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(
    private dbzService: DbzServiceTsService
  ){}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string) : void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter2( character: Character){
    this.dbzService.addCharacter( character );
  }

}
