import { $Vector3 } from "@package/dev/tr7zw/waveycapes/versionless/util";
import { $UUID } from "@package/java/util";
import { $BasicSimulation } from "@package/dev/tr7zw/waveycapes/versionless/sim";
import { $MinecraftPlayer } from "@package/dev/tr7zw/waveycapes/versionless/nms";
export * as sim from "@package/dev/tr7zw/waveycapes/versionless/sim";
export * as util from "@package/dev/tr7zw/waveycapes/versionless/util";
export * as nms from "@package/dev/tr7zw/waveycapes/versionless/nms";

declare module "@package/dev/tr7zw/waveycapes/versionless" {
    export class $CapeHolder {
    }
    export interface $CapeHolder {
        setDirty(): void;
        updateSimulation(partCount: number): void;
        simulate(abstractClientPlayer: $MinecraftPlayer): void;
        getWCUUID(): $UUID;
        getSimulation(): $BasicSimulation;
        setSimulation(arg0: $BasicSimulation): void;
        getLastPlayerAnimatorPosition(): $Vector3;
        setLastPlayerAnimatorPosition(arg0: $Vector3): void;
        incorrectSimulation(sim: $BasicSimulation): boolean;
        createSimulation(): $BasicSimulation;
        get WCUUID(): $UUID;
    }
}
