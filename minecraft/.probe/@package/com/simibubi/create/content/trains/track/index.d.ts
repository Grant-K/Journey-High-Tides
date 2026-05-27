import { $IMonorailBezier$MonorailAngles, $IHasTrackCasing, $IPreAssembleCallback, $IMonorailBezier } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $Affine } from "@package/dev/engine_room/flywheel/lib/transform";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity, $IMergeableBE } from "@package/com/simibubi/create/foundation/blockEntity";
import { $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $Random, $UUID_, $Map, $Spliterator, $Iterator, $UUID, $List, $Collection_, $Collection } from "@package/java/util";
import { $BlockEntityBehaviour, $BehaviourType } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $AccessorTrackTargetingBehavior } from "@package/com/railwayteam/railways/mixin";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $Supplier_, $Consumer_, $Function_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction$AxisDirection, $Direction_, $IdMapper, $Direction$AxisDirection_ } from "@package/net/minecraft/core";
import { $TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation, $EdgePointType, $TrackGraphLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $IHaveBigOutline, $IBE, $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $Enum, $Iterable, $Record, $Class, $ThreadLocal } from "@package/java/lang";
import { $Pair, $Couple } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $LevelReader, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $Item_, $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $NonNullSupplier_, $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";
import { $BooleanProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Mirror_, $Block, $Rotation_, $Block$BlockStatePairKey, $SlabBlock } from "@package/net/minecraft/world/level/block";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/track" {
    export class $TrackMaterial {
        asStack(arg0: number): $ItemStack;
        asStack(): $ItemStack;
        static fromItem(arg0: $Item_): $TrackMaterial;
        createBlock(arg0: $BlockBehaviour$Properties): $TrackBlock;
        getBlock(): $TrackBlock;
        resourceName(): string;
        static allBlocks(): $List<$NonNullSupplier<$Block>>;
        getModelHolder(): $TrackMaterial$TrackModelHolder;
        getBlockSupplier(): $NonNullSupplier<$TrackBlock>;
        isFromMod(arg0: string): boolean;
        static allFromMod(arg0: string): $List<$TrackMaterial>;
        static allBlocksFromMod(arg0: string): $List<$NonNullSupplier<$Block>>;
        static deserialize(arg0: string): $TrackMaterial;
        static ALL: $Map<$ResourceLocation, $TrackMaterial>;
        trackBlock: $NonNullSupplier<$NonNullSupplier<$TrackBlock>>;
        trackType: $TrackMaterial$TrackType;
        langName: string;
        static ANDESITE: $TrackMaterial;
        particle: $ResourceLocation;
        id: $ResourceLocation;
        sleeperIngredient: $Ingredient;
        railsIngredient: $Ingredient;
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $NonNullSupplier_<$NonNullSupplier<$TrackBlock>>, arg3: $ResourceLocation_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: $TrackMaterial$TrackType, arg7: $Supplier_<$Supplier<$TrackMaterial$TrackModelHolder>>, arg8: $TrackMaterial$TrackType$TrackBlockFactory_);
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $NonNullSupplier_<$NonNullSupplier<$TrackBlock>>, arg3: $ResourceLocation_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: $TrackMaterial$TrackType, arg7: $Supplier_<$Supplier<$TrackMaterial$TrackModelHolder>>);
        get block(): $TrackBlock;
        get modelHolder(): $TrackMaterial$TrackModelHolder;
        get blockSupplier(): $NonNullSupplier<$TrackBlock>;
    }
    export class $BezierConnection$GirderAngles {
        beams: $Couple<$PoseStack$Pose>[];
        lightPosition: $BlockPos[];
        length: number;
        beamCaps: $Couple<$Couple<$PoseStack$Pose>>[];
    }
    export class $TrackTargetingBehaviour<T extends $TrackEdgePoint> extends $BlockEntityBehaviour implements $AccessorTrackTargetingBehavior, $IPreAssembleCallback {
        getGlobalPosition(): $BlockPos;
        isOnCurve(): boolean;
        invalidateEdgePoint(arg0: $CompoundTag_): void;
        createEdgePoint(): T;
        getPositionForMapMarker(): $BlockPos;
        getEdgePoint(): T;
        hasValidTrack(): boolean;
        getTrackBlockState(): $BlockState;
        getTrack(): $ITrackBlock;
        determineGraphLocation(): $TrackGraphLocation;
        railways$preAssemble(): void;
        static render(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction$AxisDirection_, arg3: $BezierTrackPointLocation_, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number, arg7: number, arg8: $TrackTargetingBehaviour$RenderedTrackOverlayType_, arg9: number): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        isOrthogonal(): boolean;
        setEdgePoint(arg0: $TrackEdgePoint): void;
        getTargetTrack(): $BlockPos;
        setOrthogonal(arg0: boolean): void;
        getRotatedDirection(): $Vec3;
        setRotatedDirection(arg0: $Vec3_): void;
        getPrevDirection(): $Vec3;
        setPrevDirection(arg0: $Vec3_): void;
        getMigrationData(): $CompoundTag;
        setMigrationData(arg0: $CompoundTag_): void;
        getTargetBezier(): $BezierTrackPointLocation;
        setTargetBezier(arg0: $BezierTrackPointLocation_): void;
        setTargetTrack(arg0: $BlockPos_): void;
        setTargetDirection(arg0: $Direction$AxisDirection_): void;
        getTargetDirection(): $Direction$AxisDirection;
        setId(arg0: $UUID_): void;
        getId(): $UUID;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$TrackTargetingBehaviour<never>>;
        constructor(arg0: $SmartBlockEntity, arg1: $EdgePointType<T>);
        get globalPosition(): $BlockPos;
        get onCurve(): boolean;
        get positionForMapMarker(): $BlockPos;
        get trackBlockState(): $BlockState;
        get track(): $ITrackBlock;
    }
    export class $BezierTrackPointLocation extends $Record {
        curveTarget(): $BlockPos;
        segment(): number;
        static CODEC: $Codec<$BezierTrackPointLocation>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BezierTrackPointLocation>;
        constructor(curveTarget: $BlockPos_, segment: number);
    }
    /**
     * Values that may be interpreted as {@link $BezierTrackPointLocation}.
     */
    export type $BezierTrackPointLocation_ = { segment?: number, curveTarget?: $BlockPos_,  } | [segment?: number, curveTarget?: $BlockPos_, ];
    export class $TrackTargetingBehaviour$RenderedTrackOverlayType extends $Enum<$TrackTargetingBehaviour$RenderedTrackOverlayType> {
        static values(): $TrackTargetingBehaviour$RenderedTrackOverlayType[];
        static valueOf(arg0: string): $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static SIGNAL: $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static STATION: $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static DUAL_SIGNAL: $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static OBSERVER: $TrackTargetingBehaviour$RenderedTrackOverlayType;
    }
    /**
     * Values that may be interpreted as {@link $TrackTargetingBehaviour$RenderedTrackOverlayType}.
     */
    export type $TrackTargetingBehaviour$RenderedTrackOverlayType_ = "station" | "signal" | "dual_signal" | "observer";
    export class $TrackMaterial$TrackType {
        id: $ResourceLocation;
        static STANDARD: $TrackMaterial$TrackType;
        constructor(arg0: $ResourceLocation_, arg1: $TrackMaterial$TrackType$TrackBlockFactory_);
    }
    export class $BezierConnection implements $Iterable<$BezierConnection$Segment>, $IHasTrackCasing, $IMonorailBezier {
        getNormal(arg0: number): $Vec3;
        getMaterial(): $TrackMaterial;
        spawnDestroyParticles(arg0: $Level_): void;
        getTrackCasing(): $SlabBlock;
        getRadius(): number;
        getPosition(arg0: number): $Vec3;
        isPrimary(): boolean;
        rasterise(): $Map<$Pair<number, number>, number>;
        setTrackCasing(arg0: $SlabBlock): void;
        setAlternate(arg0: boolean): void;
        incrementT(arg0: number, arg1: number): number;
        getTrackItemCost(): number;
        getGirderItemCost(): number;
        addItemsToPlayer(arg0: $Player): void;
        yOffsetAt(arg0: $Vec3_): number;
        isAlternate(): boolean;
        equalsSansMaterial(arg0: $BezierConnection): boolean;
        spawnItems(arg0: $Level_): void;
        getSegmentCount(): number;
        getHandleLength(): number;
        getStepLUT(): number[];
        getSegmentT(arg0: number): number;
        getBakedSegments(): $BezierConnection$SegmentAngles;
        getBakedGirders(): $BezierConnection$GirderAngles;
        getBakedMonorails(): $IMonorailBezier$MonorailAngles[];
        setMaterial(arg0: $TrackMaterial): void;
        secondary(): $BezierConnection;
        clone(): $BezierConnection;
        getLength(): number;
        iterator(): $Iterator<$BezierConnection$Segment>;
        getBounds(): $AABB;
        getKey(): $BlockPos;
        write(arg0: $FriendlyByteBuf): void;
        write(arg0: $BlockPos_): $CompoundTag;
        spliterator(): $Spliterator<$BezierConnection$Segment>;
        forEach(arg0: $Consumer_<$BezierConnection$Segment>): void;
        axes: $Couple<$Vec3>;
        smoothing: $Couple<number>;
        hasGirder: boolean;
        starts: $Couple<$Vec3>;
        normals: $Couple<$Vec3>;
        bePositions: $Couple<$BlockPos>;
        primary: boolean;
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: $CompoundTag_, arg1: $BlockPos_);
        constructor(arg0: $Couple<$BlockPos_>, arg1: $Couple<$Vec3_>, arg2: $Couple<$Vec3_>, arg3: $Couple<$Vec3_>, arg4: boolean, arg5: boolean, arg6: $TrackMaterial);
        [Symbol.iterator](): Iterator<$BezierConnection$Segment>
        get radius(): number;
        get trackItemCost(): number;
        get girderItemCost(): number;
        get segmentCount(): number;
        get handleLength(): number;
        get stepLUT(): number[];
        get bakedSegments(): $BezierConnection$SegmentAngles;
        get bakedGirders(): $BezierConnection$GirderAngles;
        get bakedMonorails(): $IMonorailBezier$MonorailAngles[];
        get length(): number;
        get bounds(): $AABB;
        get key(): $BlockPos;
    }
    export class $TrackBlock extends $Block implements $IBE<$TrackBlockEntity>, $IWrenchable, $ITrackBlock, $SpecialBlockItemRequirement, $ProperWaterloggedBlock, $IHaveBigOutline {
        getFluidState(arg0: $BlockState_): $FluidState;
        animateTick(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Random): void;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getInteractionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getMaterial(): $TrackMaterial;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        tick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getConnected(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean, arg4: $TrackNodeLocation): $Collection<$TrackNodeLocation$DiscoveredLocation>;
        redirect$lid000$sable$getLookAngle$mixinextras$bridge$72(arg0: $Player, arg1: $LocalRef<any>): $Vec3;
        getYOffsetAt(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): number;
        getTrackAxes(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $List<$Vec3>;
        redirect$lid000$sable$getLookAngle(arg0: $Player, arg1: $BlockPlaceContext): $Vec3;
        getBogeyAnchor(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $BlockState;
        prepareAssemblyOverlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $PoseStack): $PartialModel;
        prepareTrackOverlay<Self extends $Affine<Self>>(arg0: $Affine<Self>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BezierTrackPointLocation_, arg5: $Direction$AxisDirection_, arg6: $TrackTargetingBehaviour$RenderedTrackOverlayType_): $PartialModel;
        trackEquals(arg0: $BlockState_, arg1: $BlockState_): boolean;
        getCurveStart(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Vec3;
        getUpNormal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $Vec3;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        getBlockEntityType(): $BlockEntityType<$TrackBlockEntity>;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityClass(): $Class<$TrackBlockEntity>;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        overlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): $BlockState;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $TrackBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($TrackBlockEntity) | undefined;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$TrackBlockEntity>): void;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TrackBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TrackBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getElevationAtCenter(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): number;
        isSlope(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        getNearestTrackAxis(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Pair<$Vec3, $Direction$AxisDirection>;
        fluidState(arg0: $BlockState_): $FluidState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        pickupBlock(arg0: $Player, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static HAS_BE: $BooleanProperty;
        static UPDATE_LIMIT: number;
        static SHAPE: $EnumProperty<$TrackShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        descriptionId: string;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $TrackMaterial);
        get material(): $TrackMaterial;
        get blockEntityType(): $BlockEntityType<$TrackBlockEntity>;
        get blockEntityClass(): $Class<$TrackBlockEntity>;
    }
    export class $TrackMaterial$TrackModelHolder extends $Record {
        tie(): $PartialModel;
        leftSegment(): $PartialModel;
        rightSegment(): $PartialModel;
        constructor(tie: $PartialModel, leftSegment: $PartialModel, rightSegment: $PartialModel);
    }
    /**
     * Values that may be interpreted as {@link $TrackMaterial$TrackModelHolder}.
     */
    export type $TrackMaterial$TrackModelHolder_ = { leftSegment?: $PartialModel, rightSegment?: $PartialModel, tie?: $PartialModel,  } | [leftSegment?: $PartialModel, rightSegment?: $PartialModel, tie?: $PartialModel, ];
    export class $TrackBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity, $IMergeableBE, $IHasTrackCasing {
        getTrackCasing(): $SlabBlock;
        bind(arg0: $ResourceKey_<$Level>, arg1: $BlockPos_): void;
        removeConnection(arg0: $BlockPos_): void;
        setTrackCasing(arg0: $SlabBlock): void;
        setAlternate(arg0: boolean): void;
        validateConnections(): void;
        removeInboundConnections(arg0: boolean): void;
        isTilted(): boolean;
        isAlternate(): boolean;
        hasInteractableConnections(): boolean;
        manageFakeTracksAlong(arg0: $BezierConnection, arg1: boolean): void;
        addConnection(arg0: $BezierConnection): void;
        getConnections(): $Map<$BlockPos, $BezierConnection>;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        accept(arg0: $BlockEntity): void;
        static ATTACHMENTS_NBT_KEY: string;
        boundLocation: $Pair<$ResourceKey<$Level>, $BlockPos>;
        tilt: $TrackBlockEntityTilt;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get tilted(): boolean;
        get connections(): $Map<$BlockPos, $BezierConnection>;
    }
    export class $BezierConnection$Segment {
        normal: $Vec3;
        faceNormal: $Vec3;
        index: number;
        derivative: $Vec3;
        position: $Vec3;
        constructor();
    }
    export class $TrackShape extends $Enum<$TrackShape> implements $StringRepresentable {
        getNormal(): $Vec3;
        getSerializedName(): string;
        isPortal(): boolean;
        isJunction(): boolean;
        getAxes(): $List<$Vec3>;
        static asPortal(arg0: $Direction_): $TrackShape;
        getModelRotation(): number;
        rotate(arg0: $Rotation_): $TrackShape;
        mirror(arg0: $Mirror_): $TrackShape;
        getModel(): string;
        static values(): $TrackShape[];
        static valueOf(arg0: string): $TrackShape;
        getRemappedEnumConstantName(): string;
        static CR_O: $TrackShape;
        static TW: $TrackShape;
        static AE: $TrackShape;
        static CR_D: $TrackShape;
        static AN: $TrackShape;
        static CR_PDX: $TrackShape;
        static CR_NDZ: $TrackShape;
        static TE: $TrackShape;
        static AS: $TrackShape;
        static CR_PDZ: $TrackShape;
        static PD: $TrackShape;
        static ZO: $TrackShape;
        static ND: $TrackShape;
        static AW: $TrackShape;
        static CR_NDX: $TrackShape;
        static XO: $TrackShape;
        static TN: $TrackShape;
        static NONE: $TrackShape;
        static TS: $TrackShape;
        get normal(): $Vec3;
        get serializedName(): string;
        get portal(): boolean;
        get junction(): boolean;
        get axes(): $List<$Vec3>;
        get modelRotation(): number;
        get model(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TrackShape}.
     */
    export type $TrackShape_ = "none" | "zo" | "xo" | "pd" | "nd" | "an" | "as" | "ae" | "aw" | "tn" | "ts" | "te" | "tw" | "cr_o" | "cr_d" | "cr_pdx" | "cr_pdz" | "cr_ndx" | "cr_ndz";
    export class $BezierConnection$SegmentAngles {
        lightPosition: $BlockPos[];
        length: number;
        tieTransform: $PoseStack$Pose[];
        railTransforms: $Couple<$PoseStack$Pose>[];
    }
    export class $ITrackBlock {
        static addToListIfConnected(arg0: $TrackNodeLocation, arg1: $Collection_<$TrackNodeLocation$DiscoveredLocation>, arg2: $BiFunction_<number, boolean, $Vec3>, arg3: $Function_<boolean, $Vec3>, arg4: $Function_<boolean, $ResourceKey<$Level>>, arg5: $Function_<$Vec3, number>, arg6: $Vec3_, arg7: $BezierConnection, arg8: $BiFunction_<boolean, $Vec3, $TrackMaterial>): void;
        static getMaterialSimple(arg0: $BlockGetter, arg1: $Vec3_, arg2: $TrackMaterial): $TrackMaterial;
        static getMaterialSimple(arg0: $BlockGetter, arg1: $Vec3_): $TrackMaterial;
        static walkConnectedTracks(arg0: $BlockGetter, arg1: $TrackNodeLocation, arg2: boolean): $Collection<$TrackNodeLocation$DiscoveredLocation>;
    }
    export interface $ITrackBlock {
        getMaterial(): $TrackMaterial;
        getConnected(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean, arg4: $TrackNodeLocation): $Collection<$TrackNodeLocation$DiscoveredLocation>;
        getYOffsetAt(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): number;
        getTrackAxes(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $List<$Vec3>;
        getElevationAtCenter(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): number;
        getBogeyAnchor(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $BlockState;
        prepareAssemblyOverlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $PoseStack): $PartialModel;
        prepareTrackOverlay<Self extends $Affine<Self>>(arg0: $Affine<Self>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BezierTrackPointLocation_, arg5: $Direction$AxisDirection_, arg6: $TrackTargetingBehaviour$RenderedTrackOverlayType_): $PartialModel;
        trackEquals(arg0: $BlockState_, arg1: $BlockState_): boolean;
        isSlope(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        getNearestTrackAxis(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Pair<$Vec3, $Direction$AxisDirection>;
        getCurveStart(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Vec3;
        getUpNormal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $Vec3;
        overlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): $BlockState;
        get material(): $TrackMaterial;
    }
    export class $TrackMaterial$TrackType$TrackBlockFactory {
    }
    export interface $TrackMaterial$TrackType$TrackBlockFactory {
        create(arg0: $BlockBehaviour$Properties, arg1: $TrackMaterial): $TrackBlock;
    }
    /**
     * Values that may be interpreted as {@link $TrackMaterial$TrackType$TrackBlockFactory}.
     */
    export type $TrackMaterial$TrackType$TrackBlockFactory_ = ((arg0: $BlockBehaviour$Properties, arg1: $TrackMaterial) => $TrackBlock);
}
