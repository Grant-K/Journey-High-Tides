import { $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/benbenlaw/core/mixin/client" {
    export class $ServerListAccessor {
    }
    export interface $ServerListAccessor {
        getServerList(): $List<$ServerData>;
        get serverList(): $List<$ServerData>;
    }
    /**
     * Values that may be interpreted as {@link $ServerListAccessor}.
     */
    export type $ServerListAccessor_ = (() => $List_<$ServerData>);
}
