import { $KeySpec } from "@package/java/security/spec";
import { $SecretKey } from "@package/javax/crypto";

declare module "@package/javax/crypto/spec" {
    export class $SecretKeySpec implements $KeySpec, $SecretKey {
        getFormat(): string;
        getAlgorithm(): string;
        getEncoded(): number[];
        isDestroyed(): boolean;
        destroy(): void;
        constructor(arg0: number[], arg1: number, arg2: number, arg3: string);
        constructor(arg0: number[], arg1: string);
        get format(): string;
        get algorithm(): string;
        get encoded(): number[];
        get destroyed(): boolean;
    }
}
