import { $EntityModel } from "@package/net/minecraft/client/model";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";

declare module "@package/net/sweenus/simplyswords/mixin/client" {
    export class $LivingEntityRendererAccessor {
    }
    export interface $LivingEntityRendererAccessor {
        invokeAddFeature<T extends $LivingEntity, M extends $EntityModel<T>>(arg0: $RenderLayer<T, M>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityRendererAccessor}.
     */
    export type $LivingEntityRendererAccessor_ = ((arg0: $RenderLayer<any, any>) => boolean);
}
