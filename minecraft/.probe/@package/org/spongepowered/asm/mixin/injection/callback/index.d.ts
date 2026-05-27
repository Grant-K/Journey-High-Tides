import { $Type } from "@package/org/objectweb/asm";

declare module "@package/org/spongepowered/asm/mixin/injection/callback" {
    export class $CallbackInfoReturnable<R> extends $CallbackInfo {
        getReturnValueB(): number;
        getReturnValueC(): string;
        getReturnValueD(): number;
        getReturnValueF(): number;
        getReturnValueI(): number;
        getReturnValueJ(): number;
        getReturnValueS(): number;
        getReturnValueZ(): boolean;
        setReturnValue(arg0: R): void;
        getReturnValue(): R;
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: string);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: R);
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: string, arg1: boolean, arg2: boolean);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        get returnValueB(): number;
        get returnValueC(): string;
        get returnValueD(): number;
        get returnValueF(): number;
        get returnValueI(): number;
        get returnValueJ(): number;
        get returnValueS(): number;
        get returnValueZ(): boolean;
    }
    export class $CallbackInfo implements $Cancellable {
        static getCallInfoClassName(arg0: $Type): string;
        isCancelled(): boolean;
        isCancellable(): boolean;
        getId(): string;
        cancel(): void;
        constructor(arg0: string, arg1: boolean);
        get cancelled(): boolean;
        get cancellable(): boolean;
        get id(): string;
    }
    export class $Cancellable {
    }
    export interface $Cancellable {
        isCancelled(): boolean;
        isCancellable(): boolean;
        cancel(): void;
        get cancelled(): boolean;
        get cancellable(): boolean;
    }
}
