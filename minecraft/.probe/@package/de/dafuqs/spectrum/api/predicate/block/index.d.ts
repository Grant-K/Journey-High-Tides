import { $HolderSet_, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $StatePropertiesPredicate_, $StatePropertiesPredicate } from "@package/net/minecraft/advancements/critereon";

declare module "@package/de/dafuqs/spectrum/api/predicate/block" {
    export class $BrokenBlockPredicate extends $Record {
        blocks(): ($HolderSet<$Block>) | undefined;
        test(arg0: $BlockState_): boolean;
        state(): ($StatePropertiesPredicate) | undefined;
        static CODEC: $Codec<$BrokenBlockPredicate>;
        constructor(blocks: ($HolderSet_<$Block>) | undefined, state: ($StatePropertiesPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $BrokenBlockPredicate}.
     */
    export type $BrokenBlockPredicate_ = { state?: ($StatePropertiesPredicate_) | undefined, blocks?: ($HolderSet_<$Block>) | undefined,  } | [state?: ($StatePropertiesPredicate_) | undefined, blocks?: ($HolderSet_<$Block>) | undefined, ];
}
