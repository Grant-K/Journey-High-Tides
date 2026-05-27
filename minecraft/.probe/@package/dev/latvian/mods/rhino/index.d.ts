import { $Reader } from "@package/java/io";
import { $TypeInfo_, $TypeInfo, $VariableTypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $RegExp } from "@package/dev/latvian/mods/rhino/regexp";
import { $IntFunction_, $Supplier_, $Consumer_, $UnaryOperator_, $Predicate_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $TypeWrappers } from "@package/dev/latvian/mods/rhino/util/wrap";
import { $Method, $AccessibleObject, $Field, $Executable, $Member, $Constructor } from "@package/java/lang/reflect";
import { $ClassVisibilityContext_, $DataObject, $DefaultValueTypeHint_, $ArrayValueProvider } from "@package/dev/latvian/mods/rhino/util";
import { $MethodHandles$Lookup, $MethodHandle } from "@package/java/lang/invoke";
import { $Spliterator, $Iterator, $List, $Map_, $Collection_, $List_, $Comparator, $Map, $Set, $ListIterator } from "@package/java/util";
import { $ClassLoader, $Throwable, $Enum, $Record, $RuntimeException, $Class, $StringBuilder, $Object } from "@package/java/lang";
export * as util from "@package/dev/latvian/mods/rhino/util";
export * as type from "@package/dev/latvian/mods/rhino/type";
export * as regexp from "@package/dev/latvian/mods/rhino/regexp";

declare module "@package/dev/latvian/mods/rhino" {
    export class $CustomProperty {
    }
    export interface $CustomProperty {
        get(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $CustomProperty}.
     */
    export type $CustomProperty_ = (() => $Object);
    export class $Script {
    }
    export interface $Script {
        exec(arg1: $Scriptable): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Script}.
     */
    export type $Script_ = ((arg1: $Scriptable) => $Object);
    export class $CachedClassStorage {
        isVisible(arg0: number): boolean;
        include(arg0: $Class<never>, arg1: $Member): boolean;
        getDebugClassName(arg0: $Class<never>): string;
        get(arg0: $Class<never>): $CachedClassInfo;
        static GLOBAL_PUBLIC: $CachedClassStorage;
        includeProtected: boolean;
        static GLOBAL_PROTECTED: $CachedClassStorage;
        objectClass: $CachedClassInfo;
        constructor(arg0: boolean);
    }
    export class $CachedMethodInfo$Accessible {
        getSignature(): $MethodSignature;
        getInfo(): $CachedMethodInfo;
        getName(): string;
        constructor();
        get signature(): $MethodSignature;
        get info(): $CachedMethodInfo;
        get name(): string;
    }
    export class $EvaluatorException extends $RhinoException {
        constructor(arg1: string);
        constructor(arg1: string, arg2: string, arg3: number);
        constructor(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number);
    }
    export class $MemberType extends $Enum<$MemberType> {
        static get(arg0: $Object, arg1: $Context): $MemberType;
        static values(): $MemberType[];
        static valueOf(arg0: string): $MemberType;
        static NUMBER: $MemberType;
        static SYMBOL: $MemberType;
        static UNDEFINED: $MemberType;
        static STRING: $MemberType;
        static OBJECT: $MemberType;
        static FUNCTION: $MemberType;
        static BOOLEAN: $MemberType;
    }
    /**
     * Values that may be interpreted as {@link $MemberType}.
     */
    export type $MemberType_ = "undefined" | "object" | "function" | "symbol" | "string" | "number" | "boolean";
    export class $CachedParameters extends $Record {
        varArgType(): $TypeInfo;
        typesMatch(arg0: $Class<never>[]): boolean;
        firstArgContext(): boolean;
        typeInfos(): $List<$TypeInfo>;
        types(): $List<$Class<never>>;
        isVarArg(): boolean;
        count(): number;
        static EMPTY: $CachedParameters;
        static EMPTY_FIRST_CX: $CachedParameters;
        constructor(count: number, types: $List_<$Class<never>>, typeInfos: $List_<$TypeInfo_>, firstArgContext: boolean, varArgType: $TypeInfo_);
        get varArg(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CachedParameters}.
     */
    export type $CachedParameters_ = { count?: number, types?: $List_<$Class<never>>, varArgType?: $TypeInfo_, typeInfos?: $List_<$TypeInfo_>, firstArgContext?: boolean,  } | [count?: number, types?: $List_<$Class<never>>, varArgType?: $TypeInfo_, typeInfos?: $List_<$TypeInfo_>, firstArgContext?: boolean, ];
    export class $ErrorReporter {
    }
    export interface $ErrorReporter {
        runtimeError(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): $EvaluatorException;
        error(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): void;
        warning(arg0: string, arg1: string, arg2: number, arg3: string, arg4: number): void;
    }
    export class $Wrapper {
        static unwrapped(arg0: $Object): $Object;
    }
    export interface $Wrapper {
        unwrap(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Wrapper}.
     */
    export type $Wrapper_ = (() => $Object);
    export class $ConstProperties {
    }
    export interface $ConstProperties {
        defineConst(arg1: string, arg2: $Scriptable): void;
        putConst(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        isConst(arg0: string): boolean;
    }
    export class $RhinoException extends $RuntimeException {
        lineSource(): string;
        getScriptStack(): $ScriptStackElement[];
        getScriptStack(arg0: number, arg1: string): $ScriptStackElement[];
        columnNumber(): number;
        details(): string;
        initSourceName(arg0: string): void;
        initLineNumber(arg0: number): void;
        initLineSource(arg0: string): void;
        initColumnNumber(arg0: number): void;
        getScriptStackTrace(): string;
        getScriptStackTrace(arg0: number, arg1: string): string;
        sourceName(): string;
        lineNumber(): number;
    }
    export class $CustomMember extends $Record {
        name(): string;
        type(): $TypeInfo;
        value(): $Object;
        constructor(name: string, type: $TypeInfo_, value: $Object);
    }
    /**
     * Values that may be interpreted as {@link $CustomMember}.
     */
    export type $CustomMember_ = { value?: $Object, name?: string, type?: $TypeInfo_,  } | [value?: $Object, name?: string, type?: $TypeInfo_, ];
    export class $MethodSignature extends $Record {
        name(): string;
        args(): $Class<never>[];
        constructor(arg0: $Executable);
        constructor(name: string, args: $Class<never>[]);
    }
    /**
     * Values that may be interpreted as {@link $MethodSignature}.
     */
    export type $MethodSignature_ = { args?: $Class<never>[], name?: string,  } | [args?: $Class<never>[], name?: string, ];
    export class $SymbolScriptable {
    }
    export interface $SymbolScriptable {
        has(arg1: $Symbol, arg2: $Scriptable): boolean;
        get(arg1: $Symbol, arg2: $Scriptable): $Object;
        put(arg1: $Symbol, arg2: $Scriptable, arg3: $Object): void;
        delete(arg1: $Symbol): void;
    }
    export class $CachedConstructorInfo extends $CachedExecutableInfo {
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Constructor<never>);
    }
    export class $IdEnumerationIterator {
    }
    export interface $IdEnumerationIterator {
        enumerationIteratorHasNext(arg1: $Consumer_<$Object>): boolean;
        enumerationIteratorNext(arg1: $Consumer_<$Object>): boolean;
    }
    export class $CachedFieldInfo$Accessible {
        getInfo(): $CachedFieldInfo;
        getName(): string;
        constructor();
        get info(): $CachedFieldInfo;
        get name(): string;
    }
    export class $IdScriptableObject extends $ScriptableObject implements $IdFunctionCall {
        exportAsJSClass(arg0: number, arg1: $Scriptable, arg2: boolean, arg3: $Context): $IdFunctionObject;
        initPrototypeMethod(arg0: $Object, arg1: number, arg2: string, arg3: string, arg4: number, arg5: $Context): $IdFunctionObject;
        initPrototypeMethod(arg0: $Object, arg1: number, arg2: $Symbol, arg3: string, arg4: number, arg5: $Context): $IdFunctionObject;
        initPrototypeMethod(arg0: $Object, arg1: number, arg2: string, arg3: number, arg4: $Context): $IdFunctionObject;
        execIdCall(arg0: $IdFunctionObject, arg1: $Context, arg2: $Scriptable, arg3: $Scriptable, arg4: $Object[]): $Object;
        activatePrototypeMap(arg0: number): void;
        hasPrototypeMap(): boolean;
        initPrototypeConstructor(arg0: $IdFunctionObject, arg1: $Context): void;
        initPrototypeValue(arg0: number, arg1: string, arg2: $Object, arg3: number): void;
        initPrototypeValue(arg0: number, arg1: $Symbol, arg2: $Object, arg3: number): void;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(arg0: $Scriptable, arg1: $Scriptable);
        constructor();
    }
    export class $NativeJavaObject implements $Scriptable, $SymbolScriptable, $Wrapper {
        getParentScope(): $Scriptable;
        setParentScope(arg0: $Scriptable): void;
        getIds(): $Object[];
        has(arg1: $Symbol, arg2: $Scriptable): boolean;
        has(arg1: string, arg2: $Scriptable): boolean;
        has(arg1: number, arg2: $Scriptable): boolean;
        addCustomMember(arg0: $CustomMember_): void;
        getTypeMapping(): $Map<$VariableTypeInfo, $TypeInfo>;
        addCustomProperty(arg0: string, arg1: $TypeInfo_, arg2: $CustomProperty_): void;
        getDefaultValue(arg1: $DefaultValueTypeHint_): $Object;
        unwrap(): $Object;
        getClassName(): string;
        hasInstance(arg1: $Scriptable): boolean;
        getPrototype(): $Scriptable;
        setPrototype(arg0: $Scriptable): void;
        get(arg1: $Symbol, arg2: $Scriptable): $Object;
        get(arg1: number, arg2: $Scriptable): $Object;
        get(arg1: string, arg2: $Scriptable): $Object;
        put(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: $Symbol, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: number, arg2: $Scriptable, arg3: $Object): void;
        delete(arg1: $Symbol): void;
        delete(arg1: string): void;
        delete(arg1: number): void;
        getAllIds(): $Object[];
        enumerationIteratorHasNext(arg1: $Consumer_<$Object>): boolean;
        enumerationIteratorNext(arg1: $Consumer_<$Object>): boolean;
        getTypeOf(): $MemberType;
        constructor(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_, arg3: $Context);
        constructor(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_, arg3: boolean, arg4: $Context);
        get ids(): $Object[];
        get typeMapping(): $Map<$VariableTypeInfo, $TypeInfo>;
        get className(): string;
        get allIds(): $Object[];
        get typeOf(): $MemberType;
    }
    export class $CachedMemberInfo {
        getCached(): $AccessibleObject;
        getName(): string;
        getDeclaringClass(): $CachedClassInfo;
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $AccessibleObject, arg2: string, arg3: number);
        get cached(): $AccessibleObject;
        get name(): string;
        get declaringClass(): $CachedClassInfo;
    }
    export class $NativeJavaClass extends $NativeJavaObject implements $Function {
        getClassObject(): $Class<never>;
        construct(arg1: $Scriptable, arg2: $Object[]): $Scriptable;
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
        constructor(arg1: $Scriptable, arg2: $Class<never>);
        constructor(arg1: $Scriptable, arg2: $Class<never>, arg3: boolean);
        get classObject(): $Class<never>;
    }
    export class $Function {
    }
    export interface $Function extends $Scriptable, $Callable {
        construct(arg1: $Scriptable, arg2: $Object[]): $Scriptable;
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
    }
    export class $ScriptStackElement {
        renderMozillaStyle(arg0: $StringBuilder): void;
        renderJavaStyle(arg0: $StringBuilder): void;
        fileName: string;
        functionName: string;
        lineNumber: number;
        constructor(arg0: string, arg1: string, arg2: number);
    }
    export class $NativeJavaMap extends $NativeJavaObject {
        mapValueType: $TypeInfo;
        mapKeyType: $TypeInfo;
        map: $Map<any, any>;
        constructor(arg1: $Scriptable, arg2: $Object, arg3: $Map_<any, any>, arg4: $TypeInfo_);
    }
    export class $CachedFieldInfo extends $CachedMemberInfo {
        get(arg1: $Object): $Object;
        set(arg1: $Object, arg2: $Object): void;
        getType(): $TypeInfo;
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Field);
        get type(): $TypeInfo;
    }
    export class $ScriptableObject implements $Scriptable, $SymbolScriptable, $ConstProperties {
        getParentScope(): $Scriptable;
        setParentScope(arg0: $Scriptable): void;
        getAllIds(): $Object[];
        getTypeOf(): $MemberType;
        getIds(): $Object[];
        static putProperty(arg0: $Scriptable, arg1: string, arg2: $Object, arg3: $Context): void;
        static putProperty(arg0: $Scriptable, arg1: $Symbol, arg2: $Object, arg3: $Context): void;
        static putProperty(arg0: $Scriptable, arg1: number, arg2: $Object, arg3: $Context): void;
        static getTopLevelScope(arg0: $Scriptable): $Scriptable;
        getAssociatedValue(arg0: $Object): $Object;
        associateValue(arg0: $Object, arg1: $Object): $Object;
        defineConst(arg1: string, arg2: $Scriptable): void;
        putConst(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        avoidObjectDetection(): boolean;
        setGetterOrSetter(arg1: string, arg2: number, arg3: $Callable_, arg4: boolean): void;
        getExternalArrayLength(): $Object;
        static defineConstProperty(arg0: $Scriptable, arg1: string, arg2: $Context): void;
        static getGeneratorFunctionPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        static getClassPrototype(arg0: $Scriptable, arg1: string, arg2: $Context): $Scriptable;
        static redefineProperty(arg0: $Scriptable, arg1: string, arg2: boolean, arg3: $Context): void;
        static putConstProperty(arg0: $Scriptable, arg1: string, arg2: $Object, arg3: $Context): void;
        static getPropertyIds(arg1: $Scriptable): $Object[];
        static getTopScopeValue(arg0: $Scriptable, arg1: $Object, arg2: $Context): $Object;
        getGetterOrSetter(arg0: string, arg1: number, arg2: boolean): $Object;
        getExternalArrayData(): $ExternalArrayData;
        setExternalArrayData(arg1: $ExternalArrayData): void;
        defineOwnProperties(arg1: $ScriptableObject): void;
        defineFunctionProperties(arg1: string[], arg2: $Class<never>, arg3: number): void;
        sealObject(): void;
        setAttributes(arg1: $Symbol, arg2: number): void;
        setAttributes(arg1: number, arg2: number): void;
        setAttributes(arg1: string, arg2: number): void;
        has(arg1: $Symbol, arg2: $Scriptable): boolean;
        has(arg1: string, arg2: $Scriptable): boolean;
        has(arg1: number, arg2: $Scriptable): boolean;
        getDefaultValue(arg1: $DefaultValueTypeHint_): $Object;
        static getDefaultValue(arg0: $Scriptable, arg1: $DefaultValueTypeHint_, arg2: $Context): $Object;
        getClassName(): string;
        getAttributes(arg1: string): number;
        getAttributes(arg1: number): number;
        getAttributes(arg1: $Symbol): number;
        static hasProperty(arg0: $Scriptable, arg1: $Symbol, arg2: $Context): boolean;
        static hasProperty(arg0: $Scriptable, arg1: number, arg2: $Context): boolean;
        static hasProperty(arg0: $Scriptable, arg1: string, arg2: $Context): boolean;
        defineOwnProperty(arg1: $Object, arg2: $ScriptableObject): void;
        preventExtensions(): void;
        isExtensible(): boolean;
        static deleteProperty(arg0: $Scriptable, arg1: number, arg2: $Context): boolean;
        static deleteProperty(arg0: $Scriptable, arg1: string, arg2: $Context): boolean;
        hasInstance(arg1: $Scriptable): boolean;
        static getObjectPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        getPrototype(): $Scriptable;
        static getFunctionPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        static getArrayPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        setPrototype(arg0: $Scriptable): void;
        static defineProperty(arg0: $Scriptable, arg1: string, arg2: $Object, arg3: number, arg4: $Context): void;
        defineProperty(arg1: string, arg2: $Object, arg3: number): void;
        defineProperty(arg1: string, arg2: $Object, arg3: $WrappedExecutable_, arg4: $WrappedExecutable_, arg5: number): void;
        defineProperty(arg1: $Symbol, arg2: $Object, arg3: number): void;
        defineProperty(arg1: string, arg2: $Class<never>, arg3: number): void;
        isConst(arg0: string): boolean;
        size(): number;
        get(arg1: string, arg2: $Scriptable): $Object;
        get(arg1: $Object): $Object;
        get(arg1: number, arg2: $Scriptable): $Object;
        get(arg1: $Symbol, arg2: $Scriptable): $Object;
        put(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: number, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: $Symbol, arg2: $Scriptable, arg3: $Object): void;
        static getProperty(arg0: $Scriptable, arg1: number, arg2: $Context): $Object;
        static getProperty(arg0: $Scriptable, arg1: $Symbol, arg2: $Context): $Object;
        static getProperty(arg0: $Scriptable, arg1: string, arg2: $Context): $Object;
        isEmpty(): boolean;
        isSealed(): boolean;
        delete(arg1: number): void;
        delete(arg1: $Symbol): void;
        delete(arg1: string): void;
        enumerationIteratorHasNext(arg1: $Consumer_<$Object>): boolean;
        enumerationIteratorNext(arg1: $Consumer_<$Object>): boolean;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor();
        constructor(arg0: $Scriptable, arg1: $Scriptable);
        get allIds(): $Object[];
        get typeOf(): $MemberType;
        get ids(): $Object[];
        get externalArrayLength(): $Object;
        get className(): string;
        get extensible(): boolean;
        get empty(): boolean;
        get sealed(): boolean;
    }
    export class $ExternalArrayData {
    }
    export interface $ExternalArrayData {
        getArrayLength(): number;
        getArrayElement(arg0: number): $Object;
        setArrayElement(arg0: number, arg1: $Object): void;
        get arrayLength(): number;
    }
    export class $CachedMethodInfo extends $CachedExecutableInfo {
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Method);
    }
    export class $Scriptable {
        static NOT_FOUND: $Object;
    }
    export interface $Scriptable extends $IdEnumerationIterator {
        getParentScope(): $Scriptable;
        setParentScope(arg0: $Scriptable): void;
        getAllIds(): $Object[];
        enumerationIteratorHasNext(arg1: $Consumer_<$Object>): boolean;
        enumerationIteratorNext(arg1: $Consumer_<$Object>): boolean;
        getTypeOf(): $MemberType;
        getIds(): $Object[];
        has(arg1: number, arg2: $Scriptable): boolean;
        has(arg1: string, arg2: $Scriptable): boolean;
        getDefaultValue(arg1: $DefaultValueTypeHint_): $Object;
        getClassName(): string;
        hasInstance(arg1: $Scriptable): boolean;
        getPrototype(): $Scriptable;
        setPrototype(arg0: $Scriptable): void;
        get(arg1: number, arg2: $Scriptable): $Object;
        get(arg1: string, arg2: $Scriptable): $Object;
        put(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: number, arg2: $Scriptable, arg3: $Object): void;
        delete(arg1: number): void;
        delete(arg1: string): void;
        get allIds(): $Object[];
        get typeOf(): $MemberType;
        get ids(): $Object[];
        get className(): string;
    }
    export class $Symbol {
    }
    export interface $Symbol {
    }
    export class $IdFunctionCall {
    }
    export interface $IdFunctionCall {
        execIdCall(arg0: $IdFunctionObject, arg1: $Context, arg2: $Scriptable, arg3: $Scriptable, arg4: $Object[]): $Object;
    }
    /**
     * Values that may be interpreted as {@link $IdFunctionCall}.
     */
    export type $IdFunctionCall_ = ((arg0: $IdFunctionObject, arg1: $Context, arg2: $Scriptable, arg3: $Scriptable, arg4: $Object[]) => $Object);
    export class $WrappedExecutable {
    }
    export interface $WrappedExecutable {
        unwrap(): $CachedExecutableInfo;
        construct(arg1: $Scriptable, arg2: $Object[]): $Object;
        invoke(arg1: $Scriptable, arg2: $Object, arg3: $Object[]): $Object;
        getReturnType(): $TypeInfo;
        isStatic(): boolean;
        get returnType(): $TypeInfo;
        get static(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WrappedExecutable}.
     */
    export type $WrappedExecutable_ = ((arg1: $Scriptable, arg2: $Object, arg3: $Object[]) => $Object);
    export class $BaseFunction extends $IdScriptableObject implements $Function {
        setImmunePrototypeProperty(arg0: $Object): void;
        createObject(arg1: $Scriptable): $Scriptable;
        construct(arg1: $Scriptable, arg2: $Object[]): $Scriptable;
        getArity(): number;
        getFunctionName(): string;
        getLength(): number;
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(arg0: $Scriptable, arg1: $Scriptable);
        constructor(arg0: boolean);
        constructor();
        set immunePrototypeProperty(value: $Object);
        get arity(): number;
        get functionName(): string;
        get length(): number;
    }
    export class $IdFunctionObject extends $BaseFunction {
        methodId(): number;
        hasTag(arg0: $Object): boolean;
        exportAsScopeProperty(): void;
        addAsProperty(arg0: $Scriptable, arg1: $Context): void;
        getTag(): $Object;
        initFunction(arg0: string, arg1: $Scriptable): void;
        markAsConstructor(arg0: $Scriptable): void;
        unknown(): $RuntimeException;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(arg0: $IdFunctionCall_, arg1: $Object, arg2: number, arg3: number);
        constructor(arg0: $IdFunctionCall_, arg1: $Object, arg2: number, arg3: string, arg4: number, arg5: $Scriptable);
        get tag(): $Object;
    }
    export class $CachedClassInfo {
        getDebugInfo(): $List<string>;
        getTypeInfo(): $TypeInfo;
        appendDebugType(arg0: $StringBuilder): void;
        getRemapPrefixes(): $Set<string>;
        getAccessibleMethods(arg0: boolean): $List<$CachedMethodInfo$Accessible>;
        getAccessibleFields(arg0: boolean): $List<$CachedFieldInfo$Accessible>;
        getSuperclass(): $CachedClassInfo;
        getInterfaces(): $List<$CachedClassInfo>;
        getMethod(arg0: string, arg1: $Class<never>[]): $CachedMethodInfo;
        getConstructors(): $List<$CachedConstructorInfo>;
        getDeclaredFields(): $List<$CachedFieldInfo>;
        getDeclaredMethods(): $List<$CachedMethodInfo>;
        storage: $CachedClassStorage;
        type: $Class<never>;
        modifiers: number;
        isInterface: boolean;
        constructor(arg0: $CachedClassStorage, arg1: $Class<never>);
        get debugInfo(): $List<string>;
        get typeInfo(): $TypeInfo;
        get remapPrefixes(): $Set<string>;
        get superclass(): $CachedClassInfo;
        get interfaces(): $List<$CachedClassInfo>;
        get constructors(): $List<$CachedConstructorInfo>;
        get declaredFields(): $List<$CachedFieldInfo>;
        get declaredMethods(): $List<$CachedMethodInfo>;
    }
    export class $Callable {
    }
    export interface $Callable {
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Callable}.
     */
    export type $Callable_ = ((arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]) => $Object);
    export class $CachedExecutableInfo extends $CachedMemberInfo {
        transformArgs(arg1: $Object, arg2: $CachedParameters_, arg3: $Object[]): $Object[];
        appendDebugParams(arg0: $StringBuilder): void;
        getParameters(): $CachedParameters;
        getSignature(): $MethodSignature;
        invoke(arg1: $Scriptable, arg2: $Object, arg3: $Object[]): $Object;
        getReturnType(): $TypeInfo;
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Executable);
        get parameters(): $CachedParameters;
        get signature(): $MethodSignature;
        get returnType(): $TypeInfo;
    }
    export class $Context {
        mapOf(arg0: $Object, arg1: $TypeInfo_, arg2: $TypeInfo_): $Object;
        setOf(arg0: $Object, arg1: $TypeInfo_): $Object;
        static reportRuntimeError(arg0: string, arg1: $Context): $EvaluatorException;
        static reportRuntimeError(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): $EvaluatorException;
        initStandardObjects(arg0: $ScriptableObject, arg1: boolean): $ScriptableObject;
        initStandardObjects(): $ScriptableObject;
        initStandardObjects(arg0: $ScriptableObject): $Scriptable;
        initSafeStandardObjects(arg0: $ScriptableObject): $Scriptable;
        initSafeStandardObjects(arg0: $ScriptableObject, arg1: boolean): $ScriptableObject;
        initSafeStandardObjects(): $ScriptableObject;
        compileString(arg0: string, arg1: string, arg2: number, arg3: $Object): $Script;
        compileReader(arg0: $Reader, arg1: string, arg2: number, arg3: $Object): $Script;
        setGenerateObserverCount(arg0: boolean): void;
        getErrorReporter(): $ErrorReporter;
        static getSourcePositionFromStack(arg1: number[]): string;
        static reportWarning(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): void;
        static reportWarning(arg0: string, arg1: $Context): void;
        javaToJS(arg0: $Object, arg1: $Scriptable): $Object;
        javaToJS(arg0: $Object, arg1: $Scriptable, arg2: $TypeInfo_): $Object;
        wrapAsJavaObject(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_): $Scriptable;
        hasTopCallScope(): boolean;
        setTopCall(arg0: $Scriptable): void;
        callSync(arg0: $Callable_, arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
        arrayValueProviderOf(arg0: $Object): $ArrayValueProvider;
        jsToJava(arg0: $Object, arg1: $TypeInfo_): $Object;
        isListLike(arg0: $Object): boolean;
        optionalListOf(arg0: $Object): $List<$Object>;
        optionalListOf<K>(arg0: $Object, arg1: $TypeInfo_): $List<K>;
        reportConversionError(arg0: $Object, arg1: $TypeInfo_): $Object;
        isMapLike(arg0: $Object): boolean;
        optionalMapOf(arg0: $Object): $Map<string, $Object>;
        optionalMapOf<K, V>(arg0: $Object, arg1: $TypeInfo_, arg2: $TypeInfo_): $Map<K, V>;
        visibleToScripts(arg0: string, arg1: $ClassVisibilityContext_): boolean;
        createInterfaceAdapter(arg0: $TypeInfo_, arg1: $ScriptableObject): $Object;
        getConversionWeight(arg0: $Object, arg1: $TypeInfo_): number;
        internalConversionWeight(arg0: $Object, arg1: $TypeInfo_): number;
        static getSizeRank(arg0: $TypeInfo_): number;
        internalConversionWeightLast(arg0: $Object, arg1: $TypeInfo_): number;
        static reportRuntimeError2(arg0: string, arg1: $Object, arg2: $Object, arg3: $Context): $EvaluatorException;
        getCachedClassStorage(arg0: boolean): $CachedClassStorage;
        static reportRuntimeError0(arg0: string, arg1: $Context): $EvaluatorException;
        static reportRuntimeError1(arg0: string, arg1: $Object, arg2: $Context): $EvaluatorException;
        static reportRuntimeError3(arg0: string, arg1: $Object, arg2: $Object, arg3: $Object, arg4: $Context): $EvaluatorException;
        static reportRuntimeError4(arg0: string, arg1: $Object, arg2: $Object, arg3: $Object, arg4: $Object, arg5: $Context): $EvaluatorException;
        static getUndefinedValue(): $Object;
        static throwAsScriptRuntimeEx(arg0: $Throwable, arg1: $Context): $RuntimeException;
        evaluateString(arg0: $Scriptable, arg1: string, arg2: string, arg3: number, arg4: $Object): $Object;
        evaluateReader(arg0: $Scriptable, arg1: $Reader, arg2: string, arg3: number, arg4: $Object): $Object;
        getThreadLocal(arg0: $Object): $Object;
        removeThreadLocal(arg0: $Object): void;
        getInstructionObserverThreshold(): number;
        setInstructionObserverThreshold(arg0: number): void;
        getApplicationClassLoader(): $ClassLoader;
        setApplicationClassLoader(arg0: $ClassLoader): void;
        addToScope(arg0: $Scriptable, arg1: string, arg2: $Object): void;
        newClassSerialNumber(): number;
        wrapAny(arg0: $Scriptable, arg1: $Object): $Object;
        getTopCallScope(): $Scriptable;
        getTopCallOrThrow(): $Scriptable;
        storeScriptable(arg0: $Scriptable): void;
        lastStoredScriptable(): $Scriptable;
        doTopCall(arg0: $Scriptable, arg1: $Callable_, arg2: $Scriptable, arg3: $Object[], arg4: boolean): $Object;
        wrapJavaClass(arg0: $Scriptable, arg1: $Class<never>): $Scriptable;
        wrapNewObject(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_): $Scriptable;
        getMaximumInterpreterStackDepth(): number;
        defaultObjectToSource(arg0: $Scriptable, arg1: $Scriptable, arg2: $Object[]): string;
        initJSON(arg0: $ScriptableObject, arg1: boolean): void;
        static reportError(arg1: string): void;
        static reportError(arg1: string, arg2: number, arg3: string, arg4: number, arg5: string): void;
        createClassLoader(arg0: $ClassLoader): $GeneratedClassLoader;
        toBoolean(arg0: $Object): boolean;
        canConvert(arg0: $Object, arg1: $TypeInfo_): boolean;
        getImplementationVersion(): string;
        arrayOf(arg0: $Object, arg1: $TypeInfo_): $Object;
        classOf(arg0: $Object): $Object;
        putThreadLocal(arg0: $Object, arg1: $Object): void;
        toNumber(arg0: $Object): number;
        toObject(arg0: $Object, arg1: $Scriptable): $Scriptable;
        getRegExp(): $RegExp;
        newObject(arg0: $Scriptable): $Scriptable;
        newObject(arg0: $Scriptable, arg1: string, arg2: $Object[]): $Scriptable;
        newObject(arg0: $Scriptable, arg1: string): $Scriptable;
        isStrictMode(): boolean;
        listOf(arg0: $Object, arg1: $TypeInfo_): $Object;
        toString(arg0: $Object): string;
        newArray(arg0: $Scriptable, arg1: $Object[]): $Scriptable;
        newArray(arg0: $Scriptable, arg1: number): $Scriptable;
        wrap(arg0: $Scriptable, arg1: $Object): $Object;
        wrap(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_): $Object;
        static JSTYPE_JAVA_CLASS: number;
        factory: $ContextFactory;
        static JSTYPE_JAVA_ARRAY: number;
        static CONVERSION_TRIVIAL: number;
        static CONVERSION_NONE: number;
        generateObserverCount: boolean;
        static CONVERSION_EXACT: number;
        static JSTYPE_BOOLEAN: number;
        static JSTYPE_UNDEFINED: number;
        static JSTYPE_OBJECT: number;
        lock: $Object;
        static JSTYPE_STRING: number;
        static JSTYPE_NULL: number;
        static JSTYPE_JAVA_OBJECT: number;
        static JSTYPE_NUMBER: number;
        constructor(arg0: $ContextFactory);
        get errorReporter(): $ErrorReporter;
        set topCall(value: $Scriptable);
        static get undefinedValue(): $Object;
        get topCallScope(): $Scriptable;
        get topCallOrThrow(): $Scriptable;
        get maximumInterpreterStackDepth(): number;
        get implementationVersion(): string;
        get regExp(): $RegExp;
        get strictMode(): boolean;
    }
    export class $NativeArray extends $IdScriptableObject implements $List<any>, $DataObject {
        getIds(arg1: boolean, arg2: boolean): $Object[];
        createDataObject<T>(arg0: $Supplier_<T>, arg1: $Context): T;
        createDataObjectList<T>(arg0: $Supplier_<T>, arg1: $Context): $List<T>;
        isDataObjectList(): boolean;
        getIndexIds(): $List<number>;
        removeAll(arg0: $Collection_<any>): boolean;
        retainAll(arg0: $Collection_<any>): boolean;
        listIterator(): $ListIterator<any>;
        listIterator(arg0: number): $ListIterator<any>;
        containsAll(arg0: $Collection_<any>): boolean;
        remove(arg0: number): $Object;
        remove(arg0: $Object): boolean;
        get(arg0: number, arg1: $Context): $Object;
        get(arg0: number): $Object;
        getLength(): number;
        indexOf(arg0: $Object): number;
        clear(): void;
        lastIndexOf(arg0: $Object): number;
        add(arg0: number, arg1: $Object): void;
        add(arg0: $Object): boolean;
        subList(arg0: number, arg1: number): $List<any>;
        toArray(arg0: $Object[]): $Object[];
        toArray(): $Object[];
        iterator(): $Iterator<any>;
        contains(arg0: $Object): boolean;
        addAll(arg0: number, arg1: $Collection_<any>): boolean;
        addAll(arg0: $Collection_<any>): boolean;
        set(arg0: number, arg1: $Object): $Object;
        reversed(): $List<$Object>;
        getFirst(): $Object;
        getLast(): $Object;
        addFirst(arg0: $Object): void;
        addLast(arg0: $Object): void;
        removeFirst(): $Object;
        removeLast(): $Object;
        replaceAll(arg0: $UnaryOperator_<$Object>): void;
        spliterator(): $Spliterator<$Object>;
        sort(arg0: $Comparator<$Object>): void;
        parallelStream(): $Stream<$Object>;
        removeIf(arg0: $Predicate_<$Object>): boolean;
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<$Object>;
        forEach(arg0: $Consumer_<$Object>): void;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(arg1: $Object[]);
        constructor(arg1: number);
        [Symbol.iterator](): Iterator<any>
        get dataObjectList(): boolean;
        get indexIds(): $List<number>;
        get length(): number;
        get first(): $Object;
        get last(): $Object;
    }
    export class $ContextFactory {
        getTypeWrappers(): $TypeWrappers;
        getCachedClassStorage(): $CachedClassStorage;
        registerDefaultRecordProperties(arg0: $Record): void;
        getMethodHandlesLookup(): $MethodHandles$Lookup;
        getRecordConstructor(arg0: $Class<never>): $MethodHandle;
        getDefaultRecordProperties(arg0: $Class<never>): $Object[];
        setInstanceStaticFallback(arg0: boolean): void;
        getInstanceStaticFallback(): boolean;
        enter(): $Context;
        constructor();
        get typeWrappers(): $TypeWrappers;
        get cachedClassStorage(): $CachedClassStorage;
        get methodHandlesLookup(): $MethodHandles$Lookup;
    }
    export class $GeneratedClassLoader {
    }
    export interface $GeneratedClassLoader {
        linkClass(arg0: $Class<never>): void;
        defineClass(arg0: string, arg1: number[]): $Class<never>;
    }
}
