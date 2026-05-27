import { $EntityModel } from "@package/net/minecraft/client/model";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/org/figuramc/figura/mixin/render/layers/elytra" {
    export class $ElytraLayerAccessor<T extends $LivingEntity, M extends $EntityModel<T>> {
        static getWingsLocation(): $ResourceLocation;
        static get wingsLocation(): $ResourceLocation;
    }
    export interface $ElytraLayerAccessor<T extends $LivingEntity, M extends $EntityModel<T>> {
    }
    export class $ElytraModelAccessor {
    }
    export interface $ElytraModelAccessor {
        getRightWing(): $ModelPart;
        getLeftWing(): $ModelPart;
        get rightWing(): $ModelPart;
        get leftWing(): $ModelPart;
    }
}
