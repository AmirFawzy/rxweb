---
title: ascii
description: ascii validation decorator allows user to enter the input which is in the proper ascii format.
author: rxcontributortwo

---
# When to use
Let's assume you are creating a user form, which contains fields like language, numberAsciiCode, alphabetAsciiCode and specialCharAsciiCode and you want the user to enter input which is an ascii code. Here depending upon the requirement, these scenarios may arise..

1. Allow specialCharAsciiCode which have proper ascii format and adding Custom Message on specialCharAsciiCode.
2. Apply numberAsciiCode validation based on matched condition in the form, like if the language is 'Java', then the numberAsciiCode must be an ascii code (Used as a function).
3. Apply alphabetAsciiCode validation based on matched condition in the form, like if the language is 'Java', then the alphabetAsciiCode must be an ascii code (Used as a string datatype).
4. Apply dynamic validation, If the validation is changed based on some criteria in the application.

Let's see how ascii decorator fulfil the need.

# Basic Ascii Validation
First we need to create a model and define a property of specialCharAsciiCode in the model to achieve the functional need of point 1.
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\add\ascii.model.ts?condition="tab_1=='basicadd'"&type=section)]
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\edit\ascii.model.ts?condition="tab_1=='basicedit'"&type=section)]

Now, we need to create a FormGroup in the component. To achieve this we need to add RxFormBuilder. The RxFormBuilder is an injectable service that is provided with the RxReactiveFormsModule. Inject this dependency by adding it to the component constructor.
Here we have covered Add and Edit form operations. 

[!TabGroup]
# [Add](#tab\basicadd)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\add\ascii-add.component.ts?type=section)]
# [Edit](#tab\basicedit)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\edit\ascii-edit.component.ts?type=section)]
***

Next, we need to write html code.
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\add\ascii-add.component.html?condition="tab_1=='basicadd'"&type=section)]
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\edit\ascii-edit.component.html?condition="tab_1=='basicedit'"&type=section)]

[!example(?condition="tab_1=='basicadd'"&type=tab&title=ascii Decorator for add Example)]
<app-ascii-add></app-ascii-add>

[!example(?condition="tab_1=='basicedit'"&type=tab&title=ascii Decorator for edit Example)]
<app-ascii-edit></app-ascii-edit>

# DefaultConfig
message and conditionalExpression are not mandatory to use in the `@ascii()` decorator. If needed then use the below options.

|Option | Description |
|--- | ---- |
|[conditionalExpression](#conditionalExpression) | ascii validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function. |
|[message](#message) | To override the global configuration message and show the custom message on particular control property. |

## conditionalExpression 
Type :  `Function`  |  `string` 

ascii validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function.

[!TabGroup(?showHideCondition="conditionalExpression")]
# [Model](#tab\conditionalExpressionmodel)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\conditionalExpression\ascii.model.ts)]
# [Component](#tab\conditionalExpressionComponent)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\conditionalExpression\ascii-conditional-expressions.component.ts)]
# [Html](#tab\conditionalExpressionHtml)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\conditionalExpression\ascii-conditional-expressions.component.html)]
***

[!example(?type=section&clickEventCode="conditionalExpression=!conditionalExpression"&title=ascii decorator with conditionalExpression)]
<app-ascii-conditionalExpression></app-ascii-conditionalExpression>

## message 
Type :  `string` 

To override the global configuration message and show the custom message on particular control property.

[!TabGroup(?showHideCondition="message")]
# [Model](#tab\messageModel)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\message\ascii.model.ts)]
# [Component](#tab\messageComponent)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\message\ascii-message.component.ts)]
# [Html](#tab\messageHtml)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\message\ascii-message.component.html)]
***

[!example(?type=section&clickEventCode="message=!message"&title=ascii decorator with custom message)]
<app-ascii-message></app-ascii-message>

# Complete ascii Example
[!TabGroup]
# [Example](#tab\completeexample)
<app-ascii-complete></app-ascii-complete>
# [Model](#tab\completemodel)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\complete\ascii.model.ts)]
# [Component](#tab\completecomponent)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\complete\ascii-complete.component.ts)]
# [Html](#tab\completehtml)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\complete\ascii-complete.component.html)]
***

# Dynamic ascii Example
[!TabGroup]
# [Example](#tab\dynamicexample)
<app-ascii-dynamic></app-ascii-dynamic>
# [Model](#tab\dynamicmodel)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\dynamic\user.model.ts)]
# [Component](#tab\dynamiccomponent)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\dynamic\ascii-dynamic.component.ts)]
# [Html](#tab\dynamichtml)
[!code-typescript[](\assets\examples\reactive-form-validators\decorators\ascii\dynamic\ascii-dynamic.component.html)]
***