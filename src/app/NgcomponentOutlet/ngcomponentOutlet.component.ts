import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcomponentOutlet',
  templateUrl: './ngcomponentOutlet.component.html',
})
export class NgComponentOutletComponent {
  dataCargada: any;
  ngOnInit() {
    setTimeout(() => {
      this.dataCargada = 'cargada!';
    }, 3000);
  }
}