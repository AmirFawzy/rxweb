import { defaultContainer } from '../core/defaultContainer';
import { AnnotationConfiguration } from '../core/validator.interface';
import { AnnotationTypes } from '../core/validator.static';

export function numeric(allowNegative?: boolean,message?: string) {
  return function (
    target: Object,
    propertyKey: string, parameterIndex?: number
  ) {
    var annotationConfiguration: AnnotationConfiguration = {
      propertyIndex: parameterIndex,
      propertyName: propertyKey,
      annotationType: AnnotationTypes.numeric,
      message: message,
      allowNegative:allowNegative
    }
    let isPropertyKey = (propertyKey != undefined);
    defaultContainer.addAnnotation(!isPropertyKey ? target : target.constructor, annotationConfiguration);
  }
}
