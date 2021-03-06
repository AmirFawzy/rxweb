---
title: hexColor  
description: HexColor validation decorator will allow user to enter only the input in proper Hex Color format.
author: rxcontributortwo

---
# When to use
Suppose you want to create a User form, which contains fields like ColorPicker, HeaderHexColorCode, BodyHexColorCode, StrictHexColorCode and you want the user to enter only the hex color format. Here depending upon the requirement these scenarios may arise.
1.	Allow string which is a hex color format like in ColorPicker field.
2.	Apply hexColor validation based on matched condition in the form, like if the ColorPicker is `#AFAFAF`, then only the HeaderHexColorCode field will be validated to hexColor validator.
3.	Adding Custom Message on BodyHexColorCode field.
4. Applying strict format of hexCode in StrictHexCode field.
5.	Apply dynamic validation, If the validation will be changed based on some criteria in the application.

Let’s see how hexColor validator fulfil the need.

# Basic HexColor Validation
First we need to create a User class and define a property of Color in the model to achieve the functional need of point 1.
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\add\user.model.ts?condition="tab_1=='basicadd'"&type=section)]
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\edit\user.model.ts?condition="tab_1=='basicedit'"&type=section)]

Now, we need to create a `FormGroup` in the component. To achieve this, we need to add `RxFormBuilder`. The `RxFormBuilder` is an injectable service that is provided with the `RxReactiveFormsModule`. Inject this dependency by adding it to the component constructor.

[!TabGroup]
# [Add](#tab\basicadd)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\add\hex-color-add.component.ts)]
# [Edit](#tab\basicedit)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\edit\hex-color-edit.component.ts)]
***

[conditional-paragraph?condition="tab_1=='basicedit'"]The below code is `user-data.json` for getting data from the server

[!code-typescript[](\assets\examples\hexColor\edit\user-data.json?condition="tab_1=='basicedit'"&type=section)]

Next, we need to write html code.
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\add\hex-color-add.component.html?condition="tab_1=='basicadd'"&type=section)]
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\edit\hex-color-edit.component.html?condition="tab_1=='basicedit'"&type=section)]

[!example(?condition="tab_1=='basicadd'"&type=tab&title=hexColor Decorator for add Example)]
<app-hexColor-add></app-hexColor-add>

[!example(?condition="tab_1=='basicedit'"&type=tab&title=hexColor Decorator for edit Example)]
<app-hexColor-edit></app-hexColor-edit>

# HexColorConfig 
Below options are not mandatory to use in the `@hexColor()` decorator. If needed then use the below options.

|Option | Description |
|--- | ---- |
|[conditionalExpression](#conditionalExpression) | HexColor validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function. |
|[message](#message) | To override the global configuration message and show the custom message on particular control property. |

## conditionalExpression 
Type :  `Function`  |  `string` 

HexColor validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function.

[!codeExample(?title=conditionalExpressionExampleFunction)]

[!codeExample(?title=conditionalExpressionExampleString)]

[!TabGroup(?showHideCondition="conditionalExpression")]
# [Model](#tab\conditionalExpressionmodel)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\conditionalExpression\hexcolor-info.model.ts)]
# [Component](#tab\conditionalExpressionComponent)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\conditionalExpression\hex-color-conditional-expressions.component.ts)]
# [Html](#tab\conditionalExpressionHtml)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\conditionalExpression\hex-color-conditional-expressions.component.html)]
***

[!example(?type=section&clickEventCode="conditionalExpression=!conditionalExpression"&title=hexColor decorator with conditionalExpression)]
<app-hexColor-conditionalExpression></app-hexColor-conditionalExpression>
 
## message 
Type :  `string` 

To override the global configuration message and show the custom message on particular control property.

[!codeExample(?title=messageExample)]

[!TabGroup(?showHideCondition="message")]
# [Model](#tab\messageModel)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\message\hexcolor-info.model.ts)]
# [Component](#tab\messageComponent)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\message\hex-color-message.component.ts)]
# [Html](#tab\messageHtml)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\message\hex-color-message.component.html)]
***

[!example(?type=section&clickEventCode="message=!message"&title=hexColor decorator with custom message)]
<app-hexColor-message></app-hexColor-message>

# Complete hexColor Example

This Complete hexColor example which includes all the HexColorConfig properties will fulfil the requirement of scenarios 1, 2, 3,4 and 5

[!TabGroup]
# [Example](#tab\completeexample)
<app-hexColor-complete></app-hexColor-complete>
# [Model](#tab\completemodel)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\complete\hexcolor-info.model.ts)]
# [Component](#tab\completecomponent)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\complete\hex-color-complete.component.ts)]
# [Html](#tab\completehtml)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\complete\hex-color-complete.component.html)]
***

# Dynamic hexColor Example
[!TabGroup]
# [Example](#tab\dynamicexample)
<app-hexColor-dynamic></app-hexColor-dynamic>
# [Model](#tab\dynamicmodel)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\dynamic\hexcolor-info.model.ts)]
# [Component](#tab\dynamiccomponent)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\dynamic\hex-color-dynamic.component.ts)]
# [Json](#tab\dynamicjson)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\dynamic\dynamic.json)]
# [Html](#tab\dynamichtml)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\hexColor\dynamic\hex-color-dynamic.component.html)]
***