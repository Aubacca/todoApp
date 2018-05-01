import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {
  FeatureRoutingModule,
  ROUNTING_COMPONENTS
} from './feature-routing.module';
import { TodoService } from '@app/features/services/todo.service';

@NgModule({
  declarations: [ROUNTING_COMPONENTS],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [TodoService]
})
export class FeatureModule {}
