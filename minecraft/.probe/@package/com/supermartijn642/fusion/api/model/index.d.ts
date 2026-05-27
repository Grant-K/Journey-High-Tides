import { $BlockModel } from "@package/net/minecraft/client/renderer/block/model";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Material, $ModelState, $BakedModel, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $List, $Collection } from "@package/java/util";
import { $Serializer } from "@package/com/supermartijn642/fusion/api/util";

declare module "@package/com/supermartijn642/fusion/api/model" {
    export class $SpriteIdentifier {
        static missing(): $SpriteIdentifier;
        static of(material: $Material): $SpriteIdentifier;
        static of(atlas: $ResourceLocation_, texture: $ResourceLocation_): $SpriteIdentifier;
    }
    export interface $SpriteIdentifier {
        getAtlas(): $ResourceLocation;
        toMaterial(): $Material;
        getTexture(): $ResourceLocation;
        get atlas(): $ResourceLocation;
        get texture(): $ResourceLocation;
    }
    export class $ModelInstance<T> {
        static of<T>(modelType: $ModelType<T>, modelData: T): $ModelInstance<T>;
    }
    export interface $ModelInstance<T> {
        getModelData(): T;
        bake(context: $ModelBakingContext): $BakedModel;
        getParentModels(): $List<$ResourceLocation>;
        getAsVanillaModel(): $BlockModel;
        getModelDependencies(): $Collection<$ResourceLocation>;
        getModelType(): $ModelType<T>;
        get modelData(): T;
        get parentModels(): $List<$ResourceLocation>;
        get asVanillaModel(): $BlockModel;
        get modelDependencies(): $Collection<$ResourceLocation>;
        get modelType(): $ModelType<T>;
    }
    export class $ModelBakingContext {
    }
    export interface $ModelBakingContext {
        getTransformation(): $ModelState;
        getBlockTexture(texture: $ResourceLocation_): $TextureAtlasSprite;
        getModelBaker(): $ModelBaker;
        getModelIdentifier(): $ResourceLocation;
        getTexture(atlas: $ResourceLocation_, texture: $ResourceLocation_): $TextureAtlasSprite;
        getTexture(identifier: $SpriteIdentifier): $TextureAtlasSprite;
        getModel(identifier: $ResourceLocation_): $ModelInstance<never>;
        get transformation(): $ModelState;
        get modelBaker(): $ModelBaker;
        get modelIdentifier(): $ResourceLocation;
    }
    export class $ModelType<T> {
    }
    export interface $ModelType<T> extends $Serializer<T> {
        bake(context: $ModelBakingContext, data: T): $BakedModel;
        getParentModels(data: T): $List<$ResourceLocation>;
        getAsVanillaModel(data: T): $BlockModel;
        getModelDependencies(data: T): $Collection<$ResourceLocation>;
    }
}
