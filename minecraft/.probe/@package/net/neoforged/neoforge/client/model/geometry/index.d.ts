import { $JsonDeserializationContext_, $JsonObject_, $JsonObject, $JsonDeserializationContext } from "@package/com/google/gson";
import { $Function_, $Function } from "@package/java/util/function";
import { $Direction_ } from "@package/net/minecraft/core";
import { $RenderTypeGroup } from "@package/net/neoforged/neoforge/client";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ExtraFaceData_, $IModelBuilder, $IQuadTransformer } from "@package/net/neoforged/neoforge/client/model";
import { $BlockModel, $BlockElement, $ItemTransforms, $BlockElementFace_, $ItemOverrides, $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Material, $UnbakedModel, $ModelState, $BakedModel, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $List, $Map_, $Set, $List_ } from "@package/java/util";
import { $Transformation } from "@package/com/mojang/math";

declare module "@package/net/neoforged/neoforge/client/model/geometry" {
    export class $BlockGeometryBakingContext implements $IGeometryBakingContext {
        isGui3d(): boolean;
        useAmbientOcclusion(): boolean;
        getMaterial(arg0: string): $Material;
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState, arg3: $ItemOverrides): $BakedModel;
        hasCustomGeometry(): boolean;
        getCustomGeometry(): $IUnbakedGeometry<never>;
        setCustomGeometry(arg0: $IUnbakedGeometry_<never>): void;
        setRootTransform(arg0: $Transformation): void;
        setRenderTypeHint(arg0: $ResourceLocation_): void;
        setGui3d(arg0: boolean): void;
        copyFrom(arg0: $BlockGeometryBakingContext): void;
        getModelName(): string;
        hasMaterial(arg0: string): boolean;
        useBlockLight(): boolean;
        getRootTransform(): $Transformation;
        isComponentVisible(arg0: string, arg1: boolean): boolean;
        getRenderTypeHint(): $ResourceLocation;
        getTransforms(): $ItemTransforms;
        getRenderType(arg0: $ResourceLocation_): $RenderTypeGroup;
        owner: $BlockModel;
        visibilityData: $BlockGeometryBakingContext$VisibilityData;
        constructor(arg0: $BlockModel);
        get modelName(): string;
        get transforms(): $ItemTransforms;
    }
    export class $UnbakedGeometryHelper {
        static bake(arg0: $BlockModel, arg1: $ModelBaker, arg2: $BlockModel, arg3: $Function_<$Material, $TextureAtlasSprite>, arg4: $ModelState, arg5: boolean): $BakedModel;
        static composeRootTransformIntoModelState(arg0: $ModelState, arg1: $Transformation): $ModelState;
        static resolveDirtyMaterial(arg0: string, arg1: $IGeometryBakingContext): $Material;
        static createUnbakedItemMaskElements(arg0: number, arg1: $TextureAtlasSprite, arg2: $ExtraFaceData_): $List<$BlockElement>;
        static createUnbakedItemMaskElements(arg0: number, arg1: $TextureAtlasSprite): $List<$BlockElement>;
        static applyRootTransform(arg0: $ModelState, arg1: $Transformation): $IQuadTransformer;
        static bakeElements(arg0: $List_<$BlockElement>, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $List<$BakedQuad>;
        static bakeElements(arg0: $IModelBuilder<never>, arg1: $List_<$BlockElement>, arg2: $Function_<$Material, $TextureAtlasSprite>, arg3: $ModelState): void;
        static createUnbakedItemElements(arg0: number, arg1: $TextureAtlasSprite): $List<$BlockElement>;
        static createUnbakedItemElements(arg0: number, arg1: $TextureAtlasSprite, arg2: $ExtraFaceData_): $List<$BlockElement>;
        static bakeElementFace(arg0: $BlockElement, arg1: $BlockElementFace_, arg2: $TextureAtlasSprite, arg3: $Direction_, arg4: $ModelState): $BakedQuad;
        constructor();
    }
    export class $SimpleUnbakedGeometry<T extends $SimpleUnbakedGeometry<T>> implements $IUnbakedGeometry<T> {
        bake(arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function_<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: $ItemOverrides): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>, arg1: $IGeometryBakingContext): void;
        getConfigurableComponentNames(): $Set<string>;
        constructor();
        get configurableComponentNames(): $Set<string>;
    }
    export class $IGeometryBakingContext {
    }
    export interface $IGeometryBakingContext {
        isGui3d(): boolean;
        useAmbientOcclusion(): boolean;
        getRenderType(arg0: $ResourceLocation_): $RenderTypeGroup;
        getMaterial(arg0: string): $Material;
        getModelName(): string;
        hasMaterial(arg0: string): boolean;
        useBlockLight(): boolean;
        getRootTransform(): $Transformation;
        isComponentVisible(arg0: string, arg1: boolean): boolean;
        getRenderTypeHint(): $ResourceLocation;
        getTransforms(): $ItemTransforms;
        get gui3d(): boolean;
        get modelName(): string;
        get rootTransform(): $Transformation;
        get renderTypeHint(): $ResourceLocation;
        get transforms(): $ItemTransforms;
    }
    export class $StandaloneGeometryBakingContext implements $IGeometryBakingContext {
        isGui3d(): boolean;
        useAmbientOcclusion(): boolean;
        getMaterial(arg0: string): $Material;
        getModelName(): string;
        hasMaterial(arg0: string): boolean;
        useBlockLight(): boolean;
        getRootTransform(): $Transformation;
        isComponentVisible(arg0: string, arg1: boolean): boolean;
        getRenderTypeHint(): $ResourceLocation;
        static create(arg0: $Map_<string, $ResourceLocation_>): $StandaloneGeometryBakingContext;
        static create(arg0: $ResourceLocation_, arg1: $Map_<string, $ResourceLocation_>): $StandaloneGeometryBakingContext;
        static create(arg0: $ResourceLocation_): $StandaloneGeometryBakingContext;
        getTransforms(): $ItemTransforms;
        static builder(arg0: $IGeometryBakingContext): $StandaloneGeometryBakingContext$Builder;
        static builder(): $StandaloneGeometryBakingContext$Builder;
        getRenderType(arg0: $ResourceLocation_): $RenderTypeGroup;
        static LOCATION: $ResourceLocation;
        static INSTANCE: $StandaloneGeometryBakingContext;
        get gui3d(): boolean;
        get modelName(): string;
        get rootTransform(): $Transformation;
        get renderTypeHint(): $ResourceLocation;
        get transforms(): $ItemTransforms;
    }
    export class $BlockGeometryBakingContext$VisibilityData {
        isVisible(arg0: string, arg1: boolean): boolean;
        setVisibilityState(arg0: string, arg1: boolean): void;
        hasCustomVisibility(arg0: string): boolean;
        copyFrom(arg0: $BlockGeometryBakingContext$VisibilityData): void;
        constructor();
    }
    export class $GeometryLoaderManager {
        static getLoaderList(): string;
        static get(arg0: $ResourceLocation_): $IGeometryLoader<never>;
        static init(): void;
        static get loaderList(): string;
    }
    export class $IUnbakedGeometry<T extends $IUnbakedGeometry<T>> {
    }
    export interface $IUnbakedGeometry<T extends $IUnbakedGeometry<T>> {
        bake(arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function_<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: $ItemOverrides): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>, arg1: $IGeometryBakingContext): void;
        getConfigurableComponentNames(): $Set<string>;
        get configurableComponentNames(): $Set<string>;
    }
    /**
     * Values that may be interpreted as {@link $IUnbakedGeometry}.
     */
    export type $IUnbakedGeometry_<T> = ((arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: $ItemOverrides) => $BakedModel);
    export class $IGeometryLoader<T extends $IUnbakedGeometry<T>> {
    }
    export interface $IGeometryLoader<T extends $IUnbakedGeometry<T>> {
        read(arg0: $JsonObject_, arg1: $JsonDeserializationContext_): T;
    }
    /**
     * Values that may be interpreted as {@link $IGeometryLoader}.
     */
    export type $IGeometryLoader_<T> = ((arg0: $JsonObject, arg1: $JsonDeserializationContext) => T);
    export class $StandaloneGeometryBakingContext$Builder {
        withGui3d(arg0: boolean): $StandaloneGeometryBakingContext$Builder;
        withTextures(arg0: $Map_<string, $ResourceLocation_>, arg1: $ResourceLocation_): $StandaloneGeometryBakingContext$Builder;
        withTextures(arg0: $ResourceLocation_, arg1: $Map_<string, $ResourceLocation_>, arg2: $ResourceLocation_): $StandaloneGeometryBakingContext$Builder;
        withMaterials(arg0: $Map_<string, $Material>, arg1: $Material): $StandaloneGeometryBakingContext$Builder;
        withUseAmbientOcclusion(arg0: boolean): $StandaloneGeometryBakingContext$Builder;
        withTransforms(arg0: $ItemTransforms): $StandaloneGeometryBakingContext$Builder;
        withRootTransform(arg0: $Transformation): $StandaloneGeometryBakingContext$Builder;
        withRenderTypeHint(arg0: $ResourceLocation_): $StandaloneGeometryBakingContext$Builder;
        withVisibleComponents(arg0: $Object2BooleanMap<string>): $StandaloneGeometryBakingContext$Builder;
        withUseBlockLight(arg0: boolean): $StandaloneGeometryBakingContext$Builder;
        build(arg0: $ResourceLocation_): $StandaloneGeometryBakingContext;
    }
}
