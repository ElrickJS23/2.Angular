import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './pars/navegador/navegador.component';
import { ExpositorComponent } from './pars/expositor/expositor.component';
import { AangComponent } from './pars/aang/aang.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    ExpositorComponent,
    AangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
