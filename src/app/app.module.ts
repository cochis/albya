import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsuariosService } from './usuarios.service';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { MenuCategoriasComponent } from './components/menu-categorias/menu-categorias.component';
import { ShowCategoriaComponent } from './components/show-categoria/show-categoria.component';
import { ShowServiciosComponent } from './components/show-servicios/show-servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    BusquedaComponent,
    MenuCategoriasComponent,
    ShowCategoriaComponent,
    ShowServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
