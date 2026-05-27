import { $Predicate_ } from "@package/java/util/function";
import { $Object2ObjectMap, $ObjectList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Class } from "@package/java/lang";

declare module "@package/me/kall/duplicationless/data" {
    export class $EntityTracker$Filterable {
        static getMatched(entity: $Entity): $ObjectList<$ResourceLocation>;
    }
    export interface $EntityTracker$Filterable {
        filter$matched(): $ObjectList<$ResourceLocation>;
        filter$initialize(arg0: $Object2ObjectMap<$ResourceLocation_, $Predicate_<$Entity>>): void;
        filter$initialized(): boolean;
    }
    export class $EntityTracker$EntityFilterRegistryEvent extends $Event {
        register(filterId: $ResourceLocation_, filter: $Predicate_<$Entity>): void;
        register(filterId: $ResourceLocation_, entityClass: $Class<never>): void;
        constructor();
    }
}
