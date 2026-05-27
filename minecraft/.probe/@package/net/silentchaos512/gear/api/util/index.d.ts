import { $Ingredient, $CraftingInput } from "@package/net/minecraft/world/item/crafting";
import { $GearPropertyValue, $GearProperty, $GearProperty_ } from "@package/net/silentchaos512/gear/api/property";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $PartType, $PartType_, $GearPart } from "@package/net/silentchaos512/gear/api/part";
import { $TraitInstance } from "@package/net/silentchaos512/gear/api/traits";
import { $Collection_, $Collection } from "@package/java/util";
import { $GearType_, $GearType } from "@package/net/silentchaos512/gear/api/item";
import { $Consumer_, $Supplier_, $Function_, $Supplier } from "@package/java/util/function";
import { $Material } from "@package/net/silentchaos512/gear/api/material";
import { $Stream } from "@package/java/util/stream";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Trait } from "@package/net/silentchaos512/gear/gear/trait";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PartInstance } from "@package/net/silentchaos512/gear/gear/part";
import { $Record } from "@package/java/lang";
import { $MaterialInstance } from "@package/net/silentchaos512/gear/gear/material";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/silentchaos512/gear/api/util" {
    export class $DataResource<T> implements $Supplier<T> {
        static trait(arg0: $ResourceLocation_): $DataResource<$Trait>;
        static trait(arg0: string): $DataResource<$Trait>;
        static material(arg0: $Material): $DataResource<$Material>;
        static material(arg0: $MaterialInstance): $DataResource<$Material>;
        static material(arg0: $ResourceLocation_): $DataResource<$Material>;
        static material(arg0: string): $DataResource<$Material>;
        getNullable(): T;
        static part(arg0: $ResourceLocation_): $DataResource<$GearPart>;
        static part(arg0: string): $DataResource<$GearPart>;
        toOptional(): ($DataResource<T>) | undefined;
        ifPresent(arg0: $Consumer_<T>): void;
        get(): T;
        map<U>(arg0: $Function_<T, U>): (U) | undefined;
        stream(): $Stream<T>;
        static empty<T>(): $DataResource<T>;
        isPresent(): boolean;
        getId(): $ResourceLocation;
        static MATERIAL_CODEC: $Codec<$DataResource<$Material>>;
        static MATERIAL_STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $DataResource<$Material>>;
        static TRAIT_CODEC: $Codec<$DataResource<$Trait>>;
        static PART_STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $DataResource<$GearPart>>;
        static TRAIT_STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $DataResource<$Trait>>;
        static PART_CODEC: $Codec<$DataResource<$GearPart>>;
        constructor(arg0: $ResourceLocation_, arg1: $Function_<$ResourceLocation, T>);
        get nullable(): T;
        get present(): boolean;
        get id(): $ResourceLocation;
    }
    export class $GearComponentInstance<A extends $GearComponent<never>> {
    }
    export interface $GearComponentInstance<A extends $GearComponent<never>> {
        getDisplayName(arg0: $PartType_, arg1: $ItemStack_): $Component;
        getDisplayName(arg0: $PartType_): $Component;
        getItem(): $ItemStack;
        getNameColor(): number;
        getNameColor(arg0: $PartType_, arg1: $GearType_): number;
        getSalvageItem(): $ItemStack;
        getTraits(arg0: $PartGearKey_): $Collection<$TraitInstance>;
        getPropertyModifiers<T, V extends $GearPropertyValue<T>>(arg0: $Supplier_<$PartType>, arg1: $PropertyKey<T, V>): $Collection<V>;
        getPropertyModifiers<T, V extends $GearPropertyValue<T>>(arg0: $PartType_, arg1: $PropertyKey<T, V>): $Collection<V>;
        get(): A;
        getProperty<T, V extends $GearPropertyValue<T>>(arg0: $PartType_, arg1: $PropertyKey<T, V>): T;
        getProperty<T, V extends $GearPropertyValue<T>>(arg0: $Supplier_<$PartType>, arg1: $PropertyKey<T, V>): T;
        getProperty<T, V extends $GearPropertyValue<T>>(arg0: $PartType_, arg1: $GearProperty_<T, V>): T;
        getId(): $ResourceLocation;
        get item(): $ItemStack;
        get salvageItem(): $ItemStack;
        get id(): $ResourceLocation;
    }
    export class $PropertyKey<T, V extends $GearPropertyValue<T>> {
        gearType(): $GearType;
        property(): $GearProperty<T, V>;
        static of<T, V extends $GearPropertyValue<T>>(arg0: $GearProperty_<T, V>, arg1: $GearType_): $PropertyKey<T, V>;
        static of<T, V extends $GearPropertyValue<T>, P extends $GearProperty<T, V>>(arg0: $Supplier_<P>, arg1: $Supplier_<$GearType>): $PropertyKey<T, V>;
        getParent(): $PropertyKey<never, never>;
        key(): string;
        static CODEC: $Codec<$PropertyKey<never, $GearPropertyValue<never>>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PropertyKey<never, never>>;
        get parent(): $PropertyKey<never, never>;
    }
    export class $PartGearKey extends $Record {
        static ofMain(arg0: $Supplier_<$GearType>): $PartGearKey;
        static ofMain(arg0: $GearType_): $PartGearKey;
        partType(): $PartType;
        getDisplayName(): $Component;
        gearType(): $GearType;
        /**
         * @deprecated
         */
        getGearType(): $GearType;
        /**
         * @deprecated
         */
        getPartType(): $PartType;
        static ofAll(arg0: $Supplier_<$PartType>): $PartGearKey;
        static ofAll(arg0: $PartType_): $PartGearKey;
        static of(arg0: $GearType_, arg1: $PartInstance): $PartGearKey;
        static of(arg0: $Supplier_<$GearType>, arg1: $Supplier_<$PartType>): $PartGearKey;
        static of(arg0: $GearType_, arg1: $PartType_): $PartGearKey;
        getParent(): $PartGearKey;
        static ALL_MAIN: $PartGearKey;
        static CODEC: $Codec<$PartGearKey>;
        constructor(gearType: $GearType_, partType: $PartType_);
        get displayName(): $Component;
        get parent(): $PartGearKey;
    }
    /**
     * Values that may be interpreted as {@link $PartGearKey}.
     */
    export type $PartGearKey_ = { gearType?: $GearType_, partType?: $PartType_,  } | [gearType?: $GearType_, partType?: $PartType_, ];
    export class $PropertyProvider<D extends $GearComponentInstance<never>> {
    }
    export interface $PropertyProvider<D extends $GearComponentInstance<never>> {
        getPropertyModifiers<T, V extends $GearPropertyValue<T>>(arg0: D, arg1: $PartType_, arg2: $PropertyKey<T, V>): $Collection<V>;
        getPropertyModifiers<T, V extends $GearPropertyValue<T>>(arg0: D, arg1: $Supplier_<$PartType>, arg2: $PropertyKey<T, V>): $Collection<V>;
        getPropertyUnclamped<T, V extends $GearPropertyValue<T>>(arg0: D, arg1: $Supplier_<$PartType>, arg2: $PropertyKey<T, V>): T;
        getPropertyUnclamped<T, V extends $GearPropertyValue<T>>(arg0: D, arg1: $PartType_, arg2: $PropertyKey<T, V>): T;
        getProperty<T, V extends $GearPropertyValue<T>>(arg0: D, arg1: $PartType_, arg2: $PropertyKey<T, V>): T;
        getProperty<T, V extends $GearPropertyValue<T>>(arg0: D, arg1: $Supplier_<$PartType>, arg2: $PropertyKey<T, V>): T;
    }
    /**
     * Values that may be interpreted as {@link $PropertyProvider}.
     */
    export type $PropertyProvider_<D> = ((arg0: D, arg1: $PartType, arg2: $PropertyKey<any, any>) => $Collection_<any>);
    export class $GearComponent<D extends $GearComponentInstance<never>> {
    }
    export interface $GearComponent<D extends $GearComponentInstance<never>> extends $PropertyProvider<D> {
        getDisplayName(arg0: D, arg1: $PartType_): $Component;
        isCraftingAllowed(arg0: D, arg1: $PartType_, arg2: $GearType_): boolean;
        isCraftingAllowed(arg0: D, arg1: $PartType_, arg2: $GearType_, arg3: $CraftingInput): boolean;
        getIngredient(): $Ingredient;
        get ingredient(): $Ingredient;
    }
}
