import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule,
    NoopAnimationsModule, // animation
    MatToolbarModule, // tollbar
    MatButtonModule, // button
    MatSidenavModule, // sidenav
    MatCardModule, // card
  ],
  declarations: []
})
export class CoreModule { }
