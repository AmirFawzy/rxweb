import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { LESS_THAN_ROUTING } from './lessThan.routing';
import { LessThanComponent } from './lessThan.component';
import { LessThanValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/lessThan/less-than-validators-extended.module';
import { DisqusSharedModule } from "src/app/components/shared/disqus/disqus-shared.module";
import { RightSideBarSharedModule } from "src/app/components/shared/right-sidebar/right-sidebar-shared.module";
import { PipeCommonModule } from "src/app/pipes";
import { MergeDashPipe } from "src/app/pipes/merge-dash.pipe";

@NgModule({
  imports: [
    LESS_THAN_ROUTING,
    CommonModule, FormsModule, ReactiveFormsModule, HighlightModule, LessThanValidatorsExtendedModule, ClipboardModule,DisqusSharedModule,RightSideBarSharedModule,PipeCommonModule],
  declarations: [LessThanComponent],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[MergeDashPipe]
})
export class LessThanValidatorsModule { }

