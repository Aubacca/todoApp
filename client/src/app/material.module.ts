import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { MatButtonModule, MatCardModule, MatListModule, MatIconModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule],
  exports: [MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule]
})
export class MaterialModule {}