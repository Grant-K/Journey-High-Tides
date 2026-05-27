import { $Annotation } from "@package/java/lang/annotation";
import { $Event as $Event$1 } from "@package/jdk/internal/event";
import { $Object, $Class } from "@package/java/lang";
import { $List_, $Map_, $List } from "@package/java/util";
export * as consumer from "@package/jdk/jfr/consumer";

declare module "@package/jdk/jfr" {
    export class $Event extends $Event$1 {
    }
    export class $AnnotationElement {
        getAnnotationElements(): $List<$AnnotationElement>;
        getValueDescriptors(): $List<$ValueDescriptor>;
        hasValue(arg0: string): boolean;
        getTypeId(): number;
        getValues(): $List<$Object>;
        getValue(arg0: string): $Object;
        getTypeName(): string;
        getAnnotation<A>(arg0: $Class<$Annotation>): A;
        constructor(arg0: $Class<$Annotation>, arg1: $Object);
        constructor(arg0: $Class<$Annotation>, arg1: $Map_<string, $Object>);
        constructor(arg0: $Class<$Annotation>);
        get annotationElements(): $List<$AnnotationElement>;
        get valueDescriptors(): $List<$ValueDescriptor>;
        get typeId(): number;
        get values(): $List<$Object>;
        get typeName(): string;
    }
    export class $ValueDescriptor {
        getAnnotationElements(): $List<$AnnotationElement>;
        getLabel(): string;
        getContentType(): string;
        getTypeId(): number;
        getDescription(): string;
        getName(): string;
        isArray(): boolean;
        getTypeName(): string;
        getFields(): $List<$ValueDescriptor>;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        constructor(arg0: $Class<never>, arg1: string);
        constructor(arg0: $Class<never>, arg1: string, arg2: $List_<$AnnotationElement>);
        get annotationElements(): $List<$AnnotationElement>;
        get label(): string;
        get contentType(): string;
        get typeId(): number;
        get description(): string;
        get name(): string;
        get array(): boolean;
        get typeName(): string;
        get fields(): $List<$ValueDescriptor>;
    }
    export class $EventType {
        getAnnotationElements(): $List<$AnnotationElement>;
        static getEventType(arg0: $Class<$Event>): $EventType;
        getCategoryNames(): $List<string>;
        getSettingDescriptors(): $List<$SettingDescriptor>;
        getLabel(): string;
        getDescription(): string;
        getName(): string;
        isEnabled(): boolean;
        getFields(): $List<$ValueDescriptor>;
        getField(arg0: string): $ValueDescriptor;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getId(): number;
        get annotationElements(): $List<$AnnotationElement>;
        get categoryNames(): $List<string>;
        get settingDescriptors(): $List<$SettingDescriptor>;
        get label(): string;
        get description(): string;
        get name(): string;
        get enabled(): boolean;
        get fields(): $List<$ValueDescriptor>;
        get id(): number;
    }
    export class $SettingDescriptor {
        getAnnotationElements(): $List<$AnnotationElement>;
        getLabel(): string;
        getContentType(): string;
        getTypeId(): number;
        getDefaultValue(): string;
        getDescription(): string;
        getName(): string;
        getTypeName(): string;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        get annotationElements(): $List<$AnnotationElement>;
        get label(): string;
        get contentType(): string;
        get typeId(): number;
        get defaultValue(): string;
        get description(): string;
        get name(): string;
        get typeName(): string;
    }
}
