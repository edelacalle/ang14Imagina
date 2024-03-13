import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }    from './app.component';
import { NavegaComponent } from './navega/navega.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FormloginComponent } from './components/formlogin/formlogin.component'
import { FormsignupComponent } from './components/formsignup/formsignup.component';

import { MaterialModule } from './material/material.module';

import { LoteriaService } from './services/loteria.service';
import { LoteriaComponent } from './components/loteria/loteria.component';
import { PipesComponent } from './components/pipes/pipes.component';

import { ContadorComponent } from './components/contador/contador.component';


import { ElevadoPipe } from './pipes/elevado.pipe';
import { ReversePipe} from './pipes/reverse.pipe';
import { ReplacePipe } from './pipes/replace.pipe';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { userReducer } from './store/user.reducer';
import { ContaglobalComponent } from './components/contaglobal/contaglobal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegaComponent,
    FormloginComponent,
    FormsignupComponent,
    LoteriaComponent,
    PipesComponent,
    ElevadoPipe,
    ReversePipe,
    ReplacePipe,
    ContaglobalComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer , user: userReducer })
  ],
  exports:[
    ReversePipe
  ],

  providers: [LoteriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
