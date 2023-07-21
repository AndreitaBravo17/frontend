import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SistemaComponent } from './components/sistema/sistema.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { InscritosComponent } from './components/inscritos/inscritos.component';


@NgModule({
  declarations: [
    AppComponent,
    SistemaComponent,
    NotFoundComponent,
    CursosComponent,
    RegistroComponent,
    SolicitudesComponent,
    PagosComponent,
    InscritosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
