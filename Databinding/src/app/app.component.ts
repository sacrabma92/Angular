import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre : string = "Carlos";
  textoPlaceHolder: string = "Escriba algo aquí"
  text2 = ""
  
  // PropertyBinding
  deshabilitado: boolean =true
  imgSrc: string = 'https://yt3.googleusercontent.com/y4J_Fs5ksRlxx6_LzT1VKxVqH_T8Vyn_RN_YYgLJhuMzBS5qxTgm7NlEcMkQd3hgCpfWtYcEUg=s900-c-k-c0x00ffffff-no-rj'

  // EventBinging
  texto: string = "Este ejemplo es sobre event binding"

  constructor(){
    setInterval( () => this.nombre = 'Andrés', 3000),
    setInterval(() => this.deshabilitado = false, 5000)
  }

  getSuma(numero1: number, numero2: number): number{
    return numero1 + numero2
  }

  cambiarTexto (): void {
    this.texto = "Cambiando el texto Principal"
  }
}
