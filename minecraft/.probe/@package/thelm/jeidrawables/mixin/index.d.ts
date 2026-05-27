import { $Renderable } from "@package/net/minecraft/client/gui/components";

declare module "@package/thelm/jeidrawables/mixin" {
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        jeidas$addRenderable<T extends $Renderable>(arg0: T): T;
    }
    /**
     * Values that may be interpreted as {@link $ScreenAccessor}.
     */
    export type $ScreenAccessor_ = ((arg0: any) => any);
    export class $AbstractContainerScreenAccessor {
    }
    export interface $AbstractContainerScreenAccessor {
        jeidas$leftPos(): number;
        jeidas$topPos(): number;
    }
}
