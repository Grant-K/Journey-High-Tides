import { $Component } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
export * as job from "@package/com/klikli_dev/occultism/common/entity/job";
export * as spirit from "@package/com/klikli_dev/occultism/common/entity/spirit";

declare module "@package/com/klikli_dev/occultism/common/entity" {
    export class $IFilterConfigurable {
    }
    export interface $IFilterConfigurable {
        getInventory(): $ItemStackHandler;
        isFilterBlacklist(): boolean;
        getTagFilter(): string;
        setFilterBlacklist(arg0: boolean): void;
        setTagFilter(arg0: string): void;
        getEntity(): $LivingEntity;
        getFilterItems(): $ItemStackHandler;
        getName(): $Component;
        getId(): number;
        get inventory(): $ItemStackHandler;
        get entity(): $LivingEntity;
        get filterItems(): $ItemStackHandler;
        get name(): $Component;
        get id(): number;
    }
}
