import { $MinecraftServer } from "@package/net/minecraft/server";
import { $MobCategory_ } from "@package/net/minecraft/world/entity";
import { $DynamicManager } from "@package/me/wesley1808/servercore/common/dynamic";
import { $Statistics } from "@package/me/wesley1808/servercore/common/utils/statistics";
export * as activation_range from "@package/me/wesley1808/servercore/common/interfaces/activation_range";
export * as chunk from "@package/me/wesley1808/servercore/common/interfaces/chunk";

declare module "@package/me/wesley1808/servercore/common/interfaces" {
    export class $IMinecraftServer {
        static onStarted(server: $MinecraftServer): void;
    }
    export interface $IMinecraftServer {
        servercore$onStarted(arg0: $MinecraftServer): void;
        servercore$getStatistics(): $Statistics;
        servercore$getDynamicManager(): $DynamicManager;
    }
    export class $IMobCategory {
        static getSpawnInterval(category: $MobCategory_): number;
        static getOriginalCapacity(category: $MobCategory_): number;
        static modifyCapacity(category: $MobCategory_, modifier: number): void;
        static reload(): void;
        static of(category: $MobCategory_): $IMobCategory;
    }
    export interface $IMobCategory {
        servercore$getSpawnInterval(): number;
        servercore$getOriginalCapacity(): number;
        servercore$modifyCapacity(arg0: number): void;
        servercore$modifySpawningConfig(arg0: number, arg1: number): void;
    }
}
