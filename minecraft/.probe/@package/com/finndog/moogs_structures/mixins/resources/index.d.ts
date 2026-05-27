import { $FallbackResourceManager$PackEntry, $FallbackResourceManager$PackEntry_ } from "@package/net/minecraft/server/packs/resources";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/finndog/moogs_structures/mixins/resources" {
    export class $NamespaceResourceManagerAccessor {
    }
    export interface $NamespaceResourceManagerAccessor {
        moogs_structures_getFallbacks(): $List<$FallbackResourceManager$PackEntry>;
    }
    /**
     * Values that may be interpreted as {@link $NamespaceResourceManagerAccessor}.
     */
    export type $NamespaceResourceManagerAccessor_ = (() => $List_<$FallbackResourceManager$PackEntry_>);
}
