import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $EntityType_, $EntityType, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $IBlockStateExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockBehaviourAccessor as $BlockBehaviourAccessor$3 } from "@package/com/github/alexthe666/citadel/mixin";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";
import { $BlockPropertiesAccessor } from "@package/com/supermartijn642/core/mixin";
import { $Item, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $StateHolderAccessor as $StateHolderAccessor$1 } from "@package/io/wispforest/accessories/mixin";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $NoteBlockInstrument, $Property, $NoteBlockInstrument_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $BlockSettingsLock } from "@package/de/cristelknight/doapi/neoforge/terraform/sign";
import { $DerivedBlock$Settings } from "@package/eu/ha3/presencefootsteps/api";
import { $RenderShape, $Mirror_, $SoundType_, $SoundType, $Block, $Rotation_, $Block_, $SupportType_ } from "@package/net/minecraft/world/level/block";
import { $BlockStateKJS, $BlockBehaviourKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $InvokerBlockBehavior } from "@package/org/violetmoon/zeta/mixin/mixins";
import { $HitResult, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockStateFTBC } from "@package/dev/ftb/mods/ftbchunks/core";
import { $FastMap } from "@package/malte0811/ferritecore/fastmap";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $PhysicsBlockPropertiesDefinition_, $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_ } from "@package/dev/ryanhcode/sable/physics/config/block_properties";
import { $BlockStateExtension } from "@package/dev/ryanhcode/sable/mixinterface/block_properties";
import { $BlockBehaviourAccessor, $StateHolderAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $AbstractBlockSettingsAccessor, $AbstractBlockAccessor } from "@package/net/fabricmc/fabric/mixin/object/builder";
import { $Map, $Map$Entry, $List, $Map_, $Collection, $Optional } from "@package/java/util";
import { $BlockBehaviourAccessor as $BlockBehaviourAccessor$1 } from "@package/org/figuramc/figura/mixin";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $BiConsumer_, $ToIntFunction, $Function_, $Supplier, $ToIntFunction_ } from "@package/java/util/function";
import { $BlockPos, $HolderSet_, $BlockPos_, $Registry, $Holder_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ServerPlayer$RespawnPosAngle, $ServerLevel } from "@package/net/minecraft/server/level";
import { $PathType, $PathType_, $PathComputationType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $Reference2ObjectArrayMap, $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ShapeUpdateHandlingBlockBehaviour } from "@package/net/caffeinemc/mods/lithium/common/block/entity";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $IState } from "@package/com/ishland/c2me/base/mixin/access";
import { $LootTable, $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockAndTintGetter, $Explosion, $LevelAccessor, $LevelReader, $BlockGetter, $SignalGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $StateCullingShapeCache, $MoreStateCulling } from "@package/ca/fxco/moreculling/api/blockstate";
import { $BlockBehaviourInvoker } from "@package/org/embeddedt/modernfix/common/mixin/perf/reduce_blockstate_cache_rebuilds";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $FluidState, $Fluid_, $PushReaction_, $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $AccessorBlockBehavior } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $ImmutableList, $Table } from "@package/com/google/common/collect";
import { $IBlockState } from "@package/org/embeddedt/modernfix/duck";
import { $FastMapStateHolder, $BlockStateCacheAccess } from "@package/malte0811/ferritecore/ducks";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StateCache, $IStateCacheAccessor } from "@package/xfacthd/framedblocks/api/block/cache";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $AccessorStateDefinitionBuilder } from "@package/xfacthd/framedblocks/mixin";
import { $BubbleColumnDirection } from "@package/net/neoforged/neoforge/common/enums";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker } from "@package/net/minecraft/world/level/block/entity";
import { $BlockBehaviourAccessor as $BlockBehaviourAccessor$2 } from "@package/dev/simulated_team/simulated/mixin/accessor";
export * as pattern from "@package/net/minecraft/world/level/block/state/pattern";
export * as properties from "@package/net/minecraft/world/level/block/state/properties";
export * as predicate from "@package/net/minecraft/world/level/block/state/predicate";

declare module "@package/net/minecraft/world/level/block/state" {
    export class $BlockBehaviour$OffsetType extends $Enum<$BlockBehaviour$OffsetType> {
        static values(): $BlockBehaviour$OffsetType[];
        static valueOf(arg0: string): $BlockBehaviour$OffsetType;
        static XZ: $BlockBehaviour$OffsetType;
        static XYZ: $BlockBehaviour$OffsetType;
        static NONE: $BlockBehaviour$OffsetType;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetType}.
     */
    export type $BlockBehaviour$OffsetType_ = "none" | "xz" | "xyz";
    export class $StateDefinition<O, S extends $StateHolder<O, S>> {
        getPossibleStates(): $ImmutableList<S>;
        static appendPropertyCodec<S extends $StateHolder<never, S>, T extends $Comparable<T>>(arg0: $MapCodec_<S>, arg1: $Supplier_<S>, arg2: string, arg3: $Property<T>): $MapCodec<S>;
        any(): S;
        getOwner(): O;
        getProperty(arg0: string): $Property<never>;
        getProperties(): $Collection<$Property<never>>;
        owner: O;
        get possibleStates(): $ImmutableList<S>;
        get properties(): $Collection<$Property<never>>;
    }
    export class $BlockBehaviour$BlockStateBase$Cache implements $BlockStateCacheAccess {
        getCollisionShape(): $VoxelShape;
        isFaceSturdy(arg0: $Direction_, arg1: $SupportType_): boolean;
        setCollisionShape(arg0: $VoxelShape): void;
        getOcclusionShapes(): $VoxelShape[];
        setOcclusionShapes(arg0: $VoxelShape[]): void;
        getFaceSturdy(): boolean[];
        setFaceSturdy(arg0: boolean[]): void;
    }
    export class $StateDefinition$Builder<O, S extends $StateHolder<O, S>> implements $AccessorStateDefinitionBuilder {
        create(arg0: $Function_<O, S>, arg1: $StateDefinition$Factory_<O, S>): $StateDefinition<O, S>;
        add(...arg0: $Property<never>[]): $StateDefinition$Builder<O, S>;
        framedblocks$getProperties(): $Map<string, $Property<never>>;
        constructor(arg0: O);
    }
    export class $BlockBehaviour implements $FeatureElement, $BlockBehaviourInvoker, $ShapeUpdateHandlingBlockBehaviour, $AbstractBlockAccessor, $InvokerBlockBehavior, $BlockBehaviourAccessor$1, $BlockBehaviourAccessor$3, $BlockBehaviourAccessor$2, $BlockBehaviourKJS, $BlockBehaviourAccessor, $AccessorBlockBehavior {
        requiredFeatures(): $FeatureFlagSet;
        asItem(): $Item;
        getLootTable(): $ResourceKey<$LootTable>;
        static simpleCodec<B extends $Block>(arg0: $Function_<$BlockBehaviour$Properties, B>): $MapCodec<B>;
        setHasCollision(arg0: boolean): void;
        setExplosionResistance(arg0: number): void;
        setIsRandomlyTicking(arg0: boolean): void;
        setRandomTickCallback(callback: $Consumer_<any>): void;
        setSoundType(arg0: $SoundType_): void;
        setFriction(arg0: number): void;
        setSpeedFactor(arg0: number): void;
        setJumpFactor(arg0: number): void;
        static propertiesCodec<B extends $Block>(): $RecordCodecBuilder<B, $BlockBehaviour$Properties>;
        modify$mob000$spectrum$applyBoomStack(arg0: $Object): $Object;
        modify$mob000$spectrum$applyBoomStackAfterBreak(arg0: $ItemStack_): $ItemStack;
        getOcclusionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        handler$mgo001$quark$tick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource, arg4: $CallbackInfo): void;
        defaultMapColor(): $MapColor;
        defaultDestroyTime(): number;
        properties(): $BlockBehaviour$Properties;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        lithium$handleShapeUpdate(arg0: $LevelReader, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $BlockState_): void;
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        getTypeData(): $Map<string, $Object>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getMod(): string;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        zeta$propogatesSkylightDown(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        hasCollision(): boolean;
        invokeGetFluidState(arg0: $BlockState_): $FluidState;
        invokeIsRandomlyTicking(arg0: $BlockState_): boolean;
        citadel_canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getHasCollision(): boolean;
        create$getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        invokeGetSoundType(arg0: $BlockState_): $SoundType;
        getProperties(): $BlockBehaviour$Properties;
        constructor(arg0: $BlockBehaviour$Properties);
        get lootTable(): $ResourceKey<$LootTable>;
        set explosionResistance(value: number);
        set isRandomlyTicking(value: boolean);
        set randomTickCallback(value: $Consumer_<any>);
        set soundType(value: $SoundType_);
        set friction(value: number);
        set speedFactor(value: number);
        set jumpFactor(value: number);
        get key(): $ResourceKey<$Block>;
        get id(): string;
        get typeData(): $Map<string, $Object>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Block>>;
        get tags(): $List<$ResourceLocation>;
    }
    export class $BlockState extends $BlockBehaviour$BlockStateBase implements $IBlockStateExtension, $BlockStateFTBC, $BlockStateExtension {
        sable$loadProperties(arg0: $StateDefinition<any, any>, arg1: $PhysicsBlockPropertiesDefinition_): void;
        sable$getProperty(arg0: $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_<any>): $Object;
        getFTBCIsWater(): boolean;
        getCloneItemStack(arg0: $HitResult, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): $ItemStack;
        addLandingEffects(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $LivingEntity, arg4: number): boolean;
        getSoundType(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): $SoundType;
        isScaffolding(arg0: $LivingEntity): boolean;
        isBed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        setBedOccupied(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: boolean): void;
        getBedDirection(arg0: $LevelReader, arg1: $BlockPos_): $Direction;
        getFriction(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): number;
        collisionExtendsVertically(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        addRunningEffects(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity): boolean;
        isBurning(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getLightEmission(arg0: $BlockGetter, arg1: $BlockPos_): number;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): void;
        onNeighborChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): void;
        getWeakChanges(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        shouldCheckWeakPower(arg0: $SignalGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob): $PathType;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        supportsExternalFaceHiding(): boolean;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        hasDynamicLightEmission(): boolean;
        ignitedByLava(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        isLadder(arg0: $LevelReader, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        canHarvestBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Player): boolean;
        onDestroyedByPlayer(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: boolean, arg4: $FluidState): boolean;
        onDestroyedByPushReaction(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $FluidState): void;
        getRespawnPosition(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_, arg3: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        canSustainPlant(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_): $TriState;
        onTreeGrow(arg0: $LevelReader, arg1: $BiConsumer_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $BlockPos_, arg4: $TreeConfiguration): boolean;
        isFertile(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        isConduitFrame(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        isPortalFrame(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getExpDrop(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $Entity, arg4: $ItemStack_): number;
        getEnchantPowerBonus(arg0: $LevelReader, arg1: $BlockPos_): number;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        getStateAtViewpoint(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Vec3_): $BlockState;
        isSlimeBlock(): boolean;
        isStickyBlock(): boolean;
        canStickTo(arg0: $BlockState_): boolean;
        getFlammability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isFlammable(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        onCaughtFire(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $LivingEntity): void;
        getFireSpreadSpeed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isFireSource(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_): boolean;
        canEntityDestroy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        canDropFromExplosion(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): boolean;
        onBlockExploded(arg0: $Level_, arg1: $BlockPos_, arg2: $Explosion): void;
        shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        getToolModifiedState(arg0: $UseOnContext, arg1: $ItemAbility_, arg2: boolean): $BlockState;
        canBeHydrated(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockPos_): boolean;
        getAppearance(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_, arg4: $BlockPos_): $BlockState;
        getBubbleColumnDirection(): $BubbleColumnDirection;
        shouldHideAdjacentFluidFace(arg0: $Direction_, arg1: $FluidState): boolean;
        handler$zbj000$fabric_rendering_fluids_v1$shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $CallbackInfoReturnable<any>): void;
        canRedstoneConnectTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        rotate(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Rotation_): $BlockState;
        isEmpty(): boolean;
        static PROPERTIES_TAG: string;
        static CODEC: $Codec<$BlockState>;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        mapColor: $MapColor;
        static NAME_TAG: string;
        constructor(arg0: $Block_, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec_<$BlockState_>);
        get FTBCIsWater(): boolean;
        get slimeBlock(): boolean;
        get stickyBlock(): boolean;
        get bubbleColumnDirection(): $BubbleColumnDirection;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockState}.
     */
    export type $BlockState_ = $Block_;
    export class $StateDefinition$Factory<O, S> {
    }
    export interface $StateDefinition$Factory<O, S> {
        create(arg0: O, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec_<S>): S;
    }
    /**
     * Values that may be interpreted as {@link $StateDefinition$Factory}.
     */
    export type $StateDefinition$Factory_<O, S> = ((arg0: O, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable<never>>, arg2: $MapCodec<S>) => S);
    export class $BlockBehaviour$BlockStateBase extends $StateHolder<$Block, $BlockState> implements $IBlockState, $MoreStateCulling, $StateCullingShapeCache, $BlockStateKJS, $IStateCacheAccessor {
        getFluidState(): $FluidState;
        getTags(): $Stream<$TagKey<$Block>>;
        getRenderShape(): $RenderShape;
        isAir(): boolean;
        attack(arg0: $Level_, arg1: $BlockPos_, arg2: $Player): void;
        useItemOn(arg0: $ItemStack_, arg1: $Level_, arg2: $Player, arg3: $InteractionHand_, arg4: $BlockHitResult): $ItemInteractionResult;
        hasBlockEntity(): boolean;
        onRemove(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean): void;
        canOcclude(): boolean;
        moreculling$initShapeCache(): void;
        moreculling$canCull(): boolean;
        getCollisionShape(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CollisionContext): $VoxelShape;
        getCollisionShape(arg0: $BlockGetter, arg1: $BlockPos_): $VoxelShape;
        getDestroySpeed(arg0: $BlockGetter, arg1: $BlockPos_): number;
        instrument(): $NoteBlockInstrument;
        requiresCorrectToolForDrops(): boolean;
        canSurvive(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        getSoundType(): $SoundType;
        /**
         * @deprecated
         */
        blocksMotion(): boolean;
        entityInside(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity): void;
        isCollisionShapeFullBlock(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getPistonPushReaction(): $PushReaction;
        onExplosionHit(arg0: $Level_, arg1: $BlockPos_, arg2: $Explosion, arg3: $BiConsumer_<$ItemStack, $BlockPos>): void;
        isSuffocating(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        liquid(): boolean;
        /**
         * @deprecated
         */
        getLightEmission(): number;
        getLightBlock(arg0: $BlockGetter, arg1: $BlockPos_): number;
        hasAnalogOutputSignal(): boolean;
        updateIndirectNeighbourShapes(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: number): void;
        updateIndirectNeighbourShapes(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: number, arg3: number): void;
        updateNeighbourShapes(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: number, arg3: number): void;
        updateNeighbourShapes(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: number): void;
        entityCanStandOnFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity, arg3: $Direction_): boolean;
        triggerEvent(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: number): boolean;
        isRedstoneConductor(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getDirectSignal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isSignalSource(): boolean;
        getSignal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        getInteractionShape(arg0: $BlockGetter, arg1: $BlockPos_): $VoxelShape;
        isFaceSturdy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        isFaceSturdy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $SupportType_): boolean;
        canBeReplaced(): boolean;
        canBeReplaced(arg0: $BlockPlaceContext): boolean;
        canBeReplaced(arg0: $Fluid_): boolean;
        updateShape(arg0: $Direction_, arg1: $BlockState_, arg2: $LevelAccessor, arg3: $BlockPos_, arg4: $BlockPos_): $BlockState;
        skipRendering(arg0: $BlockState_, arg1: $Direction_): boolean;
        getFaceOcclusionShape(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): $VoxelShape;
        getDrops(arg0: $LootParams$Builder): $List<$ItemStack>;
        /**
         * @deprecated
         */
        isSolid(): boolean;
        moreculling$cantCullAgainst(arg0: $Direction_): boolean;
        moreculling$shouldAttemptToCull(arg0: $Direction_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        moreculling$hasQuadsOnSide(arg0: $Direction_): boolean;
        moreculling$shouldAttemptToCullAgainst(arg0: $Direction_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        moreculling$hasTextureTranslucency(arg0: $Direction_): boolean;
        moreculling$customShouldDrawFace(arg0: $BlockGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $Direction_): $Optional<any>;
        setDestroySpeed(arg0: number): void;
        setLightEmission(arg0: number): void;
        setRequiresTool(arg0: boolean): void;
        moreculling$usesCustomShouldDrawFace(): boolean;
        isPathfindable(arg0: $PathComputationType_): boolean;
        onPlace(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean): void;
        isRandomlyTicking(): boolean;
        /**
         * @deprecated
         */
        ignitedByLava(): boolean;
        getMapColor(arg0: $BlockGetter, arg1: $BlockPos_): $MapColor;
        spawnAfterBreak(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $ItemStack_, arg3: boolean): void;
        useWithoutItem(arg0: $Level_, arg1: $Player, arg2: $BlockHitResult): $InteractionResult;
        useShapeForLightOcclusion(): boolean;
        getOcclusionShape(arg0: $BlockGetter, arg1: $BlockPos_): $VoxelShape;
        getBlockSupportShape(arg0: $BlockGetter, arg1: $BlockPos_): $VoxelShape;
        isSolidRender(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        propagatesSkylightDown(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getMenuProvider(arg0: $Level_, arg1: $BlockPos_): $MenuProvider;
        getShadeBrightness(arg0: $BlockGetter, arg1: $BlockPos_): number;
        getAnalogOutputSignal(arg0: $Level_, arg1: $BlockPos_): number;
        getVisualShape(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CollisionContext): $VoxelShape;
        randomTick(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $RandomSource): void;
        getDestroyProgress(arg0: $Player, arg1: $BlockGetter, arg2: $BlockPos_): number;
        onProjectileHit(arg0: $Level_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $Projectile): void;
        isViewBlocking(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        hasPostProcess(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        emissiveRendering(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        handler$fga000$ferritecore$cacheStateHead(arg0: $CallbackInfo): void;
        handler$fga000$ferritecore$cacheStateTail(arg0: $CallbackInfo): void;
        getBlockHolder(): $Holder<$Block>;
        isValidSpawn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $EntityType_<never>): boolean;
        hasLargeCollisionShape(): boolean;
        handler$zik000$iris$getShadeBrightness(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CallbackInfoReturnable<any>): void;
        entityCanStandOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        modifyReturnValue$bhk000$supplementaries$supp$modifyPlanterOffset(original: $Vec3_, level: $BlockGetter, pos: $BlockPos_): $Vec3;
        hasOffsetFunction(): boolean;
        handleNeighborChanged(arg0: $Level_, arg1: $BlockPos_, arg2: $Block_, arg3: $BlockPos_, arg4: boolean): void;
        handler$hfj000$immersiveengineering$onBlockCollision(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity, arg3: $CallbackInfo): void;
        localvar$mnl000$spectrum$preventXPDropsWhenUsingResonance(arg0: boolean, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $ItemStack_): boolean;
        getTicker<T extends $BlockEntity>(arg0: $Level_, arg1: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        shouldSpawnTerrainParticles(): boolean;
        isCacheInvalid(): boolean;
        moreculling$setHasQuadsOnSide(arg0: number): void;
        moreculling$setHasTextureTranslucency(arg0: boolean): void;
        moreculling$getFaceCullingShape(arg0: $Direction_): $VoxelShape;
        framedblocks$initCache(arg0: $StateCache): void;
        framedblocks$getCache(): $StateCache;
        initCache(): void;
        tick(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $RandomSource): void;
        getShape(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CollisionContext): $VoxelShape;
        getShape(arg0: $BlockGetter, arg1: $BlockPos_): $VoxelShape;
        getBlock(): $Block;
        getSeed(arg0: $BlockPos_): number;
        clearCache(): void;
        is(arg0: $TagKey_<$Block>): boolean;
        is(arg0: $Block_): boolean;
        is(arg0: $ResourceKey_<$Block>): boolean;
        is(arg0: $HolderSet_<$Block>): boolean;
        is(arg0: $TagKey_<$Block>, arg1: $Predicate_<$BlockBehaviour$BlockStateBase>): boolean;
        is(arg0: $Holder_<$Block>): boolean;
        getOffset(arg0: $BlockGetter, arg1: $BlockPos_): $Vec3;
        /**
         * @deprecated
         */
        rotate(arg0: $Rotation_): $BlockState;
        mirror(arg0: $Mirror_): $BlockState;
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        replaceThisWith(cx: $RecipeScriptContext, _with: $Object): $Object;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        getWebIconURL(size: number): $RelativeURL;
        toString(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getMod(): string;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        static PROPERTIES_TAG: string;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        mapColor: $MapColor;
        static NAME_TAG: string;
        get fluidState(): $FluidState;
        get renderShape(): $RenderShape;
        get air(): boolean;
        get soundType(): $SoundType;
        get pistonPushReaction(): $PushReaction;
        get signalSource(): boolean;
        get solid(): boolean;
        set requiresTool(value: boolean);
        get randomlyTicking(): boolean;
        get blockHolder(): $Holder<$Block>;
        get cacheInvalid(): boolean;
        get block(): $Block;
        get key(): $ResourceKey<$Block>;
        get id(): string;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Block>>;
    }
    export class $BlockBehaviour$OffsetFunction {
    }
    export interface $BlockBehaviour$OffsetFunction {
        evaluate(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetFunction}.
     */
    export type $BlockBehaviour$OffsetFunction_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => $Vec3_);
    export class $BlockBehaviour$StatePredicate {
    }
    export interface $BlockBehaviour$StatePredicate {
        test(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StatePredicate}.
     */
    export type $BlockBehaviour$StatePredicate_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
    export class $BlockBehaviour$Properties implements $BlockSettingsLock, $AbstractBlockSettingsAccessor, $BlockPropertiesAccessor, $DerivedBlock$Settings {
        requiredFeatures(...arg0: $FeatureFlag[]): $BlockBehaviour$Properties;
        sound(arg0: $SoundType_): $BlockBehaviour$Properties;
        air(): $BlockBehaviour$Properties;
        instrument(arg0: $NoteBlockInstrument_): $BlockBehaviour$Properties;
        requiresCorrectToolForDrops(): $BlockBehaviour$Properties;
        friction(arg0: number): $BlockBehaviour$Properties;
        isSuffocating(arg0: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        liquid(): $BlockBehaviour$Properties;
        isRedstoneConductor(arg0: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        lightLevel(arg0: $ToIntFunction_<$BlockState>): $BlockBehaviour$Properties;
        static ofFullCopy(arg0: $BlockBehaviour): $BlockBehaviour$Properties;
        noLootTable(): $BlockBehaviour$Properties;
        getBaseBlock(): $Block;
        explosionResistance(arg0: number): $BlockBehaviour$Properties;
        speedFactor(arg0: number): $BlockBehaviour$Properties;
        jumpFactor(arg0: number): $BlockBehaviour$Properties;
        dynamicShape(): $BlockBehaviour$Properties;
        ignitedByLava(): $BlockBehaviour$Properties;
        mapColor(arg0: $DyeColor_): $BlockBehaviour$Properties;
        mapColor(arg0: $Function_<$BlockState, $MapColor>): $BlockBehaviour$Properties;
        mapColor(arg0: $MapColor): $BlockBehaviour$Properties;
        destroyTime(arg0: number): $BlockBehaviour$Properties;
        pushReaction(arg0: $PushReaction_): $BlockBehaviour$Properties;
        isViewBlocking(arg0: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        hasPostProcess(arg0: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        emissiveRendering(arg0: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        replaceable(): $BlockBehaviour$Properties;
        forceSolidOn(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        forceSolidOff(): $BlockBehaviour$Properties;
        isValidSpawn(arg0: $BlockBehaviour$StateArgumentPredicate_<$EntityType<never>>): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        static ofLegacyCopy(arg0: $BlockBehaviour): $BlockBehaviour$Properties;
        noCollission(): $BlockBehaviour$Properties;
        noOcclusion(): $BlockBehaviour$Properties;
        instabreak(): $BlockBehaviour$Properties;
        randomTicks(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        dropsLike(arg0: $Block_): $BlockBehaviour$Properties;
        lootFrom(arg0: $Supplier_<$Block>): $BlockBehaviour$Properties;
        offsetType(arg0: $BlockBehaviour$OffsetType_): $BlockBehaviour$Properties;
        noTerrainParticles(): $BlockBehaviour$Properties;
        terraform$lock(): void;
        setBaseBlock(arg0: $Block_): void;
        strength(arg0: number): $BlockBehaviour$Properties;
        strength(arg0: number, arg1: number): $BlockBehaviour$Properties;
        static of(): $BlockBehaviour$Properties;
        getLiquid(): boolean;
        getSoundType(): $SoundType;
        getFriction(): number;
        getJumpFactor(): number;
        getSpeedFactor(): number;
        getDrops(): $ResourceKey<$LootTable>;
        getExplosionResistance(): number;
        getMapColor(): $Function<$BlockState, $MapColor>;
        getHasCollision(): boolean;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        getSpawnTerrainParticles(): boolean;
        getRequiredFeatures(): $FeatureFlagSet;
        getIgnitedByLava(): boolean;
        getForceSolidOff(): boolean;
        getForceSolidOn(): boolean;
        getPushReaction(): $PushReaction;
        getInstrument(): $NoteBlockInstrument;
        getReplaceable(): boolean;
        setHasCollision(arg0: boolean): void;
        setIsRandomlyTicking(arg0: boolean): void;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        setDynamicShape(arg0: boolean): void;
        setCanOcclude(arg0: boolean): void;
        setIsAir(arg0: boolean): void;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        setSpawnTerrainParticles(arg0: boolean): void;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        setIgnitedByLava(arg0: boolean): void;
        setLiquid(arg0: boolean): void;
        setForceSolidOff(arg0: boolean): void;
        setForceSolidOn(arg0: boolean): void;
        setReplaceable(arg0: boolean): void;
        getLootTableSupplier(): $Supplier<$ResourceKey<$LootTable>>;
        setLootTableSupplier(supplier: $Supplier_<$ResourceKey<$LootTable>>): void;
        isRequiresCorrectToolForDrops(): boolean;
        getDestroyTime(): number;
        getIsRandomlyTicking(): boolean;
        getLuminance(): $ToIntFunction<$BlockState>;
        getDynamicShape(): boolean;
        getCanOcclude(): boolean;
        getIsAir(): boolean;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        offsetFunction: $BlockBehaviour$OffsetFunction;
        canOcclude: boolean;
        lightEmission: $ToIntFunction<$BlockState>;
        drops: $ResourceKey<$LootTable>;
        soundType: $SoundType;
        static CODEC: $Codec<$BlockBehaviour$Properties>;
        isRandomlyTicking: boolean;
        spawnTerrainParticles: boolean;
        isAir: boolean;
        hasCollision: boolean;
        constructor();
        get luminance(): $ToIntFunction<$BlockState>;
    }
    export class $BlockBehaviour$StateArgumentPredicate<A> {
    }
    export interface $BlockBehaviour$StateArgumentPredicate<A> {
        test(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: A): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StateArgumentPredicate}.
     */
    export type $BlockBehaviour$StateArgumentPredicate_<A> = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: A) => boolean);
    export class $StateHolder<O, S> implements $StateHolderAccessor$1<any, any>, $FastMapStateHolder<any>, $StateHolderAccessor<any, any>, $IState<any> {
        cycle<T extends $Comparable<T>>(arg0: $Property<T>): $Object;
        replacePropertyMap(arg0: $Reference2ObjectMap<any, any>): void;
        getOptionalValue<T extends $Comparable<T>>(arg0: $Property<T>): (T) | undefined;
        redirect$ffm000$ferritecore$getNeighborFromFastMap(arg0: $Table<any, any, any>, arg1: $Object, arg2: $Object): $Object;
        trySetValue<T extends $Comparable<T>, V extends T>(arg0: $Property<T>, arg1: V): $Object;
        populateNeighbours(arg0: $Map_<any, any>): void;
        getStateMap(): $FastMap<any>;
        getStateIndex(): number;
        getVanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        setStateMap(arg0: $FastMap<any>): void;
        setStateIndex(arg0: number): void;
        setNeighborTable(arg0: $Table<any, any, any>): void;
        getNeighborTable(): $Table<any, any, any>;
        hasProperty<T extends $Comparable<T>>(arg0: $Property<T>): boolean;
        getValues(): $Map<$Property<never>, $Comparable<never>>;
        getValue<T extends $Comparable<T>>(arg0: $Property<T>): T;
        getProperties(): $Collection<$Property<never>>;
        setValue<T extends $Comparable<T>, V extends T>(arg0: $Property<T>, arg1: V): $Object;
        getCodec(): $MapCodec<$Object>;
        accessories$owner(): $Object;
        accessories$propertiesCodec(): $MapCodec<$Object>;
        getOwner(): $Object;
        static PROPERTIES_TAG: string;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        get vanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        get values(): $Map<$Property<never>, $Comparable<never>>;
        get properties(): $Collection<$Property<never>>;
        get codec(): $MapCodec<$Object>;
        get owner(): $Object;
    }
}
