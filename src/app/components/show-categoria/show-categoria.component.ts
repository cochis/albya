import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from 'src/app/models/categoria';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-show-categoria',
  templateUrl: './show-categoria.component.html',
  styleUrls: ['./show-categoria.component.css']
})
export class ShowCategoriaComponent implements OnInit {
  public categoria: Categoria;
  public categorias: any;
  public imgCategoria: any;

  constructor(// tslint:disable-next-line: variable-name
              private _route: ActivatedRoute,
              // tslint:disable-next-line: variable-name
              private _router: Router,
              // tslint:disable-next-line: variable-name
              private _categoriasService: CategoriasService) { }

  ngOnInit() {

    this._categoriasService.getCategorias().subscribe(
      res => {
        // tslint:disable-next-line:quotemark
        this.imgCategoria = "../../../assets/img/" ;
        this.categorias = res;
        // tslint:disable-next-line: prefer-for-of
        // for (let i = 0; i < this.categorias.length; i++) {
        //   console.log(this.categorias[i].imgCategoria);
        //   this.insertaImagen(this.categorias[i].idCategoria, this.categorias[i].imgCategoria);
        //  }


        // this._categoriasService.getCategoriaById(3).subscribe(
        //     res => {
        //       this.categoria= 
        //       console.log(res);
        //     },
        //     err => {
        //       console.log(err);
        //     }
        //   );
        },
  
        err => {
          console.log(err);
        });
  }

  insertaImagen(id , imagen) {
  // let imgId = "imgCategoria"+id;
    // console.log(id);
    // console.log(imagen);
    //   console.log(imgId );
    // document.getElementById(imgId).style.background-image = imagen;
    // document.getElementById(imgId).style.background-image = ""+imagen+"";
    // document.getElementById(imgId).style.background-repeat = "no-repeat";
    // document.getElementById(imgId).style.background-position = "center";
    // document.getElementById(imgId).style.background-size = "cover";

  }
  // verSubCategoria( idx:number ){
  //   this.router.navigate( ['/heroe',idx] );
  // }

}
