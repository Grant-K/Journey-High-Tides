import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $AccessorWeightedBakedModel } from "@package/xfacthd/framedblocks/mixin/client";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $ModelManagerAccessor } from "@package/org/figuramc/figura/mixin/render";
import { $BakedModelMixin } from "@package/net/fabricmc/fabric/mixin/renderer/client";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $UnbakedModel_extendsMixin } from "@package/ca/fxco/moreculling/mixin/models/cullshape";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $BakedModel_extendsMixin } from "@package/ca/fxco/moreculling/mixin/models";
import { $Comparator, $Map, $List, $Map_, $List_, $Collection, $BitSet } from "@package/java/util";
import { $ResourceModelManagerAccessor, $ResourceAtlasSetAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $ExtendedUnbakedModel, $BakedOpacity } from "@package/ca/fxco/moreculling/api/model";
import { $BlockModelShaper } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ModelBakeryAccessor as $ModelBakeryAccessor$1 } from "@package/net/blay09/mods/balm/mixin";
import { $Supplier_, $Predicate_, $Function, $BiConsumer_, $Function_ } from "@package/java/util/function";
import { $SimpleBakedModelAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ChunkRenderTypeSet, $RenderTypeGroup_ } from "@package/net/neoforged/neoforge/client";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBakedModelExtension, $IModelBakerExtension, $ModelStateExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockStatesLoaderHooks, $BlockStatesLoaderHooks$LoadingOverride_, $BakerImplHooks, $ModelLoadingEventDispatcher, $ModelLoaderHooks } from "@package/net/fabricmc/fabric/impl/client/model/loading";
import { $WeightedEntry$Wrapper_ } from "@package/net/minecraft/util/random";
import { $TextureAtlasSprite, $SpriteLoader$Preparations_, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $RuntimeException, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $FabricBakedModelManager } from "@package/net/fabricmc/fabric/api/client/model/loading/v1";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $BlockModel, $ItemOverrides, $BakedQuad, $ItemTransforms, $ItemModelGenerator } from "@package/net/minecraft/client/renderer/block/model";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $IDynamicBakedModel } from "@package/net/neoforged/neoforge/client/model";
import { $ModelBakeryAccessor } from "@package/umpaz/brewinandchewin/common/mixin/client";
import { $SimpleModelAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $ResourceLocation, $ResourceLocation_, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $OctahedralGroup, $Transformation } from "@package/com/mojang/math";
import { $FabricBakedModel } from "@package/net/fabricmc/fabric/api/renderer/v1/model";
import { $AccessorModelManager } from "@package/org/violetmoon/quark/mixin/mixins/client/accessor";

declare module "@package/net/minecraft/client/resources/model" {
    export class $BakedModel {
    }
    export interface $BakedModel extends $IBakedModelExtension, $FabricBakedModel, $BakedModelMixin, $BakedOpacity, $BakedModel_extendsMixin {
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        useAmbientOcclusion(): boolean;
        /**
         * @deprecated
         */
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        isCustomRenderer(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getOverrides(): $ItemOverrides;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        get gui3d(): boolean;
        get particleIcon(): $TextureAtlasSprite;
        get customRenderer(): boolean;
        get overrides(): $ItemOverrides;
        get transforms(): $ItemTransforms;
    }
    export class $ModelBakery implements $ModelBakeryAccessor, $ModelBakeryAccessor$1, $ModelLoaderHooks {
        localvar$hpa000$puzzleslib$init(blockStateModelLoader: $BlockStateModelLoader): $BlockStateModelLoader;
        getModelGroups(): $Object2IntMap<$BlockState>;
        handler$mfa000$platform$addModel(ci: $CallbackInfo): void;
        getBakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        registerModelAndLoadDependencies(arg0: $ModelResourceLocation_, arg1: $UnbakedModel): void;
        fabric_getDispatcher(): $ModelLoadingEventDispatcher;
        fabric_getMissingModel(): $UnbakedModel;
        fabric_getOrLoadModel(arg0: $ResourceLocation_): $UnbakedModel;
        fabric_add(arg0: $ModelResourceLocation_, arg1: $UnbakedModel): void;
        bakeModels(arg0: $ModelBakery$TextureGetter_): void;
        getModel(arg0: $ResourceLocation_): $UnbakedModel;
        callGetModel(arg0: $ResourceLocation_): $UnbakedModel;
        brewinandchewin$getModel(arg0: $ResourceLocation_): $UnbakedModel;
        static BLOCK_ENTITY_MARKER: $BlockModel;
        static ITEM_MODEL_GENERATOR: $ItemModelGenerator;
        topLevelModels: $Map<$ModelResourceLocation, $UnbakedModel>;
        static NO_PATTERN_SHIELD: $Material;
        static DESTROY_STAGE_COUNT: number;
        static DESTROY_STAGES: $List<$ResourceLocation>;
        static BANNER_BASE: $Material;
        static GENERATION_MARKER: $BlockModel;
        unbakedCache: $Map<$ResourceLocation, $UnbakedModel>;
        static BREAKING_LOCATIONS: $List<$ResourceLocation>;
        static MISSING_MODEL_LOCATION: $ResourceLocation;
        static DESTROY_TYPES: $List<$RenderType>;
        static MISSING_MODEL_MESH: string;
        static FIRE_1: $Material;
        static LAVA_FLOW: $Material;
        static SHIELD_BASE: $Material;
        static FIRE_0: $Material;
        static WATER_FLOW: $Material;
        static MODEL_LISTER: $FileToIdConverter;
        static WATER_OVERLAY: $Material;
        static MISSING_MODEL_VARIANT: $ModelResourceLocation;
        constructor(arg0: $BlockColors, arg1: $ProfilerFiller, arg2: $Map_<$ResourceLocation_, $BlockModel>, arg3: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>);
        get modelGroups(): $Object2IntMap<$BlockState>;
        get bakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
    }
    export class $UnbakedModel {
    }
    export interface $UnbakedModel extends $ExtendedUnbakedModel, $UnbakedModel_extendsMixin {
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        getDependencies(): $Collection<$ResourceLocation>;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $BuiltInModel implements $BakedModel, $BakedOpacity {
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        useAmbientOcclusion(): boolean;
        moreculling$resetTranslucencyCache(arg0: $BlockState_): void;
        moreculling$getCullingShape(arg0: $BlockState_): $VoxelShape;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        isCustomRenderer(): boolean;
        moreculling$setCullingShape(arg0: $VoxelShape): void;
        moreculling$canSetCullingShape(): boolean;
        getOverrides(): $ItemOverrides;
        getTransforms(): $ItemTransforms;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        isVanillaAdapter(): boolean;
        constructor(arg0: $ItemTransforms, arg1: $ItemOverrides, arg2: $TextureAtlasSprite, arg3: boolean);
        get gui3d(): boolean;
        get customRenderer(): boolean;
        get overrides(): $ItemOverrides;
        get transforms(): $ItemTransforms;
        get vanillaAdapter(): boolean;
    }
    export class $ModelState {
    }
    export interface $ModelState extends $ModelStateExtension {
        getRotation(): $Transformation;
        isUvLocked(): boolean;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    export class $ModelManager implements $PreparableReloadListener, $AutoCloseable, $ResourceModelManagerAccessor, $IdentifiableResourceReloadListener, $FabricBakedModelManager, $ModelManagerAccessor, $AccessorModelManager {
        getBlockModelShaper(): $BlockModelShaper;
        getMissingModel(): $BakedModel;
        getAtlas(arg0: $ResourceLocation_): $TextureAtlas;
        updateMaxMipLevel(arg0: number): void;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        requiresRender(arg0: $BlockState_, arg1: $BlockState_): boolean;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        static getVanillaAtlases$figura_$md$68cb88$1(): $Map<any, any>;
        getModelBakery(): $ModelBakery;
        getModel(arg0: $ModelResourceLocation_): $BakedModel;
        close(): void;
        getName(): string;
        getModel(arg0: $ResourceLocation_): $BakedModel;
        getMaxMipmapLevels(): number;
        getAtlases(): $AtlasSet;
        getBakedRegistry(): $Map<$ModelResourceLocation, $BakedModel>;
        bakedRegistry: $Map<$ModelResourceLocation, $BakedModel>;
        constructor(arg0: $TextureManager, arg1: $BlockColors, arg2: number);
        get blockModelShaper(): $BlockModelShaper;
        get missingModel(): $BakedModel;
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        static get vanillaAtlases$figura_$md$68cb88$1(): $Map<any, any>;
        get modelBakery(): $ModelBakery;
        get name(): string;
        get maxMipmapLevels(): number;
        get atlases(): $AtlasSet;
    }
    export class $WeightedBakedModel implements $BakedModel, $IDynamicBakedModel, $IBakedModelExtension, $FabricBakedModel, $AccessorWeightedBakedModel, $BakedOpacity {
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(): boolean;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        moreculling$resetTranslucencyCache(arg0: $BlockState_): void;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<any>;
        isCustomRenderer(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        isVanillaAdapter(): boolean;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getOverrides(): $ItemOverrides;
        getTransforms(): $ItemTransforms;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        moreculling$getCullingShape(arg0: $BlockState_): $VoxelShape;
        moreculling$setCullingShape(arg0: $VoxelShape): void;
        moreculling$canSetCullingShape(): boolean;
        framedblocks$getWrappedModel(): $BakedModel;
        constructor(arg0: $List_<$WeightedEntry$Wrapper_<$BakedModel>>);
        get gui3d(): boolean;
        get customRenderer(): boolean;
        get vanillaAdapter(): boolean;
        get overrides(): $ItemOverrides;
        get transforms(): $ItemTransforms;
    }
    export class $WeightedBakedModel$Builder {
        build(): $BakedModel;
        add(arg0: $BakedModel, arg1: number): $WeightedBakedModel$Builder;
        constructor();
    }
    export class $ModelBaker {
    }
    export interface $ModelBaker extends $IModelBakerExtension {
        /**
         * @deprecated
         */
        bake(arg0: $ResourceLocation_, arg1: $ModelState): $BakedModel;
        getModel(arg0: $ResourceLocation_): $UnbakedModel;
    }
    export class $SimpleBakedModel$Builder {
        particle(arg0: $TextureAtlasSprite): $SimpleBakedModel$Builder;
        addUnculledFace(arg0: $BakedQuad): $SimpleBakedModel$Builder;
        addCulledFace(arg0: $Direction_, arg1: $BakedQuad): $SimpleBakedModel$Builder;
        handler$fgb000$ferritecore$deduplicate(arg0: $Direction_, arg1: $BakedQuad, arg2: $CallbackInfoReturnable<any>): void;
        handler$fgb000$ferritecore$deduplicate(arg0: $BakedQuad, arg1: $CallbackInfoReturnable<any>): void;
        /**
         * @deprecated
         */
        build(): $BakedModel;
        build(arg0: $RenderTypeGroup_): $BakedModel;
        item(): $SimpleBakedModel$Builder;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $ItemTransforms, arg4: $ItemOverrides);
        constructor(arg0: $BlockModel, arg1: $ItemOverrides, arg2: boolean);
    }
    export class $MultiPartBakedModel$Builder {
        redirect$ffo000$ferritecore$build(arg0: $List_<any>): $MultiPartBakedModel;
        build(): $BakedModel;
        add(arg0: $Predicate_<$BlockState>, arg1: $BakedModel): void;
        constructor();
    }
    export class $Material {
        atlasLocation(): $ResourceLocation;
        renderType(arg0: $Function_<$ResourceLocation, $RenderType>): $RenderType;
        sprite(): $TextureAtlasSprite;
        texture(): $ResourceLocation;
        buffer(arg0: $MultiBufferSource_, arg1: $Function_<$ResourceLocation, $RenderType>): $VertexConsumer;
        buffer(arg0: $MultiBufferSource_, arg1: $Function_<$ResourceLocation, $RenderType>, arg2: boolean): $VertexConsumer;
        static COMPARATOR: $Comparator<$Material>;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
    }
    export class $BlockModelRotation extends $Enum<$BlockModelRotation> implements $ModelState {
        getRotation(): $Transformation;
        actualRotation(): $OctahedralGroup;
        static by(arg0: number, arg1: number): $BlockModelRotation;
        static values(): $BlockModelRotation[];
        static valueOf(arg0: string): $BlockModelRotation;
        isUvLocked(): boolean;
        mayApplyArbitraryRotation(): boolean;
        static X90_Y0: $BlockModelRotation;
        static X0_Y180: $BlockModelRotation;
        static X0_Y270: $BlockModelRotation;
        static X180_Y270: $BlockModelRotation;
        static X180_Y0: $BlockModelRotation;
        static X270_Y90: $BlockModelRotation;
        static X0_Y0: $BlockModelRotation;
        static X0_Y90: $BlockModelRotation;
        static X90_Y270: $BlockModelRotation;
        static X90_Y180: $BlockModelRotation;
        static X180_Y180: $BlockModelRotation;
        static X270_Y0: $BlockModelRotation;
        static X270_Y180: $BlockModelRotation;
        static X90_Y90: $BlockModelRotation;
        static X270_Y270: $BlockModelRotation;
        static X180_Y90: $BlockModelRotation;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockModelRotation}.
     */
    export type $BlockModelRotation_ = "x0_y0" | "x0_y90" | "x0_y180" | "x0_y270" | "x90_y0" | "x90_y90" | "x90_y180" | "x90_y270" | "x180_y0" | "x180_y90" | "x180_y180" | "x180_y270" | "x270_y0" | "x270_y90" | "x270_y180" | "x270_y270";
    export class $AtlasSet$StitchResult {
        upload(): void;
        getSprite(arg0: $ResourceLocation_): $TextureAtlasSprite;
        readyForUpload(): $CompletableFuture<void>;
        missing(): $TextureAtlasSprite;
        constructor(arg0: $TextureAtlas, arg1: $SpriteLoader$Preparations_);
    }
    export class $BlockStateModelLoader$LoadedJson extends $Record {
        data(): $JsonElement;
        source(): string;
        constructor(arg0: string, arg1: $JsonElement_);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$LoadedJson}.
     */
    export type $BlockStateModelLoader$LoadedJson_ = { data?: $JsonElement_, source?: string,  } | [data?: $JsonElement_, source?: string, ];
    export class $ModelBakery$TextureGetter {
    }
    export interface $ModelBakery$TextureGetter {
        get(arg0: $ModelResourceLocation_, arg1: $Material): $TextureAtlasSprite;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$TextureGetter}.
     */
    export type $ModelBakery$TextureGetter_ = ((arg0: $ModelResourceLocation, arg1: $Material) => $TextureAtlasSprite);
    export class $AtlasSet$AtlasEntry extends $Record implements $AutoCloseable {
        atlas(): $TextureAtlas;
        atlasInfoLocation(): $ResourceLocation;
        close(): void;
    }
    /**
     * Values that may be interpreted as {@link $AtlasSet$AtlasEntry}.
     */
    export type $AtlasSet$AtlasEntry_ = { atlasInfoLocation?: $ResourceLocation_, atlas?: $TextureAtlas,  } | [atlasInfoLocation?: $ResourceLocation_, atlas?: $TextureAtlas, ];
    export class $SimpleBakedModel implements $BakedModel, $SimpleBakedModelAccessor, $BakedOpacity, $SimpleModelAccess {
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        useAmbientOcclusion(): boolean;
        moreculling$resetTranslucencyCache(arg0: $BlockState_): void;
        moreculling$getCullingShape(arg0: $BlockState_): $VoxelShape;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        isCustomRenderer(): boolean;
        moreculling$setCullingShape(arg0: $VoxelShape): void;
        moreculling$canSetCullingShape(): boolean;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getOverrides(): $ItemOverrides;
        getTransforms(): $ItemTransforms;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        isVanillaAdapter(): boolean;
        getBlockRenderTypes(): $ChunkRenderTypeSet;
        getItemRenderTypes(): $List<$RenderType>;
        getFabulousItemRenderTypes(): $List<$RenderType>;
        constructor(arg0: $List_<$BakedQuad>, arg1: $Map_<$Direction_, $List_<$BakedQuad>>, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $TextureAtlasSprite, arg6: $ItemTransforms, arg7: $ItemOverrides, arg8: $RenderTypeGroup_);
        /**
         * @deprecated
         */
        constructor(arg0: $List_<$BakedQuad>, arg1: $Map_<$Direction_, $List_<$BakedQuad>>, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $TextureAtlasSprite, arg6: $ItemTransforms, arg7: $ItemOverrides);
        get gui3d(): boolean;
        get customRenderer(): boolean;
        get overrides(): $ItemOverrides;
        get transforms(): $ItemTransforms;
        get vanillaAdapter(): boolean;
        get blockRenderTypes(): $ChunkRenderTypeSet;
        get itemRenderTypes(): $List<$RenderType>;
        get fabulousItemRenderTypes(): $List<$RenderType>;
    }
    export class $ModelManager$ReloadState extends $Record {
        readyForUpload(): $CompletableFuture<void>;
        atlasPreparations(): $Map<$ResourceLocation, $AtlasSet$StitchResult>;
        modelBakery(): $ModelBakery;
        missingModel(): $BakedModel;
        modelCache(): $Map<$BlockState, $BakedModel>;
    }
    /**
     * Values that may be interpreted as {@link $ModelManager$ReloadState}.
     */
    export type $ModelManager$ReloadState_ = { atlasPreparations?: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, readyForUpload?: $CompletableFuture<void>, modelBakery?: $ModelBakery, missingModel?: $BakedModel, modelCache?: $Map_<$BlockState_, $BakedModel>,  } | [atlasPreparations?: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, readyForUpload?: $CompletableFuture<void>, modelBakery?: $ModelBakery, missingModel?: $BakedModel, modelCache?: $Map_<$BlockState_, $BakedModel>, ];
    export class $BlockStateModelLoader implements $BlockStatesLoaderHooks {
        loadBlockStateDefinitions(arg0: $ResourceLocation_, arg1: $StateDefinition<$Block_, $BlockState_>): void;
        loadAllBlockStates(): void;
        getModelGroups(): $Object2IntMap<$BlockState>;
        fabric_setLoadingOverride(arg0: $BlockStatesLoaderHooks$LoadingOverride_): void;
        static BLOCKSTATE_LISTER: $FileToIdConverter;
        constructor(arg0: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>, arg1: $ProfilerFiller, arg2: $UnbakedModel, arg3: $BlockColors, arg4: $BiConsumer_<$ModelResourceLocation, $UnbakedModel>);
        get modelGroups(): $Object2IntMap<$BlockState>;
    }
    export class $BlockStateModelLoader$LoadedModel extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$LoadedModel}.
     */
    export type $BlockStateModelLoader$LoadedModel_ = { model?: $UnbakedModel, key?: $Supplier_<$BlockStateModelLoader$ModelGroupKey>,  } | [model?: $UnbakedModel, key?: $Supplier_<$BlockStateModelLoader$ModelGroupKey>, ];
    export class $MultiPartBakedModel implements $BakedModel, $IDynamicBakedModel, $FabricBakedModel, $BakedOpacity {
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        useAmbientOcclusion(): boolean;
        moreculling$resetTranslucencyCache(arg0: $BlockState_): void;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        moreculling$getCullingShape(arg0: $BlockState_): $VoxelShape;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<any>;
        isCustomRenderer(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        isVanillaAdapter(): boolean;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getSelectors(arg0: $BlockState_): $BitSet;
        redirect$ffp000$ferritecore$redirectCacheGet(arg0: $Map_<any, any>, arg1: $Object): $Object;
        redirect$ffp000$ferritecore$redirectCachePut(arg0: $Map_<any, any>, arg1: $Object, arg2: $Object): $Object;
        getOverrides(): $ItemOverrides;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        moreculling$setCullingShape(arg0: $VoxelShape): void;
        moreculling$canSetCullingShape(): boolean;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        constructor(arg0: $List_<$Pair<$Predicate_<$BlockState>, $BakedModel>>);
        get gui3d(): boolean;
        get customRenderer(): boolean;
        get vanillaAdapter(): boolean;
        get overrides(): $ItemOverrides;
        get transforms(): $ItemTransforms;
    }
    export class $ModelBakery$BakedCacheKey extends $Record {
        transformation(): $Transformation;
        isUvLocked(): boolean;
        id(): $ResourceLocation;
        constructor(id: $ResourceLocation_, transformation: $Transformation, isUvLocked: boolean);
        get uvLocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$BakedCacheKey}.
     */
    export type $ModelBakery$BakedCacheKey_ = { id?: $ResourceLocation_, transformation?: $Transformation, isUvLocked?: boolean,  } | [id?: $ResourceLocation_, transformation?: $Transformation, isUvLocked?: boolean, ];
    export class $BlockStateModelLoader$ModelGroupKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$ModelGroupKey}.
     */
    export type $BlockStateModelLoader$ModelGroupKey_ = { coloringValues?: $List_<$Object>, models?: $List_<$UnbakedModel>,  } | [coloringValues?: $List_<$Object>, models?: $List_<$UnbakedModel>, ];
    export class $BlockStateModelLoader$BlockStateDefinitionException extends $RuntimeException {
    }
    export class $ModelResourceLocation extends $Record {
        static vanilla(arg0: string, arg1: string): $ModelResourceLocation;
        static inventory(arg0: $ResourceLocation_): $ModelResourceLocation;
        static standalone(arg0: $ResourceLocation_): $ModelResourceLocation;
        getVariant(): string;
        variant(): string;
        id(): $ResourceLocation;
        static INVENTORY_VARIANT: string;
        static STANDALONE_VARIANT: string;
        constructor(id: $ResourceLocation_, variant: string);
    }
    /**
     * Values that may be interpreted as {@link $ModelResourceLocation}.
     */
    export type $ModelResourceLocation_ = { variant?: string, id?: $ResourceLocation_,  } | [variant?: string, id?: $ResourceLocation_, ];
    export class $ModelBakery$ModelBakerImpl implements $ModelBaker, $BakerImplHooks {
        bake(arg0: $ResourceLocation_, arg1: $ModelState, arg2: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        bake(arg0: $ResourceLocation_, arg1: $ModelState): $BakedModel;
        fabric_getTextureGetter(): $Function<any, any>;
        getTopLevelModel(arg0: $ModelResourceLocation_): $UnbakedModel;
        bakeUncached(arg0: $UnbakedModel, arg1: $ModelState, arg2: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        getModelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
        getModel(arg0: $ResourceLocation_): $UnbakedModel;
        constructor(arg0: $ModelBakery, arg1: $ModelBakery$TextureGetter_, arg2: $ModelResourceLocation_);
        get modelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
    }
    export class $AtlasSet implements $AutoCloseable, $ResourceAtlasSetAccessor {
        getAtlas(arg0: $ResourceLocation_): $TextureAtlas;
        scheduleLoad(arg0: $ResourceManager, arg1: number, arg2: $Executor_): $Map<$ResourceLocation, $CompletableFuture<$AtlasSet$StitchResult>>;
        close(): void;
        getAtlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
        constructor(arg0: $Map_<$ResourceLocation_, $ResourceLocation_>, arg1: $TextureManager);
        get atlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
    }
}
