import { $Supplier_ } from "@package/java/util/function";
import { $TypeWrapperFactory } from "@package/dev/latvian/mods/rhino/util/wrap";
import { $Type, $TypeVariable } from "@package/java/lang/reflect";
import { $List, $Map_, $Map, $Set, $Collection_, $List_ } from "@package/java/util";
import { $Record, $StringBuilder, $Object, $Class } from "@package/java/lang";

declare module "@package/dev/latvian/mods/rhino/type" {
    export class $JSFixedArrayTypeInfo extends $Record implements $TypeInfo {
        asClass(): $Class<never>;
        collectContainedComponentClasses(arg0: $Collection_<$Class<never>>): void;
        types(): $List<$JSOptionalParam>;
        append(arg0: $TypeStringContext, arg1: $StringBuilder): void;
        withParams(...arg0: $TypeInfo_[]): $TypeInfo;
        shouldConvert(): boolean;
        isFunctionalInterface(): boolean;
        getContainedComponentClasses(): $Set<$Class<never>>;
        createDefaultValue(): $Object;
        isByte(): boolean;
        isInt(): boolean;
        consolidate(arg0: $Map_<$VariableTypeInfo, $TypeInfo_>): $TypeInfo;
        or(arg0: $TypeInfo_): $TypeInfo;
        isCharacter(): boolean;
        isFloat(): boolean;
        param(arg0: number): $TypeInfo;
        isVoid(): boolean;
        is(arg0: $TypeInfo_): boolean;
        asArray(): $TypeInfo;
        isBoolean(): boolean;
        recordComponents(): $Map<string, $RecordTypeInfo$Component>;
        isDouble(): boolean;
        isLong(): boolean;
        isShort(): boolean;
        signature(): string;
        isPrimitive(): boolean;
        newArray(arg0: number): $Object;
        componentType(): $TypeInfo;
        enumConstants(): $List<$Object>;
        constructor(types: $List_<$JSOptionalParam_>);
        get functionalInterface(): boolean;
        get containedComponentClasses(): $Set<$Class<never>>;
        get byte(): boolean;
        get int(): boolean;
        get character(): boolean;
        get float(): boolean;
        get void(): boolean;
        get boolean(): boolean;
        get double(): boolean;
        get long(): boolean;
        get short(): boolean;
        get primitive(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $JSFixedArrayTypeInfo}.
     */
    export type $JSFixedArrayTypeInfo_ = { types?: $List_<$JSOptionalParam_>,  } | [types?: $List_<$JSOptionalParam_>, ];
    export class $RecordTypeInfo extends $ClassTypeInfo implements $TypeWrapperFactory<$Object> {
        getObjectTypeInfo(): $JSObjectTypeInfo;
        getArrayTypeInfo(): $JSFixedArrayTypeInfo;
        static setGlobalDefaultValue<T>(arg0: $Class<T>, arg1: T): void;
        createCombinedType(...arg0: $TypeInfo_[]): $TypeInfo;
        getData(): $RecordTypeInfo$Data;
        createInstance(arg1: $Map_<never, never>): $Object;
        createInstance(...arg1: $Object[]): $Object;
        wrap(arg1: $Object, arg2: $TypeInfo_): $Object;
        get objectTypeInfo(): $JSObjectTypeInfo;
        get arrayTypeInfo(): $JSFixedArrayTypeInfo;
        get data(): $RecordTypeInfo$Data;
    }
    export class $EnumTypeInfo extends $ClassTypeInfo implements $TypeWrapperFactory<$Object> {
        static getName(arg0: $Object): string;
        wrap(arg1: $Object, arg2: $TypeInfo_): $Object;
    }
    export class $JSObjectTypeInfo extends $Record implements $TypeInfo {
        asClass(): $Class<never>;
        collectContainedComponentClasses(arg0: $Collection_<$Class<never>>): void;
        append(arg0: $TypeStringContext, arg1: $StringBuilder): void;
        static of(...arg0: $JSOptionalParam_[]): $JSObjectTypeInfo;
        static of(arg0: $JSOptionalParam_): $JSObjectTypeInfo;
        static of(arg0: $JSOptionalParam_, arg1: $JSOptionalParam_): $JSObjectTypeInfo;
        fields(): $List<$JSOptionalParam>;
        withParams(...arg0: $TypeInfo_[]): $TypeInfo;
        shouldConvert(): boolean;
        isFunctionalInterface(): boolean;
        getContainedComponentClasses(): $Set<$Class<never>>;
        createDefaultValue(): $Object;
        isByte(): boolean;
        isInt(): boolean;
        consolidate(arg0: $Map_<$VariableTypeInfo, $TypeInfo_>): $TypeInfo;
        or(arg0: $TypeInfo_): $TypeInfo;
        isCharacter(): boolean;
        isFloat(): boolean;
        param(arg0: number): $TypeInfo;
        isVoid(): boolean;
        is(arg0: $TypeInfo_): boolean;
        asArray(): $TypeInfo;
        isBoolean(): boolean;
        recordComponents(): $Map<string, $RecordTypeInfo$Component>;
        isDouble(): boolean;
        isLong(): boolean;
        isShort(): boolean;
        signature(): string;
        isPrimitive(): boolean;
        newArray(arg0: number): $Object;
        componentType(): $TypeInfo;
        enumConstants(): $List<$Object>;
        constructor(fields: $List_<$JSOptionalParam_>);
        get functionalInterface(): boolean;
        get containedComponentClasses(): $Set<$Class<never>>;
        get byte(): boolean;
        get int(): boolean;
        get character(): boolean;
        get float(): boolean;
        get void(): boolean;
        get boolean(): boolean;
        get double(): boolean;
        get long(): boolean;
        get short(): boolean;
        get primitive(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $JSObjectTypeInfo}.
     */
    export type $JSObjectTypeInfo_ = { fields?: $List_<$JSOptionalParam_>,  } | [fields?: $List_<$JSOptionalParam_>, ];
    export class $JSOptionalParam extends $Record {
        optional(): boolean;
        name(): string;
        type(): $TypeInfo;
        append(arg0: $TypeStringContext, arg1: $StringBuilder): void;
        constructor(arg0: string, arg1: $TypeInfo_);
        constructor(name: string, type: $TypeInfo_, optional: boolean);
    }
    /**
     * Values that may be interpreted as {@link $JSOptionalParam}.
     */
    export type $JSOptionalParam_ = { type?: $TypeInfo_, name?: string, optional?: boolean,  } | [type?: $TypeInfo_, name?: string, optional?: boolean, ];
    export class $TypeStringContext {
        static DEFAULT: $TypeStringContext;
    }
    export interface $TypeStringContext {
        appendClassName(arg0: $StringBuilder, arg1: $ClassTypeInfo): void;
        appendSpace(arg0: $StringBuilder): void;
        toString(arg0: $TypeInfo_): string;
        append(arg0: $StringBuilder, arg1: $TypeInfo_): void;
    }
    export class $RecordTypeInfo$Component extends $Record {
        index(): number;
        name(): string;
        type(): $TypeInfo;
        constructor(index: number, name: string, type: $TypeInfo_);
    }
    /**
     * Values that may be interpreted as {@link $RecordTypeInfo$Component}.
     */
    export type $RecordTypeInfo$Component_ = { index?: number, name?: string, type?: $TypeInfo_,  } | [index?: number, name?: string, type?: $TypeInfo_, ];
    export class $VariableTypeInfo extends $TypeInfoBase {
        getMainBound(): $TypeInfo;
        getName(): string;
        getBounds(): $TypeInfo[];
        get mainBound(): $TypeInfo;
        get name(): string;
        get bounds(): $TypeInfo[];
    }
    export class $TypeInfo {
        static safeOf(arg0: $Supplier_<$Type>): $TypeInfo;
        static safeOfArray(arg0: $Supplier_<$Type[]>): $TypeInfo[];
        static ofArray(arg0: $Type[]): $TypeInfo[];
        static of(arg0: $TypeVariable<never>): $VariableTypeInfo;
        static of(arg0: $Class<never>): $TypeInfo;
        static of(arg0: $Type): $TypeInfo;
        static PRIMITIVE_INT_ARRAY: $TypeInfo;
        static PRIMITIVE_VOID: $TypeInfo;
        static PRIMITIVE_DOUBLE_ARRAY: $TypeInfo;
        static FLOAT: $TypeInfo;
        static PRIMITIVE_BYTE: $TypeInfo;
        static PRIMITIVE_LONG_ARRAY: $TypeInfo;
        static PRIMITIVE_FLOAT_ARRAY: $TypeInfo;
        static RAW_ENUM_SET: $TypeInfo;
        static EMPTY_ARRAY: $TypeInfo[];
        static PRIMITIVE_BOOLEAN_ARRAY: $TypeInfo;
        static PRIMITIVE_BYTE_ARRAY: $TypeInfo;
        static RUNNABLE: $TypeInfo;
        static CLASS: $TypeInfo;
        static PRIMITIVE_FLOAT: $TypeInfo;
        static CONTEXT: $TypeInfo;
        static INT: $TypeInfo;
        static BYTE: $TypeInfo;
        static PRIMITIVE_BOOLEAN: $TypeInfo;
        static PRIMITIVE_DOUBLE: $TypeInfo;
        static PRIMITIVE_SHORT: $TypeInfo;
        static CHARACTER: $TypeInfo;
        static DOUBLE: $TypeInfo;
        static NONE: $TypeInfo;
        static RAW_LIST: $TypeInfo;
        static LONG: $TypeInfo;
        static NUMBER: $TypeInfo;
        static SCRIPTABLE: $TypeInfo;
        static PRIMITIVE_CHARACTER_ARRAY: $TypeInfo;
        static RAW_MAP: $TypeInfo;
        static RAW_FUNCTION: $TypeInfo;
        static RAW_PREDICATE: $TypeInfo;
        static RAW_SET: $TypeInfo;
        static OBJECT: $TypeInfo;
        static RAW_CONSUMER: $TypeInfo;
        static BOOLEAN: $TypeInfo;
        static SHORT: $TypeInfo;
        static STRING_ARRAY: $TypeInfo;
        static DATE: $TypeInfo;
        static PRIMITIVE_CHARACTER: $TypeInfo;
        static RAW_OPTIONAL: $TypeInfo;
        static RAW_SUPPLIER: $TypeInfo;
        static PRIMITIVE_SHORT_ARRAY: $TypeInfo;
        static STRING: $TypeInfo;
        static PRIMITIVE_INT: $TypeInfo;
        static OBJECT_ARRAY: $TypeInfo;
        static VOID: $TypeInfo;
        static PRIMITIVE_LONG: $TypeInfo;
    }
    export interface $TypeInfo {
        withParams(...arg0: $TypeInfo_[]): $TypeInfo;
        asClass(): $Class<never>;
        shouldConvert(): boolean;
        isFunctionalInterface(): boolean;
        collectContainedComponentClasses(arg0: $Collection_<$Class<never>>): void;
        getContainedComponentClasses(): $Set<$Class<never>>;
        createDefaultValue(): $Object;
        isByte(): boolean;
        isInt(): boolean;
        consolidate(arg0: $Map_<$VariableTypeInfo, $TypeInfo_>): $TypeInfo;
        or(arg0: $TypeInfo_): $TypeInfo;
        isCharacter(): boolean;
        isFloat(): boolean;
        param(arg0: number): $TypeInfo;
        isVoid(): boolean;
        is(arg0: $TypeInfo_): boolean;
        asArray(): $TypeInfo;
        isBoolean(): boolean;
        recordComponents(): $Map<string, $RecordTypeInfo$Component>;
        isDouble(): boolean;
        isLong(): boolean;
        isShort(): boolean;
        signature(): string;
        append(arg0: $TypeStringContext, arg1: $StringBuilder): void;
        isPrimitive(): boolean;
        newArray(arg0: number): $Object;
        componentType(): $TypeInfo;
        enumConstants(): $List<$Object>;
        get functionalInterface(): boolean;
        get containedComponentClasses(): $Set<$Class<never>>;
        get byte(): boolean;
        get int(): boolean;
        get character(): boolean;
        get float(): boolean;
        get void(): boolean;
        get boolean(): boolean;
        get double(): boolean;
        get long(): boolean;
        get short(): boolean;
        get primitive(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TypeInfo}.
     */
    export type $TypeInfo_ = (() => $Class<never>);
    export class $ClassTypeInfo extends $TypeInfoBase {
    }
    export class $TypeInfoBase implements $TypeInfo {
        asArray(): $TypeInfo;
        newArray(arg0: number): $Object;
        withParams(...arg0: $TypeInfo_[]): $TypeInfo;
        shouldConvert(): boolean;
        isFunctionalInterface(): boolean;
        collectContainedComponentClasses(arg0: $Collection_<$Class<never>>): void;
        getContainedComponentClasses(): $Set<$Class<never>>;
        createDefaultValue(): $Object;
        isByte(): boolean;
        isInt(): boolean;
        consolidate(arg0: $Map_<$VariableTypeInfo, $TypeInfo_>): $TypeInfo;
        or(arg0: $TypeInfo_): $TypeInfo;
        isCharacter(): boolean;
        isFloat(): boolean;
        param(arg0: number): $TypeInfo;
        isVoid(): boolean;
        is(arg0: $TypeInfo_): boolean;
        isBoolean(): boolean;
        recordComponents(): $Map<string, $RecordTypeInfo$Component>;
        isDouble(): boolean;
        isLong(): boolean;
        isShort(): boolean;
        signature(): string;
        append(arg0: $TypeStringContext, arg1: $StringBuilder): void;
        isPrimitive(): boolean;
        componentType(): $TypeInfo;
        enumConstants(): $List<$Object>;
        constructor();
        get functionalInterface(): boolean;
        get containedComponentClasses(): $Set<$Class<never>>;
        get byte(): boolean;
        get int(): boolean;
        get character(): boolean;
        get float(): boolean;
        get void(): boolean;
        get boolean(): boolean;
        get double(): boolean;
        get long(): boolean;
        get short(): boolean;
        get primitive(): boolean;
    }
    export class $RecordTypeInfo$Data extends $Record {
        defaultArguments(): $Object[];
        componentMap(): $Map<string, $RecordTypeInfo$Component>;
        components(): $RecordTypeInfo$Component[];
        constructor(components: $RecordTypeInfo$Component_[], componentMap: $Map_<string, $RecordTypeInfo$Component_>, defaultArguments: $Object[]);
    }
    /**
     * Values that may be interpreted as {@link $RecordTypeInfo$Data}.
     */
    export type $RecordTypeInfo$Data_ = { componentMap?: $Map_<string, $RecordTypeInfo$Component_>, defaultArguments?: $Object[], components?: $RecordTypeInfo$Component_[],  } | [componentMap?: $Map_<string, $RecordTypeInfo$Component_>, defaultArguments?: $Object[], components?: $RecordTypeInfo$Component_[], ];
}
