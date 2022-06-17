import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  regionActiva: string = '';
  paises: Country[] = [];
  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];
  constructor(private paisService: PaisService) {}

  activarRegion = (region: string) => {
    if (region === this.regionActiva) {
      return;
    }
    this.paises = [];
    this.regionActiva = region;
    this.paisService.buscarRegion(region).subscribe((response) => {
      this.paises = response;
    });
  };
}
