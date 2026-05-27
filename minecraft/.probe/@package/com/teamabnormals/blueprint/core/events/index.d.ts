import { $Gson, $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $Map_, $Map } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/com/teamabnormals/blueprint/core/events" {
    export class $FallingBlockEvent$BlockFallEvent extends $FallingBlockEvent {
        getPos(): $BlockPos;
        getLevel(): $Level;
        getState(): $BlockState;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FallingBlockEntity);
        get pos(): $BlockPos;
        get level(): $Level;
        get state(): $BlockState;
    }
    export class $SimpleJsonResourceListenerPreparedEvent extends $Event {
        getDirectory(): string;
        getGson(): $Gson;
        getEntries(): $Map<$ResourceLocation, $JsonElement>;
        constructor(arg0: $Gson, arg1: string, arg2: $Map_<$ResourceLocation_, $JsonElement_>);
        get directory(): string;
        get gson(): $Gson;
        get entries(): $Map<$ResourceLocation, $JsonElement>;
    }
    export class $FallingBlockEvent extends $Event {
        setEntity(arg0: $FallingBlockEntity): void;
        static onBlockFall(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FallingBlockEntity): $FallingBlockEntity;
        static onFallingBlockTick(arg0: $FallingBlockEntity): boolean;
        getEntity(): $FallingBlockEntity;
        constructor(arg0: $FallingBlockEntity);
    }
    export class $EntityStepEvent extends $Event implements $ICancellableEvent {
        getPos(): $BlockPos;
        static onEntityStep(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Entity): boolean;
        getLevel(): $Level;
        getEntity(): $Entity;
        getState(): $BlockState;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Entity);
        get pos(): $BlockPos;
        get level(): $Level;
        get entity(): $Entity;
        get state(): $BlockState;
    }
    export class $FallingBlockEvent$FallingBlockTickEvent extends $FallingBlockEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $FallingBlockEntity);
    }
    export class $LoadThisClassEvent extends $Event implements $IModBusEvent {
        constructor();
    }
}
