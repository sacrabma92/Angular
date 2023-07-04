import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  cambiarnombre:  boolean = true;
  cambiaredad:  boolean = true;

  public name:  string = 'ironman';
  public age:   number = 45;

  get capitalizeName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription() : string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero() : void {
    this.name = 'superman';
    this.cambiarnombre = false;
  }

  changeAge(): void{
    this.age = 25;
    this.cambiaredad = false;
  }

  resetForm(): void{
    this.name = 'ironman';
    this.age = 45;
    this.cambiaredad = true;
    this.cambiarnombre = true;
  }

}
