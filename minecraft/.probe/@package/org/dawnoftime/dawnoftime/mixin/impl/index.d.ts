import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
export * as client from "@package/org/dawnoftime/dawnoftime/mixin/impl/client";

declare module "@package/org/dawnoftime/dawnoftime/mixin/impl" {
    export class $BucketItemAccessor {
    }
    export interface $BucketItemAccessor {
        getContent(): $Fluid;
        get content(): $Fluid;
    }
    /**
     * Values that may be interpreted as {@link $BucketItemAccessor}.
     */
    export type $BucketItemAccessor_ = (() => $Fluid_);
}
