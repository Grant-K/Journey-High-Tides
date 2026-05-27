import { $AccessoriesHolder, $AccessoriesCapability, $AccessoriesContainer } from "@package/io/wispforest/accessories/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SlotType, $SlotReference } from "@package/io/wispforest/accessories/api/slot";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Tag_, $CompoundTag, $ListTag, $ListTag_ } from "@package/net/minecraft/nbt";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Spliterator, $Iterator, $List, $Map, $Set, $Set_, $Collection } from "@package/java/util";
import { $SerializationContext, $Endec } from "@package/io/wispforest/endec";
import { $MapCarrier } from "@package/io/wispforest/endec/util";
import { $ContainerListener, $SimpleContainer, $Container } from "@package/net/minecraft/world";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $AccessoriesHolderLookupCache } from "@package/io/wispforest/accessories/impl/caching";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Iterable } from "@package/java/lang";
import { $KeyedEndec } from "@package/io/wispforest/endec/impl";
export * as caching from "@package/io/wispforest/accessories/impl/caching";

declare module "@package/io/wispforest/accessories/impl" {
    export class $ExpandedSimpleContainer extends $SimpleContainer implements $Iterable<$Pair<number, $ItemStack>> {
        parseOptional(lookupProvider: $HolderLookup$Provider, tag: $Tag_): $ItemStack;
        setFromPrev(prevContainer: $ExpandedSimpleContainer): void;
        copyPrev(prevContainer: $ExpandedSimpleContainer): void;
        wasNewlyConstructed(): boolean;
        isSlotFlagged(slot: number): boolean;
        setPreviousItem(slot: number, stack: $ItemStack_): void;
        getPreviousItem(slot: number): $ItemStack;
        validIndex(slot: number): boolean;
        name(): string;
        iterator(): $Iterator<$Pair<number, $ItemStack>>;
        spliterator(): $Spliterator<$Pair<number, $ItemStack>>;
        forEach(arg0: $Consumer_<$Pair<number, $ItemStack>>): void;
        size: number;
        listeners: $List<$ContainerListener>;
        items: $NonNullList<$ItemStack>;
        constructor(container: $AccessoriesContainerImpl, size: number, name: string);
        constructor(container: $AccessoriesContainerImpl, size: number, name: string, toggleNewlyConstructed: boolean);
        [Symbol.iterator](): Iterator<$Pair<number, $ItemStack>>
        set fromPrev(value: $ExpandedSimpleContainer);
    }
    export class $InstanceEndec {
        static constructed<T extends $InstanceEndec>(supplier: $Supplier_<T>): $Endec<T>;
    }
    export interface $InstanceEndec {
        write(arg0: $MapCarrier, arg1: $SerializationContext): void;
        read(arg0: $MapCarrier, arg1: $SerializationContext): void;
    }
    export class $PlayerEquipControl extends $Enum<$PlayerEquipControl> {
        static values(): $PlayerEquipControl[];
        static valueOf(name: string): $PlayerEquipControl;
        static DISABLED: $PlayerEquipControl;
        static MUST_NOT_CROUCH: $PlayerEquipControl;
        static MUST_CROUCH: $PlayerEquipControl;
    }
    /**
     * Values that may be interpreted as {@link $PlayerEquipControl}.
     */
    export type $PlayerEquipControl_ = "must_crouch" | "must_not_crouch" | "disabled";
    export class $AccessoriesHolderImpl implements $AccessoriesHolder, $InstanceEndec {
        getLookupCache(): $AccessoriesHolderLookupCache;
        equipControl(value: $PlayerEquipControl_): $AccessoriesHolder;
        equipControl(): $PlayerEquipControl;
        showUnusedSlots(): boolean;
        showUnusedSlots(value: boolean): $AccessoriesHolder;
        cosmeticsShown(value: boolean): $AccessoriesHolder;
        cosmeticsShown(): boolean;
        showAdvancedOptions(): boolean;
        showAdvancedOptions(value: boolean): $AccessoriesHolder;
        columnAmount(): number;
        columnAmount(value: number): $AccessoriesHolder;
        widgetType(): number;
        widgetType(value: number): $AccessoriesHolder;
        showGroupFilter(): boolean;
        showGroupFilter(value: boolean): $AccessoriesHolder;
        isGroupFiltersOpen(value: boolean): $AccessoriesHolder;
        isGroupFiltersOpen(): boolean;
        filteredGroups(): $Set<string>;
        filteredGroups(value: $Set_<string>): $AccessoriesHolder;
        mainWidgetPosition(value: boolean): $AccessoriesHolder;
        mainWidgetPosition(): boolean;
        sideWidgetPosition(): boolean;
        sideWidgetPosition(value: boolean): $AccessoriesHolder;
        showCraftingGrid(value: boolean): $AccessoriesHolder;
        showCraftingGrid(): boolean;
        setValidTypes(validTypes: $Set_<string>): void;
        getSlotContainers(): $Map<string, $AccessoriesContainer>;
        static of(): $AccessoriesHolderImpl;
        init(capability: $AccessoriesCapability): void;
        write(carrier: $MapCarrier, ctx: $SerializationContext): void;
        read(carrier: $MapCarrier, context: $SerializationContext): void;
        read(capability: $AccessoriesCapability, entity: $LivingEntity, carrier: $MapCarrier, ctx: $SerializationContext): void;
        read(entity: $LivingEntity, carrier: $MapCarrier, ctx: $SerializationContext): void;
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
        lookupCache: $AccessoriesHolderLookupCache;
        invalidStacks: $List<$ItemStack>;
        constructor();
        set validTypes(value: $Set_<string>);
        get slotContainers(): $Map<string, $AccessoriesContainer>;
    }
    export class $AccessoriesContainerImpl implements $AccessoriesContainer, $InstanceEndec, $ContainerListener {
        hasModifier(location: $ResourceLocation_): boolean;
        capability(): $AccessoriesCapability;
        removeModifier(location: $ResourceLocation_): void;
        addTransientModifier(modifier: $AttributeModifier_): void;
        hasChanged(): boolean;
        getBaseSize(): number;
        renderOptions(): $List<boolean>;
        getModifiersForOperation(operation: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        removeCachedModifiers(modifier: $AttributeModifier_): void;
        static readContainer(carrier: $MapCarrier, ctx: $SerializationContext, key: $KeyedEndec<$ListTag_>): $SimpleContainer;
        markChanged(resizingUpdate: boolean): void;
        clearModifiers(): void;
        containerChanged(container: $Container): void;
        getAccessories(): $ExpandedSimpleContainer;
        getCosmeticAccessories(): $ExpandedSimpleContainer;
        copyFrom(other: $AccessoriesContainerImpl): void;
        static copyContainerList(container: $SimpleContainer): $SimpleContainer;
        static readContainers(carrier: $MapCarrier, ctx: $SerializationContext, ...keys: $KeyedEndec<$ListTag_>[]): $List<$SimpleContainer>;
        getSlotName(): string;
        getCachedModifiers(): $Set<$AttributeModifier>;
        clearCachedModifiers(): void;
        addPersistentModifier(modifier: $AttributeModifier_): void;
        getSize(): number;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        update(): void;
        write(carrier: $MapCarrier, ctx: $SerializationContext, sync: boolean): void;
        write(carrier: $MapCarrier, ctx: $SerializationContext): void;
        read(carrier: $MapCarrier, ctx: $SerializationContext): void;
        read(carrier: $MapCarrier, ctx: $SerializationContext, sync: boolean): void;
        shouldRender(index: number): boolean;
        markChanged(): void;
        slotType(): $SlotType;
        createReference(index: number): $SlotReference;
        static BASE_SIZE_KEY: $KeyedEndec<number>;
        static COSMETICS_KEY: $KeyedEndec<$ListTag>;
        static SLOT_NAME_KEY: $KeyedEndec<string>;
        static CACHED_MODIFIERS_KEY: $KeyedEndec<$List<$CompoundTag>>;
        static PERSISTENT_MODIFIERS_KEY: $KeyedEndec<$List<$CompoundTag>>;
        static ITEMS_KEY: $KeyedEndec<$ListTag>;
        static RENDER_OPTIONS_KEY: $KeyedEndec<$List<boolean>>;
        static CURRENT_SIZE_KEY: $KeyedEndec<number>;
        static MODIFIERS_KEY: $KeyedEndec<$List<$CompoundTag>>;
        constructor(capability: $AccessoriesCapability, slotType: $SlotType);
        get baseSize(): number;
        get accessories(): $ExpandedSimpleContainer;
        get cosmeticAccessories(): $ExpandedSimpleContainer;
        get slotName(): string;
        get cachedModifiers(): $Set<$AttributeModifier>;
        get size(): number;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
    }
}
