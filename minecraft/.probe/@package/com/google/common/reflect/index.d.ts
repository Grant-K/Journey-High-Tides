import { $Serializable } from "@package/java/io";
import { $Annotation } from "@package/java/lang/annotation";
import { $TypeVariable, $Constructor, $AccessFlag, $Method, $Member, $AnnotatedElement, $AnnotatedType, $Type } from "@package/java/lang/reflect";
import { $ForwardingSet, $ImmutableList } from "@package/com/google/common/collect";
import { $Object, $Throwable, $Class } from "@package/java/lang";
import { $Set } from "@package/java/util";

declare module "@package/com/google/common/reflect" {
    export class $Invokable<T, R> implements $AnnotatedElement, $Member {
        isPackagePrivate(): boolean;
        isOverridable(): boolean;
        isSynchronized(): boolean;
        getExceptionTypes(): $ImmutableList<$TypeToken<$Throwable>>;
        getAnnotatedReturnType(): $AnnotatedType;
        getParameters(): $ImmutableList<$Parameter>;
        isAbstract(): boolean;
        isPrivate(): boolean;
        isNative(): boolean;
        getOwnerType(): $TypeToken<T>;
        returning<R1 extends R>(returnType: $TypeToken<R1>): $Invokable<T, R1>;
        returning<R1 extends R>(returnType: $Class<R1>): $Invokable<T, R1>;
        invoke(receiver: T, ...args: $Object[]): R;
        getName(): string;
        getModifiers(): number;
        static from<T>(constructor: $Constructor<T>): $Invokable<T, T>;
        static from(method: $Method): $Invokable<never, $Object>;
        getTypeParameters(): $TypeVariable<never>[];
        getReturnType(): $TypeToken<R>;
        isSynthetic(): boolean;
        isFinal(): boolean;
        isStatic(): boolean;
        isAnnotationPresent(annotationClass: $Class<$Annotation>): boolean;
        getDeclaringClass(): $Class<T>;
        getAnnotation<A extends $Annotation>(annotationClass: $Class<A>): A;
        getAnnotations(): $Annotation[];
        getDeclaredAnnotations(): $Annotation[];
        isPublic(): boolean;
        setAccessible(flag: boolean): void;
        isProtected(): boolean;
        trySetAccessible(): boolean;
        isAccessible(): boolean;
        isVarArgs(): boolean;
        getAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        getDeclaredAnnotation<T extends $Annotation>(arg0: $Class<T>): T;
        getDeclaredAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        accessFlags(): $Set<$AccessFlag>;
        get packagePrivate(): boolean;
        get overridable(): boolean;
        get synchronized(): boolean;
        get exceptionTypes(): $ImmutableList<$TypeToken<$Throwable>>;
        get annotatedReturnType(): $AnnotatedType;
        get parameters(): $ImmutableList<$Parameter>;
        get abstract(): boolean;
        get private(): boolean;
        get native(): boolean;
        get ownerType(): $TypeToken<T>;
        get name(): string;
        get modifiers(): number;
        get typeParameters(): $TypeVariable<never>[];
        get returnType(): $TypeToken<R>;
        get synthetic(): boolean;
        get final(): boolean;
        get static(): boolean;
        get declaringClass(): $Class<T>;
        get annotations(): $Annotation[];
        get declaredAnnotations(): $Annotation[];
        get public(): boolean;
        get protected(): boolean;
        get varArgs(): boolean;
    }
    export class $TypeToken$TypeSet extends $ForwardingSet<$TypeToken<T>> implements $Serializable {
        rawTypes(): $Set<$Class<$TypeToken<T>>>;
        interfaces(): $TypeToken$TypeSet;
        classes(): $TypeToken$TypeSet;
    }
    export class $TypeCapture<T> {
    }
    export class $TypeToken<T> extends $TypeCapture<T> implements $Serializable {
        getTypes(): $TypeToken$TypeSet;
        isSupertypeOf(type: $Type): boolean;
        isSupertypeOf(type: $TypeToken<never>): boolean;
        getSubtype(subclass: $Class<never>): $TypeToken<T>;
        isSubtypeOf(supertype: $Type): boolean;
        isSubtypeOf(type: $TypeToken<never>): boolean;
        resolveType(type: $Type): $TypeToken<never>;
        where<X>(typeParam: $TypeParameter<X>, typeArg: $Class<X>): $TypeToken<T>;
        where<X>(typeParam: $TypeParameter<X>, typeArg: $TypeToken<X>): $TypeToken<T>;
        unwrap(): $TypeToken<T>;
        getRawType(): $Class<T>;
        getSupertype(superclass: $Class<T>): $TypeToken<T>;
        method(method: $Method): $Invokable<T, $Object>;
        isArray(): boolean;
        isPrimitive(): boolean;
        wrap(): $TypeToken<T>;
        static of<T>(type: $Class<T>): $TypeToken<T>;
        static of(type: $Type): $TypeToken<never>;
        getComponentType(): $TypeToken<never>;
        constructor(constructor: $Constructor<never>): $Invokable<T, T>;
        getType(): $Type;
        get types(): $TypeToken$TypeSet;
        get rawType(): $Class<T>;
        get array(): boolean;
        get primitive(): boolean;
        get componentType(): $TypeToken<never>;
        get type(): $Type;
    }
    export class $TypeParameter<T> extends $TypeCapture<T> {
    }
    export class $Parameter implements $AnnotatedElement {
        getDeclaringInvokable(): $Invokable<never, never>;
        isAnnotationPresent(annotationType: $Class<$Annotation>): boolean;
        getAnnotation<A extends $Annotation>(annotationType: $Class<A>): A;
        getAnnotationsByType<A extends $Annotation>(annotationType: $Class<A>): A[];
        getAnnotations(): $Annotation[];
        getDeclaredAnnotation<A extends $Annotation>(annotationType: $Class<A>): A;
        getDeclaredAnnotationsByType<A extends $Annotation>(annotationType: $Class<A>): A[];
        getDeclaredAnnotations(): $Annotation[];
        getType(): $TypeToken<never>;
        getAnnotatedType(): $AnnotatedType;
        get declaringInvokable(): $Invokable<never, never>;
        get annotations(): $Annotation[];
        get declaredAnnotations(): $Annotation[];
        get type(): $TypeToken<never>;
        get annotatedType(): $AnnotatedType;
    }
}
