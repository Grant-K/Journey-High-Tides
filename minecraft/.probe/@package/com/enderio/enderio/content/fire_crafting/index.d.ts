import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $FireCraftingResultMixin } from "@package/com/almostreliable/kubeio/mixin";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $FireCraftingResult } from "@package/com/almostreliable/kubeio/binding";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/enderio/enderio/content/fire_crafting" {
    export class $FireCraftingRecipe$Result extends $Record implements $FireCraftingResult, $FireCraftingResultMixin {
        maxCount(): number;
        chance(): number;
        minCount(): number;
        result(): $ItemStack;
        static CODEC: $Codec<$FireCraftingRecipe$Result>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FireCraftingRecipe$Result>;
        constructor(result: $ItemStack_, minCount: number, maxCount: number, chance: number);
    }
    /**
     * Values that may be interpreted as {@link $FireCraftingRecipe$Result}.
     */
    export type $FireCraftingRecipe$Result_ = { minCount?: number, result?: $ItemStack_, chance?: number, maxCount?: number,  } | [minCount?: number, result?: $ItemStack_, chance?: number, maxCount?: number, ];
}
