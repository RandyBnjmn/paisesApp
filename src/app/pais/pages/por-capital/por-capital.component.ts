import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(value: string) {
    this.hayError = false;
    this.termino = value;
    this.paises = [];
    this.paisService.buscarCapital(value).subscribe(
      (response) => {
        this.paises = response;
      },

      (error) => {
        this.hayError = true;
        console.log(error);
      }
    );
  }
}
