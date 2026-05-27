import { $CompoundContainerFTBL } from "@package/dev/ftb/mods/ftblibrary/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ListTag, $CompoundTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UUID, $List, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $BiConsumer_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $ChatFormatting } from "@package/net/minecraft";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $CompoundContainerAccessor, $ContainerMixin } from "@package/net/caffeinemc/mods/lithium/mixin/block/hopper";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IMenuProviderExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $StackedContentsCompatible, $MenuConstructor, $AbstractContainerMenu, $MenuConstructor_ } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $TransactionContext } from "@package/net/fabricmc/fabric/api/transfer/v1/transaction";
import { $RandomSupport$Seed128bit, $XoroshiroRandomSource } from "@package/net/minecraft/world/level/levelgen";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FabricScreenHandlerFactory } from "@package/net/fabricmc/fabric/api/screenhandler/v1";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player, $StackedContents, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $SpecialLogicInventory } from "@package/net/fabricmc/fabric/impl/transfer/item";
import { $LithiumTransferConditionInventory, $LithiumCooldownReceivingInventory } from "@package/net/caffeinemc/mods/lithium/api/inventory";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DoubleInventoryAccessor } from "@package/net/fabricmc/fabric/mixin/transfer";
import { $ContainerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as item from "@package/net/minecraft/world/item";
export * as level from "@package/net/minecraft/world/level";
export * as entity from "@package/net/minecraft/world/entity";
export * as inventory from "@package/net/minecraft/world/inventory";
export * as damagesource from "@package/net/minecraft/world/damagesource";
export * as effect from "@package/net/minecraft/world/effect";
export * as phys from "@package/net/minecraft/world/phys";
export * as ticks from "@package/net/minecraft/world/ticks";
export * as scores from "@package/net/minecraft/world/scores";
export * as food from "@package/net/minecraft/world/food";
export * as flag from "@package/net/minecraft/world/flag";

declare module "@package/net/minecraft/world" {
    export class $RandomSequences extends $SavedData {
        forAllSequences(arg0: $BiConsumer_<$ResourceLocation, $RandomSequence>): void;
        setSeedDefaults(arg0: number, arg1: boolean, arg2: boolean): void;
        reset(arg0: $ResourceLocation_, arg1: number, arg2: boolean, arg3: boolean): void;
        reset(arg0: $ResourceLocation_): void;
        get(arg0: $ResourceLocation_): $RandomSource;
        static load(arg0: number, arg1: $CompoundTag_): $RandomSequences;
        clear(): number;
        static factory(arg0: number): $SavedData$Factory<$RandomSequences>;
        constructor(arg0: number);
    }
    export class $BossEvent$BossBarColor extends $Enum<$BossEvent$BossBarColor> {
        getFormatting(): $ChatFormatting;
        static byName(name: string): $BossEvent$BossBarColor;
        getName(): string;
        static values(): $BossEvent$BossBarColor[];
        static valueOf(arg0: string): $BossEvent$BossBarColor;
        static RED: $BossEvent$BossBarColor;
        static WHITE: $BossEvent$BossBarColor;
        static PINK: $BossEvent$BossBarColor;
        static BLUE: $BossEvent$BossBarColor;
        static YELLOW: $BossEvent$BossBarColor;
        static PURPLE: $BossEvent$BossBarColor;
        static GREEN: $BossEvent$BossBarColor;
        get formatting(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $BossEvent$BossBarColor}.
     */
    export type $BossEvent$BossBarColor_ = "pink" | "blue" | "red" | "green" | "yellow" | "purple" | "white";
    export class $DifficultyInstance {
        getDifficulty(): $Difficulty;
        getEffectiveDifficulty(): number;
        getSpecialMultiplier(): number;
        isHarderThan(arg0: number): boolean;
        isHard(): boolean;
        constructor(arg0: $Difficulty_, arg1: number, arg2: number, arg3: number);
        get difficulty(): $Difficulty;
        get effectiveDifficulty(): number;
        get specialMultiplier(): number;
        get hard(): boolean;
    }
    export class $BossEvent$BossBarOverlay extends $Enum<$BossEvent$BossBarOverlay> {
        static byName(name: string): $BossEvent$BossBarOverlay;
        getName(): string;
        static values(): $BossEvent$BossBarOverlay[];
        static valueOf(arg0: string): $BossEvent$BossBarOverlay;
        static NOTCHED_6: $BossEvent$BossBarOverlay;
        static NOTCHED_12: $BossEvent$BossBarOverlay;
        static PROGRESS: $BossEvent$BossBarOverlay;
        static NOTCHED_20: $BossEvent$BossBarOverlay;
        static NOTCHED_10: $BossEvent$BossBarOverlay;
    }
    /**
     * Values that may be interpreted as {@link $BossEvent$BossBarOverlay}.
     */
    export type $BossEvent$BossBarOverlay_ = "progress" | "notched_6" | "notched_10" | "notched_12" | "notched_20";
    export class $InteractionResultHolder<T> {
        static sidedSuccess<T>(arg0: T, arg1: boolean): $InteractionResultHolder<T>;
        getResult(): $InteractionResult;
        static success<T>(arg0: T): $InteractionResultHolder<T>;
        static pass<T>(arg0: T): $InteractionResultHolder<T>;
        static consume<T>(arg0: T): $InteractionResultHolder<T>;
        static fail<T>(arg0: T): $InteractionResultHolder<T>;
        getObject(): T;
        constructor(arg0: $InteractionResult_, arg1: T);
        get result(): $InteractionResult;
        get object(): T;
    }
    export class $Nameable {
    }
    export interface $Nameable {
        hasCustomName(): boolean;
        getCustomName(): $Component;
        getDisplayName(): $Component;
        getName(): $Component;
        get customName(): $Component;
        get displayName(): $Component;
        get name(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Nameable}.
     */
    export type $Nameable_ = (() => $Component_);
    export class $CompoundContainer implements $Container, $CompoundContainerAccessor, $DoubleInventoryAccessor, $CompoundContainerFTBL {
        getMaxStackSize(): number;
        stillValid(arg0: $Player): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setChanged(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        contains(arg0: $Container): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        clear(): void;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        fabric_getFirst(): $Container;
        fabric_getSecond(): $Container;
        getContainer1FTBL(): $Container;
        getContainer2FTBL(): $Container;
        getFirst(): $Container;
        getSecond(): $Container;
        constructor(arg0: $Container, arg1: $Container);
        get containerSize(): number;
        set transferCooldown(value: number);
        get width(): number;
        get height(): number;
        get mutable(): boolean;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
        get container1FTBL(): $Container;
        get container2FTBL(): $Container;
        get first(): $Container;
        get second(): $Container;
    }
    export class $RandomSequences$DirtyMarkingRandomSource implements $RandomSource {
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        consumeCount(arg0: number): void;
        triangle(arg0: number, arg1: number): number;
        nextInt(arg0: number, arg1: number): number;
    }
    export class $LockCode extends $Record {
        static fromTag(arg0: $CompoundTag_): $LockCode;
        addToTag(arg0: $CompoundTag_): void;
        unlocksWith(arg0: $ItemStack_): boolean;
        key(): string;
        static CODEC: $Codec<$LockCode>;
        static NO_LOCK: $LockCode;
        static TAG_LOCK: string;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $LockCode}.
     */
    export type $LockCode_ = { key?: string,  } | [key?: string, ];
    export class $SimpleContainer implements $Container, $StackedContentsCompatible, $SpecialLogicInventory {
        stillValid(arg0: $Player): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        fromTag(arg0: $ListTag_, arg1: $HolderLookup$Provider): void;
        setChanged(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        getItems(): $NonNullList<$ItemStack>;
        fabric_setSuppress(arg0: boolean): void;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        fillStackedContents(arg0: $StackedContents): void;
        removeItemType(arg0: $Item_, arg1: number): $ItemStack;
        canAddItem(arg0: $ItemStack_): boolean;
        redirect$eep000$fabric_transfer_api_v1$fabric_redirectMarkDirty(arg0: $SimpleContainer): void;
        addItem(arg0: $ItemStack_): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        removeAllItems(): $List<$ItemStack>;
        getItem(arg0: number): $ItemStack;
        createTag(arg0: $HolderLookup$Provider): $ListTag;
        removeListener(arg0: $ContainerListener_): void;
        addListener(arg0: $ContainerListener_): void;
        isEmpty(): boolean;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        clear(): void;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        size: number;
        listeners: $List<$ContainerListener>;
        items: $NonNullList<$ItemStack>;
        constructor(arg0: number);
        constructor(...arg0: $ItemStack_[]);
        get containerSize(): number;
        set transferCooldown(value: number);
        get width(): number;
        get height(): number;
        get mutable(): boolean;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $Clearable {
        static tryClear(arg0: $Object): void;
    }
    export interface $Clearable {
        clearContent(): void;
    }
    /**
     * Values that may be interpreted as {@link $Clearable}.
     */
    export type $Clearable_ = (() => void);
    export class $TickRateManager {
        runsNormally(): boolean;
        millisecondsPerTick(): number;
        tickrate(): number;
        isEntityFrozen(arg0: $Entity): boolean;
        nanosecondsPerTick(): number;
        setTickRate(arg0: number): void;
        frozenTicksToRun(): number;
        tick(): void;
        setFrozen(arg0: boolean): void;
        setFrozenTicksToRun(arg0: number): void;
        isSteppingForward(): boolean;
        isFrozen(): boolean;
        static MIN_TICKRATE: number;
        constructor();
        set tickRate(value: number);
        get steppingForward(): boolean;
    }
    export class $ContainerHelper {
        static loadAllItems(arg0: $CompoundTag_, arg1: $NonNullList<$ItemStack_>, arg2: $HolderLookup$Provider): void;
        static saveAllItems(arg0: $CompoundTag_, arg1: $NonNullList<$ItemStack_>, arg2: $HolderLookup$Provider): $CompoundTag;
        static saveAllItems(arg0: $CompoundTag_, arg1: $NonNullList<$ItemStack_>, arg2: boolean, arg3: $HolderLookup$Provider): $CompoundTag;
        static takeItem(arg0: $List_<$ItemStack_>, arg1: number): $ItemStack;
        static clearOrCountMatchingItems(arg0: $Container, arg1: $Predicate_<$ItemStack>, arg2: number, arg3: boolean): number;
        static clearOrCountMatchingItems(arg0: $ItemStack_, arg1: $Predicate_<$ItemStack>, arg2: number, arg3: boolean): number;
        static removeItem(arg0: $List_<$ItemStack_>, arg1: number, arg2: number): $ItemStack;
        static TAG_ITEMS: string;
        constructor();
    }
    export class $Container {
        static stillValidBlockEntity(arg0: $BlockEntity, arg1: $Player, arg2: number): boolean;
        static stillValidBlockEntity(arg0: $BlockEntity, arg1: $Player): boolean;
        static DEFAULT_DISTANCE_BUFFER: number;
    }
    export interface $Container extends $Clearable, $LithiumCooldownReceivingInventory, $ContainerMixin, $LithiumTransferConditionInventory, $ContainerKJS {
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        stillValid(arg0: $Player): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        setChanged(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        get containerSize(): number;
        get empty(): boolean;
    }
    export class $MenuProvider {
    }
    export interface $MenuProvider extends $MenuConstructor, $IMenuProviderExtension, $FabricScreenHandlerFactory {
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        getDisplayName(): $Component;
        get displayName(): $Component;
    }
    export class $BossEvent {
        shouldDarkenScreen(): boolean;
        setOverlay(arg0: $BossEvent$BossBarOverlay_): void;
        getOverlay(): $BossEvent$BossBarOverlay;
        getColor(): $BossEvent$BossBarColor;
        setProgress(arg0: number): void;
        getProgress(): number;
        shouldCreateWorldFog(): boolean;
        setDarkenScreen(arg0: boolean): $BossEvent;
        setColor(arg0: $BossEvent$BossBarColor_): void;
        setCreateWorldFog(arg0: boolean): $BossEvent;
        shouldPlayBossMusic(): boolean;
        setPlayBossMusic(arg0: boolean): $BossEvent;
        getName(): $Component;
        setName(arg0: $Component_): void;
        getId(): $UUID;
        constructor(arg0: $UUID_, arg1: $Component_, arg2: $BossEvent$BossBarColor_, arg3: $BossEvent$BossBarOverlay_);
        set darkenScreen(value: boolean);
        set createWorldFog(value: boolean);
        set playBossMusic(value: boolean);
        get id(): $UUID;
    }
    export class $WorldlyContainer {
    }
    export interface $WorldlyContainer extends $Container {
        getSlotsForFace(arg0: $Direction_): number[];
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
    }
    export class $ContainerListener {
    }
    export interface $ContainerListener {
        containerChanged(arg0: $Container): void;
    }
    /**
     * Values that may be interpreted as {@link $ContainerListener}.
     */
    export type $ContainerListener_ = ((arg0: $Container) => void);
    export class $InteractionResult extends $Enum<$InteractionResult> {
        consumesAction(): boolean;
        shouldSwing(): boolean;
        static sidedSuccess(arg0: boolean): $InteractionResult;
        indicateItemUse(): boolean;
        static values(): $InteractionResult[];
        static valueOf(arg0: string): $InteractionResult;
        static SUCCESS: $InteractionResult;
        static PASS: $InteractionResult;
        static CONSUME_PARTIAL: $InteractionResult;
        static SUCCESS_NO_ITEM_USED: $InteractionResult;
        static CONSUME: $InteractionResult;
        static FAIL: $InteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $InteractionResult}.
     */
    export type $InteractionResult_ = "success" | "success_no_item_used" | "consume" | "consume_partial" | "pass" | "fail";
    export class $RandomSequence {
        static seedForKey(arg0: $ResourceLocation_): $RandomSupport$Seed128bit;
        random(): $RandomSource;
        static CODEC: $Codec<$RandomSequence>;
        constructor(arg0: number, arg1: $ResourceLocation_);
        constructor(arg0: number, arg1: ($ResourceLocation_) | undefined);
        constructor(arg0: $XoroshiroRandomSource);
    }
    export class $WorldlyContainerHolder {
    }
    export interface $WorldlyContainerHolder {
        getContainer(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_): $WorldlyContainer;
    }
    /**
     * Values that may be interpreted as {@link $WorldlyContainerHolder}.
     */
    export type $WorldlyContainerHolder_ = ((arg0: $BlockState, arg1: $LevelAccessor, arg2: $BlockPos) => $WorldlyContainer);
    export class $InteractionHand extends $Enum<$InteractionHand> {
        static values(): $InteractionHand[];
        static valueOf(arg0: string): $InteractionHand;
        static MAIN_HAND: $InteractionHand;
        static OFF_HAND: $InteractionHand;
    }
    /**
     * Values that may be interpreted as {@link $InteractionHand}.
     */
    export type $InteractionHand_ = "main_hand" | "off_hand";
    export class $Containers {
        static dropContentsOnDestroy(arg0: $BlockState_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_): void;
        static dropItemStack(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: $ItemStack_): void;
        static dropContents(arg0: $Level_, arg1: $BlockPos_, arg2: $NonNullList<$ItemStack_>): void;
        static dropContents(arg0: $Level_, arg1: $Entity, arg2: $Container): void;
        static dropContents(arg0: $Level_, arg1: $BlockPos_, arg2: $Container): void;
        constructor();
    }
    export class $RandomizableContainer {
        static setBlockEntityLootTable(arg0: $BlockGetter, arg1: $RandomSource, arg2: $BlockPos_, arg3: $ResourceKey_<$LootTable>): void;
        static LOOT_TABLE_SEED_TAG: string;
        static LOOT_TABLE_TAG: string;
    }
    export interface $RandomizableContainer extends $Container {
        getBlockPos(): $BlockPos;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        unpackLootTable(arg0: $Player): void;
        tryLoadLootTable(arg0: $CompoundTag_): boolean;
        trySaveLootTable(arg0: $CompoundTag_): boolean;
        setLootTable(arg0: $ResourceKey_<$LootTable>, arg1: number): void;
        setLootTable(arg0: $ResourceKey_<$LootTable>): void;
        setLootTableSeed(arg0: number): void;
        wrapOperation$dkh000$lootr$setLootTable(arg0: $RandomizableContainer, arg1: $ResourceKey_<any>, arg2: $Operation_<any>): void;
        wrapOperation$dkh000$lootr$tryLoadLootTable(arg0: $RandomizableContainer, arg1: number, arg2: $Operation_<any>): void;
        handler$dkh000$lootr$unpackLootTable(arg0: $Player, arg1: $CallbackInfo): void;
        getLevel(): $Level;
        get blockPos(): $BlockPos;
        get level(): $Level;
    }
    export class $SimpleMenuProvider implements $MenuProvider {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getDisplayName(): $Component;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        menuConstructor: $MenuConstructor;
        constructor(arg0: $MenuConstructor_, arg1: $Component_);
        get displayName(): $Component;
    }
    export class $ItemInteractionResult extends $Enum<$ItemInteractionResult> {
        consumesAction(): boolean;
        static sidedSuccess(arg0: boolean): $ItemInteractionResult;
        static values(): $ItemInteractionResult[];
        static valueOf(arg0: string): $ItemInteractionResult;
        result(): $InteractionResult;
        static SUCCESS: $ItemInteractionResult;
        static SKIP_DEFAULT_BLOCK_INTERACTION: $ItemInteractionResult;
        static CONSUME_PARTIAL: $ItemInteractionResult;
        static CONSUME: $ItemInteractionResult;
        static PASS_TO_DEFAULT_BLOCK_INTERACTION: $ItemInteractionResult;
        static FAIL: $ItemInteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $ItemInteractionResult}.
     */
    export type $ItemInteractionResult_ = "success" | "consume" | "consume_partial" | "pass_to_default_block_interaction" | "skip_default_block_interaction" | "fail";
    export class $Difficulty extends $Enum<$Difficulty> implements $StringRepresentable {
        getSerializedName(): string;
        static byId(arg0: number): $Difficulty;
        getDisplayName(): $Component;
        getInfo(): $Component;
        static byName(arg0: string): $Difficulty;
        static values(): $Difficulty[];
        static valueOf(arg0: string): $Difficulty;
        getKey(): string;
        getId(): number;
        getRemappedEnumConstantName(): string;
        static EASY: $Difficulty;
        static CODEC: $StringRepresentable$EnumCodec<$Difficulty>;
        static PEACEFUL: $Difficulty;
        static HARD: $Difficulty;
        static NORMAL: $Difficulty;
        get serializedName(): string;
        get displayName(): $Component;
        get info(): $Component;
        get key(): string;
        get id(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Difficulty}.
     */
    export type $Difficulty_ = "peaceful" | "easy" | "normal" | "hard";
}
