import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She hulk', 'Thor'];
  public deleteHero?: string = '';

  removeLastHero() : void {
    this.deleteHero = this.heroNames.pop();
  }

}
