import { $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $WeightedEntry, $Weight } from "@package/net/minecraft/util/random";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/klikli_dev/occultism/crafting/recipe/result" {
    export class $RecipeResultType<T extends $RecipeResult> extends $Record {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(arg0: $MapCodec_<T>);
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec_<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $RecipeResultType}.
     */
    export type $RecipeResultType_<T> = RegistryTypes.OccultismRecipeResultType | { codec?: $MapCodec_<$RecipeResult>, streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $RecipeResult>,  } | [codec?: $MapCodec_<$RecipeResult>, streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $RecipeResult>, ];
    export class $RecipeResult {
        copyWithCount(arg0: number): $RecipeResult;
        getStack(): $ItemStack;
        getStacks(): $ItemStack[];
        static of(arg0: $ItemStack_): $RecipeResult;
        static of(arg0: $TagKey_<$Item>, arg1: number): $RecipeResult;
        static of(arg0: $TagKey_<$Item>, arg1: number, arg2: $DataComponentPatch_): $RecipeResult;
        static of(arg0: $TagKey_<$Item>): $RecipeResult;
        getType(): $RecipeResultType<never>;
        static CODEC: $Codec<$RecipeResult>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RecipeResult>;
        constructor();
        get stack(): $ItemStack;
        get stacks(): $ItemStack[];
        get type(): $RecipeResultType<never>;
    }
    export class $WeightedRecipeResult extends $RecipeResult implements $WeightedEntry {
        copyWithCount(arg0: number): $WeightedRecipeResult;
        getWeight(): $Weight;
        copyWithWeight(arg0: number): $WeightedRecipeResult;
        weight(): number;
        static of(arg0: $TagKey_<$Item>, arg1: number): $WeightedRecipeResult;
        static of(arg0: $ItemStack_, arg1: number): $WeightedRecipeResult;
        static of(arg0: $TagKey_<$Item>, arg1: number, arg2: $DataComponentPatch_, arg3: number): $WeightedRecipeResult;
        static of(arg0: $TagKey_<$Item>, arg1: number, arg2: number): $WeightedRecipeResult;
        static CODEC: $Codec<$WeightedRecipeResult>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $WeightedRecipeResult>;
        constructor(arg0: number);
    }
    export interface $RecipeResultType<T> extends RegistryMarked<RegistryTypes.OccultismRecipeResultTypeTag, RegistryTypes.OccultismRecipeResultType> {}
}
