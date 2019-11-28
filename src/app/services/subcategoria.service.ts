import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { SubCategoria } from '../models/subCategoria';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {
  public url = Global.url;

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  getSubCategoriaById(id) {
    console.log(`${this.url}servicio/read.php/${id}`);
    return this._http.get(`${this.url}subCategoria/read.php?id=${id}`);
  }
  getSubCategorias() {
    return this._http.get(`${this.url}subCategoria/read.php`);
  }
}

