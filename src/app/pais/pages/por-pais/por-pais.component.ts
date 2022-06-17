import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  sugeridos: Country[] = [];

  constructor(private paisService: PaisService) {}
  buscar(value: string) {
    this.paises = [];
    this.sugeridos = [];
    this.termino = value;
    this.hayError = false;
    this.paisService.buscarPais(value).subscribe(
      (response) => {
        console.log(response);
        this.paises = response;
      },

      (error) => {
        this.hayError = true;
        console.error(error);
      }
    );
  }

  sugerencias(value: string) {
    this.hayError = false;
    this.termino = value;
    this.sugeridos = [];
    this.paisService
      .buscarPais(value)
      .subscribe((paises) => (this.sugeridos = paises.slice(0, 5)));
  }
  buscarSugerido(termino: string) {
    this.paisService
      .buscarPais(termino)
      .subscribe((paises) => (this.paises = paises));
  }
}
