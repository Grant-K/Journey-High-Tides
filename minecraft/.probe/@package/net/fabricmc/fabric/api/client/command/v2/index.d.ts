import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Object } from "@package/java/lang";
import { $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";

declare module "@package/net/fabricmc/fabric/api/client/command/v2" {
    export class $FabricClientCommandSource {
    }
    export interface $FabricClientCommandSource extends $SharedSuggestionProvider {
        sendError(arg0: $Component_): void;
        getClient(): $Minecraft;
        getRotation(): $Vec2;
        getPlayer(): $LocalPlayer;
        getMeta(arg0: string): $Object;
        getEntity(): $Entity;
        sendFeedback(arg0: $Component_): void;
        getPosition(): $Vec3;
        getWorld(): $ClientLevel;
        get client(): $Minecraft;
        get rotation(): $Vec2;
        get player(): $LocalPlayer;
        get entity(): $Entity;
        get position(): $Vec3;
        get world(): $ClientLevel;
    }
}
