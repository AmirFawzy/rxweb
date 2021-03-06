import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { FormBuilderConfiguration} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-latLong-dynamic-validator',
    templateUrl: './lat-long-dynamic.component.html'
})
export class LatLongDynamicValidatorComponent implements OnInit {
    countryFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder , private http: HttpClient )
	{ }

    ngOnInit() {
		let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('assets/examples/reactive-form-validators/validators/latLong/dynamic/dynamic.json').subscribe(dynamic => {
			formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			var country = { continent:'', secondCountry:'', thirdCountry:'', firstCountry:'',  }
			this.countryFormGroup = this.formBuilder.group(country,formBuilderConfiguration);
		})
    }
}
