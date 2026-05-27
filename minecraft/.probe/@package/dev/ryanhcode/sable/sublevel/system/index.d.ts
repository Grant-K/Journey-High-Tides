import { $Level_ } from "@package/net/minecraft/world/level";
import { $BoundingBox3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $ArbitraryPhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object";
import { $PhysicsPipeline } from "@package/dev/ryanhcode/sable/api/physics";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $LevelChunkSection } from "@package/net/minecraft/world/level/chunk";
import { $SubLevelRemovalReason_ } from "@package/dev/ryanhcode/sable/sublevel/storage";
import { $SubLevel, $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $UUID_ } from "@package/java/util";
import { $PhysicsConfigData } from "@package/dev/ryanhcode/sable/physics/config";
import { $PhysicsChunkTicketManager } from "@package/dev/ryanhcode/sable/sublevel/system/ticket";
import { $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Iterable } from "@package/java/lang";
import { $SubLevelObserver, $SubLevelTrackingPlugin, $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
export * as ticket from "@package/dev/ryanhcode/sable/sublevel/system/ticket";

declare module "@package/dev/ryanhcode/sable/sublevel/system" {
    export class $SubLevelPhysicsSystem implements $SubLevelObserver {
        getPipeline(): $PhysicsPipeline;
        onSubLevelRemoved(arg0: $SubLevel, arg1: $SubLevelRemovalReason_): void;
        onSubLevelAdded(arg0: $SubLevel): void;
        queryIntersecting(arg0: $BoundingBox3dc): $Iterable<$SubLevel>;
        getTicketManager(): $PhysicsChunkTicketManager;
        getPhysicsHandle(arg0: $ServerSubLevel): $RigidBodyHandle;
        handleBlockChange(arg0: $SectionPos, arg1: $LevelChunkSection, arg2: number, arg3: number, arg4: number, arg5: $BlockState_, arg6: $BlockState_): void;
        getLevel(): $ServerLevel;
        tick(arg0: $SubLevelContainer): void;
        updatePose(arg0: $ServerSubLevel): void;
        recoverSubLevel(arg0: $ServerSubLevel): boolean;
        updateMassDataFromBlockChange(arg0: $SubLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: boolean): void;
        static getCurrentlySteppingSystem(): $SubLevelPhysicsSystem;
        onConfigUpdated(): void;
        tryPunch(arg0: $UUID_, arg1: number): boolean;
        getPaused(): boolean;
        setPaused(arg0: boolean): void;
        getArbitraryObjects(): $Iterable<$ArbitraryPhysicsObject>;
        addObject(arg0: $ArbitraryPhysicsObject): void;
        wakeUpObjectsAt(arg0: number, arg1: number, arg2: number): void;
        getNextRuntimeID(): number;
        getPartialPhysicsTick(): number;
        removeObject(arg0: $ArbitraryPhysicsObject): void;
        getConfig(): $PhysicsConfigData;
        static require(arg0: $Level_): $SubLevelPhysicsSystem;
        static get(arg0: $Level_): $SubLevelPhysicsSystem;
        initialize(): void;
        static USE_TICKETS_FOR_QUERIES: boolean;
        static DEFAULT_RESIDENT_CAPACITY: number;
        static currentlySteppingSystem: $SubLevelPhysicsSystem;
        constructor(arg0: $ServerLevel);
        get pipeline(): $PhysicsPipeline;
        get ticketManager(): $PhysicsChunkTicketManager;
        get level(): $ServerLevel;
        get arbitraryObjects(): $Iterable<$ArbitraryPhysicsObject>;
        get nextRuntimeID(): number;
        get partialPhysicsTick(): number;
        get config(): $PhysicsConfigData;
    }
    export class $SubLevelTrackingSystem implements $SubLevelObserver {
        onSubLevelRemoved(arg0: $SubLevel, arg1: $SubLevelRemovalReason_): void;
        onSubLevelAdded(arg0: $SubLevel): void;
        serverWidePlayerSink(arg0: $ServerSubLevel): $VeilPacketManager$PacketSink;
        getInterpolationTick(): number;
        tick(arg0: $SubLevelContainer): void;
        addTrackingPlugin(arg0: $SubLevelTrackingPlugin): void;
        constructor(arg0: $ServerLevel);
        get interpolationTick(): number;
    }
}
