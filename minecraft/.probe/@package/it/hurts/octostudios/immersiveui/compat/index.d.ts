import { $RenderInfo, $MouseInfo } from "@package/it/hurts/octostudios/immersiveui/client";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Map, $Random } from "@package/java/util";

declare module "@package/it/hurts/octostudios/immersiveui/compat" {
    export class $ExtraScreenData {
    }
    export interface $ExtraScreenData {
        getRandom(): $Random;
        getMouseInfo(): $MouseInfo;
        getRenderInfo(): $RenderInfo;
        getExpandingProgress(): $Map<$Slot, number>;
        get random(): $Random;
        get mouseInfo(): $MouseInfo;
        get renderInfo(): $RenderInfo;
        get expandingProgress(): $Map<$Slot, number>;
    }
}
