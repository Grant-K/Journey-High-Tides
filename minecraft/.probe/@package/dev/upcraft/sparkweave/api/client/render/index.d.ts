import { $HumanoidModel } from "@package/net/minecraft/client/model";
import { $RenderLayerParent } from "@package/net/minecraft/client/renderer/entity";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/dev/upcraft/sparkweave/api/client/render" {
    export class $RenderLayerExtensions<T extends $LivingEntity, M extends $HumanoidModel<T>> {
    }
    export interface $RenderLayerExtensions<T extends $LivingEntity, M extends $HumanoidModel<T>> {
        sparkweave$getParent(): $RenderLayerParent<T, M>;
    }
    /**
     * Values that may be interpreted as {@link $RenderLayerExtensions}.
     */
    export type $RenderLayerExtensions_<T, M> = (() => $RenderLayerParent<T, M>);
}
