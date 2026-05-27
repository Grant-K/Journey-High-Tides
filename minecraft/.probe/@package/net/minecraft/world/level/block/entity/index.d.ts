import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $Services_ } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AccessorBlockEntity, $AccessorBlockEntityType } from "@package/com/railwayteam/railways/mixin";
import { $AttachmentTargetImpl } from "@package/net/fabricmc/fabric/impl/attachment";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $AccessorBaseContainerBlockEntity, $AccessorBannerBlockEntity } from "@package/net/darkhax/bookshelf/common/mixin/access/block";
import { $VaultBlockEntity } from "@package/net/minecraft/world/level/block/entity/vault";
import { $IBlockEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IRenderableEntity } from "@package/me/srrapero720/chloride/api";
import { $RegistryFriendlyByteBuf, $Connection } from "@package/net/minecraft/network";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $InventoryChangeTracker, $InventoryChangeListener, $InventoryChangeEmitter } from "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_change_tracking";
import { $DynamicLightSource } from "@package/toni/sodiumdynamiclights";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $SpecialLogicInventory } from "@package/net/fabricmc/fabric/impl/transfer/item";
import { $ComparatorTracker } from "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_comparator_tracking";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ExtendedBlockEntityType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $LithiumTransferConditionInventory, $LithiumInventory } from "@package/net/caffeinemc/mods/lithium/api/inventory";
import { $BlockEntityTypeAccessor } from "@package/net/neoforged/neoforge/mixins";
import { $RenderDataBlockEntity } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $GameEventListener, $GameEvent, $GameEventListener$Provider, $PositionSource, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $BlockEntityRenderPredicate, $BlockEntityRenderPredicate_ } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $UUID_, $Set_, $Map, $List, $Map_, $List_, $Set, $UUID, $Optional } from "@package/java/util";
import { $DynamicLightHandlerHolder } from "@package/toni/sodiumdynamiclights/accessor";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Vec3i, $HolderLookup$Provider, $Holder, $Direction_, $NonNullList, $Direction, $RegistryAccess, $Registry, $HolderGetter, $Holder_ } from "@package/net/minecraft/core";
import { $RenderAttachmentBlockEntity } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Record, $Class, $Object } from "@package/java/lang";
import { $SectionedEntityMovementListener } from "@package/net/caffeinemc/mods/lithium/common/tracking/entity";
import { $AccessorMixinBaseContainerBlockEntity, $AccessorMixinBrushableBlockEntity } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $ItemLike_, $Spawner, $BlockGetter, $BaseCommandBlock, $BaseSpawner, $Level_, $Level } from "@package/net/minecraft/world/level";
import { $TrialSpawner$StateAccessor, $TrialSpawner, $TrialSpawnerState_, $TrialSpawnerState } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $BlockEntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $AzAnimatorAccessor, $AzAnimator } from "@package/mod/azure/azurelib/common/animation";
import { $CustomData, $ResolvableProfile_, $ResolvableProfile } from "@package/net/minecraft/world/item/component";
import { $AccessorBaseContainerBlockEntity as $AccessorBaseContainerBlockEntity$1 } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AbstractFurnaceBlockEntityAccess } from "@package/snownee/jade/mixin";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $RecipeHolder, $AbstractCookingRecipe, $RecipeHolder_, $RecipeManager$CachedCheck, $CampfireCookingRecipe, $CraftingInput, $CraftingInput$Positioned, $SingleRecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $DispenserBlockEntityAccessor } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $AccessorAbstractFurnaceBlockEntity } from "@package/com/illusivesoulworks/polymorph/mixin/core";
import { $FormattedCharSequence, $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $RandomizableContainer, $MenuProvider, $Nameable, $Container, $Clearable, $LockCode_, $WorldlyContainer, $LockCode } from "@package/net/minecraft/world";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $CrashReportCategory } from "@package/net/minecraft";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $DataComponentType, $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $CraftingContainer, $AbstractContainerMenu, $ContainerData, $StackedContentsCompatible, $RecipeCraftingHolder } from "@package/net/minecraft/world/inventory";
import { $Cullable } from "@package/dev/tr7zw/entityculling/versionless/access";
import { $TransactionContext } from "@package/net/fabricmc/fabric/api/transfer/v1/transaction";
import { $UpdateReceiver, $LithiumStackList } from "@package/net/caffeinemc/mods/lithium/common/hopper";
import { $Item, $JukeboxSongPlayer, $Item_, $DyeColor, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FilteredText_ } from "@package/net/minecraft/server/network";
import { $Inventory, $Player, $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $DynamicLightHandler, $DynamicLightHandler_ } from "@package/dev/lambdaurora/lambdynlights/api";
import { $BETypeAccess, $FurnaceTEAccess, $BaseContainerBEAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $StructureMode, $StructureMode_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem, $VibrationSystem$Listener } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $Errorable } from "@package/com/bawnorton/neruina/extend";
import { $Mirror_, $Mirror, $Block, $Block_, $Rotation_, $SculkSpreader, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $AABB } from "@package/net/minecraft/world/phys";
import { $Type } from "@package/com/mojang/datafixers/types";
import { $BlockEntityAccessor as $BlockEntityAccessor$2 } from "@package/com/copycatsplus/copycats/mixin/foundation/copycat";
import { $FabricBlockEntityType, $FabricBlockEntityType$Builder } from "@package/net/fabricmc/fabric/api/object/builder/v1/block/entity";
import { $PistonMovingBlockEntity } from "@package/net/minecraft/world/level/block/piston";
import { $AbstractFurnaceBlockEntityAccessor } from "@package/com/aetherteam/aether/mixin/mixins/common/accessor";
import { $BlockEntityAccessor } from "@package/io/wispforest/owo/mixin/ui/access";
import { $SkullBlockEntityAccessor } from "@package/org/figuramc/figura/mixin";
import { $BlockEntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $WrappedBlockEntityTickInvokerAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping";
import { $Supplier_, $ObjIntConsumer_, $UnaryOperator_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockEntityAccessor as $BlockEntityAccessor$1, $BrushableBlockEntityAccessor } from "@package/com/telepathicgrunt/the_bumblezone/mixin/blocks";
import { $SetChangedHandlingBlockEntity, $SleepingBlockEntity } from "@package/net/caffeinemc/mods/lithium/common/block/entity";
import { $IBlockEntity } from "@package/com/ishland/c2me/base/mixin/access";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ContainerSingleItem$BlockContainerSingleItem } from "@package/net/minecraft/world/ticks";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $SupportCache } from "@package/net/caffeinemc/mods/lithium/common/world/blockentity";
import { $ClientboundBlockEntityDataPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $LoadingCache } from "@package/com/google/common/cache";
export * as trialspawner from "@package/net/minecraft/world/level/block/entity/trialspawner";
export * as vault from "@package/net/minecraft/world/level/block/entity/vault";

declare module "@package/net/minecraft/world/level/block/entity" {
    export class $BeehiveBlockEntity$BeeReleaseStatus extends $Enum<$BeehiveBlockEntity$BeeReleaseStatus> {
        static values(): $BeehiveBlockEntity$BeeReleaseStatus[];
        static valueOf(arg0: string): $BeehiveBlockEntity$BeeReleaseStatus;
        static BEE_RELEASED: $BeehiveBlockEntity$BeeReleaseStatus;
        static EMERGENCY: $BeehiveBlockEntity$BeeReleaseStatus;
        static HONEY_DELIVERED: $BeehiveBlockEntity$BeeReleaseStatus;
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$BeeReleaseStatus}.
     */
    export type $BeehiveBlockEntity$BeeReleaseStatus_ = "honey_delivered" | "bee_released" | "emergency";
    export class $SculkCatalystBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$SculkCatalystBlockEntity$CatalystListener> {
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SculkCatalystBlockEntity): void;
        getListener(): $SculkCatalystBlockEntity$CatalystListener;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get listener(): $SculkCatalystBlockEntity$CatalystListener;
    }
    export class $HopperBlockEntity extends $RandomizableContainerBlockEntity implements $Hopper, $LithiumInventory, $InventoryChangeListener, $UpdateReceiver, $SectionedEntityMovementListener, $InventoryChangeTracker, $SleepingBlockEntity {
        static entityInside(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Entity, arg4: $HopperBlockEntity): void;
        lithium$invalidateCacheOnUndirectedNeighborUpdate(): void;
        lithium$invalidateCacheOnNeighborUpdate(arg0: $Direction_): void;
        lithium$invalidateCacheOnNeighborUpdate(arg0: boolean): void;
        static getContainerAt(arg0: $Level_, arg1: $BlockPos_): $Container;
        static pushItemsTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $HopperBlockEntity): void;
        lithium$handleInventoryContentModified(arg0: $Container): void;
        lithium$handleInventoryRemoved(arg0: $Container): void;
        lithium$handleComparatorAdded(arg0: $Container): boolean;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        lithium$startSleeping(): boolean;
        setCooldown(arg0: number): void;
        static isFullContainer(arg0: $Container, arg1: $Direction_): boolean;
        static suckInItems(arg0: $Level_, arg1: $Hopper): boolean;
        getLevelX(): number;
        getLevelY(): number;
        getLevelZ(): number;
        isGridAligned(): boolean;
        isOnCustomCooldown(): boolean;
        static getItemsAtAndAbove(arg0: $Level_, arg1: $Hopper): $List<$ItemEntity>;
        handler$cjk003$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        getLastUpdateTime(): number;
        getExtractBlockInventory(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $Container;
        getInsertInventory(arg0: $Level_): $Container;
        getInsertBlockInventory(arg0: $Level_): $Container;
        lithium$handleEntityMovement(arg0: $Class<any>): void;
        static addItem(arg0: $Container, arg1: $ItemEntity): boolean;
        static addItem(arg0: $Container, arg1: $Container, arg2: $ItemStack_, arg3: $Direction_): $ItemStack;
        getSuckAabb(): $AABB;
        generateLootLithium(): void;
        handleStackListReplaced(arg0: $Container): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        isSleeping(): boolean;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        sleepOnlyCurrentTick(): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        static MOVE_ITEM_SPEED: number;
        static ATTACHMENTS_NBT_KEY: string;
        static HOPPER_CONTAINER_SIZE: number;
        lockKey: $LockCode;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set cooldown(value: number);
        get levelX(): number;
        get levelY(): number;
        get levelZ(): number;
        get gridAligned(): boolean;
        get onCustomCooldown(): boolean;
        get lastUpdateTime(): number;
        get suckAabb(): $AABB;
        get sleeping(): boolean;
        set ticker(value: $TickingBlockEntity);
    }
    export interface $DecoratedPotPattern extends RegistryMarked<RegistryTypes.DecoratedPotPatternTag, RegistryTypes.DecoratedPotPattern> {}
    export class $BlockEntityTicker<T extends $BlockEntity> {
    }
    export interface $BlockEntityTicker<T extends $BlockEntity> {
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: T): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityTicker}.
     */
    export type $BlockEntityTicker_<T> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: T) => void);
    export class $SkullBlockEntity extends $BlockEntity implements $SkullBlockEntityAccessor {
        static animation(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SkullBlockEntity): void;
        getAnimation(arg0: number): number;
        getNoteBlockSound(): $ResourceLocation;
        getOwnerProfile(): $ResolvableProfile;
        static fetchGameProfile(arg0: $UUID_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchGameProfile(arg0: string): $CompletableFuture<($GameProfile) | undefined>;
        static getProfileCache$figura_$md$68cb88$0(): $LoadingCache<any, any>;
        setOwner(arg0: $ResolvableProfile_): void;
        static clear(): void;
        static setup(arg0: $Services_, arg1: $Executor_): void;
        static CHECKED_MAIN_THREAD_EXECUTOR: $Executor;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get noteBlockSound(): $ResourceLocation;
        get ownerProfile(): $ResolvableProfile;
        static get profileCache$figura_$md$68cb88$0(): $LoadingCache<any, any>;
        set owner(value: $ResolvableProfile_);
    }
    export class $LidBlockEntity {
    }
    export interface $LidBlockEntity {
        getOpenNess(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LidBlockEntity}.
     */
    export type $LidBlockEntity_ = ((arg0: number) => number);
    export class $ComparatorBlockEntity extends $BlockEntity {
        getOutputSignal(): number;
        setOutputSignal(arg0: number): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $DecoratedPotPattern extends $Record {
        assetId(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotPattern}.
     */
    export type $DecoratedPotPattern_ = RegistryTypes.DecoratedPotPattern | { assetId?: $ResourceLocation_,  } | [assetId?: $ResourceLocation_, ];
    export class $JigsawBlockEntity$JointType extends $Enum<$JigsawBlockEntity$JointType> implements $StringRepresentable {
        getSerializedName(): string;
        getTranslatedName(): $Component;
        static byName(string: string): $Optional<any>;
        static values(): $JigsawBlockEntity$JointType[];
        static valueOf(arg0: string): $JigsawBlockEntity$JointType;
        getRemappedEnumConstantName(): string;
        static ROLLABLE: $JigsawBlockEntity$JointType;
        static ALIGNED: $JigsawBlockEntity$JointType;
        get serializedName(): string;
        get translatedName(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $JigsawBlockEntity$JointType}.
     */
    export type $JigsawBlockEntity$JointType_ = "rollable" | "aligned";
    export class $CommandBlockEntity$Mode extends $Enum<$CommandBlockEntity$Mode> {
        static values(): $CommandBlockEntity$Mode[];
        static valueOf(arg0: string): $CommandBlockEntity$Mode;
        static AUTO: $CommandBlockEntity$Mode;
        static REDSTONE: $CommandBlockEntity$Mode;
        static SEQUENCE: $CommandBlockEntity$Mode;
    }
    /**
     * Values that may be interpreted as {@link $CommandBlockEntity$Mode}.
     */
    export type $CommandBlockEntity$Mode_ = "sequence" | "auto" | "redstone";
    export class $ChestLidController {
        tickLid(): void;
        shouldBeOpen(arg0: boolean): void;
        getOpenness(arg0: number): number;
        constructor();
    }
    export class $BlockEntity$DataComponentInput {
    }
    export interface $BlockEntity$DataComponentInput {
        get<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        get<T>(arg0: $DataComponentType_<T>): T;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        getOrDefault<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): T;
    }
    export class $BeehiveBlockEntity$BeeData {
        hasNectar(): boolean;
        toOccupant(): $BeehiveBlockEntity$Occupant;
        tick(): boolean;
        ticksInHive: number;
        occupant: $BeehiveBlockEntity$Occupant;
        constructor(arg0: $BeehiveBlockEntity$Occupant_);
    }
    export class $BeaconBlockEntity extends $BlockEntity implements $MenuProvider, $Nameable {
        static playSound(arg0: $Level_, arg1: $BlockPos_, arg2: $SoundEvent_): void;
        getCustomName(): $Component;
        setCustomName(arg0: $Component_): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getBeamSections(): $List<$BeaconBlockEntity$BeaconBeamSection>;
        getDisplayName(): $Component;
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BeaconBlockEntity): void;
        getName(): $Component;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        hasCustomName(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        beamSections: $List<$BeaconBlockEntity$BeaconBeamSection>;
        static BEACON_EFFECTS: $List<$List<$Holder<$MobEffect>>>;
        lastCheckY: number;
        checkingBeamSections: $List<$BeaconBlockEntity$BeaconBeamSection>;
        static DATA_SECONDARY: number;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        static NUM_DATA_VALUES: number;
        static DATA_LEVELS: number;
        static DATA_PRIMARY: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get displayName(): $Component;
    }
    export class $SculkShriekerBlockEntity$VibrationUser implements $VibrationSystem$User {
        requiresAdjacentChunksToBeTicking(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $SignText {
        getColor(): $DyeColor;
        getRenderMessages(arg0: boolean, arg1: $Function_<$Component, $FormattedCharSequence>): $FormattedCharSequence[];
        hasAnyClickCommands(arg0: $Player): boolean;
        setHasGlowingText(arg0: boolean): $SignText;
        hasMessage(arg0: $Player): boolean;
        setColor(arg0: $DyeColor_): $SignText;
        hasGlowingText(): boolean;
        setMessage(arg0: number, arg1: $Component_, arg2: $Component_): $SignText;
        setMessage(arg0: number, arg1: $Component_): $SignText;
        getMessages(arg0: boolean): $Component[];
        getMessage(arg0: number, arg1: boolean): $Component;
        static DIRECT_CODEC: $Codec<$SignText>;
        static LINES: number;
        constructor();
        constructor(arg0: $Component_[], arg1: $Component_[], arg2: $DyeColor_, arg3: boolean);
    }
    export class $BedBlockEntity extends $BlockEntity {
        getColor(): $DyeColor;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        setColor(arg0: $DyeColor_): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_, arg2: $DyeColor_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $TrappedChestBlockEntity extends $ChestBlockEntity {
        openersCounter: $ContainerOpenersCounter;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityType<T extends $BlockEntity> implements $BlockEntityTypeAccessor, $ExtendedBlockEntityType<any>, $BlockEntityTypeExtension<any>, $FabricBlockEntityType, $IRenderableEntity, $BETypeAccess, $AccessorBlockEntityType, $DynamicLightHandlerHolder<any> {
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $Object;
        builtInRegistryHolder(): $Holder$Reference<$BlockEntityType<never>>;
        chloride$whitelisted(): boolean;
        flywheel$getVisualizer(): $BlockEntityVisualizer<any>;
        flywheel$setVisualizer(visualizer: $BlockEntityVisualizer<any>): void;
        sodiumdynamiclights$getDynamicLightHandler(): $DynamicLightHandler<any>;
        sodiumdynamiclights$setDynamicLightHandler(handler: $DynamicLightHandler_<any>): void;
        sodiumdynamiclights$getSetting(): boolean;
        sodiumdynamiclights$getName(): $Component;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<any>[];
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): void;
        addSupportedBlock(arg0: $Block_): void;
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): boolean;
        isValid(arg0: $BlockState_): boolean;
        create(arg0: $BlockPos_, arg1: $BlockState_): $Object;
        static getKey(arg0: $BlockEntityType_<never>): $ResourceLocation;
        getValidBlocks(): $Set<$Block>;
        neoforge$setValidBlocks(arg0: $Set_<$Block_>): void;
        setValidBlocks(arg0: $Set_<$Block_>): void;
        static BLAST_FURNACE: $BlockEntityType<$BlastFurnaceBlockEntity>;
        static HANGING_SIGN: $BlockEntityType<$HangingSignBlockEntity>;
        static COMPARATOR: $BlockEntityType<$ComparatorBlockEntity>;
        static VAULT: $BlockEntityType<$VaultBlockEntity>;
        static SKULL: $BlockEntityType<$SkullBlockEntity>;
        static CHISELED_BOOKSHELF: $BlockEntityType<$ChiseledBookShelfBlockEntity>;
        static JIGSAW: $BlockEntityType<$JigsawBlockEntity>;
        static DECORATED_POT: $BlockEntityType<$DecoratedPotBlockEntity>;
        static BEACON: $BlockEntityType<$BeaconBlockEntity>;
        static CRAFTER: $BlockEntityType<$CrafterBlockEntity>;
        validBlocks: $Set<$Block>;
        static FURNACE: $BlockEntityType<$FurnaceBlockEntity>;
        static BEEHIVE: $BlockEntityType<$BeehiveBlockEntity>;
        static PISTON: $BlockEntityType<$PistonMovingBlockEntity>;
        static TRAPPED_CHEST: $BlockEntityType<$TrappedChestBlockEntity>;
        static END_PORTAL: $BlockEntityType<$TheEndPortalBlockEntity>;
        static ENDER_CHEST: $BlockEntityType<$EnderChestBlockEntity>;
        static COMMAND_BLOCK: $BlockEntityType<$CommandBlockEntity>;
        static SIGN: $BlockEntityType<$SignBlockEntity>;
        static STRUCTURE_BLOCK: $BlockEntityType<$StructureBlockEntity>;
        static BELL: $BlockEntityType<$BellBlockEntity>;
        static ENCHANTING_TABLE: $BlockEntityType<$EnchantingTableBlockEntity>;
        static BREWING_STAND: $BlockEntityType<$BrewingStandBlockEntity>;
        static BED: $BlockEntityType<$BedBlockEntity>;
        static MOB_SPAWNER: $BlockEntityType<$SpawnerBlockEntity>;
        static CALIBRATED_SCULK_SENSOR: $BlockEntityType<$CalibratedSculkSensorBlockEntity>;
        static SCULK_CATALYST: $BlockEntityType<$SculkCatalystBlockEntity>;
        static CONDUIT: $BlockEntityType<$ConduitBlockEntity>;
        static CAMPFIRE: $BlockEntityType<$CampfireBlockEntity>;
        static END_GATEWAY: $BlockEntityType<$TheEndGatewayBlockEntity>;
        static SMOKER: $BlockEntityType<$SmokerBlockEntity>;
        static DISPENSER: $BlockEntityType<$DispenserBlockEntity>;
        static SCULK_SHRIEKER: $BlockEntityType<$SculkShriekerBlockEntity>;
        static HOPPER: $BlockEntityType<$HopperBlockEntity>;
        static CHEST: $BlockEntityType<$ChestBlockEntity>;
        static DAYLIGHT_DETECTOR: $BlockEntityType<$DaylightDetectorBlockEntity>;
        static BANNER: $BlockEntityType<$BannerBlockEntity>;
        static SCULK_SENSOR: $BlockEntityType<$SculkSensorBlockEntity>;
        static TRIAL_SPAWNER: $BlockEntityType<$TrialSpawnerBlockEntity>;
        static LECTERN: $BlockEntityType<$LecternBlockEntity>;
        static SHULKER_BOX: $BlockEntityType<$ShulkerBoxBlockEntity>;
        static BRUSHABLE_BLOCK: $BlockEntityType<$BrushableBlockEntity>;
        static JUKEBOX: $BlockEntityType<$JukeboxBlockEntity>;
        static BARREL: $BlockEntityType<$BarrelBlockEntity>;
        static DROPPER: $BlockEntityType<$DropperBlockEntity>;
        constructor(arg0: $BlockEntityType$BlockEntitySupplier_<$Object>, arg1: $Set_<$Block_>, arg2: $Type<never>);
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType}.
     */
    export type $BlockEntityType_<T> = RegistryTypes.BlockEntityType;
    export class $SmokerBlockEntity extends $AbstractFurnaceBlockEntity {
        static DATA_LIT_DURATION: number;
        cookingTotalTime: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static BURN_COOL_SPEED: number;
        cookingProgress: number;
        litDuration: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $CampfireBlockEntity extends $BlockEntity implements $Clearable, $SleepingBlockEntity {
        dowse(): void;
        clearContent(): void;
        getCookableRecipe(arg0: $ItemStack_): ($RecipeHolder<$CampfireCookingRecipe>) | undefined;
        placeFood(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): boolean;
        getItems(): $NonNullList<$ItemStack>;
        static particleTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CampfireBlockEntity): void;
        static cookTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CampfireBlockEntity): void;
        static cooldownTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CampfireBlockEntity): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        isSleeping(): boolean;
        lithium$startSleeping(): boolean;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        sleepOnlyCurrentTick(): void;
        static ATTACHMENTS_NBT_KEY: string;
        cookingTime: number[];
        cookingProgress: number[];
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get items(): $NonNullList<$ItemStack>;
        get sleeping(): boolean;
        set ticker(value: $TickingBlockEntity);
    }
    export class $BarrelBlockEntity extends $RandomizableContainerBlockEntity implements $LithiumInventory, $InventoryChangeTracker {
        recheckOpen(): void;
        handler$cjg000$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        openersCounter: $ContainerOpenersCounter;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BeaconBlockEntity$BeaconBeamSection {
        getColor(): number;
        getHeight(): number;
        height: number;
        constructor(arg0: number);
        get color(): number;
    }
    export class $SculkSensorBlockEntity$VibrationUser implements $VibrationSystem$User {
        requiresAdjacentChunksToBeTicking(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $PotDecorations extends $Record {
        ordered(): $List<$Item>;
        left(): ($Item) | undefined;
        right(): ($Item) | undefined;
        front(): ($Item) | undefined;
        back(): ($Item) | undefined;
        static load(arg0: $CompoundTag_): $PotDecorations;
        save(arg0: $CompoundTag_): $CompoundTag;
        static CODEC: $Codec<$PotDecorations>;
        static EMPTY: $PotDecorations;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotDecorations>;
        constructor(arg0: $Item_, arg1: $Item_, arg2: $Item_, arg3: $Item_);
        constructor(arg0: ($Item_) | undefined, arg1: ($Item_) | undefined, arg2: ($Item_) | undefined, arg3: ($Item_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PotDecorations}.
     */
    export type $PotDecorations_ = { front?: ($Item_) | undefined, right?: ($Item_) | undefined, left?: ($Item_) | undefined, back?: ($Item_) | undefined,  } | [front?: ($Item_) | undefined, right?: ($Item_) | undefined, left?: ($Item_) | undefined, back?: ($Item_) | undefined, ];
    export class $BannerPatternLayers extends $Record {
        removeLast(): $BannerPatternLayers;
        layers(): $List<$BannerPatternLayers$Layer>;
        static CODEC: $Codec<$BannerPatternLayers>;
        static EMPTY: $BannerPatternLayers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers>;
        constructor(arg0: $List_<$BannerPatternLayers$Layer_>);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers}.
     */
    export type $BannerPatternLayers_ = { layers?: $List_<$BannerPatternLayers$Layer_>,  } | [layers?: $List_<$BannerPatternLayers$Layer_>, ];
    export class $ChestBlockEntity extends $RandomizableContainerBlockEntity implements $LidBlockEntity, $InventoryChangeEmitter, $LithiumInventory, $InventoryChangeTracker {
        static lidAnimateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ChestBlockEntity): void;
        recheckOpen(): void;
        static getOpenCount(arg0: $BlockGetter, arg1: $BlockPos_): number;
        handler$cji001$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        getOpenNess(arg0: number): number;
        static swapContents(arg0: $ChestBlockEntity, arg1: $ChestBlockEntity): void;
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        openersCounter: $ContainerOpenersCounter;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BeehiveBlockEntity$Occupant extends $Record {
        entityData(): $CustomData;
        ticksInHive(): number;
        minTicksInHive(): number;
        createEntity(arg0: $Level_, arg1: $BlockPos_): $Entity;
        static create(arg0: number): $BeehiveBlockEntity$Occupant;
        static of(arg0: $Entity): $BeehiveBlockEntity$Occupant;
        static CODEC: $Codec<$BeehiveBlockEntity$Occupant>;
        static LIST_CODEC: $Codec<$List<$BeehiveBlockEntity$Occupant>>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BeehiveBlockEntity$Occupant>;
        constructor(arg0: $CustomData, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$Occupant}.
     */
    export type $BeehiveBlockEntity$Occupant_ = { ticksInHive?: number, entityData?: $CustomData, minTicksInHive?: number,  } | [ticksInHive?: number, entityData?: $CustomData, minTicksInHive?: number, ];
    export class $CalibratedSculkSensorBlockEntity extends $SculkSensorBlockEntity {
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntity extends $AttachmentHolder implements $IBlockEntityExtension, $RenderDataBlockEntity, $RenderAttachmentBlockEntity, $BlockEntityAccessor$1, $SupportCache, $ComparatorTracker, $SetChangedHandlingBlockEntity, $BlockEntityAccessor$2, $AzAnimatorAccessor<any, any>, $Errorable, $Cullable, $AttachmentTargetImpl, $AccessorBlockEntity, $DynamicLightSource, $BlockEntityAccessor, $IBlockEntity {
        isRemoved(): boolean;
        getBlockPos(): $BlockPos;
        getBlockState(): $BlockState;
        saveCustomAndMetadata(arg0: $HolderLookup$Provider): $CompoundTag;
        /**
         * @deprecated
         */
        removeComponentsFromTag(arg0: $CompoundTag_): void;
        collectComponents(): $DataComponentMap;
        applyComponents(arg0: $DataComponentMap_, arg1: $DataComponentPatch_): void;
        sdl$dynamicLightTick(): void;
        sdl$getLuminance(): number;
        getPersistentData(): $CompoundTag;
        sdl$shouldUpdateDynamicLight(): boolean;
        sdl$getDynamicLightX(): number;
        sdl$getDynamicLightY(): number;
        sdl$getDynamicLightZ(): number;
        sdl$getDynamicLightLevel(): $Level;
        sdl$resetDynamicLight(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: $LevelRenderer): boolean;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: $LevelRenderer): void;
        setChanged(): void;
        setRemoved(): void;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        onlyOpCanSetNbt(): boolean;
        setAnimator(arg0: $AzAnimator<any, any>): void;
        getAnimatorOrNull(): $AzAnimator<any, any>;
        neruina$isErrored(): boolean;
        neruina$setErrored(): void;
        neruina$clearErrored(): void;
        neruina$setTickingEntryId(arg0: $UUID_): void;
        neruina$getTickingEntryId(): $UUID;
        isForcedVisible(): boolean;
        setCulled(value: boolean): void;
        isCulled(): boolean;
        setOutOfCamera(value: boolean): void;
        isOutOfCamera(): boolean;
        /**
         * @deprecated
         */
        setBlockState(arg0: $BlockState_): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        getRenderData(): $Object;
        static addEntityType(arg0: $CompoundTag_, arg1: $BlockEntityType_<never>): void;
        getUpdatePacket(): $Packet<$ClientGamePacketListener>;
        setComponents(arg0: $DataComponentMap_): void;
        saveCustomOnly(arg0: $HolderLookup$Provider): $CompoundTag;
        saveToItem(arg0: $ItemStack_, arg1: $HolderLookup$Provider): void;
        isValidBlockState(arg0: $BlockState_): boolean;
        static getPosFromTag(arg0: $CompoundTag_): $BlockPos;
        loadWithComponents(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        loadCustomOnly(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        saveWithFullMetadata(arg0: $HolderLookup$Provider): $CompoundTag;
        saveWithoutMetadata(arg0: $HolderLookup$Provider): $CompoundTag;
        saveWithId(arg0: $HolderLookup$Provider): $CompoundTag;
        static loadStatic(arg0: $BlockPos_, arg1: $BlockState_, arg2: $CompoundTag_, arg3: $HolderLookup$Provider): $BlockEntity;
        getUpdateTag(arg0: $HolderLookup$Provider): $CompoundTag;
        clearRemoved(): void;
        applyComponentsFromItemStack(arg0: $ItemStack_): void;
        static parseCustomNameSafe(arg0: string, arg1: $HolderLookup$Provider): $Component;
        getRenderAttachmentData(): $Object;
        lithium$isSupported(): boolean;
        lithium$onComparatorAdded(arg0: $Direction_, arg1: number): void;
        lithium$hasAnyComparatorNearby(): boolean;
        getLevel(): $Level;
        setLevel(arg0: $Level_): void;
        setTimeout(): void;
        components(): $DataComponentMap;
        getType(): $BlockEntityType<never>;
        hasCustomOutlineRendering(arg0: $Player): boolean;
        invalidateCapabilities(): void;
        getModelData(): $ModelData;
        requestModelDataUpdate(): void;
        onDataPacket(arg0: $Connection, arg1: $ClientboundBlockEntityDataPacket, arg2: $HolderLookup$Provider): void;
        handleUpdateTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        onChunkUnloaded(): void;
        onLoad(): void;
        lithium$handleSetChanged(): void;
        getAnimator(): ($AzAnimator<$Object, $Object>) | undefined;
        sdl$isDynamicLightEnabled(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        bumblezone$setType(arg0: $BlockEntityType_<never>): void;
        callSaveMetadata(arg0: $CompoundTag_): void;
        setWorldPosition(arg0: $BlockPos_): void;
        owo$setCachedState(arg0: $BlockState_): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get blockPos(): $BlockPos;
        get persistentData(): $CompoundTag;
        get animatorOrNull(): $AzAnimator<any, any>;
        get forcedVisible(): boolean;
        get renderData(): $Object;
        get updatePacket(): $Packet<$ClientGamePacketListener>;
        get renderAttachmentData(): $Object;
        get type(): $BlockEntityType<never>;
        get modelData(): $ModelData;
        set worldPosition(value: $BlockPos_);
    }
    export class $ShulkerBoxBlockEntity$AnimationStatus extends $Enum<$ShulkerBoxBlockEntity$AnimationStatus> {
        static values(): $ShulkerBoxBlockEntity$AnimationStatus[];
        static valueOf(arg0: string): $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSED: $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENED: $ShulkerBoxBlockEntity$AnimationStatus;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerBoxBlockEntity$AnimationStatus}.
     */
    export type $ShulkerBoxBlockEntity$AnimationStatus_ = "closed" | "opening" | "opened" | "closing";
    export class $ShulkerBoxBlockEntity extends $RandomizableContainerBlockEntity implements $WorldlyContainer, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity {
        getColor(): $DyeColor;
        getBoundingBox(arg0: $BlockState_): $AABB;
        getProgress(arg0: number): number;
        getAnimationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        getSlotsForFace(arg0: $Direction_): number[];
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        handler$cjl004$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        loadFromTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        handler$bhb000$supplementaries$supp$preventInsertion(index: number, itemStackIn: $ItemStack_, direction: $Direction_, info: $CallbackInfoReturnable<any>): void;
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ShulkerBoxBlockEntity): void;
        isClosed(): boolean;
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        isSleeping(): boolean;
        lithium$startSleeping(): boolean;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        sleepOnlyCurrentTick(): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        static EVENT_SET_OPEN_COUNT: number;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        static COLUMNS: number;
        static OPENING_TICK_LENGTH: number;
        openCount: number;
        lockKey: $LockCode;
        static MAX_LID_HEIGHT: number;
        static MAX_LID_ROTATION: number;
        static ROWS: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $DyeColor_, arg1: $BlockPos_, arg2: $BlockState_);
        get color(): $DyeColor;
        get animationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        get closed(): boolean;
        get sleeping(): boolean;
        set ticker(value: $TickingBlockEntity);
    }
    export class $DecoratedPotBlockEntity$WobbleStyle extends $Enum<$DecoratedPotBlockEntity$WobbleStyle> {
        static values(): $DecoratedPotBlockEntity$WobbleStyle[];
        static valueOf(arg0: string): $DecoratedPotBlockEntity$WobbleStyle;
        duration: number;
        static POSITIVE: $DecoratedPotBlockEntity$WobbleStyle;
        static NEGATIVE: $DecoratedPotBlockEntity$WobbleStyle;
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotBlockEntity$WobbleStyle}.
     */
    export type $DecoratedPotBlockEntity$WobbleStyle_ = "positive" | "negative";
    export interface $BannerPattern extends RegistryMarked<RegistryTypes.BannerPatternTag, RegistryTypes.BannerPattern> {}
    export class $BlockEntity$ComponentHelper {
        static COMPONENTS_CODEC: $Codec<$DataComponentMap>;
    }
    export class $BrushableBlockEntity extends $BlockEntity implements $BrushableBlockEntityAccessor, $AccessorMixinBrushableBlockEntity {
        unpackLootTable(arg0: $Player): void;
        checkReset(): void;
        brush(arg0: number, arg1: $Player, arg2: $Direction_): boolean;
        brushingCompleted(arg0: $Player): void;
        wrapOperation$dkf000$lootr$tryLoadLootTable(arg0: $CompoundTag_, arg1: string, arg2: number, arg3: $Operation_<any>): boolean;
        setLootTable(arg0: $ResourceKey_<$LootTable>, arg1: number): void;
        getHitDirection(): $Direction;
        getItem(): $ItemStack;
        bumblezone$callDropContent(arg0: $Player): void;
        lootr$getLootTable(): $ResourceKey<$LootTable>;
        lootr$getLootTableSeed(): number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get hitDirection(): $Direction;
        get item(): $ItemStack;
    }
    export class $EnderChestBlockEntity extends $BlockEntity implements $LidBlockEntity {
        stillValid(arg0: $Player): boolean;
        static lidAnimateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $EnderChestBlockEntity): void;
        recheckOpen(): void;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        getOpenNess(arg0: number): number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BaseContainerBlockEntity extends $BlockEntity implements $Container, $MenuProvider, $Nameable, $InventoryChangeEmitter, $AccessorMixinBaseContainerBlockEntity, $AccessorBaseContainerBlockEntity, $SpecialLogicInventory, $BaseContainerBEAccess, $AccessorBaseContainerBlockEntity$1 {
        stillValid(arg0: $Player): boolean;
        removeItemNoUpdate(arg0: number): $ItemStack;
        getCustomName(): $Component;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        setItem(arg0: number, arg1: $ItemStack_): void;
        canOpen(arg0: $Player): boolean;
        clearContent(): void;
        lithium$emitStackListReplaced(): void;
        lithium$emitRemoved(): void;
        lithium$emitFirstComparatorAdded(): void;
        lithium$forwardContentChangeOnce(arg0: $InventoryChangeListener, arg1: $LithiumStackList): void;
        lithium$emitContentModified(): void;
        lithium$forwardMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        lithium$stopForwardingMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        handler$cjh000$lithium$readNbtStackListReplacement(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $CallbackInfo): void;
        static canUnlock(arg0: $Player, arg1: $LockCode_, arg2: $Component_): boolean;
        wrapOperation$eeo000$fabric_transfer_api_v1$fabric_redirectMarkDirty(arg0: $BaseContainerBlockEntity, arg1: $Operation_<any>): void;
        fabric_setSuppress(arg0: boolean): void;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getDisplayName(): $Component;
        getItem(arg0: number): $ItemStack;
        getName(): $Component;
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
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        hasCustomName(): boolean;
        emitCallbackReplaced(): void;
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
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
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
        invokeGetItems(): $NonNullList<$ItemStack>;
        getLockKey(): $LockCode;
        setLockKey(arg0: $LockCode_): void;
        bookshelf$name(arg0: $Component_): void;
        setName(arg0: $Component_): void;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        get customName(): $Component;
        get displayName(): $Component;
        set transferCooldown(value: number);
        get width(): number;
        get height(): number;
        get mutable(): boolean;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$Builder<T extends $BlockEntity> implements $FabricBlockEntityType$Builder<any> {
        build(): $BlockEntityType<any>;
        build(arg0: $Type<never>): $BlockEntityType<$Object>;
        static of<T extends $BlockEntity>(arg0: $BlockEntityType$BlockEntitySupplier_<T>, ...arg1: $Block_[]): $BlockEntityType$Builder<T>;
    }
    export class $CommandBlockEntity extends $BlockEntity {
        getCommandBlock(): $BaseCommandBlock;
        setAutomatic(arg0: boolean): void;
        isPowered(): boolean;
        setPowered(arg0: boolean): void;
        markConditionMet(): boolean;
        wasConditionMet(): boolean;
        isConditional(): boolean;
        onModeSwitch(): void;
        getMode(): $CommandBlockEntity$Mode;
        isAutomatic(): boolean;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get commandBlock(): $BaseCommandBlock;
        get conditional(): boolean;
        get mode(): $CommandBlockEntity$Mode;
    }
    export class $DecoratedPotPatterns {
        static getPatternFromItem(arg0: $Item_): $ResourceKey<$DecoratedPotPattern>;
        static bootstrap(arg0: $Registry<$DecoratedPotPattern_>): $DecoratedPotPattern;
        static GUSTER: $ResourceKey<$DecoratedPotPattern>;
        static MINER: $ResourceKey<$DecoratedPotPattern>;
        static ITEM_TO_POT_TEXTURE: $Map<$Item, $ResourceKey<$DecoratedPotPattern>>;
        static ARMS_UP: $ResourceKey<$DecoratedPotPattern>;
        static FRIEND: $ResourceKey<$DecoratedPotPattern>;
        static SHEAF: $ResourceKey<$DecoratedPotPattern>;
        static SKULL: $ResourceKey<$DecoratedPotPattern>;
        static SCRAPE: $ResourceKey<$DecoratedPotPattern>;
        static ARCHER: $ResourceKey<$DecoratedPotPattern>;
        static FLOW: $ResourceKey<$DecoratedPotPattern>;
        static BURN: $ResourceKey<$DecoratedPotPattern>;
        static EXPLORER: $ResourceKey<$DecoratedPotPattern>;
        static HEARTBREAK: $ResourceKey<$DecoratedPotPattern>;
        static SNORT: $ResourceKey<$DecoratedPotPattern>;
        static DANGER: $ResourceKey<$DecoratedPotPattern>;
        static ANGLER: $ResourceKey<$DecoratedPotPattern>;
        static BREWER: $ResourceKey<$DecoratedPotPattern>;
        static HEART: $ResourceKey<$DecoratedPotPattern>;
        static BLANK: $ResourceKey<$DecoratedPotPattern>;
        static SHELTER: $ResourceKey<$DecoratedPotPattern>;
        static PLENTY: $ResourceKey<$DecoratedPotPattern>;
        static BLADE: $ResourceKey<$DecoratedPotPattern>;
        static HOWL: $ResourceKey<$DecoratedPotPattern>;
        static MOURNER: $ResourceKey<$DecoratedPotPattern>;
        static PRIZE: $ResourceKey<$DecoratedPotPattern>;
        constructor();
    }
    export class $StructureBlockEntity$UpdateType extends $Enum<$StructureBlockEntity$UpdateType> {
        static values(): $StructureBlockEntity$UpdateType[];
        static valueOf(arg0: string): $StructureBlockEntity$UpdateType;
        static UPDATE_DATA: $StructureBlockEntity$UpdateType;
        static SAVE_AREA: $StructureBlockEntity$UpdateType;
        static LOAD_AREA: $StructureBlockEntity$UpdateType;
        static SCAN_AREA: $StructureBlockEntity$UpdateType;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockEntity$UpdateType}.
     */
    export type $StructureBlockEntity$UpdateType_ = "update_data" | "save_area" | "load_area" | "scan_area";
    export class $SculkCatalystBlockEntity$CatalystListener implements $GameEventListener {
        getSculkSpreader(): $SculkSpreader;
        getListenerRadius(): number;
        getListenerSource(): $PositionSource;
        handleGameEvent(arg0: $ServerLevel, arg1: $Holder_<$GameEvent>, arg2: $GameEvent$Context_, arg3: $Vec3_): boolean;
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        static PULSE_TICKS: number;
        constructor(arg0: $BlockState_, arg1: $PositionSource);
        get sculkSpreader(): $SculkSpreader;
        get listenerRadius(): number;
        get listenerSource(): $PositionSource;
        get deliveryMode(): $GameEventListener$DeliveryMode;
    }
    export class $DaylightDetectorBlockEntity extends $BlockEntity {
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export interface $BlockEntityType<T> extends RegistryMarked<RegistryTypes.BlockEntityTypeTag, RegistryTypes.BlockEntityType> {}
    export class $CrafterBlockEntity extends $RandomizableContainerBlockEntity implements $CraftingContainer, $SleepingBlockEntity, $SetChangedHandlingBlockEntity {
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CrafterBlockEntity): void;
        getRedstoneSignal(): number;
        setTriggered(arg0: boolean): void;
        setCraftingTicksRemaining(arg0: number): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        fillStackedContents(arg0: $StackedContents): void;
        setSlotState(arg0: number, arg1: boolean): void;
        isSlotDisabled(arg0: number): boolean;
        isTriggered(): boolean;
        getWidth(): number;
        getHeight(): number;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        isSleeping(): boolean;
        lithium$startSleeping(): boolean;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        sleepOnlyCurrentTick(): void;
        getItems(): $List<$ItemStack>;
        static CONTAINER_WIDTH: number;
        static CONTAINER_HEIGHT: number;
        static DATA_TRIGGERED: number;
        static SLOT_ENABLED: number;
        static CONTAINER_SIZE: number;
        static SLOT_DISABLED: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get redstoneSignal(): number;
        set craftingTicksRemaining(value: number);
        get width(): number;
        get height(): number;
        get sleeping(): boolean;
        set ticker(value: $TickingBlockEntity);
        get items(): $List<$ItemStack>;
    }
    export class $HangingSignBlockEntity extends $SignBlockEntity {
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BellBlockEntity$ResonationEndAction {
    }
    export interface $BellBlockEntity$ResonationEndAction {
    }
    /**
     * Values that may be interpreted as {@link $BellBlockEntity$ResonationEndAction}.
     */
    export type $BellBlockEntity$ResonationEndAction_ = (() => void);
    export class $BrewingStandBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity, $SetChangedHandlingBlockEntity {
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BrewingStandBlockEntity): void;
        getSlotsForFace(arg0: $Direction_): number[];
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        isSleeping(): boolean;
        lithium$startSleeping(): boolean;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        sleepOnlyCurrentTick(): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        static DATA_BREW_TIME: number;
        static DATA_FUEL_USES: number;
        fuel: number;
        brewTime: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        static FUEL_USES: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get sleeping(): boolean;
        set ticker(value: $TickingBlockEntity);
    }
    export class $StructureBlockEntity extends $BlockEntity {
        getRotation(): $Rotation;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        isPowered(): boolean;
        setPowered(arg0: boolean): void;
        usedBy(arg0: $Player): boolean;
        createdBy(arg0: $LivingEntity): void;
        saveStructure(): boolean;
        saveStructure(arg0: boolean): boolean;
        placeStructure(arg0: $ServerLevel): void;
        unloadStructure(): void;
        getStructureName(): string;
        setStructureName(arg0: $ResourceLocation_): void;
        setStructureName(arg0: string): void;
        constant$cln000$integrated_api$readNbtLower(value: number): number;
        constant$cln000$integrated_api$readNbtUpper(value: number): number;
        hasStructureName(): boolean;
        getStructurePos(): $BlockPos;
        setStructurePos(arg0: $BlockPos_): void;
        getStructureSize(): $Vec3i;
        setStructureSize(arg0: $Vec3i): void;
        setMirror(arg0: $Mirror_): void;
        setRotation(arg0: $Rotation_): void;
        getMetaData(): string;
        setMetaData(arg0: string): void;
        isIgnoreEntities(): boolean;
        setIgnoreEntities(arg0: boolean): void;
        getIntegrity(): number;
        setIntegrity(arg0: number): void;
        detectSize(): boolean;
        constant$cln000$integrated_api$detectSize(value: number): number;
        static createRandom(arg0: number): $RandomSource;
        placeStructureIfSameSize(arg0: $ServerLevel): boolean;
        loadStructureInfo(arg0: $ServerLevel): boolean;
        isStructureLoadable(): boolean;
        getShowAir(): boolean;
        setShowAir(arg0: boolean): void;
        getShowBoundingBox(): boolean;
        setShowBoundingBox(arg0: boolean): void;
        setMode(arg0: $StructureMode_): void;
        getMode(): $StructureMode;
        setSeed(arg0: number): void;
        getSeed(): number;
        getMirror(): $Mirror;
        static AUTHOR_TAG: string;
        static MAX_OFFSET_PER_AXIS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static MAX_SIZE_PER_AXIS: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get structureLoadable(): boolean;
    }
    export class $AbstractFurnaceBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $RecipeCraftingHolder, $StackedContentsCompatible, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity, $SetChangedHandlingBlockEntity, $SpecialLogicInventory, $FurnaceTEAccess, $AccessorAbstractFurnaceBlockEntity, $AbstractFurnaceBlockEntityAccessor, $Clearable, $AbstractFurnaceBlockEntityAccess {
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $AbstractFurnaceBlockEntity): void;
        isLit(): boolean;
        getRecipesToAwardAndPopExperience(arg0: $ServerLevel, arg1: $Vec3_): $List<$RecipeHolder<never>>;
        static isFuel(arg0: $ItemStack_): boolean;
        getSlotsForFace(arg0: $Direction_): number[];
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        handler$eek000$fabric_transfer_api_v1$setStackSuppressUpdate(arg0: number, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        getRecipeUsed(): $RecipeHolder<never>;
        awardUsedRecipes(arg0: $Player, arg1: $List_<$ItemStack_>): void;
        awardUsedRecipesAndPopExperience(arg0: $ServerPlayer): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        static callCanBurn$aether_$md$68cb88$0(arg0: $RegistryAccess, arg1: $RecipeHolder_<any>, arg2: $NonNullList<any>, arg3: number, arg4: $AbstractFurnaceBlockEntity): boolean;
        static callGetTotalCookTime$aether_$md$68cb88$1(arg0: $Level_, arg1: $AbstractFurnaceBlockEntity): number;
        fillStackedContents(arg0: $StackedContents): void;
        /**
         * @deprecated
         */
        static getFuel(): $Map<$Item, number>;
        static buildFuels(arg0: $ObjIntConsumer_<$Either<$Item, $TagKey<$Item>>>): void;
        setRecipeUsed(arg0: $RecipeHolder_<never>): void;
        static invalidateCache(): void;
        static add(arg0: $Map_<$Item_, number>, arg1: $TagKey_<$Item>, arg2: number): void;
        static add(arg0: $Map_<$Item_, number>, arg1: $ItemLike_, arg2: number): void;
        setRecipeUsed(arg0: $Level_, arg1: $ServerPlayer, arg2: $RecipeHolder_<never>): boolean;
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        isSleeping(): boolean;
        lithium$startSleeping(): boolean;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        sleepOnlyCurrentTick(): void;
        getItems(): $NonNullList<$ItemStack>;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        getQuickCheck(): $RecipeManager$CachedCheck<$SingleRecipeInput, $AbstractCookingRecipe>;
        getDataAccess(): $ContainerData;
        aether$getQuickCheck(): $RecipeManager$CachedCheck<$SingleRecipeInput, $AbstractCookingRecipe>;
        aether$getLitTime(): number;
        aether$setLitTime(arg0: number): void;
        aether$setLitDuration(arg0: number): void;
        aether$getCookingProgress(): number;
        aether$setCookingProgress(arg0: number): void;
        aether$getCookingTotalTime(): number;
        aether$setCookingTotalTime(arg0: number): void;
        callIsLit(): boolean;
        aether$getItems(): $NonNullList<$ItemStack>;
        callGetBurnDuration(arg0: $ItemStack_): number;
        getCookingProgress(): number;
        getCookingTotalTime(): number;
        static DATA_LIT_DURATION: number;
        cookingTotalTime: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static BURN_COOL_SPEED: number;
        cookingProgress: number;
        litDuration: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        get lit(): boolean;
        get sleeping(): boolean;
        set ticker(value: $TickingBlockEntity);
        get items(): $NonNullList<$ItemStack>;
        get quickCheck(): $RecipeManager$CachedCheck<$SingleRecipeInput, $AbstractCookingRecipe>;
        get dataAccess(): $ContainerData;
    }
    export class $EnchantingTableBlockEntity extends $BlockEntity implements $Nameable {
        getCustomName(): $Component;
        setCustomName(arg0: $Component_): void;
        static bookAnimationTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $EnchantingTableBlockEntity): void;
        getName(): $Component;
        hasCustomName(): boolean;
        getDisplayName(): $Component;
        oFlip: number;
        flipA: number;
        rot: number;
        tRot: number;
        flipT: number;
        oOpen: number;
        static ATTACHMENTS_NBT_KEY: string;
        time: number;
        oRot: number;
        flip: number;
        open: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $BeehiveBlockEntity extends $BlockEntity {
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BeehiveBlockEntity): void;
        emptyAllLivingFromHive(arg0: $Player, arg1: $BlockState_, arg2: $BeehiveBlockEntity$BeeReleaseStatus_): void;
        getOccupantCount(): number;
        isFireNearby(): boolean;
        releaseAllOccupants(arg0: $BlockState_, arg1: $BeehiveBlockEntity$BeeReleaseStatus_): $List<$Entity>;
        isSedated(): boolean;
        static getHoneyLevel(arg0: $BlockState_): number;
        addOccupant(arg0: $Entity): void;
        storeBee(arg0: $BeehiveBlockEntity$Occupant_): void;
        hasSavedFlowerPos(): boolean;
        static releaseOccupant(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BeehiveBlockEntity$Occupant_, arg4: $List_<$Entity>, arg5: $BeehiveBlockEntity$BeeReleaseStatus_, arg6: $BlockPos_): boolean;
        isFull(): boolean;
        isEmpty(): boolean;
        static IGNORED_BEE_TAGS: $List<string>;
        savedFlowerPos: $BlockPos;
        static MIN_OCCUPATION_TICKS_NECTARLESS: number;
        stored: $List<$BeehiveBlockEntity$BeeData>;
        static MAX_OCCUPANTS: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get occupantCount(): number;
        get fireNearby(): boolean;
        get sedated(): boolean;
        get full(): boolean;
        get empty(): boolean;
    }
    export class $TickingBlockEntity {
    }
    export interface $TickingBlockEntity {
        isRemoved(): boolean;
        getPos(): $BlockPos;
        tick(): void;
        getType(): string;
        get removed(): boolean;
        get pos(): $BlockPos;
        get type(): string;
    }
    export class $SpawnerBlockEntity extends $BlockEntity implements $Spawner {
        static clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SpawnerBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SpawnerBlockEntity): void;
        getSpawner(): $BaseSpawner;
        handler$mnn000$spectrum$allowPlacingSpawnerWithBlockData(arg0: $CallbackInfoReturnable<any>): void;
        setEntityId(arg0: $EntityType_<never>, arg1: $RandomSource): void;
        spawner: $BaseSpawner;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $BellBlockEntity extends $BlockEntity {
        static clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BellBlockEntity): void;
        onHit(arg0: $Direction_): void;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BellBlockEntity): void;
        ticks: number;
        clickDirection: $Direction;
        static ATTACHMENTS_NBT_KEY: string;
        shaking: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $DropperBlockEntity extends $DispenserBlockEntity {
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $SignBlockEntity extends $BlockEntity {
        static createCommandSourceStack(arg0: $Player, arg1: $Level_, arg2: $BlockPos_): $CommandSourceStack;
        updateText(arg0: $UnaryOperator_<$SignText>, arg1: boolean): boolean;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        isWaxed(): boolean;
        isFacingFrontText(arg0: $Player): boolean;
        getSignInteractionFailedSoundEvent(): $SoundEvent;
        executeClickCommandsIfPresent(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: boolean): boolean;
        canExecuteClickCommands(arg0: boolean, arg1: $Player): boolean;
        setAllowedPlayerEditor(arg0: $UUID_): void;
        getPlayerWhoMayEdit(): $UUID;
        handler$mnn000$spectrum$allowPlacingSpawnerWithBlockData(arg0: $CallbackInfoReturnable<any>): void;
        getFrontText(): $SignText;
        getBackText(): $SignText;
        getTextLineHeight(): number;
        getMaxTextLineWidth(): number;
        updateSignText(arg0: $Player, arg1: boolean, arg2: $List_<$FilteredText_>): void;
        setWaxed(arg0: boolean): boolean;
        playerIsTooFarAwayToEdit(arg0: $UUID_): boolean;
        setText(arg0: $SignText, arg1: boolean): boolean;
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SignBlockEntity): void;
        getText(arg0: boolean): $SignText;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<any>, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get signInteractionFailedSoundEvent(): $SoundEvent;
        set allowedPlayerEditor(value: $UUID_);
        get playerWhoMayEdit(): $UUID;
        get frontText(): $SignText;
        get backText(): $SignText;
        get textLineHeight(): number;
        get maxTextLineWidth(): number;
    }
    export class $JukeboxBlockEntity extends $BlockEntity implements $Clearable, $ContainerSingleItem$BlockContainerSingleItem, $SpecialLogicInventory {
        getMaxStackSize(): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        popOutTheItem(): void;
        getSongPlayer(): $JukeboxSongPlayer;
        getComparatorOutput(): number;
        getTheItem(): $ItemStack;
        setTheItem(arg0: $ItemStack_): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        fabric_setSuppress(arg0: boolean): void;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        onSongChanged(): void;
        splitTheItem(arg0: number): $ItemStack;
        getContainerBlockEntity(): $BlockEntity;
        setSongItemWithoutPlaying(arg0: $ItemStack_): void;
        tryForcePlaySong(): void;
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $JukeboxBlockEntity): void;
        stillValid(arg0: $Player): boolean;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        removeTheItem(): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
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
        static SONG_ITEM_TAG_ID: string;
        jukeboxSongPlayer: $JukeboxSongPlayer;
        static TICKS_SINCE_SONG_STARTED_TAG_ID: string;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get songPlayer(): $JukeboxSongPlayer;
        get comparatorOutput(): number;
        get containerBlockEntity(): $BlockEntity;
        set songItemWithoutPlaying(value: $ItemStack_);
        get containerSize(): number;
        set transferCooldown(value: number);
        get width(): number;
        get height(): number;
        get mutable(): boolean;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
    }
    export interface $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
        create(arg0: $BlockPos_, arg1: $BlockState_): T;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType$BlockEntitySupplier}.
     */
    export type $BlockEntityType$BlockEntitySupplier_<T> = ((arg0: $BlockPos, arg1: $BlockState) => T);
    export class $TheEndPortalBlockEntity extends $BlockEntity {
        shouldRenderFace(arg0: $Direction_): boolean;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BannerPatternLayers$Builder {
        /**
         * @deprecated
         */
        addIfRegistered(arg0: $HolderGetter<$BannerPattern_>, arg1: $ResourceKey_<$BannerPattern>, arg2: $DyeColor_): $BannerPatternLayers$Builder;
        build(): $BannerPatternLayers;
        add(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_): $BannerPatternLayers$Builder;
        add(arg0: $BannerPatternLayers$Layer_): $BannerPatternLayers$Builder;
        addAll(arg0: $BannerPatternLayers_): $BannerPatternLayers$Builder;
        constructor();
    }
    export class $SculkSensorBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getVibrationUser(): $VibrationSystem$User;
        getLastVibrationFrequency(): number;
        getVibrationData(): $VibrationSystem$Data;
        createVibrationUser(): $VibrationSystem$User;
        setLastVibrationFrequency(arg0: number): void;
        getListener(): $VibrationSystem$Listener;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get listener(): $VibrationSystem$Listener;
    }
    export class $TrialSpawnerBlockEntity extends $BlockEntity implements $Spawner, $TrialSpawner$StateAccessor {
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        markUpdated(): void;
        getTrialSpawner(): $TrialSpawner;
        setEntityId(arg0: $EntityType_<never>, arg1: $RandomSource): void;
        getState(): $TrialSpawnerState;
        setState(arg0: $Level_, arg1: $TrialSpawnerState_): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get trialSpawner(): $TrialSpawner;
    }
    export class $DispenserBlockEntity extends $RandomizableContainerBlockEntity implements $LithiumInventory, $InventoryChangeTracker, $DispenserBlockEntityAccessor {
        insertItem(arg0: $ItemStack_): $ItemStack;
        getRandomSlot(arg0: $RandomSource): number;
        handler$cjj002$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        getItems(): $NonNullList<$ItemStack>;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get items(): $NonNullList<$ItemStack>;
    }
    export class $TheEndGatewayBlockEntity extends $TheEndPortalBlockEntity {
        getCooldownPercent(arg0: number): number;
        static beamAnimationTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $TheEndGatewayBlockEntity): void;
        static portalTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $TheEndGatewayBlockEntity): void;
        getParticleAmount(): number;
        isCoolingDown(): boolean;
        static triggerCooldown(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $TheEndGatewayBlockEntity): void;
        getPortalPosition(arg0: $ServerLevel, arg1: $BlockPos_): $Vec3;
        isSpawning(): boolean;
        getSpawnPercent(arg0: number): number;
        setExitPosition(arg0: $BlockPos_, arg1: boolean): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get particleAmount(): number;
        get coolingDown(): boolean;
        get spawning(): boolean;
    }
    export class $FurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        static DATA_LIT_DURATION: number;
        cookingTotalTime: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static BURN_COOL_SPEED: number;
        cookingProgress: number;
        litDuration: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BannerPatterns {
        static bootstrap(arg0: $BootstrapContext<$BannerPattern_>): void;
        static register(arg0: $BootstrapContext<$BannerPattern_>, arg1: $ResourceKey_<$BannerPattern>): void;
        static GUSTER: $ResourceKey<$BannerPattern>;
        static STRIPE_BOTTOM: $ResourceKey<$BannerPattern>;
        static GLOBE: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_MIDDLE: $ResourceKey<$BannerPattern>;
        static TRIANGLE_TOP: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_CENTER: $ResourceKey<$BannerPattern>;
        static STRAIGHT_CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_LEFT: $ResourceKey<$BannerPattern>;
        static SKULL: $ResourceKey<$BannerPattern>;
        static RHOMBUS_MIDDLE: $ResourceKey<$BannerPattern>;
        static CIRCLE_MIDDLE: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL: $ResourceKey<$BannerPattern>;
        static GRADIENT: $ResourceKey<$BannerPattern>;
        static FLOW: $ResourceKey<$BannerPattern>;
        static BASE: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_RIGHT: $ResourceKey<$BannerPattern>;
        static CREEPER: $ResourceKey<$BannerPattern>;
        static STRIPE_LEFT: $ResourceKey<$BannerPattern>;
        static BRICKS: $ResourceKey<$BannerPattern>;
        static TRIANGLES_BOTTOM: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_LEFT: $ResourceKey<$BannerPattern>;
        static FLOWER: $ResourceKey<$BannerPattern>;
        static STRIPE_SMALL: $ResourceKey<$BannerPattern>;
        static TRIANGLE_BOTTOM: $ResourceKey<$BannerPattern>;
        static CURLY_BORDER: $ResourceKey<$BannerPattern>;
        static TRIANGLES_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNLEFT: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNRIGHT: $ResourceKey<$BannerPattern>;
        static PIGLIN: $ResourceKey<$BannerPattern>;
        static GRADIENT_UP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT: $ResourceKey<$BannerPattern>;
        static BORDER: $ResourceKey<$BannerPattern>;
        static MOJANG: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL: $ResourceKey<$BannerPattern>;
        static CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_RIGHT: $ResourceKey<$BannerPattern>;
        constructor();
    }
    export class $RandomizableContainerBlockEntity extends $BaseContainerBlockEntity implements $RandomizableContainer {
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        setLootTable(arg0: $ResourceKey_<$LootTable>): void;
        setLootTableSeed(arg0: number): void;
        unpackLootTable(arg0: $Player): void;
        tryLoadLootTable(arg0: $CompoundTag_): boolean;
        trySaveLootTable(arg0: $CompoundTag_): boolean;
        setLootTable(arg0: $ResourceKey_<$LootTable>, arg1: number): void;
        wrapOperation$dkh000$lootr$setLootTable(arg0: $RandomizableContainer, arg1: $ResourceKey_<any>, arg2: $Operation_<any>): void;
        wrapOperation$dkh000$lootr$tryLoadLootTable(arg0: $RandomizableContainer, arg1: number, arg2: $Operation_<any>): void;
        handler$dkh000$lootr$unpackLootTable(arg0: $Player, arg1: $CallbackInfo): void;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
    }
    export class $BlastFurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        static DATA_LIT_DURATION: number;
        cookingTotalTime: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static BURN_COOL_SPEED: number;
        cookingProgress: number;
        litDuration: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BannerPattern extends $Record {
        assetId(): $ResourceLocation;
        translationKey(): string;
        static CODEC: $Codec<$Holder<$BannerPattern>>;
        static DIRECT_CODEC: $Codec<$BannerPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$BannerPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $BannerPattern}.
     */
    export type $BannerPattern_ = RegistryTypes.BannerPattern | { translationKey?: string, assetId?: $ResourceLocation_,  } | [translationKey?: string, assetId?: $ResourceLocation_, ];
    export class $LecternBlockEntity extends $BlockEntity implements $Clearable, $MenuProvider {
        getPage(): number;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        clearContent(): void;
        setBook(arg0: $ItemStack_): void;
        setBook(arg0: $ItemStack_, arg1: $Player): void;
        getBook(): $ItemStack;
        getRedstoneSignal(): number;
        hasBook(): boolean;
        getDisplayName(): $Component;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        static NUM_SLOTS: number;
        static DATA_PAGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        static SLOT_BOOK: number;
        static NUM_DATA: number;
        bookAccess: $Container;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get page(): number;
        get redstoneSignal(): number;
        get displayName(): $Component;
    }
    export class $BannerBlockEntity extends $BlockEntity implements $Nameable, $AccessorBannerBlockEntity {
        getCustomName(): $Component;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        fromItem(arg0: $ItemStack_, arg1: $DyeColor_): void;
        getPatterns(): $BannerPatternLayers;
        getBaseColor(): $DyeColor;
        getItem(): $ItemStack;
        getName(): $Component;
        hasCustomName(): boolean;
        getDisplayName(): $Component;
        setName(arg0: $Component_): void;
        static MAX_PATTERNS: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_, arg2: $DyeColor_);
        get customName(): $Component;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get patterns(): $BannerPatternLayers;
        get baseColor(): $DyeColor;
        get item(): $ItemStack;
        get displayName(): $Component;
    }
    export class $Hopper {
        static SUCK_AABB: $AABB;
    }
    export interface $Hopper extends $Container {
        getLevelX(): number;
        getLevelY(): number;
        getLevelZ(): number;
        isGridAligned(): boolean;
        getSuckAabb(): $AABB;
        get levelX(): number;
        get levelY(): number;
        get levelZ(): number;
        get gridAligned(): boolean;
        get suckAabb(): $AABB;
    }
    export class $ChiseledBookShelfBlockEntity extends $BlockEntity implements $Container, $LithiumTransferConditionInventory {
        getMaxStackSize(): number;
        stillValid(arg0: $Player): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        getLastInteractedSlot(): number;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        count(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
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
        static MAX_BOOKS_IN_STORAGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get containerSize(): number;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get lastInteractedSlot(): number;
        set transferCooldown(value: number);
        get width(): number;
        get height(): number;
        get mutable(): boolean;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $ConduitBlockEntity extends $BlockEntity {
        static clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ConduitBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ConduitBlockEntity): void;
        isHunting(): boolean;
        getActiveRotation(arg0: number): number;
        isActive(): boolean;
        tickCount: number;
        static ATTACHMENTS_NBT_KEY: string;
        static VALID_BLOCKS: $Block[];
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get hunting(): boolean;
        get active(): boolean;
    }
    export class $ContainerOpenersCounter {
        incrementOpeners(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_): void;
        decrementOpeners(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_): void;
        getOpenerCount(): number;
        recheckOpeners(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        constructor();
        get openerCount(): number;
    }
    export class $JigsawBlockEntity extends $BlockEntity {
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getFinalState(): string;
        getJoint(): $JigsawBlockEntity$JointType;
        getPlacementPriority(): number;
        getSelectionPriority(): number;
        setPool(arg0: $ResourceKey_<$StructureTemplatePool>): void;
        setFinalState(arg0: string): void;
        setJoint(arg0: $JigsawBlockEntity$JointType_): void;
        setPlacementPriority(arg0: number): void;
        setSelectionPriority(arg0: number): void;
        generate(arg0: $ServerLevel, arg1: number, arg2: boolean): void;
        getTarget(): $ResourceLocation;
        setTarget(arg0: $ResourceLocation_): void;
        getName(): $ResourceLocation;
        setName(arg0: $ResourceLocation_): void;
        getPool(): $ResourceKey<$StructureTemplatePool>;
        static TARGET: string;
        static FINAL_STATE: string;
        static SELECTION_PRIORITY: string;
        static POOL: string;
        static PLACEMENT_PRIORITY: string;
        static ATTACHMENTS_NBT_KEY: string;
        static JOINT: string;
        static NAME: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $CalibratedSculkSensorBlockEntity$VibrationUser extends $SculkSensorBlockEntity$VibrationUser {
    }
    export class $BannerPatternLayers$Layer extends $Record {
        color(): $DyeColor;
        description(): $MutableComponent;
        pattern(): $Holder<$BannerPattern>;
        static CODEC: $Codec<$BannerPatternLayers$Layer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers$Layer>;
        constructor(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers$Layer}.
     */
    export type $BannerPatternLayers$Layer_ = { color?: $DyeColor_, pattern?: $Holder_<$BannerPattern>,  } | [color?: $DyeColor_, pattern?: $Holder_<$BannerPattern>, ];
    export class $DecoratedPotBlockEntity extends $BlockEntity implements $RandomizableContainer, $ContainerSingleItem$BlockContainerSingleItem {
        getDecorations(): $PotDecorations;
        getDirection(): $Direction;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        wobble(arg0: $DecoratedPotBlockEntity$WobbleStyle_): void;
        getTheItem(): $ItemStack;
        setTheItem(arg0: $ItemStack_): void;
        getPotAsItem(): $ItemStack;
        setLootTable(arg0: $ResourceKey_<$LootTable>): void;
        setLootTableSeed(arg0: number): void;
        splitTheItem(arg0: number): $ItemStack;
        getContainerBlockEntity(): $BlockEntity;
        setFromItem(arg0: $ItemStack_): void;
        static createDecoratedPotItem(arg0: $PotDecorations_): $ItemStack;
        unpackLootTable(arg0: $Player): void;
        tryLoadLootTable(arg0: $CompoundTag_): boolean;
        trySaveLootTable(arg0: $CompoundTag_): boolean;
        setLootTable(arg0: $ResourceKey_<$LootTable>, arg1: number): void;
        wrapOperation$dkh000$lootr$setLootTable(arg0: $RandomizableContainer, arg1: $ResourceKey_<any>, arg2: $Operation_<any>): void;
        wrapOperation$dkh000$lootr$tryLoadLootTable(arg0: $RandomizableContainer, arg1: number, arg2: $Operation_<any>): void;
        handler$dkh000$lootr$unpackLootTable(arg0: $Player, arg1: $CallbackInfo): void;
        stillValid(arg0: $Player): boolean;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        clearContent(): void;
        removeTheItem(): $ItemStack;
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
        static TAG_SHERDS: string;
        lastWobbleStyle: $DecoratedPotBlockEntity$WobbleStyle;
        static TAG_ITEM: string;
        wobbleStartedAtTick: number;
        static ATTACHMENTS_NBT_KEY: string;
        static EVENT_POT_WOBBLES: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get decorations(): $PotDecorations;
        get direction(): $Direction;
        get potAsItem(): $ItemStack;
        get containerBlockEntity(): $BlockEntity;
        set fromItem(value: $ItemStack_);
        set transferCooldown(value: number);
        get width(): number;
        get height(): number;
        get mutable(): boolean;
        get slots(): number;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $SculkShriekerBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getVibrationUser(): $VibrationSystem$User;
        static tryGetPlayer(arg0: $Entity): $ServerPlayer;
        getVibrationData(): $VibrationSystem$Data;
        tryRespond(arg0: $ServerLevel): void;
        tryShriek(arg0: $ServerLevel, arg1: $ServerPlayer): void;
        getListener(): $VibrationSystem$Listener;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get listener(): $VibrationSystem$Listener;
    }
}
