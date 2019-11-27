import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Categoria } from '../models/categoria';
import { __values } from 'tslib';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  public url = Global.url;

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }
  getCategorias() {
    return this._http.get(`${this.url}categoria/read.php`);
  }
  getUsuarios() {
    return this._http.get(`${this.url}usuario/read.php`);
  }
}


