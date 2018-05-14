import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@app/material.module';

import { reducers, effects } from './store';

import * as fromServices from './services';

import {
  FeaturesRoutingModule,
  ROUNTING_COMPONENTS
} from './features-routing.module';
import { TodoListViewComponent } from '@features/components/todo-list/todo-list-view.component';
import { TodoDetailViewComponent } from '@features/components/todo-detail/todo-detail-view.component';

@NgModule({
  declarations: [
    ROUNTING_COMPONENTS,
    TodoListViewComponent,
    TodoDetailViewComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forFeature('features', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromServices.services]
})
export class FeaturesModule {}
