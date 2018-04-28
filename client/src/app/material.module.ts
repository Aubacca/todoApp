import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatDividerModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule
  ]
})
export class MaterialModule {}
