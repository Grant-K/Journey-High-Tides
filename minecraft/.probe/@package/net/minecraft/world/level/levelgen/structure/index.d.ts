import { $JigsawJunction, $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $StructureSetAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $MobCategory_, $MobCategory } from "@package/net/minecraft/world/entity";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ArrayList, $Map, $Iterator, $List, $Map_, $List_ } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_, $Predicate_, $Predicate, $Consumer, $Function_ } from "@package/java/util/function";
import { $BlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Vec3i, $HolderLookup$Provider, $Holder_, $HolderSet, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BoundingBoxAccessor } from "@package/com/github/L_Ender/cataclysm/mixin/accessor";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $Enum, $Iterable_, $Record } from "@package/java/lang";
import { $IStructurePiece, $IStructureStart } from "@package/com/ishland/c2me/base/mixin/access";
import { $WorldgenRandom, $RandomState, $GenerationStep$Decoration, $GenerationStep$Decoration_ } from "@package/net/minecraft/world/level/levelgen";
import { $StructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $ChunkPos, $BlockGetter, $WorldGenLevel, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $StructureModificationContext, $RepalettedStructureStart } from "@package/com/teamabnormals/blueprint/common/world/modification/structure";
import { $NetherFortressStructure, $SwampHutStructure, $OceanRuinStructure, $OceanMonumentStructure, $NetherFossilStructure, $IglooStructure, $StrongholdStructure, $EndCityStructure, $BuriedTreasureStructure, $JungleTempleStructure, $MineshaftStructure, $ShipwreckStructure, $JigsawStructure, $DesertPyramidStructure, $WoodlandMansionStructure, $RuinedPortalStructure } from "@package/net/minecraft/world/level/levelgen/structure/structures";
import { $BiomeSource, $Biome, $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplateManager, $StructurePlaceSettings, $LiquidSettings_, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $DimensionDataStorage } from "@package/net/minecraft/world/level/storage";
import { $StructurePieceAccessor as $StructurePieceAccessor$2, $PoolElementStructurePieceAccessor } from "@package/com/finndog/moogs_structures/mixins/structures";
import { $ChunkScanAccess_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StructurePieceType_, $StructurePieceType, $StructurePieceSerializationContext_, $PiecesContainer_, $PiecesContainer, $StructurePiecesBuilder } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $StructurePieceAccessor as $StructurePieceAccessor$1, $PoolElementStructurePieceAccessor as $PoolElementStructurePieceAccessor$1 } from "@package/com/craisinlord/integrated_api/mixins/structures";
import { $Mirror, $Rotation_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $RecordCodecBuilder, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $ModifiableStructureInfo } from "@package/net/neoforged/neoforge/common/world";
export * as templatesystem from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
export * as structures from "@package/net/minecraft/world/level/levelgen/structure/structures";
export * as pools from "@package/net/minecraft/world/level/levelgen/structure/pools";
export * as pieces from "@package/net/minecraft/world/level/levelgen/structure/pieces";
export * as placement from "@package/net/minecraft/world/level/levelgen/structure/placement";

declare module "@package/net/minecraft/world/level/levelgen/structure" {
    export class $LegacyStructureDataHandler {
        removeIndex(arg0: number): void;
        static getLegacyStructureHandler(arg0: $ResourceKey_<$Level>, arg1: $DimensionDataStorage): $LegacyStructureDataHandler;
        updateFromLegacy(arg0: $CompoundTag_): $CompoundTag;
        constructor(arg0: $DimensionDataStorage, arg1: $List_<string>, arg2: $List_<string>);
    }
    export class $StructureType<S extends $Structure> {
        static STRONGHOLD: $StructureType<$StrongholdStructure>;
        static RUINED_PORTAL: $StructureType<$RuinedPortalStructure>;
        static MINESHAFT: $StructureType<$MineshaftStructure>;
        static NETHER_FOSSIL: $StructureType<$NetherFossilStructure>;
        static IGLOO: $StructureType<$IglooStructure>;
        static SHIPWRECK: $StructureType<$ShipwreckStructure>;
        static SWAMP_HUT: $StructureType<$SwampHutStructure>;
        static JIGSAW: $StructureType<$JigsawStructure>;
        static JUNGLE_TEMPLE: $StructureType<$JungleTempleStructure>;
        static FORTRESS: $StructureType<$NetherFortressStructure>;
        static OCEAN_MONUMENT: $StructureType<$OceanMonumentStructure>;
        static DESERT_PYRAMID: $StructureType<$DesertPyramidStructure>;
        static END_CITY: $StructureType<$EndCityStructure>;
        static WOODLAND_MANSION: $StructureType<$WoodlandMansionStructure>;
        static BURIED_TREASURE: $StructureType<$BuriedTreasureStructure>;
        static OCEAN_RUIN: $StructureType<$OceanRuinStructure>;
    }
    export interface $StructureType<S extends $Structure> {
        codec(): $MapCodec<S>;
    }
    /**
     * Values that may be interpreted as {@link $StructureType}.
     */
    export type $StructureType_<S> = RegistryTypes.WorldgenStructureType | (() => $MapCodec_<S>);
    export class $Structure {
        biomes(): $HolderSet<$Biome>;
        static simpleCodec<S extends $Structure>(arg0: $Function_<$Structure$StructureSettings, S>): $MapCodec<S>;
        modifiableStructureInfo(): $ModifiableStructureInfo;
        static settingsCodec<S extends $Structure>(arg0: $RecordCodecBuilder$Instance<S>): $RecordCodecBuilder<S, $Structure$StructureSettings>;
        spawnOverrides(): $Map<$MobCategory, $StructureSpawnOverride>;
        terrainAdaptation(): $TerrainAdjustment;
        adjustBoundingBox(arg0: $BoundingBox): $BoundingBox;
        findValidGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        afterPlace(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $PiecesContainer_): void;
        static getMeanFirstOccupiedHeight(arg0: $Structure$GenerationContext_, arg1: number, arg2: number, arg3: number, arg4: number): number;
        generate(arg0: $RegistryAccess, arg1: $ChunkGenerator, arg2: $BiomeSource, arg3: $RandomState, arg4: $StructureTemplateManager, arg5: number, arg6: $ChunkPos, arg7: number, arg8: $LevelHeightAccessor, arg9: $Predicate_<$Holder<$Biome>>): $StructureStart;
        step(): $GenerationStep$Decoration;
        getModifiedStructureSettings(): $Structure$StructureSettings;
        type(): $StructureType<never>;
        static CODEC: $Codec<$Holder<$Structure>>;
        static DIRECT_CODEC: $Codec<$Structure>;
        static set tingsCodec(value: $RecordCodecBuilder$Instance<S>);
        get modifiedStructureSettings(): $Structure$StructureSettings;
    }
    /**
     * Values that may be interpreted as {@link $Structure}.
     */
    export type $Structure_ = RegistryTypes.WorldgenStructure;
    export class $ScatteredFeaturePiece extends $StructurePiece {
    }
    export class $Structure$GenerationStub extends $Record {
        getPiecesBuilder(): $StructurePiecesBuilder;
        generator(): $Either<$Consumer<$StructurePiecesBuilder>, $StructurePiecesBuilder>;
        position(): $BlockPos;
        constructor(arg0: $BlockPos_, arg1: $Consumer_<$StructurePiecesBuilder>);
        constructor(position: $BlockPos_, generator: $Either<$Consumer_<$StructurePiecesBuilder>, $StructurePiecesBuilder>);
        get piecesBuilder(): $StructurePiecesBuilder;
    }
    /**
     * Values that may be interpreted as {@link $Structure$GenerationStub}.
     */
    export type $Structure$GenerationStub_ = { position?: $BlockPos_, generator?: $Either<$Consumer_<$StructurePiecesBuilder>, $StructurePiecesBuilder>,  } | [position?: $BlockPos_, generator?: $Either<$Consumer_<$StructurePiecesBuilder>, $StructurePiecesBuilder>, ];
    export class $StructurePieceAccessor {
    }
    export interface $StructurePieceAccessor {
        addPiece(arg0: $StructurePiece): void;
        findCollisionPiece(arg0: $BoundingBox): $StructurePiece;
    }
    export class $StructurePiece implements $StructurePieceAccessor$1, $StructurePieceAccessor$2, $IStructurePiece {
        postProcess(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $BlockPos_): void;
        getGenDepth(): number;
        static reorient(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $BlockState;
        setOrientation(arg0: $Direction_): void;
        getOrientation(): $Direction;
        addChildren(arg0: $StructurePiece, arg1: $StructurePieceAccessor, arg2: $RandomSource): void;
        setGenDepth(arg0: number): void;
        isCloseToChunk(arg0: $ChunkPos, arg1: number): boolean;
        getLocatorPosition(): $BlockPos;
        generateBox(arg0: $WorldGenLevel, arg1: $BoundingBox, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $BlockState_, arg9: $BlockState_, arg10: boolean): void;
        static createBoundingBox(arg0: $Stream<$StructurePiece>): $BoundingBox;
        static findCollisionPiece(arg0: $List_<$StructurePiece>, arg1: $BoundingBox): $StructurePiece;
        move(arg0: number, arg1: number, arg2: number): void;
        createTag(arg0: $StructurePieceSerializationContext_): $CompoundTag;
        getRotation(): $Rotation;
        getBoundingBox(): $BoundingBox;
        setBoundingBox(arg0: $BoundingBox): void;
        getFacing(): $Direction;
        getChainLength(): number;
        getMirror(): $Mirror;
        getType(): $StructurePieceType;
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
        get locatorPosition(): $BlockPos;
        get rotation(): $Rotation;
        get facing(): $Direction;
        get chainLength(): number;
        get mirror(): $Mirror;
        get type(): $StructurePieceType;
    }
    export class $BuiltinStructureSets {
        static JUNGLE_TEMPLES: $ResourceKey<$StructureSet>;
        static NETHER_FOSSILS: $ResourceKey<$StructureSet>;
        static NETHER_COMPLEXES: $ResourceKey<$StructureSet>;
        static BURIED_TREASURES: $ResourceKey<$StructureSet>;
        static END_CITIES: $ResourceKey<$StructureSet>;
        static PILLAGER_OUTPOSTS: $ResourceKey<$StructureSet>;
        static STRONGHOLDS: $ResourceKey<$StructureSet>;
        static SHIPWRECKS: $ResourceKey<$StructureSet>;
        static VILLAGES: $ResourceKey<$StructureSet>;
        static DESERT_PYRAMIDS: $ResourceKey<$StructureSet>;
        static SWAMP_HUTS: $ResourceKey<$StructureSet>;
        static OCEAN_MONUMENTS: $ResourceKey<$StructureSet>;
        static MINESHAFTS: $ResourceKey<$StructureSet>;
        static RUINED_PORTALS: $ResourceKey<$StructureSet>;
        static WOODLAND_MANSIONS: $ResourceKey<$StructureSet>;
        static ANCIENT_CITIES: $ResourceKey<$StructureSet>;
        static TRAIL_RUINS: $ResourceKey<$StructureSet>;
        static IGLOOS: $ResourceKey<$StructureSet>;
        static OCEAN_RUINS: $ResourceKey<$StructureSet>;
        static TRIAL_CHAMBERS: $ResourceKey<$StructureSet>;
    }
    export interface $BuiltinStructureSets {
    }
    export class $Structure$StructureSettings extends $Record {
        biomes(): $HolderSet<$Biome>;
        spawnOverrides(): $Map<$MobCategory, $StructureSpawnOverride>;
        terrainAdaptation(): $TerrainAdjustment;
        step(): $GenerationStep$Decoration;
        static CODEC: $MapCodec<$Structure$StructureSettings>;
        constructor(arg0: $HolderSet_<$Biome>);
        constructor(biomes: $HolderSet_<$Biome>, spawnOverrides: $Map_<$MobCategory_, $StructureSpawnOverride_>, step: $GenerationStep$Decoration_, terrainAdaptation: $TerrainAdjustment_);
    }
    /**
     * Values that may be interpreted as {@link $Structure$StructureSettings}.
     */
    export type $Structure$StructureSettings_ = { biomes?: $HolderSet_<$Biome>, step?: $GenerationStep$Decoration_, spawnOverrides?: $Map_<$MobCategory_, $StructureSpawnOverride_>, terrainAdaptation?: $TerrainAdjustment_,  } | [biomes?: $HolderSet_<$Biome>, step?: $GenerationStep$Decoration_, spawnOverrides?: $Map_<$MobCategory_, $StructureSpawnOverride_>, terrainAdaptation?: $TerrainAdjustment_, ];
    export interface $StructureType<S> extends RegistryMarked<RegistryTypes.WorldgenStructureTypeTag, RegistryTypes.WorldgenStructureType> {}
    export class $PostPlacementProcessor {
        static NONE: $PostPlacementProcessor;
    }
    export interface $PostPlacementProcessor {
        afterPlace(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $PiecesContainer_): void;
    }
    /**
     * Values that may be interpreted as {@link $PostPlacementProcessor}.
     */
    export type $PostPlacementProcessor_ = ((arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $PiecesContainer) => void);
    export class $SinglePieceStructure$PieceConstructor {
    }
    export interface $SinglePieceStructure$PieceConstructor {
    }
    /**
     * Values that may be interpreted as {@link $SinglePieceStructure$PieceConstructor}.
     */
    export type $SinglePieceStructure$PieceConstructor_ = (() => void);
    export class $SinglePieceStructure extends $Structure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static CODEC: $Codec<$Holder<$Structure>>;
        static DIRECT_CODEC: $Codec<$Structure>;
    }
    export class $StructureCheck {
        checkStart(arg0: $ChunkPos, arg1: $Structure_, arg2: $StructurePlacement, arg3: boolean): $StructureCheckResult;
        incrementReference(arg0: $ChunkPos, arg1: $Structure_): void;
        onStructureLoad(arg0: $ChunkPos, arg1: $Map_<$Structure_, $StructureStart>): void;
        constructor(arg0: $ChunkScanAccess_, arg1: $RegistryAccess, arg2: $StructureTemplateManager, arg3: $ResourceKey_<$Level>, arg4: $ChunkGenerator, arg5: $RandomState, arg6: $LevelHeightAccessor, arg7: $BiomeSource, arg8: number, arg9: $DataFixer);
    }
    export class $TerrainAdjustment extends $Enum<$TerrainAdjustment> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $TerrainAdjustment[];
        static valueOf(arg0: string): $TerrainAdjustment;
        getRemappedEnumConstantName(): string;
        static ENCAPSULATE: $TerrainAdjustment;
        static CODEC: $Codec<$TerrainAdjustment>;
        static BURY: $TerrainAdjustment;
        static NONE: $TerrainAdjustment;
        static BEARD_BOX: $TerrainAdjustment;
        static BEARD_THIN: $TerrainAdjustment;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TerrainAdjustment}.
     */
    export type $TerrainAdjustment_ = "none" | "bury" | "beard_thin" | "beard_box" | "encapsulate";
    export class $TemplateStructurePiece extends $StructurePiece {
        placeSettings(): $StructurePlaceSettings;
        templatePosition(): $BlockPos;
        handler$mbe000$moonlight$ml$processBoxes(level: $WorldGenLevel, structureManager: $StructureManager, generator: $ChunkGenerator, random: $RandomSource, box: $BoundingBox, chunkPos: $ChunkPos, pos: $BlockPos_, ci: $CallbackInfo): void;
        template(): $StructureTemplate;
        constructor(arg0: $StructurePieceType_, arg1: number, arg2: $StructureTemplateManager, arg3: $ResourceLocation_, arg4: string, arg5: $StructurePlaceSettings, arg6: $BlockPos_);
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_, arg2: $StructureTemplateManager, arg3: $Function_<$ResourceLocation, $StructurePlaceSettings>);
    }
    export class $StructureSpawnOverride$BoundingBoxType extends $Enum<$StructureSpawnOverride$BoundingBoxType> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $StructureSpawnOverride$BoundingBoxType[];
        static valueOf(arg0: string): $StructureSpawnOverride$BoundingBoxType;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$StructureSpawnOverride$BoundingBoxType>;
        static STRUCTURE: $StructureSpawnOverride$BoundingBoxType;
        static PIECE: $StructureSpawnOverride$BoundingBoxType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StructureSpawnOverride$BoundingBoxType}.
     */
    export type $StructureSpawnOverride$BoundingBoxType_ = "piece" | "full";
    export class $Structure$StructureSettings$Builder {
        terrainAdapation(arg0: $TerrainAdjustment_): $Structure$StructureSettings$Builder;
        generationStep(arg0: $GenerationStep$Decoration_): $Structure$StructureSettings$Builder;
        spawnOverrides(arg0: $Map_<$MobCategory_, $StructureSpawnOverride_>): $Structure$StructureSettings$Builder;
        build(): $Structure$StructureSettings;
        constructor(arg0: $HolderSet_<$Biome>);
    }
    export class $StructureCheckResult extends $Enum<$StructureCheckResult> {
        static values(): $StructureCheckResult[];
        static valueOf(arg0: string): $StructureCheckResult;
        static CHUNK_LOAD_NEEDED: $StructureCheckResult;
        static START_NOT_PRESENT: $StructureCheckResult;
        static START_PRESENT: $StructureCheckResult;
    }
    /**
     * Values that may be interpreted as {@link $StructureCheckResult}.
     */
    export type $StructureCheckResult_ = "start_present" | "start_not_present" | "chunk_load_needed";
    export interface $StructureSet extends RegistryMarked<RegistryTypes.WorldgenStructureSetTag, RegistryTypes.WorldgenStructureSet> {}
    export interface $Structure extends RegistryMarked<RegistryTypes.WorldgenStructureTag, RegistryTypes.WorldgenStructure> {}
    export class $StructureFeatureIndexSavedData extends $SavedData {
        hasUnhandledIndex(arg0: number): boolean;
        hasStartIndex(arg0: number): boolean;
        removeIndex(arg0: number): void;
        addIndex(arg0: number): void;
        getAll(): $LongSet;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $StructureFeatureIndexSavedData;
        static factory(): $SavedData$Factory<$StructureFeatureIndexSavedData>;
        constructor();
        get all(): $LongSet;
    }
    export class $StructureSet$StructureSelectionEntry extends $Record {
        weight(): number;
        structure(): $Holder<$Structure>;
        static CODEC: $Codec<$StructureSet$StructureSelectionEntry>;
        constructor(arg0: $Holder_<$Structure>, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $StructureSet$StructureSelectionEntry}.
     */
    export type $StructureSet$StructureSelectionEntry_ = { structure?: $Holder_<$Structure>, weight?: number,  } | [structure?: $Holder_<$Structure>, weight?: number, ];
    export class $PoolElementStructurePiece extends $StructurePiece implements $PoolElementStructurePieceAccessor$1, $PoolElementStructurePieceAccessor {
        getGroundLevelDelta(): number;
        addJunction(arg0: $JigsawJunction): void;
        getJunctions(): $List<$JigsawJunction>;
        place(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $BlockPos_, arg6: boolean): void;
        getPosition(): $BlockPos;
        getElement(): $StructurePoolElement;
        getStructureManager(): $StructureTemplateManager;
        setRotation(arg0: $Rotation_): void;
        constructor(arg0: $StructurePieceSerializationContext_, arg1: $CompoundTag_);
        constructor(arg0: $StructureTemplateManager, arg1: $StructurePoolElement, arg2: $BlockPos_, arg3: number, arg4: $Rotation_, arg5: $BoundingBox, arg6: $LiquidSettings_);
        get groundLevelDelta(): number;
        get junctions(): $List<$JigsawJunction>;
        get position(): $BlockPos;
        get element(): $StructurePoolElement;
        get structureManager(): $StructureTemplateManager;
        set rotation(value: $Rotation_);
    }
    export class $StructureSpawnOverride extends $Record {
        boundingBox(): $StructureSpawnOverride$BoundingBoxType;
        spawns(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        static CODEC: $Codec<$StructureSpawnOverride>;
        constructor(arg0: $StructureSpawnOverride$BoundingBoxType_, arg1: $WeightedRandomList<$MobSpawnSettings$SpawnerData>);
    }
    /**
     * Values that may be interpreted as {@link $StructureSpawnOverride}.
     */
    export type $StructureSpawnOverride_ = { boundingBox?: $StructureSpawnOverride$BoundingBoxType_, spawns?: $WeightedRandomList<$MobSpawnSettings$SpawnerData>,  } | [boundingBox?: $StructureSpawnOverride$BoundingBoxType_, spawns?: $WeightedRandomList<$MobSpawnSettings$SpawnerData>, ];
    export class $BuiltinStructures {
        static MINESHAFT_MESA: $ResourceKey<$Structure>;
        static STRONGHOLD: $ResourceKey<$Structure>;
        static MINESHAFT: $ResourceKey<$Structure>;
        static VILLAGE_SAVANNA: $ResourceKey<$Structure>;
        static RUINED_PORTAL_MOUNTAIN: $ResourceKey<$Structure>;
        static PILLAGER_OUTPOST: $ResourceKey<$Structure>;
        static SWAMP_HUT: $ResourceKey<$Structure>;
        static FORTRESS: $ResourceKey<$Structure>;
        static VILLAGE_SNOWY: $ResourceKey<$Structure>;
        static RUINED_PORTAL_NETHER: $ResourceKey<$Structure>;
        static END_CITY: $ResourceKey<$Structure>;
        static RUINED_PORTAL_STANDARD: $ResourceKey<$Structure>;
        static VILLAGE_DESERT: $ResourceKey<$Structure>;
        static WOODLAND_MANSION: $ResourceKey<$Structure>;
        static RUINED_PORTAL_SWAMP: $ResourceKey<$Structure>;
        static TRAIL_RUINS: $ResourceKey<$Structure>;
        static OCEAN_RUIN_COLD: $ResourceKey<$Structure>;
        static TRIAL_CHAMBERS: $ResourceKey<$Structure>;
        static NETHER_FOSSIL: $ResourceKey<$Structure>;
        static IGLOO: $ResourceKey<$Structure>;
        static SHIPWRECK: $ResourceKey<$Structure>;
        static OCEAN_RUIN_WARM: $ResourceKey<$Structure>;
        static BASTION_REMNANT: $ResourceKey<$Structure>;
        static JUNGLE_TEMPLE: $ResourceKey<$Structure>;
        static OCEAN_MONUMENT: $ResourceKey<$Structure>;
        static VILLAGE_PLAINS: $ResourceKey<$Structure>;
        static DESERT_PYRAMID: $ResourceKey<$Structure>;
        static RUINED_PORTAL_JUNGLE: $ResourceKey<$Structure>;
        static SHIPWRECK_BEACHED: $ResourceKey<$Structure>;
        static VILLAGE_TAIGA: $ResourceKey<$Structure>;
        static BURIED_TREASURE: $ResourceKey<$Structure>;
        static ANCIENT_CITY: $ResourceKey<$Structure>;
        static RUINED_PORTAL_OCEAN: $ResourceKey<$Structure>;
        static RUINED_PORTAL_DESERT: $ResourceKey<$Structure>;
    }
    export interface $BuiltinStructures {
    }
    export class $StructurePiece$BlockSelector {
        getNext(): $BlockState;
        next(arg0: $RandomSource, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        constructor();
    }
    export class $Structure$GenerationContext extends $Record {
        registryAccess(): $RegistryAccess;
        chunkPos(): $ChunkPos;
        randomState(): $RandomState;
        chunkGenerator(): $ChunkGenerator;
        heightAccessor(): $LevelHeightAccessor;
        validBiome(): $Predicate<$Holder<$Biome>>;
        biomeSource(): $BiomeSource;
        structureTemplateManager(): $StructureTemplateManager;
        seed(): number;
        random(): $WorldgenRandom;
        constructor(registryAccess: $RegistryAccess, chunkGenerator: $ChunkGenerator, biomeSource: $BiomeSource, randomState: $RandomState, structureTemplateManager: $StructureTemplateManager, random: $WorldgenRandom, seed: number, chunkPos: $ChunkPos, heightAccessor: $LevelHeightAccessor, validBiome: $Predicate_<$Holder<$Biome>>);
        constructor(arg0: $RegistryAccess, arg1: $ChunkGenerator, arg2: $BiomeSource, arg3: $RandomState, arg4: $StructureTemplateManager, arg5: number, arg6: $ChunkPos, arg7: $LevelHeightAccessor, arg8: $Predicate_<$Holder<$Biome>>);
    }
    /**
     * Values that may be interpreted as {@link $Structure$GenerationContext}.
     */
    export type $Structure$GenerationContext_ = { registryAccess?: $RegistryAccess, heightAccessor?: $LevelHeightAccessor, chunkGenerator?: $ChunkGenerator, structureTemplateManager?: $StructureTemplateManager, biomeSource?: $BiomeSource, randomState?: $RandomState, chunkPos?: $ChunkPos, random?: $WorldgenRandom, validBiome?: $Predicate_<$Holder<$Biome>>, seed?: number,  } | [registryAccess?: $RegistryAccess, heightAccessor?: $LevelHeightAccessor, chunkGenerator?: $ChunkGenerator, structureTemplateManager?: $StructureTemplateManager, biomeSource?: $BiomeSource, randomState?: $RandomState, chunkPos?: $ChunkPos, random?: $WorldgenRandom, validBiome?: $Predicate_<$Holder<$Biome>>, seed?: number, ];
    export class $StructureStart implements $RepalettedStructureStart, $IStructureStart {
        getBoundingBox(): $BoundingBox;
        getChunkPos(): $ChunkPos;
        static loadStaticStart(arg0: $StructurePieceSerializationContext_, arg1: $CompoundTag_, arg2: number): $StructureStart;
        handler$hlc000$zeta$injectReference(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $CallbackInfo): void;
        handler$lnl000$blueprint$updateStructureRepalleterRandomSource(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $CallbackInfo): void;
        handler$lnl000$blueprint$updateActiveRepalletersForPieceType(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $CallbackInfo, arg7: $List_<any>, arg8: $BoundingBox, arg9: $BlockPos_, arg10: $BlockPos_, arg11: $Iterator<any>, arg12: $StructurePiece): void;
        handler$lnl000$blueprint$resetStructureRepalleterManager(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $CallbackInfo): void;
        setRepaletters(arg0: $ArrayList<any>): void;
        initializeRepaletters(arg0: $StructureModificationContext): void;
        getPieces(): $List<$StructurePiece>;
        canBeReferenced(): boolean;
        placeInChunk(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos): void;
        addReference(): void;
        handler$hlc000$zeta$resetReference(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $CallbackInfo): void;
        isValid(): boolean;
        createTag(arg0: $StructurePieceSerializationContext_, arg1: $ChunkPos): $CompoundTag;
        getReferences(): number;
        getChildren(): $PiecesContainer;
        getStructure(): $Structure;
        static INVALID_START: $StructureStart;
        static INVALID_START_ID: string;
        constructor(arg0: $Structure_, arg1: $ChunkPos, arg2: number, arg3: $PiecesContainer_);
        get boundingBox(): $BoundingBox;
        get chunkPos(): $ChunkPos;
        set repaletters(value: $ArrayList<any>);
        get pieces(): $List<$StructurePiece>;
        get valid(): boolean;
        get references(): number;
        get children(): $PiecesContainer;
        get structure(): $Structure;
    }
    export class $StructureSet extends $Record implements $StructureSetAccessor {
        structures(): $List<$StructureSet$StructureSelectionEntry>;
        placement(): $StructurePlacement;
        static entry(arg0: $Holder_<$Structure>): $StructureSet$StructureSelectionEntry;
        static entry(arg0: $Holder_<$Structure>, arg1: number): $StructureSet$StructureSelectionEntry;
        setStructures(list: $List_<$StructureSet$StructureSelectionEntry_>): void;
        static CODEC: $Codec<$Holder<$StructureSet>>;
        static DIRECT_CODEC: $Codec<$StructureSet>;
        constructor(arg0: $Holder_<$Structure>, arg1: $StructurePlacement);
        constructor(arg0: $List_<$StructureSet$StructureSelectionEntry_>, arg1: $StructurePlacement);
    }
    /**
     * Values that may be interpreted as {@link $StructureSet}.
     */
    export type $StructureSet_ = RegistryTypes.WorldgenStructureSet | { placement?: $StructurePlacement, structures?: $List_<$StructureSet$StructureSelectionEntry_>,  } | [placement?: $StructurePlacement, structures?: $List_<$StructureSet$StructureSelectionEntry_>, ];
    export class $BoundingBox implements $BoundingBoxAccessor {
        maxX(): number;
        maxY(): number;
        minZ(): number;
        maxZ(): number;
        getCenter(): $BlockPos;
        isInside(arg0: number, arg1: number, arg2: number): boolean;
        isInside(arg0: $Vec3i): boolean;
        static infinite(): $BoundingBox;
        /**
         * @deprecated
         */
        encapsulate(arg0: $BoundingBox): $BoundingBox;
        /**
         * @deprecated
         */
        encapsulate(arg0: $BlockPos_): $BoundingBox;
        forAllCorners(arg0: $Consumer_<$BlockPos>): void;
        static encapsulatingPositions(arg0: $Iterable_<$BlockPos>): ($BoundingBox) | undefined;
        getXSpan(): number;
        getYSpan(): number;
        getZSpan(): number;
        static fromCorners(arg0: $Vec3i, arg1: $Vec3i): $BoundingBox;
        inflatedBy(arg0: number): $BoundingBox;
        inflatedBy(arg0: number, arg1: number, arg2: number): $BoundingBox;
        static orientBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $Direction_): $BoundingBox;
        static encapsulatingBoxes(arg0: $Iterable_<$BoundingBox>): ($BoundingBox) | undefined;
        /**
         * @deprecated
         */
        move(arg0: $Vec3i): $BoundingBox;
        /**
         * @deprecated
         */
        move(arg0: number, arg1: number, arg2: number): $BoundingBox;
        minX(): number;
        minY(): number;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        intersects(arg0: $BoundingBox): boolean;
        moved(arg0: number, arg1: number, arg2: number): $BoundingBox;
        intersectingChunks(): $Stream<$ChunkPos>;
        getLength(): $Vec3i;
        setMinY(arg0: number): void;
        setMinX(arg0: number): void;
        setMaxY(arg0: number): void;
        setMinZ(arg0: number): void;
        setMaxX(arg0: number): void;
        setMaxZ(arg0: number): void;
        static CODEC: $Codec<$BoundingBox>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        constructor(arg0: $BlockPos_);
        get center(): $BlockPos;
        get XSpan(): number;
        get YSpan(): number;
        get ZSpan(): number;
        get length(): $Vec3i;
    }
}
