import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
<h1>{{title}}</h1>
<span>{{numero}}</span>
<br>
<button (click)="numero=numero+1" >sumar</button>
<button (click)="numero=numero-1" >restar</button>
<br>
<span>{{base}}</span>
<br>
<button (click)="operacion(base)" >sumar</button>
<button (click)="operacion(-base)" >restar</button>


      `
  })

  export class ContadorComponent{
    title = 'Practica';
    numero=100;
    base=4;
    operacion(valor:number){
      this.numero+=valor;
    }
  }
