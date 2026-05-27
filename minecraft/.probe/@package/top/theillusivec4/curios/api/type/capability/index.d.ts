import { $Item_, $ItemStack_, $Item$TooltipContext, $ItemStack } from "@package/net/minecraft/world/item";
import { $Logger } from "@package/org/slf4j";
import { $Tag_, $CompoundTag, $ListTag, $ListTag_, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Multimap } from "@package/com/google/common/collect";
import { $AttributeModifier_, $Attribute, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List, $Map_, $Map, $Set, $UUID_, $List_ } from "@package/java/util";
import { $SlotContext_, $SlotResult } from "@package/top/theillusivec4/curios/api";
import { $Predicate_ } from "@package/java/util/function";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder } from "@package/net/minecraft/core";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $Enum, $Record } from "@package/java/lang";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $ICurioStacksHandler } from "@package/top/theillusivec4/curios/api/type/inventory";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/top/theillusivec4/curios/api/type/capability" {
    export class $ICurio$SoundInfo extends $Record {
        /**
         * @deprecated
         */
        getVolume(): number;
        /**
         * @deprecated
         */
        getPitch(): number;
        volume(): number;
        pitch(): number;
        soundEvent(): $SoundEvent;
        /**
         * @deprecated
         */
        getSoundEvent(): $SoundEvent;
        constructor(soundEvent: $SoundEvent_, volume: number, pitch: number);
    }
    /**
     * Values that may be interpreted as {@link $ICurio$SoundInfo}.
     */
    export type $ICurio$SoundInfo_ = { soundEvent?: $SoundEvent_, pitch?: number, volume?: number,  } | [soundEvent?: $SoundEvent_, pitch?: number, volume?: number, ];
    export class $ICurioItem {
        static defaultInstance: $ICurio;
    }
    export interface $ICurioItem {
        getLootingLevel(arg0: $SlotContext_, arg1: $LootContext, arg2: $ItemStack_): number;
        getFortuneLevel(arg0: $SlotContext_, arg1: $LootContext, arg2: $ItemStack_): number;
        canWalkOnPowderedSnow(arg0: $SlotContext_, arg1: $ItemStack_): boolean;
        makesPiglinsNeutral(arg0: $SlotContext_, arg1: $ItemStack_): boolean;
        getEquipSound(arg0: $SlotContext_, arg1: $ItemStack_): $ICurio$SoundInfo;
        getAttributeModifiers(arg0: $SlotContext_, arg1: $ResourceLocation_, arg2: $ItemStack_): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        /**
         * @deprecated
         */
        getAttributeModifiers(arg0: $SlotContext_, arg1: $UUID_, arg2: $ItemStack_): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        canEquip(arg0: $SlotContext_, arg1: $ItemStack_): boolean;
        isEnderMask(arg0: $SlotContext_, arg1: $EnderMan, arg2: $ItemStack_): boolean;
        canEquipFromUse(arg0: $SlotContext_, arg1: $ItemStack_): boolean;
        onEquip(arg0: $SlotContext_, arg1: $ItemStack_, arg2: $ItemStack_): void;
        onUnequip(arg0: $SlotContext_, arg1: $ItemStack_, arg2: $ItemStack_): void;
        canUnequip(arg0: $SlotContext_, arg1: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        getDropRule(arg0: $SlotContext_, arg1: $DamageSource_, arg2: number, arg3: boolean, arg4: $ItemStack_): $ICurio$DropRule;
        getDropRule(arg0: $SlotContext_, arg1: $DamageSource_, arg2: boolean, arg3: $ItemStack_): $ICurio$DropRule;
        onEquipFromUse(arg0: $SlotContext_, arg1: $ItemStack_): void;
        getAttributesTooltip(arg0: $List_<$Component_>, arg1: $Item$TooltipContext, arg2: $ItemStack_): $List<$Component>;
        /**
         * @deprecated
         */
        getAttributesTooltip(arg0: $List_<$Component_>, arg1: $ItemStack_): $List<$Component>;
        /**
         * @deprecated
         */
        getSlotsTooltip(arg0: $List_<$Component_>, arg1: $ItemStack_): $List<$Component>;
        getSlotsTooltip(arg0: $List_<$Component_>, arg1: $Item$TooltipContext, arg2: $ItemStack_): $List<$Component>;
        curioTick(arg0: $SlotContext_, arg1: $ItemStack_): void;
        curioBreak(arg0: $SlotContext_, arg1: $ItemStack_): void;
        canSync(arg0: $SlotContext_, arg1: $ItemStack_): boolean;
        writeSyncData(arg0: $SlotContext_, arg1: $ItemStack_): $CompoundTag;
        readSyncData(arg0: $SlotContext_, arg1: $CompoundTag_, arg2: $ItemStack_): void;
        hasCurioCapability(arg0: $ItemStack_): boolean;
    }
    export class $ICurio {
        static playBreakAnimation(arg0: $ItemStack_, arg1: $LivingEntity): void;
    }
    export interface $ICurio {
        getLootingLevel(arg0: $SlotContext_, arg1: $LootContext): number;
        getFortuneLevel(arg0: $SlotContext_, arg1: $LootContext): number;
        canWalkOnPowderedSnow(arg0: $SlotContext_): boolean;
        makesPiglinsNeutral(arg0: $SlotContext_): boolean;
        getEquipSound(arg0: $SlotContext_): $ICurio$SoundInfo;
        /**
         * @deprecated
         */
        getAttributeModifiers(arg0: $SlotContext_, arg1: $UUID_): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        getAttributeModifiers(arg0: $SlotContext_, arg1: $ResourceLocation_): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        canEquip(arg0: $SlotContext_): boolean;
        isEnderMask(arg0: $SlotContext_, arg1: $EnderMan): boolean;
        canEquipFromUse(arg0: $SlotContext_): boolean;
        onEquip(arg0: $SlotContext_, arg1: $ItemStack_): void;
        onUnequip(arg0: $SlotContext_, arg1: $ItemStack_): void;
        canUnequip(arg0: $SlotContext_): boolean;
        /**
         * @deprecated
         */
        getDropRule(arg0: $SlotContext_, arg1: $DamageSource_, arg2: number, arg3: boolean): $ICurio$DropRule;
        getDropRule(arg0: $SlotContext_, arg1: $DamageSource_, arg2: boolean): $ICurio$DropRule;
        onEquipFromUse(arg0: $SlotContext_): void;
        /**
         * @deprecated
         */
        getAttributesTooltip(arg0: $List_<$Component_>): $List<$Component>;
        getAttributesTooltip(arg0: $List_<$Component_>, arg1: $Item$TooltipContext): $List<$Component>;
        getSlotsTooltip(arg0: $List_<$Component_>, arg1: $Item$TooltipContext): $List<$Component>;
        /**
         * @deprecated
         */
        getSlotsTooltip(arg0: $List_<$Component_>): $List<$Component>;
        curioTick(arg0: $SlotContext_): void;
        curioBreak(arg0: $SlotContext_): void;
        canSync(arg0: $SlotContext_): boolean;
        writeSyncData(arg0: $SlotContext_): $CompoundTag;
        readSyncData(arg0: $SlotContext_, arg1: $CompoundTag_): void;
        getStack(): $ItemStack;
        get stack(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $ICurio}.
     */
    export type $ICurio_ = (() => $ItemStack_);
    export class $ICurio$DropRule extends $Enum<$ICurio$DropRule> {
        static values(): $ICurio$DropRule[];
        static valueOf(arg0: string): $ICurio$DropRule;
        static ALWAYS_KEEP: $ICurio$DropRule;
        static DESTROY: $ICurio$DropRule;
        static ALWAYS_DROP: $ICurio$DropRule;
        static DEFAULT: $ICurio$DropRule;
    }
    /**
     * Values that may be interpreted as {@link $ICurio$DropRule}.
     */
    export type $ICurio$DropRule_ = "default" | "always_drop" | "always_keep" | "destroy";
    export class $ICuriosItemHandler {
        static LOGGER: $Logger;
    }
    export interface $ICuriosItemHandler {
        findFirstCurio(arg0: $Predicate_<$ItemStack>): ($SlotResult) | undefined;
        findFirstCurio(arg0: $Item_): ($SlotResult) | undefined;
        findFirstCurio(arg0: $Predicate_<$ItemStack>, arg1: boolean, arg2: string): ($SlotResult) | undefined;
        findFirstCurio(arg0: $Predicate_<$ItemStack>, arg1: string): ($SlotResult) | undefined;
        getEquippedCurios(): $IItemHandlerModifiable;
        getLootingLevel(arg0: $LootContext): number;
        getFortuneLevel(arg0: $LootContext): number;
        getCurios(): $Map<string, $ICurioStacksHandler>;
        isEquipped(arg0: $Item_): boolean;
        isEquipped(arg0: $Predicate_<$ItemStack>): boolean;
        getStacksHandler(arg0: string): ($ICurioStacksHandler) | undefined;
        setEquippedCurio(arg0: string, arg1: number, arg2: $ItemStack_): void;
        findCurios(...arg0: string[]): $List<$SlotResult>;
        findCurios(arg0: $Predicate_<$ItemStack>, arg1: boolean, arg2: string): $List<$SlotResult>;
        findCurios(arg0: $Item_): $List<$SlotResult>;
        findCurios(arg0: $Predicate_<$ItemStack>): $List<$SlotResult>;
        findCurios(arg0: boolean, ...arg1: string[]): $List<$SlotResult>;
        findCurio(arg0: string, arg1: number): ($SlotResult) | undefined;
        findCurio(arg0: string, arg1: number, arg2: boolean): ($SlotResult) | undefined;
        addPermanentSlotModifier(arg0: string, arg1: $ResourceLocation_, arg2: number, arg3: $AttributeModifier$Operation_): void;
        removeSlotModifier(arg0: string, arg1: $ResourceLocation_): void;
        clearSlotModifiers(): void;
        addTransientSlotModifiers(arg0: $Multimap<string, $AttributeModifier_>): void;
        removeSlotModifiers(arg0: $Multimap<string, $AttributeModifier_>): void;
        clearCachedSlotModifiers(): void;
        readTag(arg0: $Tag_): void;
        /**
         * @deprecated
         */
        growSlotType(arg0: string, arg1: number): void;
        /**
         * @deprecated
         */
        shrinkSlotType(arg0: string, arg1: number): void;
        setCurios(arg0: $Map_<string, $ICurioStacksHandler>): void;
        getVisibleSlots(): number;
        isSlotActive(arg0: string, arg1: number): boolean;
        setSlotActive(arg0: string, arg1: number, arg2: boolean): void;
        setSlotsActive(arg0: string, arg1: boolean): void;
        getWearer(): $LivingEntity;
        loseInvalidStack(arg0: $ItemStack_): void;
        handleInvalidStacks(): void;
        loadInventory(arg0: $ListTag_): void;
        getUpdatingInventories(): $Set<$ICurioStacksHandler>;
        addTransientSlotModifier(arg0: string, arg1: $ResourceLocation_, arg2: number, arg3: $AttributeModifier$Operation_): void;
        addPermanentSlotModifiers(arg0: $Multimap<string, $AttributeModifier_>): void;
        /**
         * @deprecated
         */
        getLockedSlots(): $Set<string>;
        /**
         * @deprecated
         */
        unlockSlotType(arg0: string, arg1: number, arg2: boolean, arg3: boolean): void;
        /**
         * @deprecated
         */
        lockSlotType(arg0: string): void;
        /**
         * @deprecated
         */
        processSlots(): void;
        /**
         * @deprecated
         */
        getFortuneBonus(): number;
        writeTag(): $Tag;
        saveInventory(arg0: boolean): $ListTag;
        getSlots(): number;
        reset(): void;
        getModifiers(): $Multimap<string, $AttributeModifier>;
        get equippedCurios(): $IItemHandlerModifiable;
        get visibleSlots(): number;
        get wearer(): $LivingEntity;
        get updatingInventories(): $Set<$ICurioStacksHandler>;
        get lockedSlots(): $Set<string>;
        get fortuneBonus(): number;
        get slots(): number;
        get modifiers(): $Multimap<string, $AttributeModifier>;
    }
}
