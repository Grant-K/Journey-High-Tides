import { $ItemStack, $Rarity } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $TextColor, $Style } from "@package/net/minecraft/network/chat";
import { $ColorParticleDataBuilder } from "@package/team/lodestar/lodestone/systems/particle/data/color";
import { $Easing } from "@package/team/lodestar/lodestone/systems/easing";
import { $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $SpiritShardItem } from "@package/com/sammy/malum/common/item/spirit";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Color } from "@package/java/awt";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/sammy/malum/core/systems/spirit/type" {
    export interface $SpiritArcanaType extends RegistryMarked<RegistryTypes.MalumSpiritTypesTag, RegistryTypes.MalumSpiritTypes> {}
    export class $SpiritColorProperties extends $Record {
        colorEasing(): $Easing;
        colorCoefficient(): number;
        primaryColor(): $Color;
        secondaryColor(): $Color;
        createColorData(): $ColorParticleDataBuilder;
        createColorData(arg0: number): $ColorParticleDataBuilder;
        itemColor(): $Color;
        alphaMultiplier(): number;
        static create(arg0: $Color, arg1: $Color): $SpiritColorProperties$SpiritTypeColorPropertiesBuilder;
        constructor(primaryColor: $Color, secondaryColor: $Color, colorEasing: $Easing, colorCoefficient: number, alphaMultiplier: number, itemColor: $Color);
    }
    /**
     * Values that may be interpreted as {@link $SpiritColorProperties}.
     */
    export type $SpiritColorProperties_ = { primaryColor?: $Color, alphaMultiplier?: number, secondaryColor?: $Color, colorEasing?: $Easing, colorCoefficient?: number, itemColor?: $Color,  } | [primaryColor?: $Color, alphaMultiplier?: number, secondaryColor?: $Color, colorEasing?: $Easing, colorCoefficient?: number, itemColor?: $Color, ];
    export class $SpiritColorProperties$SpiritTypeColorPropertiesBuilder {
        setAlphaMultiplier(arg0: number): $SpiritColorProperties$SpiritTypeColorPropertiesBuilder;
        setColorCoefficient(arg0: number): $SpiritColorProperties$SpiritTypeColorPropertiesBuilder;
        setColorEasing(arg0: $Easing): $SpiritColorProperties$SpiritTypeColorPropertiesBuilder;
        brightenItemColor(arg0: number): $SpiritColorProperties$SpiritTypeColorPropertiesBuilder;
        darkenItemColor(arg0: number): $SpiritColorProperties$SpiritTypeColorPropertiesBuilder;
        setItemColor(arg0: $Color): $SpiritColorProperties$SpiritTypeColorPropertiesBuilder;
        build(): $SpiritColorProperties;
        colorEasing: $Easing;
        itemColor: $Color;
        primaryColor: $Color;
        alphaMultiplier: number;
        colorCoefficient: number;
        secondaryColor: $Color;
        constructor(arg0: $Color, arg1: $Color);
    }
    export class $SpiritLike {
    }
    export interface $SpiritLike {
        getStyle(arg0: boolean): $Style;
        getStyle(arg0: number): $Style;
        getTextColor(arg0: number): $TextColor;
        getTextColor(arg0: boolean): $TextColor;
        getRegistryName(): $ResourceLocation;
        getSpirit(): $SpiritArcanaType;
        createColorData(): $ColorParticleDataBuilder;
        createColorData(arg0: number): $ColorParticleDataBuilder;
        getLangKey(): string;
        getSpiritShard(): $SpiritShardItem;
        getAnalogSignal(): number;
        getSpiritStack(arg0: number): $ItemStack;
        getSpiritStack(): $ItemStack;
        getAlphaMultiplier(): number;
        getItemColor(): $Color;
        getCountedKey(): string;
        getFlavourKey(): string;
        getSecondaryColor(): $Color;
        getPrimaryColor(): $Color;
        getHolder(): $Holder<$SpiritArcanaType>;
        getName(): string;
        matches(arg0: $SpiritLike_): boolean;
        get registryName(): $ResourceLocation;
        get spirit(): $SpiritArcanaType;
        get langKey(): string;
        get spiritShard(): $SpiritShardItem;
        get analogSignal(): number;
        get alphaMultiplier(): number;
        get itemColor(): $Color;
        get countedKey(): string;
        get flavourKey(): string;
        get secondaryColor(): $Color;
        get primaryColor(): $Color;
        get holder(): $Holder<$SpiritArcanaType>;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $SpiritLike}.
     */
    export type $SpiritLike_ = (() => $SpiritArcanaType_);
    export class $SpiritArcanaType implements $SpiritLike {
        getSpirit(): $SpiritArcanaType;
        getSpiritShard(): $SpiritShardItem;
        getColorProperties(): $SpiritColorProperties;
        getItemRarity(): $Rarity;
        getGlowTexture(): $ResourceLocation;
        static load(arg0: $CompoundTag_, arg1: string): ($SpiritArcanaType) | undefined;
        static load(arg0: $CompoundTag_): ($SpiritArcanaType) | undefined;
        save(arg0: $CompoundTag_): void;
        save(arg0: $CompoundTag_, arg1: string): void;
        getStyle(arg0: boolean): $Style;
        getStyle(arg0: number): $Style;
        getTextColor(arg0: number): $TextColor;
        getTextColor(arg0: boolean): $TextColor;
        getRegistryName(): $ResourceLocation;
        createColorData(): $ColorParticleDataBuilder;
        createColorData(arg0: number): $ColorParticleDataBuilder;
        getLangKey(): string;
        getAnalogSignal(): number;
        getSpiritStack(arg0: number): $ItemStack;
        getSpiritStack(): $ItemStack;
        getAlphaMultiplier(): number;
        getItemColor(): $Color;
        getCountedKey(): string;
        getFlavourKey(): string;
        getSecondaryColor(): $Color;
        getPrimaryColor(): $Color;
        getHolder(): $Holder<$SpiritArcanaType>;
        getName(): string;
        matches(arg0: $SpiritLike_): boolean;
        static CODEC: $Codec<$SpiritArcanaType>;
        static HOLDER_CODEC: $Codec<$Holder<$SpiritArcanaType>>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SpiritArcanaType>;
        get spirit(): $SpiritArcanaType;
        get spiritShard(): $SpiritShardItem;
        get colorProperties(): $SpiritColorProperties;
        get itemRarity(): $Rarity;
        get glowTexture(): $ResourceLocation;
        get registryName(): $ResourceLocation;
        get langKey(): string;
        get analogSignal(): number;
        get alphaMultiplier(): number;
        get itemColor(): $Color;
        get countedKey(): string;
        get flavourKey(): string;
        get secondaryColor(): $Color;
        get primaryColor(): $Color;
        get holder(): $Holder<$SpiritArcanaType>;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $SpiritArcanaType}.
     */
    export type $SpiritArcanaType_ = RegistryTypes.MalumSpiritTypes;
}
