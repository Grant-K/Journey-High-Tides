import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $SimplePreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Object } from "@package/java/lang";
import { $Map } from "@package/java/util";

declare module "@package/foundry/veil/impl/client/render/rendertype" {
    export class $DynamicRenderTypeManager extends $SimplePreparableReloadListener<$Map<$ResourceLocation, number[]>> {
        get(arg0: $ResourceLocation_, ...arg1: $Object[]): $RenderType;
        constructor();
    }
}
