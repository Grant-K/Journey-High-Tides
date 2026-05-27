import { $RegistryAccess } from "@package/net/minecraft/core";

declare module "@package/net/darkhax/botanypots/common/mixin" {
    export class $AccessorConfigurableRegistryLookup {
    }
    export interface $AccessorConfigurableRegistryLookup {
        botanypots$getRegistry(): $RegistryAccess;
    }
    /**
     * Values that may be interpreted as {@link $AccessorConfigurableRegistryLookup}.
     */
    export type $AccessorConfigurableRegistryLookup_ = (() => $RegistryAccess);
    export class $AccessorIntegerProperty {
    }
    export interface $AccessorIntegerProperty {
        botanypots$getMax(): number;
    }
    /**
     * Values that may be interpreted as {@link $AccessorIntegerProperty}.
     */
    export type $AccessorIntegerProperty_ = (() => number);
}
