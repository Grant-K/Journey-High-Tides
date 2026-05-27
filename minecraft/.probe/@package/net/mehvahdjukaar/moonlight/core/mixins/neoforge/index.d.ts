import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";

declare module "@package/net/mehvahdjukaar/moonlight/core/mixins/neoforge" {
    export class $ContextAwareReloadListenerAccessor {
    }
    export interface $ContextAwareReloadListenerAccessor {
        invokeGetContext(): $ICondition$IContext;
    }
    /**
     * Values that may be interpreted as {@link $ContextAwareReloadListenerAccessor}.
     */
    export type $ContextAwareReloadListenerAccessor_ = (() => $ICondition$IContext);
}
