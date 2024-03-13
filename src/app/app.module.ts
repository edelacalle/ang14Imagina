//import { NgModule } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }    from './app.component';
import { NavegaComponent } from './navega/navega.component';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { FormloginComponent } from './components/formlogin/formlogin.component'

import { FormsignupComponent } from './components/formsignup/formsignup.component';

import { MaterialModule } from './material/material.module';

import { LoteriaService } from './services/loteria.service';
import { LoteriaComponent } from './components/loteria/loteria.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ElevadoPipe } from './pipes/elevado.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavegaComponent,
    FormloginComponent,
    FormsignupComponent,
    LoteriaComponent,
    PipesComponent,
    ElevadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[
    ElevadoPipe
  ],

  providers: [LoteriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
