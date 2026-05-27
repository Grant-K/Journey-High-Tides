import { $KeyMapping } from "@package/net/minecraft/client";
import { $Map } from "@package/java/util";

declare module "@package/org/figuramc/figura/mixin/input" {
    export class $KeyMappingAccessor {
        static getAll(): $Map<string, $KeyMapping>;
        static get all(): $Map<string, $KeyMapping>;
    }
    export interface $KeyMappingAccessor {
    }
}
