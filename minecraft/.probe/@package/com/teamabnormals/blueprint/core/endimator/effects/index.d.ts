import { $Endimation } from "@package/com/teamabnormals/blueprint/core/endimator";
import { $Position } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Comparable } from "@package/java/lang";

declare module "@package/com/teamabnormals/blueprint/core/endimator/effects" {
    export class $ConfiguredEndimationEffect<C, E extends $EndimationEffect<C>> implements $Comparable<$ConfiguredEndimationEffect<never, never>> {
        getEffect(): E;
        getTime(): number;
        process(arg0: $EndimationEffectSource, arg1: number): void;
        getConfig(): C;
        compareTo(arg0: $ConfiguredEndimationEffect<never, never>): number;
        static CODEC: $Codec<$ConfiguredEndimationEffect<never, never>>;
        constructor(arg0: E, arg1: C, arg2: number);
        get effect(): E;
        get time(): number;
        get config(): C;
    }
    export class $EndimationEffectSource {
    }
    export interface $EndimationEffectSource {
        getPos(): $Position;
        isActive(): boolean;
        get pos(): $Position;
        get active(): boolean;
    }
    export class $EndimationEffect<C> {
        getCodec(): $MapCodec<$ConfiguredEndimationEffect<C, $EndimationEffect<C>>>;
        process(arg0: $EndimationEffectSource, arg1: number, arg2: C): void;
        get codec(): $MapCodec<$ConfiguredEndimationEffect<C, $EndimationEffect<C>>>;
    }
    export class $EndimationEffectHandler {
        reset(): void;
        update(arg0: $Endimation, arg1: number): void;
        constructor(arg0: $EndimationEffectSource);
    }
}
