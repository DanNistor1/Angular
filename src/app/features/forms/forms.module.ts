import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { NgModule } from '@angular/core';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormsComponent,
    ModelDrivenComponent,
    TemplateDrivenComponent
  ],
  imports: [
    SharedModule,
    FormsRoutingModule
  ],
})
export class FormsModule { }
