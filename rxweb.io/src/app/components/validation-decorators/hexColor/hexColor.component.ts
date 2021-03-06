import { Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HexColorCompleteComponent } from 'src/assets/examples/reactive-form-validators/decorators/hexColor/complete/hex-color-complete.component';
import { HexColorDynamicComponent } from 'src/assets/examples/reactive-form-validators/decorators/hexColor/dynamic/hex-color-dynamic.component';
import { DisqusComponent } from '../../shared/disqus/disqus.component';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { MergeDashPipe } from "src/app/pipes/merge-dash.pipe";

@Component({
  templateUrl: './hexColor.component.html',
  entryComponents: [
DisqusComponent
  ]
})
export class HexColorComponent implements OnInit {
  showComponent: boolean = false;
  options: any = { responseType: 'text' };
  codeContent:any = {};
  sidebarLinks:any = {"hexColor":null,"When to use":null,"Basic HexColor Validation":null,"HexColorConfig":["conditionalExpression","message"],"Complete hexColor Example":null,"Dynamic hexColor Example":null};
  tab_1:string = "basicadd";
   tab_2:string = "conditionalExpressionmodel";
   tab_3:string = "messageModel";
   tab_4:string = "completeexample";
   tab_5:string = "dynamicexample";
   
  constructor(
    private http: HttpClient   ,private mergeDashPipe:MergeDashPipe
  ) {
  }
  ngOnInit(): void {
	this.http.get('assets/examples/reactive-form-validators/decorators/hexColor/hexcolor.json',this.options).subscribe((response:object) => {
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
