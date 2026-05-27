import { $DoubleSupplier } from "@package/java/util/function";

declare module "@package/software/bernie/geckolib/loading/math" {
    export class $MathValue {
    }
    export interface $MathValue extends $DoubleSupplier {
        isMutable(): boolean;
        getAsDouble(): number;
        get(): number;
        get mutable(): boolean;
        get asDouble(): number;
    }
    /**
     * Values that may be interpreted as {@link $MathValue}.
     */
    export type $MathValue_ = (() => number);
}
