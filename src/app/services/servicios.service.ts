import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Servicio } from '../models/servicios';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  public url = Global.url;

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }
  getServicioById(id) {
    console.log(`${this.url}servicio/read.php/${id}`);
    return this._http.get(`${this.url}servicio/read.php/${id}`);
  }
  getServicios() {
    return this._http.get(`${this.url}servicio/read.php`);
  }

}




