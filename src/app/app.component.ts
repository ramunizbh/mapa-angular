import { Component } from '@angular/core';

@Component({
  selector: 'mapa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Relatório Mundial';
  dataAtual = new Date();
}
