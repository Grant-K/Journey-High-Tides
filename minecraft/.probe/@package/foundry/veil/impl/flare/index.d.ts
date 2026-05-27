import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BakedShell } from "@package/foundry/veil/api/flare/model";
import { $SimplePreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Map } from "@package/java/util";
import { $NativeResource } from "@package/org/lwjgl/system";

declare module "@package/foundry/veil/impl/flare" {
    export class $ShellManager extends $SimplePreparableReloadListener<$Map<$ResourceLocation, $BakedShell>> implements $NativeResource {
        getBakedShell(arg0: $ResourceLocation_): $BakedShell;
        free(): void;
        close(): void;
        constructor();
    }
}
