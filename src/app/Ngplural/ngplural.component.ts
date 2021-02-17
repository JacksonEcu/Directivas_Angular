import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngplural',
  templateUrl: './ngplural.component.html',
})
export class NgPluralComponent {
  dataCargada: any;
  ngOnInit() {
    setTimeout(() => {
      this.dataCargada = 'cargada!';
    }, 3000);
  }
}