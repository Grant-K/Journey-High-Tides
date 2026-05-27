import { $GearPropertyValue, $GearProperty_ } from "@package/net/silentchaos512/gear/api/property";
import { $ItemStack_, $ItemStack, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ItemAttributeModifiers$Builder } from "@package/net/minecraft/world/item/component";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_, $Collection } from "@package/java/util";
import { $TraitEffect, $TraitActionContext_, $ITraitCondition } from "@package/net/silentchaos512/gear/api/traits";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $Function_ } from "@package/java/util/function";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/silentchaos512/gear/gear/trait" {
    export class $Trait {
        onEntityIncomingDamage(arg0: $ItemStack_, arg1: number, arg2: $LivingEntity, arg3: $DamageSource_, arg4: number, arg5: number): number;
        getEffects(): $List<$TraitEffect>;
        onUpdate(arg0: $TraitActionContext_, arg1: boolean): void;
        onItemUse(arg0: $UseOnContext, arg1: number): $InteractionResult;
        showInTooltip(arg0: $TooltipFlag): boolean;
        getDisplayName(arg0: number): $MutableComponent;
        getConditions(): $List<$ITraitCondition>;
        onCalculateSynergy(arg0: number, arg1: number): number;
        onDurabilityDamage(arg0: $TraitActionContext_, arg1: number): number;
        onGearCrafted(arg0: $TraitActionContext_): void;
        onRecalculatePre(arg0: $ItemStack_, arg1: number): void;
        onRecalculatePost(arg0: $ItemStack_, arg1: number): void;
        getBonusProperties(arg0: number, arg1: $Player, arg2: $GearProperty_<never, never>, arg3: $GearPropertyValue<never>, arg4: number): $Collection<$GearPropertyValue<never>>;
        onGetAttributeModifiers(arg0: $TraitActionContext_, arg1: $ItemAttributeModifiers$Builder): void;
        onItemSwing(arg0: $ItemStack_, arg1: $LivingEntity, arg2: number): void;
        getMiningSpeedModifier(arg0: number, arg1: $BlockState_, arg2: number): number;
        addLootDrops(arg0: $TraitActionContext_, arg1: $ItemStack_): $ItemStack;
        /**
         * @deprecated
         */
        addInformation(arg0: number, arg1: $List_<$Component_>): void;
        addInformation(arg0: number, arg1: $List_<$Component_>, arg2: $TooltipFlag, arg3: $Function_<$Component, $Component>): void;
        addInformation(arg0: number, arg1: $List_<$Component_>, arg2: $TooltipFlag): void;
        getExtraWikiLines(): $Collection<string>;
        onAttackEntity(arg0: $TraitActionContext_, arg1: $LivingEntity, arg2: number): number;
        getDescription(arg0: number): $MutableComponent;
        getMaxLevel(): number;
        isHidden(): boolean;
        static CODEC: $Codec<$Trait>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Trait>;
        constructor(arg0: number, arg1: $Component_, arg2: $Component_, arg3: $List_<$TraitEffect>, arg4: $List_<$ITraitCondition>, arg5: $List_<$Component_>);
        get effects(): $List<$TraitEffect>;
        get conditions(): $List<$ITraitCondition>;
        get extraWikiLines(): $Collection<string>;
        get maxLevel(): number;
        get hidden(): boolean;
    }
}
