import { AlphaConfig } from "../models/config/alpha-config";
import { CompareConfig } from "../models/config/compare-config";
import { PatternConfig } from "../models/config/pattern-config";
import { DateConfig } from "../models/config/date-config";
import { DefaultConfig } from "../models/config/default-config";
import { NumberConfig } from "../models/config/number-config";
import { RangeConfig } from "../models/config/range-config";

export interface DecoratorConfiguration {
    annotationType: string;
    propertyName: string;
    propertyIndex: number;
    target?: any;
    propertyConstructor?: any;
    config?: any
}

export interface InstanceContainer {
    instance: any;
    propertyAnnotations: DecoratorConfiguration[];
    properties?: PropertyInfo[]
    conditionalValidationProps?: { [key: string]: string[] }
    conditionalObjectProps?: {[key:string]:any}
}

export interface PropertyInfo {
    name: string;
    propertyType: string;
    entity?: any;
}

