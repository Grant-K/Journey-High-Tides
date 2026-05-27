import { $Event } from "@package/net/neoforged/bus/api";
import { $TileBCore } from "@package/com/brandon3055/brandonscore/blocks";

declare module "@package/com/brandon3055/brandonscore/api/event" {
    export class $TileBCoreInitEvent extends $Event {
        getTile(): $TileBCore;
        constructor(arg0: $TileBCore);
        get tile(): $TileBCore;
    }
}
