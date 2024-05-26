import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title : string = 'MI primera app en Angular';
  public counter : number = 10;

  public increaseBy(value: number) : void {
    this.counter += value;
  }

  public resetCounter(){
    this.counter = 10;
  }
}
