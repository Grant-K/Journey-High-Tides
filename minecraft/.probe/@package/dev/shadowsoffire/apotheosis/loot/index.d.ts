import { $Predicate_ } from "@package/java/util/function";
import { $EntitySlotGroup_, $EntitySlotGroup } from "@package/dev/shadowsoffire/apothic_attributes/modifiers";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Map, $Set } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/shadowsoffire/apotheosis/loot" {
    export interface $LootCategory extends RegistryMarked<RegistryTypes.ApotheosisLootCategoryTag, RegistryTypes.ApotheosisLootCategory> {}
    export class $LootCategory {
        static mapCodec<T>(arg0: $Codec<T>): $MapCodec<$Map<$LootCategory, T>>;
        /**
         * @deprecated
         */
        isArmor(): boolean;
        isValid(arg0: $ItemStack_): boolean;
        isNone(): boolean;
        /**
         * @deprecated
         */
        isMelee(): boolean;
        getDescId(): string;
        getDescIdPlural(): string;
        /**
         * @deprecated
         */
        isBreaker(): boolean;
        /**
         * @deprecated
         */
        isRanged(): boolean;
        /**
         * @deprecated
         */
        isDefensive(): boolean;
        /**
         * @deprecated
         */
        isMeleeOrShield(): boolean;
        static forItem(arg0: $ItemStack_): $LootCategory;
        getSlots(): $EntitySlotGroup;
        priority(): number;
        getKey(): $ResourceLocation;
        static CODEC: $Codec<$LootCategory>;
        static SET_CODEC: $Codec<$Set<$LootCategory>>;
        static OPTIONAL_CODEC: $Codec<$LootCategory>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $LootCategory>;
        constructor(arg0: $Predicate_<$ItemStack>, arg1: $EntitySlotGroup_);
        constructor(arg0: $Predicate_<$ItemStack>, arg1: $EntitySlotGroup_, arg2: number);
        get armor(): boolean;
        get none(): boolean;
        get melee(): boolean;
        get descId(): string;
        get descIdPlural(): string;
        get breaker(): boolean;
        get ranged(): boolean;
        get defensive(): boolean;
        get meleeOrShield(): boolean;
        get slots(): $EntitySlotGroup;
        get key(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $LootCategory}.
     */
    export type $LootCategory_ = RegistryTypes.ApotheosisLootCategory;
}
