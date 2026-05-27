import { $StructurePoolAccessor, $SinglePoolElementAccessor as $SinglePoolElementAccessor$2 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/world";
import { $MapCodec_, $DynamicOps, $Codec, $Dynamic, $MapCodec } from "@package/com/mojang/serialization";
import { $StructurePoolAccess } from "@package/dev/worldgen/lithostitched/duck";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $StructureTemplatePoolAccessor as $StructureTemplatePoolAccessor$1, $SinglePoolElementAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $List_ } from "@package/java/util";
import { $PoolAliasLookup_ } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $Function_, $Function } from "@package/java/util/function";
import { $Holder_, $Holder, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $StructureTemplatePoolAccessor, $ListPoolElementAccessor as $ListPoolElementAccessor$1, $SinglePoolElementAccessor as $SinglePoolElementAccessor$1, $FeaturePoolElementAccessor } from "@package/com/github/L_Ender/cataclysm/mixin/accessor";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LithostitchedTemplates } from "@package/dev/worldgen/lithostitched/worldgen/structure";
import { $Enum, $Record } from "@package/java/lang";
import { $PoolElementStructurePiece, $BoundingBox, $Structure$GenerationStub, $Structure$GenerationContext_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Heightmap$Types_, $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $LevelAccessor, $WorldGenLevel, $LevelHeightAccessor, $StructureManager } from "@package/net/minecraft/world/level";
import { $AccessorSinglePoolElement } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $StructureTemplate$StructureBlockInfo, $StructureProcessorList, $StructureTemplate$StructureBlockInfo_, $StructureProcessor, $LiquidSettings_, $StructureTemplateManager, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $StructurePoolAccessor as $StructurePoolAccessor$1, $ListPoolElementAccessor, $SinglePoolElementAccessor as $SinglePoolElementAccessor$4 } from "@package/com/finndog/moogs_structures/mixins/structures";
import { $TemplatePoolAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ListPoolElementAccessor as $ListPoolElementAccessor$2, $SinglePoolElementAccessor as $SinglePoolElementAccessor$3, $JigsawJunctionAccessor, $StructurePoolAccessor as $StructurePoolAccessor$2 } from "@package/com/craisinlord/integrated_api/mixins/structures";
import { $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
export * as alias from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";

declare module "@package/net/minecraft/world/level/levelgen/structure/pools" {
    export class $StructurePoolElement {
        getBoundingBox(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_): $BoundingBox;
        handleDataMarker(arg0: $LevelAccessor, arg1: $StructureTemplate$StructureBlockInfo_, arg2: $BlockPos_, arg3: $Rotation_, arg4: $RandomSource, arg5: $BoundingBox): void;
        getGroundLevelDelta(): number;
        getProjection(): $StructureTemplatePool$Projection;
        getShuffledJigsawBlocks(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: $RandomSource): $List<$StructureTemplate$StructureBlockInfo>;
        setProjection(arg0: $StructureTemplatePool$Projection_): $StructurePoolElement;
        place(arg0: $StructureTemplateManager, arg1: $WorldGenLevel, arg2: $StructureManager, arg3: $ChunkGenerator, arg4: $BlockPos_, arg5: $BlockPos_, arg6: $Rotation_, arg7: $BoundingBox, arg8: $RandomSource, arg9: $LiquidSettings_, arg10: boolean): boolean;
        getSize(arg0: $StructureTemplateManager, arg1: $Rotation_): $Vec3i;
        static legacy(arg0: string): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>;
        static legacy(arg0: string, arg1: $Holder_<$StructureProcessorList>): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>;
        static list(arg0: $List_<$Function_<$StructureTemplatePool$Projection, $StructurePoolElement>>): $Function<$StructureTemplatePool$Projection, $ListPoolElement>;
        static single(arg0: string, arg1: $LiquidSettings_): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(arg0: string, arg1: $Holder_<$StructureProcessorList>): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(arg0: string, arg1: $Holder_<$StructureProcessorList>, arg2: $LiquidSettings_): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(arg0: string): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static empty(): $Function<$StructureTemplatePool$Projection, $EmptyPoolElement>;
        static feature(arg0: $Holder_<$PlacedFeature>): $Function<$StructureTemplatePool$Projection, $FeaturePoolElement>;
        getType(): $StructurePoolElementType<never>;
        static CODEC: $Codec<$StructurePoolElement>;
        get groundLevelDelta(): number;
        get type(): $StructurePoolElementType<never>;
    }
    export class $JigsawPlacement$Placer {
        handler$maf000$moonlight$ml$AddSpawnBoxPieces(piece: $PoolElementStructurePiece, free: $MutableObject<any>, depth: number, useExpansionHack: boolean, level: $LevelHeightAccessor, random: $RandomState, poolAliasLookup: $PoolAliasLookup_, liquidSettings: $LiquidSettings_, ci: $CallbackInfo): void;
    }
    export class $JigsawPlacement$PieceState extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $JigsawPlacement$PieceState}.
     */
    export type $JigsawPlacement$PieceState_ = { piece?: $PoolElementStructurePiece, free?: $MutableObject<$VoxelShape>, depth?: number,  } | [piece?: $PoolElementStructurePiece, free?: $MutableObject<$VoxelShape>, depth?: number, ];
    export class $JigsawPlacement {
        static generateJigsaw(arg0: $ServerLevel, arg1: $Holder_<$StructureTemplatePool>, arg2: $ResourceLocation_, arg3: number, arg4: $BlockPos_, arg5: boolean): boolean;
        static addPieces(arg0: $Structure$GenerationContext_, arg1: $Holder_<$StructureTemplatePool>, arg2: ($ResourceLocation_) | undefined, arg3: number, arg4: $BlockPos_, arg5: boolean, arg6: ($Heightmap$Types_) | undefined, arg7: number, arg8: $PoolAliasLookup_, arg9: $DimensionPadding_, arg10: $LiquidSettings_): ($Structure$GenerationStub) | undefined;
        constructor();
    }
    export class $SinglePoolElement extends $StructurePoolElement implements $SinglePoolElementAccessor$2, $SinglePoolElementAccessor$3, $SinglePoolElementAccessor$1, $SinglePoolElementAccessor, $SinglePoolElementAccessor$4, $AccessorSinglePoolElement {
        getDataMarkers(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: boolean): $List<$StructureTemplate$StructureBlockInfo>;
        getTemplate(arg0: $StructureTemplateManager): $StructureTemplate;
        setProcessors(holder: $Holder_<$StructureProcessorList>): void;
        bumblezone$getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        integratedapi_getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        integratedapi_getProcessors(): $Holder<$StructureProcessorList>;
        callGetTemplate(arg0: $StructureTemplateManager): $StructureTemplate;
        moogs_structures_getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        moogs_structures_getProcessors(): $Holder<$StructureProcessorList>;
        getProcessors(): $Holder<$StructureProcessorList>;
        getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        static CODEC: $MapCodec<$SinglePoolElement>;
    }
    export class $ListPoolElement extends $StructurePoolElement implements $ListPoolElementAccessor$2, $ListPoolElementAccessor$1, $ListPoolElementAccessor {
        moogs_structures_getElements(): $List<$StructurePoolElement>;
        integratedapi_getElements(): $List<$StructurePoolElement>;
        getElements(): $List<$StructurePoolElement>;
        static CODEC: $MapCodec<$ListPoolElement>;
        elements: $List<$StructurePoolElement>;
        constructor(arg0: $List_<$StructurePoolElement>, arg1: $StructureTemplatePool$Projection_);
    }
    export interface $StructureTemplatePool extends RegistryMarked<RegistryTypes.WorldgenTemplatePoolTag, RegistryTypes.WorldgenTemplatePool> {}
    export class $EmptyPoolElement extends $StructurePoolElement {
        static CODEC: $MapCodec<$EmptyPoolElement>;
        static INSTANCE: $EmptyPoolElement;
    }
    export class $FeaturePoolElement extends $StructurePoolElement implements $FeaturePoolElementAccessor {
        getFeature(): $Holder<$PlacedFeature>;
        static CODEC: $MapCodec<$FeaturePoolElement>;
    }
    export class $StructurePoolElementType<P extends $StructurePoolElement> {
        static register<P extends $StructurePoolElement>(arg0: string, arg1: $MapCodec_<P>): $StructurePoolElementType<P>;
        static SINGLE: $StructurePoolElementType<$SinglePoolElement>;
        static LEGACY: $StructurePoolElementType<$LegacySinglePoolElement>;
        static FEATURE: $StructurePoolElementType<$FeaturePoolElement>;
        static LIST: $StructurePoolElementType<$ListPoolElement>;
        static EMPTY: $StructurePoolElementType<$EmptyPoolElement>;
    }
    export interface $StructurePoolElementType<P extends $StructurePoolElement> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $StructurePoolElementType}.
     */
    export type $StructurePoolElementType_<P> = RegistryTypes.WorldgenStructurePoolElement | (() => $MapCodec_<P>);
    export class $DimensionPadding extends $Record {
        hasEqualTopAndBottom(): boolean;
        top(): number;
        bottom(): number;
        static ZERO: $DimensionPadding;
        static CODEC: $Codec<$DimensionPadding>;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $DimensionPadding}.
     */
    export type $DimensionPadding_ = { top?: number, bottom?: number,  } | [top?: number, bottom?: number, ];
    export class $LegacySinglePoolElement extends $SinglePoolElement {
        static CODEC: $MapCodec<$LegacySinglePoolElement>;
    }
    export interface $StructurePoolElementType<P> extends RegistryMarked<RegistryTypes.WorldgenStructurePoolElementTag, RegistryTypes.WorldgenStructurePoolElement> {}
    export class $JigsawJunction implements $JigsawJunctionAccessor {
        getSourceX(): number;
        getSourceGroundY(): number;
        getSourceZ(): number;
        getDestProjection(): $StructureTemplatePool$Projection;
        getDeltaY(): number;
        static deserialize<T>(arg0: $Dynamic<T>): $JigsawJunction;
        serialize<T>(arg0: $DynamicOps<T>): $Dynamic<T>;
        setSourceX(arg0: number): void;
        setSourceGroundY(arg0: number): void;
        setSourceZ(arg0: number): void;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $StructureTemplatePool$Projection_);
        get destProjection(): $StructureTemplatePool$Projection;
        get deltaY(): number;
    }
    export class $StructureTemplatePool implements $StructurePoolAccessor, $StructurePoolAccessor$2, $StructureTemplatePoolAccessor, $StructureTemplatePoolAccessor$1, $StructurePoolAccess, $TemplatePoolAccess, $StructurePoolAccessor$1 {
        getFallback(): $Holder<$StructureTemplatePool>;
        getRandomTemplate(arg0: $RandomSource): $StructurePoolElement;
        getShuffledTemplates(arg0: $RandomSource): $List<$StructurePoolElement>;
        getLithostitchedTemplates(): $LithostitchedTemplates;
        compileRawTemplates(): void;
        static getCODEC_REFERENCE$integrated_api_$md$68cb88$0(): $MutableObject<any>;
        static getCODEC_REFERENCE$moogs_structures_$md$68cb88$2(): $MutableObject<any>;
        getMaxSize(arg0: $StructureTemplateManager): number;
        size(): number;
        bumblezone$getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        integratedapi_setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        integratedapi_getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        integratedapi_setTemplates(arg0: $ObjectArrayList<$StructurePoolElement>): void;
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        getVanillaTemplates(): $ObjectArrayList<$StructurePoolElement>;
        setRawTemplates(list: $List_<$Pair<$StructurePoolElement, number>>): void;
        setVanillaTemplates(objectArrayList: $ObjectArrayList<$StructurePoolElement>): void;
        getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        integratedapi_getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        moogs_structures_getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        moogs_structures_setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        moogs_structures_getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        moogs_structures_setTemplates(arg0: $ObjectArrayList<$StructurePoolElement>): void;
        static CODEC: $Codec<$Holder<$StructureTemplatePool>>;
        rawTemplates: $List<$Pair<$StructurePoolElement, number>>;
        templates: $ObjectArrayList<$StructurePoolElement>;
        static DIRECT_CODEC: $Codec<$StructureTemplatePool>;
        constructor(arg0: $Holder_<$StructureTemplatePool>, arg1: $List_<$Pair<$Function_<$StructureTemplatePool$Projection, $StructurePoolElement>, number>>, arg2: $StructureTemplatePool$Projection_);
        constructor(arg0: $Holder_<$StructureTemplatePool>, arg1: $List_<$Pair<$StructurePoolElement, number>>);
        get fallback(): $Holder<$StructureTemplatePool>;
        get lithostitchedTemplates(): $LithostitchedTemplates;
        static get CODEC_REFERENCE$integrated_api_$md$68cb88$0(): $MutableObject<any>;
        static get CODEC_REFERENCE$moogs_structures_$md$68cb88$2(): $MutableObject<any>;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePool}.
     */
    export type $StructureTemplatePool_ = RegistryTypes.WorldgenTemplatePool;
    export class $StructureTemplatePool$Projection extends $Enum<$StructureTemplatePool$Projection> implements $StringRepresentable {
        getSerializedName(): string;
        getProcessors(): $ImmutableList<$StructureProcessor>;
        static byName(arg0: string): $StructureTemplatePool$Projection;
        getName(): string;
        static values(): $StructureTemplatePool$Projection[];
        static valueOf(arg0: string): $StructureTemplatePool$Projection;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$StructureTemplatePool$Projection>;
        static TERRAIN_MATCHING: $StructureTemplatePool$Projection;
        static RIGID: $StructureTemplatePool$Projection;
        get serializedName(): string;
        get processors(): $ImmutableList<$StructureProcessor>;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePool$Projection}.
     */
    export type $StructureTemplatePool$Projection_ = "terrain_matching" | "rigid";
}
