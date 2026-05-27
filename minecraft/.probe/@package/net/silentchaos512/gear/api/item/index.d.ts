import { $ItemLike } from "@package/net/minecraft/world/level";
import { $NumberProperty, $GearPropertyGroup, $GearProperty } from "@package/net/silentchaos512/gear/api/property";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ItemColor } from "@package/net/minecraft/client/color/item";
import { $PartType, $PartType_ } from "@package/net/silentchaos512/gear/api/part";
import { $GearPropertiesData_ } from "@package/net/silentchaos512/gear/core/component";
import { $Set, $Set_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $Predicate, $Predicate_, $Supplier_, $Supplier } from "@package/java/util/function";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $PartInstance } from "@package/net/silentchaos512/gear/gear/part";
import { $Record, $Iterable } from "@package/java/lang";
import { $ItemAbility_, $ItemAbility } from "@package/net/neoforged/neoforge/common";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/silentchaos512/gear/api/item" {
    export interface $GearType extends RegistryMarked<RegistryTypes.SilentgearGearTypeTag, RegistryTypes.SilentgearGearType> {}
    export class $GearType extends $Record {
        canPerformAction(arg0: $ItemAbility_): boolean;
        isArmor(): boolean;
        getDisplayName(): $Component;
        static getItem(arg0: $GearType_): $GearItem;
        isGear(): boolean;
        durabilityStat(): $Supplier<$NumberProperty>;
        itemAbilities(): $Set<$ItemAbility>;
        armorDurabilityMultiplier(): number;
        relevantPropertyGroups(): $Set<$GearPropertyGroup>;
        animationFrames(): number;
        getMatcher(arg0: boolean): $GearTypeMatcher;
        getBaseDurability(arg0: $GearPropertiesData_): number;
        getRelevantProperties(): $Iterable<$GearProperty<never, never>>;
        parent(): $Supplier<$GearType>;
        matches(arg0: $GearType_): boolean;
        matches(arg0: $GearType_, arg1: boolean): boolean;
        static CODEC: $Codec<$GearType>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GearType>;
        constructor(parent: $Supplier_<$GearType>, animationFrames: number, itemAbilities: $Set_<$ItemAbility_>, armorDurabilityMultiplier: number, durabilityStat: $Supplier_<$NumberProperty>, relevantPropertyGroups: $Set_<$GearPropertyGroup>);
        get armor(): boolean;
        get displayName(): $Component;
        get gear(): boolean;
        get relevantProperties(): $Iterable<$GearProperty<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $GearType}.
     */
    export type $GearType_ = RegistryTypes.SilentgearGearType | { itemAbilities?: $Set_<$ItemAbility_>, relevantPropertyGroups?: $Set_<$GearPropertyGroup>, animationFrames?: number, armorDurabilityMultiplier?: number, parent?: $Supplier_<$GearType>, durabilityStat?: $Supplier_<$NumberProperty>,  } | [itemAbilities?: $Set_<$ItemAbility_>, relevantPropertyGroups?: $Set_<$GearPropertyGroup>, animationFrames?: number, armorDurabilityMultiplier?: number, parent?: $Supplier_<$GearType>, durabilityStat?: $Supplier_<$NumberProperty>, ];
    export class $GearTypeMatcher implements $Predicate<$GearType> {
        test(arg0: $GearType_): boolean;
        or(arg0: $Predicate_<$GearType>): $Predicate<$GearType>;
        negate(): $Predicate<$GearType>;
        and(arg0: $Predicate_<$GearType>): $Predicate<$GearType>;
        static ALL: $GearTypeMatcher;
        static CODEC: $Codec<$GearTypeMatcher>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GearTypeMatcher>;
        constructor(arg0: boolean, ...arg1: $GearType_[]);
        constructor(arg0: boolean, arg1: $List_<$GearType_>);
    }
    export class $GearItem {
        static REQUIRED_PARTS: $Supplier<$Collection<$PartType>>;
    }
    export interface $GearItem extends $ItemLike {
        asItem(): $Item;
        getItemColors(): $ItemColor;
        getGearType(): $GearType;
        getDurabilityStat(): $Supplier<$NumberProperty>;
        isValidSlot(arg0: string): boolean;
        getRequiredParts(): $Collection<$PartType>;
        requiresPartOfType(arg0: $PartType_): boolean;
        supportsPart(arg0: $ItemStack_, arg1: $PartInstance): boolean;
        getRepairModifier(arg0: $ItemStack_): number;
        construct(arg0: $Collection_<$PartInstance>): $ItemStack;
        get itemColors(): $ItemColor;
        get gearType(): $GearType;
        get durabilityStat(): $Supplier<$NumberProperty>;
        get requiredParts(): $Collection<$PartType>;
    }
    /**
     * Values that may be interpreted as {@link $GearItem}.
     */
    export type $GearItem_ = (() => $GearType_);
}
