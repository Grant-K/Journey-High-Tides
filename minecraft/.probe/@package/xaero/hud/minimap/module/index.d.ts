import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapProcessor } from "@package/xaero/common/minimap";
import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $MinimapDimensionHelper, $MinimapWorldManager } from "@package/xaero/hud/minimap/world";
import { $RadarSession } from "@package/xaero/hud/minimap/radar";
import { $MinimapWorldManagerIO } from "@package/xaero/hud/minimap/world/io";
import { $HudMod } from "@package/xaero/common";
import { $HudModule, $ModuleSession } from "@package/xaero/hud/module";
import { $MultiTextureRenderTypeRendererProvider } from "@package/xaero/common/graphics/renderer/multitexture";
import { $Minecraft } from "@package/net/minecraft/client";
import { $MinimapWorldState, $MinimapWorldStateUpdater } from "@package/xaero/hud/minimap/world/state";

declare module "@package/xaero/hud/minimap/module" {
    export class $MinimapSession extends $ModuleSession<$MinimapSession> {
        getWorldState(): $MinimapWorldState;
        getWorldManagerIO(): $MinimapWorldManagerIO;
        getDimensionHelper(): $MinimapDimensionHelper;
        getConfiguredWidth(): number;
        getHideMinimapUnderScreen(): boolean;
        getHideMinimapUnderF3(): boolean;
        getMc(): $Minecraft;
        getWaypointSession(): $WaypointSession;
        getMultiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        getWorldStateUpdater(): $MinimapWorldStateUpdater;
        getRadarSession(): $RadarSession;
        getWorldManager(): $MinimapWorldManager;
        getProcessor(): $MinimapProcessor;
        constructor(arg0: $HudMod, arg1: $HudModule<$MinimapSession>, arg2: $ClientPacketListener);
        get worldState(): $MinimapWorldState;
        get worldManagerIO(): $MinimapWorldManagerIO;
        get dimensionHelper(): $MinimapDimensionHelper;
        get configuredWidth(): number;
        get hideMinimapUnderScreen(): boolean;
        get hideMinimapUnderF3(): boolean;
        get mc(): $Minecraft;
        get waypointSession(): $WaypointSession;
        get multiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        get worldStateUpdater(): $MinimapWorldStateUpdater;
        get radarSession(): $RadarSession;
        get worldManager(): $MinimapWorldManager;
        get processor(): $MinimapProcessor;
    }
}
