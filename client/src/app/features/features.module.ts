import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material.module';

import {
  FeaturesRoutingModule,
  ROUNTING_COMPONENTS
} from './features-routing.module';
import { TodoService } from '@app/features/services/todo.service';

@NgModule({
  declarations: [ROUNTING_COMPONENTS],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [TodoService]
})
export class FeaturesModule {}
