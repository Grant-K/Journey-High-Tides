import { $GearPropertyValue, $GearProperty_ } from "@package/net/silentchaos512/gear/api/property";
import { $ItemStack_, $ItemStack, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $CraftingInput } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PartType, $PartType_, $GearPart } from "@package/net/silentchaos512/gear/api/part";
import { $CompoundPartItem } from "@package/net/silentchaos512/gear/item";
import { $TraitInstance } from "@package/net/silentchaos512/gear/api/traits";
import { $List, $List_, $Collection } from "@package/java/util";
import { $GearType_, $GearType } from "@package/net/silentchaos512/gear/api/item";
import { $Supplier_ } from "@package/java/util/function";
import { $Material } from "@package/net/silentchaos512/gear/api/material";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $MaterialInstance } from "@package/net/silentchaos512/gear/gear/material";
import { $PropertyKey, $GearComponentInstance, $DataResource, $PartGearKey_, $PartGearKey } from "@package/net/silentchaos512/gear/api/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/silentchaos512/gear/gear/part" {
    export class $PartInstance implements $GearComponentInstance<$GearPart> {
        getColor(arg0: $GearType_, arg1: number, arg2: number): number;
        getColor(arg0: $ItemStack_): number;
        getColor(arg0: $ItemStack_, arg1: number, arg2: number): number;
        getNullable(): $GearPart;
        getDisplayName(arg0: $PartType_, arg1: $ItemStack_): $Component;
        getDisplayName(): $Component;
        isValid(): boolean;
        getItem(): $ItemStack;
        getMaterials(): $List<$MaterialInstance>;
        addInformation(arg0: $ItemStack_, arg1: $List_<$Component_>, arg2: $TooltipFlag): void;
        getNameColor(arg0: $PartType_, arg1: $GearType_): number;
        getModelKey(): string;
        isCraftingAllowed(arg0: $GearType_, arg1: $CraftingInput): boolean;
        getPropertyModifiers<T, V extends $GearPropertyValue<T>>(arg0: $PartType_, arg1: $PropertyKey<T, V>): $Collection<V>;
        getPropertyModifiers<T, V extends $GearPropertyValue<T>>(arg0: $PropertyKey<T, V>): $Collection<V>;
        getGearType(): $GearType;
        getPrimaryMaterial(): $MaterialInstance;
        getMaterialName(arg0: $ItemStack_): $Component;
        onAddToGear(arg0: $ItemStack_): void;
        onRemoveFromGear(arg0: $ItemStack_): void;
        static create(arg0: $DataResource<$GearPart>, arg1: $CompoundPartItem, arg2: $List_<$MaterialInstance>): $PartInstance;
        static create(arg0: $DataResource<$GearPart>, arg1: $CompoundPartItem, arg2: $DataResource<$Material>): $PartInstance;
        getProperty<T, V extends $GearPropertyValue<T>>(arg0: $PartType_, arg1: $PropertyKey<T, V>): T;
        static of(arg0: $GearPart): $PartInstance;
        static of(arg0: $DataResource<$GearPart>): $PartInstance;
        static of(arg0: $GearPart, arg1: $ItemStack_): $PartInstance;
        static of(arg0: $DataResource<$GearPart>, arg1: $ItemStack_): $PartInstance;
        static from(arg0: $ItemStack_): $PartInstance;
        static from(arg0: $ItemStack_, arg1: boolean): $PartInstance;
        getKey(): $PartGearKey;
        getId(): $ResourceLocation;
        getType(): $PartType;
        getDisplayName(arg0: $PartType_): $Component;
        getNameColor(): number;
        getSalvageItem(): $ItemStack;
        getTraits(arg0: $PartGearKey_): $Collection<$TraitInstance>;
        getPropertyModifiers<T, V extends $GearPropertyValue<T>>(arg0: $Supplier_<$PartType>, arg1: $PropertyKey<T, V>): $Collection<V>;
        getProperty<T, V extends $GearPropertyValue<T>>(arg0: $Supplier_<$PartType>, arg1: $PropertyKey<T, V>): T;
        getProperty<T, V extends $GearPropertyValue<T>>(arg0: $PartType_, arg1: $GearProperty_<T, V>): T;
        get(): $GearPart;
        static CODEC: $Codec<$PartInstance>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PartInstance>;
        get nullable(): $GearPart;
        get valid(): boolean;
        get item(): $ItemStack;
        get materials(): $List<$MaterialInstance>;
        get modelKey(): string;
        get gearType(): $GearType;
        get primaryMaterial(): $MaterialInstance;
        get key(): $PartGearKey;
        get id(): $ResourceLocation;
        get type(): $PartType;
        get salvageItem(): $ItemStack;
    }
    export class $RepairContext$Type extends $Enum<$RepairContext$Type> {
        getBonusEfficiency(): number;
        static values(): $RepairContext$Type[];
        static valueOf(arg0: string): $RepairContext$Type;
        static QUICK: $RepairContext$Type;
        static ANVIL: $RepairContext$Type;
        get bonusEfficiency(): number;
    }
    /**
     * Values that may be interpreted as {@link $RepairContext$Type}.
     */
    export type $RepairContext$Type_ = "quick" | "anvil";
}
