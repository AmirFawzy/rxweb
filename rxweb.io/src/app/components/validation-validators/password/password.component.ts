import { Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PasswordCompleteValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/password/complete/password-complete.component';
import { PasswordDynamicValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/password/dynamic/password-dynamic.component';
import { DisqusComponent } from '../../shared/disqus/disqus.component';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { MergeDashPipe } from "src/app/pipes/merge-dash.pipe";

@Component({
  templateUrl: './password.component.html',
  entryComponents: [
DisqusComponent
  ]
})
export class PasswordComponent implements OnInit {
  showComponent: boolean = false;
  options: any = { responseType: 'text' };
  codeContent:any = {};
  sidebarLinks:any = {"password":null,"When to use":null,"Basic password Validation":null,"PasswordConfig":["message","validation"],"Complete password Example":null,"Dynamic password Example":null};
  tab_1:string = "messageComponent";
   tab_2:string = "validationComponent";
   tab_3:string = "completeExample";
   tab_4:string = "dynamicExample";
   
  constructor(
    private http: HttpClient   ,private mergeDashPipe:MergeDashPipe
  ) {
  }
  ngOnInit(): void {
	this.http.get('assets/examples/reactive-form-validators/validators/password/password.json',this.options).subscribe((response:object) => {
      this.codeContent = JSON.parse(response.toString());
	  let splitedArray = location.pathname.split('/');
	  if(splitedArray[2] != undefined)
		document.title = splitedArray[2] + " : " + this.mergeDashPipe.transform(splitedArray[1])
	  else
		document.title = splitedArray[1] ? this.mergeDashPipe.transform(splitedArray[1]) : "rxweb:reactive form validators"
	  this.showComponent = true;
    })
  }
  scrollTo(section) {  
    var node = document.querySelector(section);
    node.scrollIntoView(true);
    var scrolledY = window.scrollY;
    if(scrolledY){
      window.scroll(0, scrolledY - 62);
    }
	return false;
  }
}
