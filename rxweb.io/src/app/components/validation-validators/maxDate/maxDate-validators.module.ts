import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { MAX_DATE_ROUTING } from './maxDate.routing';
import { MaxDateComponent } from './maxDate.component';
import { MaxDateValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/maxDate/max-date-validators-extended.module';
import { DisqusSharedModule } from "src/app/components/shared/disqus/disqus-shared.module";
import { RightSideBarSharedModule } from "src/app/components/shared/right-sidebar/right-sidebar-shared.module";
import { PipeCommonModule } from "src/app/pipes";
import { MergeDashPipe } from "src/app/pipes/merge-dash.pipe";

@NgModule({
  imports: [
    MAX_DATE_ROUTING,
    CommonModule, FormsModule, ReactiveFormsModule, HighlightModule, MaxDateValidatorsExtendedModule, ClipboardModule,DisqusSharedModule,RightSideBarSharedModule,PipeCommonModule],
  declarations: [MaxDateComponent],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[MergeDashPipe]
})
export class MaxDateValidatorsModule { }

