import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Comparable, $Object } from "@package/java/lang";
import { $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";

declare module "@package/org/figuramc/figura/utils" {
    export class $Version implements $Comparable<$Version> {
        noBuildString(): string;
        compareTo(o: $Version): number;
        patch: number;
        pre: string;
        major: number;
        minor: number;
        build: string;
        invalid: boolean;
        constructor(version: string);
    }
    export class $RefilledNumber {
        tick(): void;
        use(): boolean;
        peek(): number;
        check(): boolean;
        set(max: number): void;
        constructor();
        constructor(max: number, initial: number);
        constructor(max: number);
    }
    export class $FiguraClientCommandSource {
    }
    export interface $FiguraClientCommandSource extends $SharedSuggestionProvider {
        figura$getEntity(): $Entity;
        figura$getPosition(): $Vec3;
        figura$getRotation(): $Vec2;
        figura$getMeta(key: string): $Object;
        figura$sendFeedback(arg0: $Component_): void;
        figura$sendError(arg0: $Component_): void;
        figura$getClient(): $Minecraft;
        figura$getPlayer(): $LocalPlayer;
        figura$getWorld(): $ClientLevel;
    }
}
