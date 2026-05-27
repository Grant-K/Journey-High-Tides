import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ModifySpiritSpoilsEvent, $CollectSpiritEvent, $MalignantCritEvent$Post, $ModifySoulWardPropertiesEvent, $ModifyGluttonyPropertiesEvent, $MalignantCritEvent$Pre, $SoulWardDamageEvent } from "@package/com/sammy/malum/core/systems/events";
import { $ItemStack_, $ItemStack, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $IMalumEventResponder } from "@package/com/sammy/malum/common/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Multimap } from "@package/com/google/common/collect";
import { $AttributeModifier_, $Attribute, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List, $Map$Entry, $List_ } from "@package/java/util";
import { $EntityTickEvent$Pre } from "@package/net/neoforged/neoforge/event/tick";
import { $AddAttributeTooltipsEvent } from "@package/net/neoforged/neoforge/client/event";
import { $Consumer_, $Supplier_, $Supplier } from "@package/java/util/function";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $SpiritHolder } from "@package/com/sammy/malum/core/systems/registry";
import { $SpiritArcanaType_, $SpiritArcanaType } from "@package/com/sammy/malum/core/systems/spirit/type";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingDamageEvent$Pre, $LivingDamageEvent$Post, $LivingDeathEvent, $LivingIncomingDamageEvent } from "@package/net/neoforged/neoforge/event/entity/living";

declare module "@package/com/sammy/malum/core/systems/geas" {
    export class $GeasEffectType {
        getDefaultInstance(): $GeasEffect;
        createStack(arg0: boolean): $ItemStack;
        getRegistryName(): $ResourceLocation;
        createEffect(): $GeasEffect;
        getLangKey(): string;
        getDummyCreativeStack(): $ItemStack;
        createDefaultStack(): $ItemStack;
        getIdentifyingSpirit(): $SpiritHolder<$SpiritArcanaType>;
        getDetailedCons(): string;
        getDetailedPros(): string;
        createCreativeStack(): $ItemStack;
        is(arg0: $TagKey_<$GeasEffectType>): boolean;
        getIcon(): $ResourceLocation;
        getDescription(): string;
        getHolder(): $Holder<$GeasEffectType>;
        static CODEC: $Codec<$GeasEffectType>;
        spiritTypes: $List<$SpiritHolder<$SpiritArcanaType>>;
        effect: $Supplier<$GeasEffect>;
        constructor(arg0: $Supplier_<$GeasEffect>, ...arg1: $SpiritHolder<$SpiritArcanaType_>[]);
        constructor(arg0: $Supplier_<$GeasEffect>, arg1: $List_<$SpiritHolder<$SpiritArcanaType_>>);
        get defaultInstance(): $GeasEffect;
        get registryName(): $ResourceLocation;
        get langKey(): string;
        get dummyCreativeStack(): $ItemStack;
        get identifyingSpirit(): $SpiritHolder<$SpiritArcanaType>;
        get detailedCons(): string;
        get detailedPros(): string;
        get icon(): $ResourceLocation;
        get description(): string;
        get holder(): $Holder<$GeasEffectType>;
    }
    /**
     * Values that may be interpreted as {@link $GeasEffectType}.
     */
    export type $GeasEffectType_ = RegistryTypes.MalumGeasTypes;
    export interface $GeasEffectType extends RegistryMarked<RegistryTypes.MalumGeasTypesTag, RegistryTypes.MalumGeasTypes> {}
    export class $GeasEffect implements $IMalumEventResponder {
        removeAttributeModifiers(arg0: $LivingEntity): void;
        setDirty(): void;
        addTooltipComponent(arg0: $Map$Entry<$Holder_<$Attribute>, $AttributeModifier_>, arg1: $Consumer_<$Component>, arg2: $TooltipFlag): void;
        addAttributeModifier(arg0: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>, arg1: $Holder_<$Attribute>, arg2: number, arg3: $AttributeModifier$Operation_): void;
        addTooltipComponents(arg0: $LivingEntity, arg1: $Consumer_<$Component>, arg2: $TooltipFlag): void;
        createAttributeModifiers(arg0: $LivingEntity, arg1: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        getModifierId(): $ResourceLocation;
        updateAttributes(arg0: $LivingEntity): void;
        update(arg0: $EntityTickEvent$Pre, arg1: $LivingEntity): void;
        malignantCritEvent(arg0: $MalignantCritEvent$Pre, arg1: $LivingEntity): void;
        finalizedMalignantCritEvent(arg0: $MalignantCritEvent$Post, arg1: $LivingEntity): void;
        modifyGluttonyPropertiesEvent(arg0: $ModifyGluttonyPropertiesEvent, arg1: $LivingEntity): void;
        spiritCollectionEvent(arg0: $CollectSpiritEvent, arg1: $LivingEntity, arg2: number): void;
        modifySpiritSpoilsEvent(arg0: $ModifySpiritSpoilsEvent, arg1: $LivingEntity): void;
        modifySoulWardPropertiesEvent(arg0: $ModifySoulWardPropertiesEvent, arg1: $LivingEntity, arg2: $ItemStack_): void;
        soulWardDamageEvent(arg0: $SoulWardDamageEvent, arg1: $LivingEntity, arg2: $ItemStack_): void;
        modifyAttributeTooltipEvent(arg0: $AddAttributeTooltipsEvent): void;
        outgoingDamageEvent(arg0: $LivingDamageEvent$Pre, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
        outgoingDamageEvent(arg0: $LivingIncomingDamageEvent, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
        incomingDamageEvent(arg0: $LivingDamageEvent$Pre, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
        incomingDamageEvent(arg0: $LivingIncomingDamageEvent, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
        finalizedIncomingDamageEvent(arg0: $LivingDamageEvent$Post, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
        finalizedOutgoingDamageEvent(arg0: $LivingDamageEvent$Post, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
        incomingDeathEvent(arg0: $LivingDeathEvent, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
        outgoingDeathEvent(arg0: $LivingDeathEvent, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
        type: $GeasEffectType;
        constructor(arg0: $GeasEffectType_);
        get modifierId(): $ResourceLocation;
    }
}
