import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormloginComponent } from './components/formlogin/formlogin.component';
import { FormsignupComponent } from './components/formsignup/formsignup.component';
import { LoteriaComponent } from './components/loteria/loteria.component';
import { PipesComponent } from './components/pipes/pipes.component';

import { ContaglobalComponent } from './components/contaglobal/contaglobal.component';
import { ContadorComponent } from './components/contador/contador.component';

const routes: Routes = [
  
  {path:"login" , component: FormloginComponent , pathMatch:"full" },
  {path:"signup" , component: FormsignupComponent , pathMatch:"full" },
  {path:"loteria" , component: LoteriaComponent , pathMatch:"full" },
  {path:"pipes" , component: PipesComponent , pathMatch:"full" },
  {path:"store" , component: ContaglobalComponent  , pathMatch:"full" },
  {path:"contador" , component: ContadorComponent  , pathMatch:"full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
