import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatDividerModule,
  MatGridListModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}
