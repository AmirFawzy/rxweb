import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { NUMERIC_ROUTING } from './numeric.routing';
import { NumericComponent } from './numeric.component';
import { NumericDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/numeric/numeric-decorators-extended.module';
import { DisqusSharedModule } from "src/app/components/shared/disqus/disqus-shared.module";
import { RightSideBarSharedModule } from "src/app/components/shared/right-sidebar/right-sidebar-shared.module";
import { PipeCommonModule } from "src/app/pipes";
import { MergeDashPipe } from "src/app/pipes/merge-dash.pipe";

@NgModule({
  imports: [
    NUMERIC_ROUTING,
    CommonModule, FormsModule, ReactiveFormsModule, HighlightModule, NumericDecoratorsExtendedModule, ClipboardModule,DisqusSharedModule,RightSideBarSharedModule,PipeCommonModule],
  declarations: [NumericComponent],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[MergeDashPipe]
})
export class NumericDecoratorsModule { }

