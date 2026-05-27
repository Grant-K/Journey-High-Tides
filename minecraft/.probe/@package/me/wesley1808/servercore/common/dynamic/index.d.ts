import { $MinecraftServer } from "@package/net/minecraft/server";

declare module "@package/me/wesley1808/servercore/common/dynamic" {
    export class $DynamicManager {
        static modifyMobcaps(percentage: number): void;
        static reload(): void;
        modifySimulationDistance(distance: number): void;
        modifyViewDistance(distance: number): void;
        getAverageTickTime(): number;
        static update(server: $MinecraftServer): void;
        static getInstance(server: $MinecraftServer): $DynamicManager;
        constructor(server: $MinecraftServer);
        get averageTickTime(): number;
    }
}
