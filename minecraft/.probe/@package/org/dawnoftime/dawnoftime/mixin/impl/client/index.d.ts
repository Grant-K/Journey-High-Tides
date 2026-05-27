import { $WidgetSprites_, $WidgetSprites } from "@package/net/minecraft/client/gui/components";

declare module "@package/org/dawnoftime/dawnoftime/mixin/impl/client" {
    export class $AbstractButtonAccessor {
    }
    export interface $AbstractButtonAccessor {
        getSprites(): $WidgetSprites;
        get sprites(): $WidgetSprites;
    }
    /**
     * Values that may be interpreted as {@link $AbstractButtonAccessor}.
     */
    export type $AbstractButtonAccessor_ = (() => $WidgetSprites_);
}
