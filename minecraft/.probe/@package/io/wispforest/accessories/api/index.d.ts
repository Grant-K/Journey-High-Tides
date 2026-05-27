import { $ItemStackBasedPredicate } from "@package/io/wispforest/accessories/api/caching";
import { $Item_, $ItemStack_, $ItemStack, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $SlotType, $SlotTypeReference_, $SlotReference, $SlotEntryReference } from "@package/io/wispforest/accessories/api/slot";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $AccessoryAttributeBuilder } from "@package/io/wispforest/accessories/api/attributes";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Multimap } from "@package/com/google/common/collect";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List, $Set_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $AccessoryItemAttributeModifiers$Builder } from "@package/io/wispforest/accessories/api/components";
import { $Pair } from "@package/it/unimi/dsi/fastutil";
import { $ExpandedSimpleContainer, $PlayerEquipControl, $PlayerEquipControl_ } from "@package/io/wispforest/accessories/impl";
import { $Predicate_ } from "@package/java/util/function";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $AccessoriesHolderLookupCache } from "@package/io/wispforest/accessories/impl/caching";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $TriFunction_ } from "@package/org/apache/commons/lang3/function";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as components from "@package/io/wispforest/accessories/api/components";
export * as slot from "@package/io/wispforest/accessories/api/slot";
export * as attributes from "@package/io/wispforest/accessories/api/attributes";
export * as client from "@package/io/wispforest/accessories/api/client";
export * as caching from "@package/io/wispforest/accessories/api/caching";

declare module "@package/io/wispforest/accessories/api" {
    export class $EquipmentChecking extends $Enum<$EquipmentChecking> {
        static values(): $EquipmentChecking[];
        static valueOf(name: string): $EquipmentChecking;
        static ACCESSORIES_ONLY: $EquipmentChecking;
        static COSMETICALLY_OVERRIDABLE: $EquipmentChecking;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentChecking}.
     */
    export type $EquipmentChecking_ = "accessories_only" | "cosmetically_overridable";
    export class $AccessoriesCapability {
        static getOptionally(livingEntity: $LivingEntity): ($AccessoriesCapability) | undefined;
        static get(livingEntity: $LivingEntity): $AccessoriesCapability;
    }
    export interface $AccessoriesCapability {
        isEquipped(predicate: $ItemStackBasedPredicate, check: $EquipmentChecking_): boolean;
        isEquipped(predicate: $Predicate_<$ItemStack>, check: $EquipmentChecking_): boolean;
        isEquipped(predicate: $Predicate_<$ItemStack>): boolean;
        isEquipped(item: $Item_, check: $EquipmentChecking_): boolean;
        isEquipped(item: $Item_): boolean;
        getFirstEquipped(item: $Item_, check: $EquipmentChecking_): $SlotEntryReference;
        getFirstEquipped(item: $Item_): $SlotEntryReference;
        getFirstEquipped(arg0: $ItemStackBasedPredicate, arg1: $EquipmentChecking_): $SlotEntryReference;
        getFirstEquipped(predicate: $Predicate_<$ItemStack>, check: $EquipmentChecking_): $SlotEntryReference;
        getFirstEquipped(predicate: $Predicate_<$ItemStack>): $SlotEntryReference;
        clearSlotModifiers(): void;
        getSlotModifiers(): $Multimap<string, $AttributeModifier>;
        getContainers(): $Map<string, $AccessoriesContainer>;
        isAnotherEquipped(stack: $ItemStack_, slotReference: $SlotReference, predicate: $Predicate_<$ItemStack>): boolean;
        isAnotherEquipped(stack: $ItemStack_, slotReference: $SlotReference, predicate: $ItemStackBasedPredicate): boolean;
        /**
         * @deprecated
         */
        isAnotherEquipped(slotReference: $SlotReference, item: $Item_): boolean;
        /**
         * @deprecated
         */
        isAnotherEquipped(slotReference: $SlotReference, predicate: $Predicate_<$ItemStack>): boolean;
        isAnotherEquipped(stack: $ItemStack_, slotReference: $SlotReference, item: $Item_): boolean;
        getEquipped(predicate: $ItemStackBasedPredicate): $List<$SlotEntryReference>;
        getEquipped(predicate: $Predicate_<$ItemStack>): $List<$SlotEntryReference>;
        getEquipped(item: $Item_): $List<$SlotEntryReference>;
        getAllEquipped(arg0: boolean): $List<$SlotEntryReference>;
        getAllEquipped(): $List<$SlotEntryReference>;
        updateContainers(): void;
        attemptToEquipAccessory(stack: $ItemStack_, allowSwapping: boolean): $Pair<$SlotReference, ($ItemStack) | undefined>;
        attemptToEquipAccessory(stack: $ItemStack_): $SlotReference;
        canEquipAccessory(arg0: $ItemStack_, arg1: boolean, arg2: $EquipCheck_): $Pair<$SlotReference, $EquipAction>;
        canEquipAccessory(stack: $ItemStack_, allowSwapping: boolean): $Pair<$SlotReference, $EquipAction>;
        addTransientSlotModifiers(arg0: $Multimap<string, $AttributeModifier_>): void;
        addPersistentSlotModifiers(arg0: $Multimap<string, $AttributeModifier_>): void;
        removeSlotModifiers(arg0: $Multimap<string, $AttributeModifier_>): void;
        clearCachedSlotModifiers(): void;
        /**
         * @deprecated
         */
        equipAccessory(stack: $ItemStack_, allowSwapping: boolean): $Pair<$SlotReference, $List<$ItemStack>>;
        /**
         * @deprecated
         */
        equipAccessory(stack: $ItemStack_, allowSwapping: boolean, additionalCheck: $TriFunction_<$Accessory, $ItemStack, $SlotReference, boolean>): $Pair<$SlotReference, $List<$ItemStack>>;
        /**
         * @deprecated
         */
        equipAccessory(stack: $ItemStack_): $Pair<$SlotReference, $List<$ItemStack>>;
        getContainer(reference: $SlotTypeReference_): $AccessoriesContainer;
        getContainer(slotType: $SlotType): $AccessoriesContainer;
        entity(): $LivingEntity;
        getHolder(): $AccessoriesHolder;
        reset(arg0: boolean): void;
        get slotModifiers(): $Multimap<string, $AttributeModifier>;
        get containers(): $Map<string, $AccessoriesContainer>;
        get holder(): $AccessoriesHolder;
    }
    export class $AccessoriesHolder {
        static getOptionally(livingEntity: $LivingEntity): ($AccessoriesHolder) | undefined;
        static get(livingEntity: $LivingEntity): $AccessoriesHolder;
    }
    export interface $AccessoriesHolder {
        getLookupCache(): $AccessoriesHolderLookupCache;
        equipControl(arg0: $PlayerEquipControl_): $AccessoriesHolder;
        equipControl(): $PlayerEquipControl;
        showUnusedSlots(): boolean;
        showUnusedSlots(arg0: boolean): $AccessoriesHolder;
        cosmeticsShown(arg0: boolean): $AccessoriesHolder;
        cosmeticsShown(): boolean;
        showAdvancedOptions(): boolean;
        showAdvancedOptions(arg0: boolean): $AccessoriesHolder;
        columnAmount(): number;
        columnAmount(arg0: number): $AccessoriesHolder;
        widgetType(): number;
        widgetType(arg0: number): $AccessoriesHolder;
        showGroupFilter(arg0: boolean): $AccessoriesHolder;
        showGroupFilter(): boolean;
        isGroupFiltersOpen(): boolean;
        isGroupFiltersOpen(arg0: boolean): $AccessoriesHolder;
        filteredGroups(): $Set<string>;
        filteredGroups(arg0: $Set_<string>): $AccessoriesHolder;
        mainWidgetPosition(): boolean;
        mainWidgetPosition(arg0: boolean): $AccessoriesHolder;
        sideWidgetPosition(arg0: boolean): $AccessoriesHolder;
        sideWidgetPosition(): boolean;
        showCraftingGrid(): boolean;
        showCraftingGrid(arg0: boolean): $AccessoriesHolder;
        /**
         * @deprecated
         */
        showUniqueSlots(): boolean;
        /**
         * @deprecated
         */
        showUniqueSlots(value: boolean): $AccessoriesHolder;
        /**
         * @deprecated
         */
        linesShown(): boolean;
        /**
         * @deprecated
         */
        linesShown(value: boolean): $AccessoriesHolder;
        get lookupCache(): $AccessoriesHolderLookupCache;
    }
    export class $SoundEventData extends $Record {
        volume(): number;
        pitch(): number;
        event(): $Holder<$SoundEvent>;
        constructor(event: $Holder_<$SoundEvent>, volume: number, pitch: number);
    }
    /**
     * Values that may be interpreted as {@link $SoundEventData}.
     */
    export type $SoundEventData_ = { event?: $Holder_<$SoundEvent>, pitch?: number, volume?: number,  } | [event?: $Holder_<$SoundEvent>, pitch?: number, volume?: number, ];
    export class $DropRule extends $Enum<$DropRule> {
        static values(): $DropRule[];
        static valueOf(name: string): $DropRule;
        static DESTROY: $DropRule;
        static KEEP: $DropRule;
        static DEFAULT: $DropRule;
        static DROP: $DropRule;
    }
    /**
     * Values that may be interpreted as {@link $DropRule}.
     */
    export type $DropRule_ = "keep" | "drop" | "destroy" | "default";
    export class $AccessoriesContainer {
    }
    export interface $AccessoriesContainer {
        hasModifier(arg0: $ResourceLocation_): boolean;
        capability(): $AccessoriesCapability;
        removeModifier(arg0: $ResourceLocation_): void;
        addTransientModifier(arg0: $AttributeModifier_): void;
        shouldRender(index: number): boolean;
        hasChanged(): boolean;
        renderOptions(): $List<boolean>;
        getModifiersForOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        removeCachedModifiers(arg0: $AttributeModifier_): void;
        markChanged(): void;
        markChanged(arg0: boolean): void;
        clearModifiers(): void;
        slotType(): $SlotType;
        getAccessories(): $ExpandedSimpleContainer;
        getCosmeticAccessories(): $ExpandedSimpleContainer;
        getSlotName(): string;
        getCachedModifiers(): $Set<$AttributeModifier>;
        clearCachedModifiers(): void;
        addPersistentModifier(arg0: $AttributeModifier_): void;
        getSize(): number;
        createReference(index: number): $SlotReference;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        update(): void;
        get accessories(): $ExpandedSimpleContainer;
        get cosmeticAccessories(): $ExpandedSimpleContainer;
        get slotName(): string;
        get cachedModifiers(): $Set<$AttributeModifier>;
        get size(): number;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
    }
    export class $EquipAction {
    }
    export interface $EquipAction {
        equipStack(arg0: $ItemStack_): ($ItemStack) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $EquipAction}.
     */
    export type $EquipAction_ = ((arg0: $ItemStack) => ($ItemStack_) | undefined);
    export class $Accessory {
    }
    export interface $Accessory {
        getEquipSound(stack: $ItemStack_, reference: $SlotReference): $SoundEventData;
        canEquip(stack: $ItemStack_, reference: $SlotReference): boolean;
        onBreak(stack: $ItemStack_, reference: $SlotReference): void;
        /**
         * @deprecated
         */
        canEquipFromUse(stack: $ItemStack_, reference: $SlotReference): boolean;
        canEquipFromUse(stack: $ItemStack_): boolean;
        onEquip(stack: $ItemStack_, reference: $SlotReference): void;
        onUnequip(stack: $ItemStack_, reference: $SlotReference): void;
        canUnequip(stack: $ItemStack_, reference: $SlotReference): boolean;
        getDynamicModifiers(stack: $ItemStack_, reference: $SlotReference, builder: $AccessoryAttributeBuilder): void;
        getStaticModifiers(item: $Item_, builder: $AccessoryItemAttributeModifiers$Builder): void;
        getDropRule(stack: $ItemStack_, reference: $SlotReference, source: $DamageSource_): $DropRule;
        onEquipFromUse(stack: $ItemStack_, reference: $SlotReference): void;
        getAttributesTooltip(stack: $ItemStack_, type: $SlotType, tooltips: $List_<$Component_>, tooltipContext: $Item$TooltipContext, tooltipType: $TooltipFlag): void;
        /**
         * @deprecated
         */
        getAttributesTooltip(stack: $ItemStack_, type: $SlotType, tooltips: $List_<$Component_>): void;
        getExtraTooltip(stack: $ItemStack_, tooltips: $List_<$Component_>, tooltipContext: $Item$TooltipContext, tooltipType: $TooltipFlag): void;
        /**
         * @deprecated
         */
        getExtraTooltip(stack: $ItemStack_, tooltips: $List_<$Component_>): void;
        maxStackSize(stack: $ItemStack_): number;
        tick(stack: $ItemStack_, reference: $SlotReference): void;
        /**
         * @deprecated
         */
        getModifiers(stack: $ItemStack_, reference: $SlotReference, builder: $AccessoryAttributeBuilder): void;
    }
    export class $EquipCheck {
    }
    export interface $EquipCheck {
        isValid(arg0: $ItemStack_, arg1: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EquipCheck}.
     */
    export type $EquipCheck_ = ((arg0: $ItemStack, arg1: boolean) => boolean);
}
