import { $Level_ } from "@package/net/minecraft/world/level";
import { $Item_, $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Spliterator, $Iterator, $List, $Map, $List_, $Collection } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Enum, $Iterable } from "@package/java/lang";
import { $Triplet } from "@package/net/mehvahdjukaar/moonlight/api/misc";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/moonlight/api/fluids" {
    export class $FluidContainerList implements $Iterable<$FluidContainerList$Category> {
        getCategories(): $List<$FluidContainerList$Category>;
        getCategoryFromFilled(filledContainer: $Item_): ($FluidContainerList$Category) | undefined;
        getCategoryFromEmpty(emptyContainer: $Item_): ($FluidContainerList$Category) | undefined;
        getPossibleFilled(): $Collection<$Item>;
        getFilled(emptyContainer: $Item_): ($Item) | undefined;
        getPossibleEmpty(): $Collection<$Item>;
        getEmpty(filledContainer: $Item_): ($Item) | undefined;
        iterator(): $Iterator<$FluidContainerList$Category>;
        spliterator(): $Spliterator<$FluidContainerList$Category>;
        forEach(arg0: $Consumer_<$FluidContainerList$Category>): void;
        static CODEC: $Codec<$FluidContainerList>;
        constructor(categoryList: $List_<$FluidContainerList$Category>);
        constructor();
        [Symbol.iterator](): Iterator<$FluidContainerList$Category>
        get categories(): $List<$FluidContainerList$Category>;
        get possibleFilled(): $Collection<$Item>;
        get possibleEmpty(): $Collection<$Item>;
    }
    export class $SoftFluid {
        afterInit(): void;
        getTranslatedName(): $Component;
        isFood(): boolean;
        getContainerList(): $FluidContainerList;
        getEmptyContainer(filledContainer: $Item_): ($Item) | undefined;
        getFoodProvider(): $FoodProvider;
        getPreservedComponents(): $HolderSet<$DataComponentType<never>>;
        getVanillaFluid(): $Holder<$Fluid>;
        getTintMethod(): $SoftFluid$TintMethod;
        getAverageTextureTintColor(): number;
        static getRenderingData(useTexturesFrom: $ResourceLocation_): $Triplet<$ResourceLocation, $ResourceLocation, number>;
        static getFluidSpecificAttributes(fluid: $Fluid_): $Pair<number, $Component>;
        getTextureOverride(): $ResourceLocation;
        getEquivalentFluids(): $HolderSet<$Fluid>;
        /**
         * @deprecated
         */
        isEmptyFluid(): boolean;
        getFilledContainer(emptyContainer: $Item_): ($Item) | undefined;
        getEmissivity(): number;
        isColored(): boolean;
        getTintColor(): number;
        getStillTexture(): $ResourceLocation;
        getFlowingTexture(): $ResourceLocation;
        getLuminosity(): number;
        isEquivalent(fluid: $Holder_<$Fluid>): boolean;
        isEnabled(): boolean;
        static BOTTLE_COUNT: number;
        isGenerated: boolean;
        static CODEC: $Codec<$SoftFluid>;
        static BUCKET_COUNT: number;
        static HOLDER_CODEC: $Codec<$Holder<$SoftFluid>>;
        static TRANSLATABLE_COMPONENT: $Codec<$Component>;
        static BOWL_COUNT: number;
        static WATER_BUCKET_COUNT: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$SoftFluid>>;
        constructor(fluid: $Holder_<$Fluid>);
        get translatedName(): $Component;
        get food(): boolean;
        get containerList(): $FluidContainerList;
        get foodProvider(): $FoodProvider;
        get preservedComponents(): $HolderSet<$DataComponentType<never>>;
        get vanillaFluid(): $Holder<$Fluid>;
        get tintMethod(): $SoftFluid$TintMethod;
        get averageTextureTintColor(): number;
        get textureOverride(): $ResourceLocation;
        get equivalentFluids(): $HolderSet<$Fluid>;
        get emptyFluid(): boolean;
        get emissivity(): number;
        get colored(): boolean;
        get tintColor(): number;
        get stillTexture(): $ResourceLocation;
        get flowingTexture(): $ResourceLocation;
        get luminosity(): number;
        get enabled(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SoftFluid}.
     */
    export type $SoftFluid_ = RegistryTypes.MoonlightSoftFluid;
    export class $FluidContainerList$Category {
        /**
         * @deprecated
         */
        getAmount(): number;
        getFillSound(): $SoundEvent;
        getEmptySound(): $SoundEvent;
        getEmptyContainer(): $Item;
        getFilledItems(): $List<$Item>;
        getCapacity(): number;
        getFirstFilled(): ($Item) | undefined;
        isEmpty(): boolean;
        static CODEC: $Codec<$FluidContainerList$Category>;
        get amount(): number;
        get fillSound(): $SoundEvent;
        get emptySound(): $SoundEvent;
        get emptyContainer(): $Item;
        get filledItems(): $List<$Item>;
        get capacity(): number;
        get firstFilled(): ($Item) | undefined;
        get empty(): boolean;
    }
    export interface $SoftFluid extends RegistryMarked<RegistryTypes.MoonlightSoftFluidTag, RegistryTypes.MoonlightSoftFluid> {}
    export class $SoftFluid$TintMethod extends $Enum<$SoftFluid$TintMethod> implements $StringRepresentable {
        getSerializedName(): string;
        appliesToFlowing(): boolean;
        appliesToStill(): boolean;
        static values(): $SoftFluid$TintMethod[];
        static valueOf(name: string): $SoftFluid$TintMethod;
        getRemappedEnumConstantName(): string;
        static FLOWING: $SoftFluid$TintMethod;
        static CODEC: $Codec<$SoftFluid$TintMethod>;
        static STILL_AND_FLOWING: $SoftFluid$TintMethod;
        static NO_TINT: $SoftFluid$TintMethod;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SoftFluid$TintMethod}.
     */
    export type $SoftFluid$TintMethod_ = "no_tint" | "flowing" | "still_and_flowing";
    export class $FoodProvider {
        consume(player: $Player, world: $Level_, nbtApplier: $Consumer_<$ItemStack>): boolean;
        getFoodItem(): $Item;
        getDivider(): number;
        static create(item: $Item_, divider: number): $FoodProvider;
        isEmpty(): boolean;
        static CODEC: $Codec<$FoodProvider>;
        static CUSTOM_PROVIDERS: $Map<$Item, $FoodProvider>;
        static EMPTY: $FoodProvider;
        get foodItem(): $Item;
        get divider(): number;
        get empty(): boolean;
    }
}
