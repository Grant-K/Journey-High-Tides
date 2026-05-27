import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $WaystoneManagerImpl } from "@package/net/blay09/mods/waystones/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Waystone, $WaystoneTeleportContext } from "@package/net/blay09/mods/waystones/api";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";
import { $WarpRequirement } from "@package/net/blay09/mods/waystones/api/requirement";
import { $BalmEvent } from "@package/net/blay09/mods/balm/api/event";

declare module "@package/net/blay09/mods/waystones/api/event" {
    export class $WaystonesListReceivedEvent extends $BalmEvent {
        getWaystones(): $List<$Waystone>;
        getWaystoneType(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $List_<$Waystone>);
        get waystones(): $List<$Waystone>;
        get waystoneType(): $ResourceLocation;
    }
    export class $WaystoneInitializedEvent extends $BalmEvent {
        getWaystone(): $Waystone;
        constructor(arg0: $Waystone);
        get waystone(): $Waystone;
    }
    export class $WaystoneTeleportEvent$Pre extends $WaystoneTeleportEvent {
        setRequirements(arg0: $WarpRequirement): void;
        addAdditionalEntity(arg0: $Entity): void;
        getRequirements(): $WarpRequirement;
        getContext(): $WaystoneTeleportContext;
        constructor(arg0: $WaystoneTeleportContext);
        get context(): $WaystoneTeleportContext;
    }
    export class $WaystoneUpdatedEvent extends $BalmEvent {
        getWaystone(): $Waystone;
        constructor(arg0: $Waystone);
        get waystone(): $Waystone;
    }
    export class $WaystonesLoadedEvent extends $BalmEvent {
        getWaystoneManager(): $WaystoneManagerImpl;
        constructor(arg0: $WaystoneManagerImpl);
        get waystoneManager(): $WaystoneManagerImpl;
    }
    export class $WaystoneRemovedEvent extends $BalmEvent {
        getWaystone(): $Waystone;
        constructor(arg0: $Waystone);
        get waystone(): $Waystone;
    }
    export class $WaystoneActivatedEvent extends $BalmEvent {
        getPlayer(): $Player;
        getWaystone(): $Waystone;
        constructor(arg0: $Player, arg1: $Waystone);
        get player(): $Player;
        get waystone(): $Waystone;
    }
    export class $WaystoneTeleportEvent$Post extends $WaystoneTeleportEvent {
        getTeleportedEntities(): $List<$Entity>;
        getContext(): $WaystoneTeleportContext;
        constructor(arg0: $WaystoneTeleportContext, arg1: $List_<$Entity>);
        get teleportedEntities(): $List<$Entity>;
        get context(): $WaystoneTeleportContext;
    }
    export class $WaystoneTeleportEvent extends $BalmEvent {
        constructor();
    }
    export class $GenerateWaystoneNameEvent extends $BalmEvent {
        getWaystone(): $Waystone;
        getName(): $Component;
        setName(arg0: $Component_): void;
        constructor(arg0: $Waystone, arg1: $Component_);
        get waystone(): $Waystone;
    }
    export class $WaystoneRemoveReceivedEvent extends $BalmEvent {
        getWaystoneId(): $UUID;
        getWaystoneType(): $ResourceLocation;
        wasDestroyed(): boolean;
        constructor(arg0: $ResourceLocation_, arg1: $UUID_, arg2: boolean);
        get waystoneId(): $UUID;
        get waystoneType(): $ResourceLocation;
    }
    export class $WaystoneUpdateReceivedEvent extends $BalmEvent {
        getWaystone(): $Waystone;
        constructor(arg0: $Waystone);
        get waystone(): $Waystone;
    }
}
