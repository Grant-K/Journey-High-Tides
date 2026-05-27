import { $EntityModel } from "@package/net/minecraft/client/model";
import { $Function } from "@package/java/util/function";
import { $LuaEvent } from "@package/org/figuramc/figura/lua/api/event";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $ParentType } from "@package/org/figuramc/figura/model";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Collection } from "@package/java/util";

declare module "@package/org/figuramc/figura/entries" {
    export class $FiguraVanillaPart {
    }
    export interface $FiguraVanillaPart {
        getParts(): $Collection<$Pair<string, $Function<$EntityModel<never>, $ModelPart>>>;
        getPartsWithParent(): $Collection<$Pair<string, $Pair<$Function<$EntityModel<never>, $ModelPart>, $ParentType>>>;
        getID(): string;
        get parts(): $Collection<$Pair<string, $Function<$EntityModel<never>, $ModelPart>>>;
        get partsWithParent(): $Collection<$Pair<string, $Pair<$Function<$EntityModel<never>, $ModelPart>, $ParentType>>>;
        get ID(): string;
    }
    export class $FiguraEvent {
    }
    export interface $FiguraEvent {
        getID(): string;
        getEvents(): $Collection<$Pair<string, $LuaEvent>>;
        get ID(): string;
        get events(): $Collection<$Pair<string, $LuaEvent>>;
    }
}
