---
title: mac
description: mac validation decorator will check whether the value entered is a valid mac address.
author: rxcontributorone

---
# When to use
Suppose you want to create a form in which you want user to enter mac address  which contains fields like device, macAddress, systemMacAddress. Here depending upon the requirement these scenarios may arise.
1.	The macAddress on which validation is checked.
2.  Apply mac validation based on matched condition in the form, like if the device  is ‘Laptop’ then the macAddress value should be in proper format.
3.  The Custom Message on systemMacAddress field.
4.	Apply dynamic validation, If the validation will be changed based on some criteria in the application.

Let’s see how mac validator fulfil the need.

# Basic mac Validation
First we need to create a User Model class and define property of mac and systemMacAddress in the model to achieve the functional need of point 1.
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\add\user.model.ts?condition="tab_1=='basicadd'"&type=section)]
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\edit\user.model.ts?condition="tab_1=='basicedit'"&type=section)]

Now, we need to create a `FormGroup` in the component. To achieve this we need to add `RxFormBuilder`. The `RxFormBuilder` is an injectable service that is provided with the `RxReactiveFormsModule`. Inject this dependency by adding it to the component constructor.
Here we have covered Add and Edit form operations. 

[!TabGroup]
# [Add](#tab\basicadd)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\add\mac-add.component.ts)]
# [Edit](#tab\basicedit)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\edit\mac-edit.component.ts)]
***

[conditional-paragraph?condition="tab_1=='basicedit'"]The below code is `mac-address-info-data.json` for getting data from the server

[!code-typescript[](\assets\examples\mac\edit\mac-address-info-data.json?condition="tab_1=='basicedit'"&type=section)]

Next, we need to write html code.
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\add\mac-add.component.html?condition="tab_1=='basicadd'"&type=section)]
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\edit\mac-edit.component.html?condition="tab_1=='basicedit'"&type=section)]

[!example(?condition="tab_1=='basicadd'"&type=tab&title=mac Decorator for add Example)]
<app-mac-add></app-mac-add>

[!example(?condition="tab_1=='basicedit'"&type=tab&title=mac Decorator for edit Example)]
<app-mac-edit></app-mac-edit>

# BaseConfig
Below options are not mandatory to use in the `@mac()` decorator. If needed then use the below options.

|Option | Description |
|--- | ---- |
|[conditionalExpression](#conditionalExpression) | mac validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function. |
|[message](#message) | To override the global configuration message and show the custom message on particular control property. |

## conditionalExpression 
Type :  `Function`  |  `string` 

mac validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function.
 
[!codeExample(?title=conditionalExpressionExampleFunction)]

[!codeExample(?title=conditionalExpressionExampleString)]

[!TabGroup(?showHideCondition="conditionalExpression")]
# [Model](#tab\conditionalExpressionmodel)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\conditionalExpression\user.model.ts)]
# [Component](#tab\conditionalExpressionComponent)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\conditionalExpression\mac-conditional-expressions.component.ts)]
# [Html](#tab\conditionalExpressionHtml)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\conditionalExpression\mac-conditional-expressions.component.html)]
***

[!example(?type=section&clickEventCode="conditionalExpression=!conditionalExpression"&title=mac decorator with conditionalExpression)]
<app-mac-conditionalExpression></app-mac-conditionalExpression>


## message
Type :  `string` 
To override the global configuration message and show the custom message on particular control property.

[!codeExample(?title=messageExample)]

[!TabGroup(?showHideCondition="message")]
# [Model](#tab\messageModel)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\message\user.model.ts)]
# [Component](#tab\messageComponent)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\message\mac-message.component.ts)]
# [Html](#tab\messageHtml)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\message\mac-message.component.html)]
***

[!example(?type=section&clickEventCode="message=!message"&title=mac decorator with custom message)]
<app-mac-message></app-mac-message>

# Complete mac Example

This Complete mac example which includes all the BaseConfig properties will fulfil the requirement of scenarios 1, 2 and 3.

[!TabGroup]
# [Example](#tab\completeexample)
<app-mac-complete></app-mac-complete>
# [Model](#tab\completemodel)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\complete\user.model.ts)]
# [Component](#tab\completecomponent)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\complete\mac-complete.component.ts)]
# [Html](#tab\completehtml)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\complete\mac-complete.component.html)]
***

# Dynamic mac Example
[!TabGroup]
# [Example](#tab\dynamicexample)
<app-mac-dynamic></app-mac-dynamic>
# [Model](#tab\dynamicmodel)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\dynamic\user.model.ts)]
# [Component](#tab\dynamiccomponent)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\dynamic\mac-dynamic.component.ts)]
# [Json](#tab\dynamicjson)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\dynamic\dynamic.json)]
# [Html](#tab\dynamichtml)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\mac\dynamic\mac-dynamic.component.html)]
***