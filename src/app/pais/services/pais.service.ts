import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2';
  private httpParams(): HttpParams {
    return new HttpParams().set(
      'fields',
      'name,flag,alpha2Code,capital,population'
    );
  }
  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${termino}`, {
      params: this.httpParams(),
    });
  }

  buscarCapital(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${termino}`, {
      params: this.httpParams(),
    });
  }

  verPais(code: string) {
    return this.http.get(`${this.apiUrl}/alpha/${code}`);
  }
  buscarRegion(code: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/regionalbloc/${code}`, {
      params: this.httpParams(),
    });
  }
}
