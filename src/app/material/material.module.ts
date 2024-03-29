import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule} from '@angular/material/form-field';

import { MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


import {MatProgressBarModule} from '@angular/material/progress-bar';

import { LayoutModule } from '@angular/cdk/layout';




@NgModule({
  declarations: [],
  imports: [
  //  CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  exports:[
    //CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressBarModule

  ]
})
export class MaterialModule { }
