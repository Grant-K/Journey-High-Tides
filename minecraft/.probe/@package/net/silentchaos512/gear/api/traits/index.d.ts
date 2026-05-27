import { $MapCodec_, $Codec } from "@package/com/mojang/serialization";
import { $ComputeContext, $GearPropertyValue, $GearProperty_, $GearProperty$FormatContext_ } from "@package/net/silentchaos512/gear/api/property";
import { $ItemStack_, $ItemStack, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_ } from "@package/net/minecraft/network/chat";
import { $ItemAttributeModifiers$Builder } from "@package/net/minecraft/world/item/component";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Collection_, $List_, $Collection } from "@package/java/util";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $Serializer } from "@package/net/silentchaos512/gear/util";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Trait } from "@package/net/silentchaos512/gear/gear/trait";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $DataResource } from "@package/net/silentchaos512/gear/api/util";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/silentchaos512/gear/api/traits" {
    export class $TraitActionContext extends $Record {
        player(): $Player;
        trait(): $Trait;
        traitLevel(): number;
        gear(): $ItemStack;
        constructor(arg0: $Player, arg1: $TraitInstance_, arg2: $ItemStack_);
        constructor(player: $Player, trait: $Trait, traitLevel: number, gear: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $TraitActionContext}.
     */
    export type $TraitActionContext_ = { player?: $Player, traitLevel?: number, trait?: $Trait, gear?: $ItemStack_,  } | [player?: $Player, traitLevel?: number, trait?: $Trait, gear?: $ItemStack_, ];
    export class $TraitEffectType<T extends $TraitEffect> extends $Serializer<$RegistryFriendlyByteBuf, T> {
        rawStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $TraitEffect>;
        getWikiDescription(): string;
        constructor(arg0: $MapCodec_<T>, arg1: $StreamCodec_<$RegistryFriendlyByteBuf, T>, arg2: string);
        /**
         * @deprecated
         */
        constructor(arg0: $MapCodec_<T>, arg1: $StreamCodec_<$RegistryFriendlyByteBuf, T>);
        get wikiDescription(): string;
    }
    /**
     * Values that may be interpreted as {@link $TraitEffectType}.
     */
    export type $TraitEffectType_<T> = RegistryTypes.SilentgearTraitEffectType;
    export class $TraitEffect {
        onEntityIncomingDamage(arg0: $ItemStack_, arg1: number, arg2: $LivingEntity, arg3: $DamageSource_, arg4: number, arg5: number): number;
        onUpdate(arg0: $TraitActionContext_, arg1: boolean): void;
        onItemUse(arg0: $UseOnContext, arg1: number): $InteractionResult;
        onCalculateSynergy(arg0: number, arg1: number): number;
        onDurabilityDamage(arg0: $TraitActionContext_, arg1: number): number;
        onGearCrafted(arg0: $TraitActionContext_): void;
        onRecalculatePre(arg0: $ItemStack_, arg1: number): void;
        onRecalculatePost(arg0: $ItemStack_, arg1: number): void;
        getBonusProperties(arg0: number, arg1: $Player, arg2: $GearProperty_<never, never>, arg3: $GearPropertyValue<never>, arg4: number): $Collection<$GearPropertyValue<never>>;
        onGetAttributeModifiers(arg0: $TraitActionContext_, arg1: $ItemAttributeModifiers$Builder): void;
        onItemSwing(arg0: $ItemStack_, arg1: $LivingEntity, arg2: number): void;
        getMiningSpeedModifier(arg0: number, arg1: $BlockState_): number;
        addLootDrops(arg0: $TraitActionContext_, arg1: $ItemStack_): $ItemStack;
        getExtraWikiLines(): $Collection<string>;
        onAttackEntity(arg0: $TraitActionContext_, arg1: $LivingEntity, arg2: number): number;
        type(): $TraitEffectType<never>;
        static DISPATCH_CODEC: $Codec<$TraitEffect>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TraitEffect>;
        constructor();
        get extraWikiLines(): $Collection<string>;
    }
    export class $ITraitCondition {
        static DISPATCH_CODEC: $Codec<$ITraitCondition>;
        static REGISTRY_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TraitConditionSerializer<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ITraitCondition>;
    }
    export interface $ITraitCondition {
        getDisplayText(): $MutableComponent;
        reduce(arg0: $Trait, arg1: $ComputeContext): ($ITraitCondition) | undefined;
        serializer(): $TraitConditionSerializer<never>;
        matches(arg0: $Trait, arg1: $ComputeContext): boolean;
        get displayText(): $MutableComponent;
    }
    export interface $TraitEffectType<T> extends RegistryMarked<RegistryTypes.SilentgearTraitEffectTypeTag, RegistryTypes.SilentgearTraitEffectType> {}
    export interface $TraitConditionSerializer<V> extends RegistryMarked<RegistryTypes.SilentgearTraitConditionTag, RegistryTypes.SilentgearTraitCondition> {}
    export class $TraitInstance extends $Record {
        trait(): $DataResource<$Trait>;
        conditionsMatch(arg0: $ComputeContext): boolean;
        getLevel(): number;
        getDisplayName(): $MutableComponent;
        getDisplayName(arg0: $GearProperty$FormatContext_): $MutableComponent;
        getConditions(): $Collection<$ITraitCondition>;
        isValid(): boolean;
        addInformation(arg0: $List_<$Component_>, arg1: $TooltipFlag): void;
        getTrait(): $Trait;
        reduceConditions(arg0: $ComputeContext): ($TraitInstance) | undefined;
        getConditionsText(): $MutableComponent;
        getTraitId(): $ResourceLocation;
        level(): number;
        getDescription(): $MutableComponent;
        conditions(): $ImmutableList<$ITraitCondition>;
        static of(arg0: $DataResource<$Trait>, arg1: number, ...arg2: $ITraitCondition[]): $TraitInstance;
        static of(arg0: $Trait, arg1: number, arg2: $Collection_<$ITraitCondition>): $TraitInstance;
        static of(arg0: $Trait, arg1: number, ...arg2: $ITraitCondition[]): $TraitInstance;
        static CODEC: $Codec<$TraitInstance>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TraitInstance>;
        constructor(trait: $DataResource<$Trait>, level: number, conditions: $ImmutableList<$ITraitCondition>);
        get valid(): boolean;
        get conditionsText(): $MutableComponent;
        get traitId(): $ResourceLocation;
        get description(): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $TraitInstance}.
     */
    export type $TraitInstance_ = { level?: number, trait?: $DataResource<$Trait>, conditions?: $ImmutableList<$ITraitCondition>,  } | [level?: number, trait?: $DataResource<$Trait>, conditions?: $ImmutableList<$ITraitCondition>, ];
    export class $TraitConditionSerializer<V extends $ITraitCondition> extends $Serializer<$RegistryFriendlyByteBuf, V> {
        getRawStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ITraitCondition>;
        constructor(arg0: $MapCodec_<V>, arg1: $StreamCodec_<$RegistryFriendlyByteBuf, V>);
        get rawStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ITraitCondition>;
    }
    /**
     * Values that may be interpreted as {@link $TraitConditionSerializer}.
     */
    export type $TraitConditionSerializer_<V> = RegistryTypes.SilentgearTraitCondition;
}
