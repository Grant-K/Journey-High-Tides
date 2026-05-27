import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $InclusiveRange_ } from "@package/net/minecraft/util";

declare module "@package/dev/worldgen/lithostitched/api/predicate" {
    export class $LoadPredicate {
        static isFabric(): $LoadPredicate;
        static packFormat(supportedFormats: $InclusiveRange_<number>): $LoadPredicate;
        static alwaysFalse(): $LoadPredicate;
        static alwaysTrue(): $LoadPredicate;
        static anyOf(...predicates: $LoadPredicate[]): $LoadPredicate;
        static allOf(...predicates: $LoadPredicate[]): $LoadPredicate;
        static not(predicate: $LoadPredicate): $LoadPredicate;
        static modLoaded(modId: string): $LoadPredicate;
        static isNeoforge(): $LoadPredicate;
        static CODEC: $Codec<$LoadPredicate>;
        static FIELD_CODEC: $MapCodec<($LoadPredicate) | undefined>;
        static get fabric(): $LoadPredicate;
        static get neoforge(): $LoadPredicate;
    }
    export interface $LoadPredicate {
        codec(): $MapCodec<$LoadPredicate>;
        test(): boolean;
    }
}
