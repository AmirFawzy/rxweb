import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule, DecimalPipe } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RxFormBuilder } from "./rx-form-builder";
import { RxwebFormDirective } from "../directives/rx-form.directive";
import { DecimalProvider } from "../domain/element-processor/decimal.provider"
import { RxwebDynamicFormComponent} from '../components/rx-web-dynamic-form.component'
import { RxwebControlComponent } from '../components/rxweb-control.component'
import { HtmlControlTemplateDirective} from '../directives/html-control-template.directive'
import { ControlHostDirective} from '../directives/control-host.directive'
import {RxFormControlDirective  } from "../directives/template-validations/rxformcontrol.directive"
@NgModule({
    declarations: [RxwebFormDirective, RxwebDynamicFormComponent,HtmlControlTemplateDirective,RxwebControlComponent,ControlHostDirective,RxFormControlDirective  ],
    imports: [CommonModule,FormsModule, ReactiveFormsModule],
    providers: [RxFormBuilder,DecimalProvider, DecimalPipe],
    exports:[RxwebFormDirective,RxwebDynamicFormComponent,HtmlControlTemplateDirective,RxwebControlComponent,RxFormControlDirective  ]
})
export class RxReactiveFormsModule {
    static forRoot(): ModuleWithProviders { return { ngModule: RxReactiveFormsModule, providers: [] }; }
}
