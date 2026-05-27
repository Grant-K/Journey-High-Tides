import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Item } from "@package/net/minecraft/world/item";
import { $DataResult, $Codec } from "@package/com/mojang/serialization";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $Record, $Object } from "@package/java/lang";
import { $BonusType_, $BonusType } from "@package/io/redspace/ironsjewelry/core/bonuses";
import { $IBonusParameterType, $IBonusParameterType_ } from "@package/io/redspace/ironsjewelry/core/parameters";
import { $Tuple } from "@package/net/minecraft/util";

declare module "@package/io/redspace/ironsjewelry/core/data" {
    export interface $MaterialDefinition extends RegistryMarked<RegistryTypes.IronsJewelryMaterialTag, RegistryTypes.IronsJewelryMaterial> {}
    export class $BonusInstance extends $Record {
        cooldown(): ($QualityScalar) | undefined;
        quality(): number;
        bonusType(): $BonusType;
        getTooltipDescription(): $List<$Component>;
        parameter(): $Map<$IBonusParameterType<never>, $Object>;
        constructor(bonusType: $BonusType_, quality: number, parameter: $Map_<$IBonusParameterType_<never>, $Object>, cooldown: ($QualityScalar_) | undefined);
        get tooltipDescription(): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $BonusInstance}.
     */
    export type $BonusInstance_ = { parameter?: $Map_<$IBonusParameterType_<never>, $Object>, bonusType?: $BonusType_, cooldown?: ($QualityScalar_) | undefined, quality?: number,  } | [parameter?: $Map_<$IBonusParameterType_<never>, $Object>, bonusType?: $BonusType_, cooldown?: ($QualityScalar_) | undefined, quality?: number, ];
    export class $PartIngredient extends $Record {
        bonuses(): $List<$Bonus>;
        materialCost(): number;
        part(): $Holder<$PartDefinition>;
        drawOrder(): number;
        static CODEC: $Codec<$PartIngredient>;
        constructor(part: $Holder_<$PartDefinition>, materialCost: number, drawOrder: number, bonuses: $List_<$Bonus_>);
    }
    /**
     * Values that may be interpreted as {@link $PartIngredient}.
     */
    export type $PartIngredient_ = { drawOrder?: number, part?: $Holder_<$PartDefinition>, materialCost?: number, bonuses?: $List_<$Bonus_>,  } | [drawOrder?: number, part?: $Holder_<$PartDefinition>, materialCost?: number, bonuses?: $List_<$Bonus_>, ];
    export interface $PatternDefinition extends RegistryMarked<RegistryTypes.IronsJewelryPatternTag, RegistryTypes.IronsJewelryPattern> {}
    export interface $JewelryType extends RegistryMarked<RegistryTypes.IronsJewelryJewelryTypeTag, RegistryTypes.IronsJewelryJewelryType> {}
    export class $Bonus extends $Record {
        cooldown(): ($QualityScalar) | undefined;
        bonusType(): $BonusType;
        parameterValue(): $Map<$IBonusParameterType<never>, $Object>;
        qualityMultiplier(): number;
        static CODEC: $Codec<$Bonus>;
        constructor(arg0: $BonusType_, arg1: number);
        constructor(bonusType: $BonusType_, qualityMultiplier: number, cooldown: ($QualityScalar_) | undefined, parameterValue: $Map_<$IBonusParameterType_<never>, $Object>);
    }
    /**
     * Values that may be interpreted as {@link $Bonus}.
     */
    export type $Bonus_ = { bonusType?: $BonusType_, parameterValue?: $Map_<$IBonusParameterType_<never>, $Object>, cooldown?: ($QualityScalar_) | undefined, qualityMultiplier?: number,  } | [bonusType?: $BonusType_, parameterValue?: $Map_<$IBonusParameterType_<never>, $Object>, cooldown?: ($QualityScalar_) | undefined, qualityMultiplier?: number, ];
    export class $MaterialDefinition extends $Record {
        descriptionId(): string;
        quality(): number;
        ingredient(): $Ingredient;
        materialType(): $List<string>;
        bonusParameters(): $Map<$IBonusParameterType<never>, $Object>;
        paletteLocation(): $ResourceLocation;
        static CODEC: $Codec<$MaterialDefinition>;
        constructor(descriptionId: string, ingredient: $Ingredient_, materialType: $List_<string>, paletteLocation: $ResourceLocation_, bonusParameters: $Map_<$IBonusParameterType_<never>, $Object>, quality: number);
    }
    /**
     * Values that may be interpreted as {@link $MaterialDefinition}.
     */
    export type $MaterialDefinition_ = RegistryTypes.IronsJewelryMaterial | { ingredient?: $Ingredient_, materialType?: $List_<string>, quality?: number, bonusParameters?: $Map_<$IBonusParameterType_<never>, $Object>, descriptionId?: string, paletteLocation?: $ResourceLocation_,  } | [ingredient?: $Ingredient_, materialType?: $List_<string>, quality?: number, bonusParameters?: $Map_<$IBonusParameterType_<never>, $Object>, descriptionId?: string, paletteLocation?: $ResourceLocation_, ];
    export class $PartDefinition extends $Record {
        allowedMaterials(): $List<string>;
        descriptionId(): string;
        paletteKey(): $ResourceLocation;
        static simpleMetalPart(arg0: string, arg1: string): $PartDefinition;
        static simpleGemPart(arg0: string, arg1: string): $PartDefinition;
        canUseMaterial(arg0: $List_<string>): boolean;
        canUseMaterial(arg0: string): boolean;
        baseTextureLocation(): $ResourceLocation;
        static CODEC: $Codec<$PartDefinition>;
        constructor(descriptionId: string, paletteKey: $ResourceLocation_, allowedMaterials: $List_<string>, baseTextureLocation: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $PartDefinition}.
     */
    export type $PartDefinition_ = RegistryTypes.IronsJewelryPart | { paletteKey?: $ResourceLocation_, allowedMaterials?: $List_<string>, descriptionId?: string, baseTextureLocation?: $ResourceLocation_,  } | [paletteKey?: $ResourceLocation_, allowedMaterials?: $List_<string>, descriptionId?: string, baseTextureLocation?: $ResourceLocation_, ];
    export interface $PartDefinition extends RegistryMarked<RegistryTypes.IronsJewelryPartTag, RegistryTypes.IronsJewelryPart> {}
    export class $PatternDefinition extends $Record {
        bonuses(): $List<$Tuple<$PartIngredient, $Bonus>>;
        jewelryType(): $JewelryType;
        getPatternBonusesTooltip(): $List<$MutableComponent>;
        getFullPatternTooltip(): $List<$Component>;
        descriptionId(): string;
        unlockedByDefault(): boolean;
        partTemplate(): $List<$PartIngredient>;
        partForQuality(): ($Holder<$PartDefinition>) | undefined;
        qualityMultiplier(): number;
        static validate(arg0: $PatternDefinition_): $DataResult<$PatternDefinition>;
        static CODEC: $Codec<$PatternDefinition>;
        constructor(descriptionId: string, jewelryType: $JewelryType_, partTemplate: $List_<$PartIngredient_>, partForQuality: ($Holder_<$PartDefinition>) | undefined, unlockedByDefault: boolean, qualityMultiplier: number);
        get patternBonusesTooltip(): $List<$MutableComponent>;
        get fullPatternTooltip(): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $PatternDefinition}.
     */
    export type $PatternDefinition_ = RegistryTypes.IronsJewelryPattern | { unlockedByDefault?: boolean, jewelryType?: $JewelryType_, partTemplate?: $List_<$PartIngredient_>, descriptionId?: string, partForQuality?: ($Holder_<$PartDefinition>) | undefined, qualityMultiplier?: number,  } | [unlockedByDefault?: boolean, jewelryType?: $JewelryType_, partTemplate?: $List_<$PartIngredient_>, descriptionId?: string, partForQuality?: ($Holder_<$PartDefinition>) | undefined, qualityMultiplier?: number, ];
    export class $QualityScalar extends $Record {
        qualityScalar(): number;
        baseAmount(): number;
        sample(arg0: number): number;
        min(): number;
        max(): (number) | undefined;
        static CODEC: $Codec<$QualityScalar>;
        static CONSTANT_CODEC: $Codec<$QualityScalar>;
        static DIRECT_CODEC: $Codec<$QualityScalar>;
        constructor(arg0: number, arg1: number);
        constructor(baseAmount: number, qualityScalar: number, min: number, max: (number) | undefined);
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $QualityScalar}.
     */
    export type $QualityScalar_ = { baseAmount?: number, min?: number, qualityScalar?: number, max?: (number) | undefined,  } | [baseAmount?: number, min?: number, qualityScalar?: number, max?: (number) | undefined, ];
    export class $JewelryType extends $Record {
        getCuriosSlotIdentifier(): (string) | undefined;
        item(): $Holder<$Item>;
        constructor(item: $Holder_<$Item>);
        get curiosSlotIdentifier(): (string) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $JewelryType}.
     */
    export type $JewelryType_ = RegistryTypes.IronsJewelryJewelryType | { item?: $Holder_<$Item>,  } | [item?: $Holder_<$Item>, ];
}
