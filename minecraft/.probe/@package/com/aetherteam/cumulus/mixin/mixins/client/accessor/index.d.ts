import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $TimerQuery$FrameProfile } from "@package/com/mojang/blaze3d/systems";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Button$OnPress, $SplashRenderer, $Button$CreateNarration, $Tooltip } from "@package/net/minecraft/client/gui/components";

declare module "@package/com/aetherteam/cumulus/mixin/mixins/client/accessor" {
    export class $MinecraftAccessor {
    }
    export interface $MinecraftAccessor {
        cumulus$setIsLocalServer(arg0: boolean): void;
        cumulus$getCurrentFrameProfile(): $TimerQuery$FrameProfile;
        cumulus$setCurrentFrameProfile(arg0: $TimerQuery$FrameProfile): void;
    }
    export class $SplashRendererAccessor {
    }
    export interface $SplashRendererAccessor {
        cumulus$getSplash(): string;
        cumulus$setSplash(arg0: string): void;
    }
    export class $EntityRendererAccessor {
    }
    export interface $EntityRendererAccessor {
        cumulus$getShadowRadius(): number;
        cumulus$setShadowRadius(arg0: number): void;
    }
    export class $TitleScreenAccessor {
    }
    export interface $TitleScreenAccessor {
        cumulus$getSplash(): $SplashRenderer;
        setSplash(arg0: $SplashRenderer): void;
        cumulus$setFading(arg0: boolean): void;
        cumulus$setFadeInStart(arg0: number): void;
        set splash(value: $SplashRenderer);
    }
    export class $ScreenAccessor {
        static cumulus$getCubeMap(): $CubeMap;
        static cumulus$setCubeMap(arg0: $CubeMap): void;
        static cumulus$getPanorama(): $PanoramaRenderer;
        static cumulus$setPanorama(arg0: $PanoramaRenderer): void;
    }
    export interface $ScreenAccessor {
    }
    export class $ButtonBuilderAccessor {
    }
    export interface $ButtonBuilderAccessor {
        cumulus$x(): number;
        cumulus$y(): number;
        cumulus$width(): number;
        cumulus$height(): number;
        cumulus$message(): $Component;
        cumulus$onPress(): $Button$OnPress;
        cumulus$createNarration(): $Button$CreateNarration;
        cumulus$tooltip(): $Tooltip;
    }
}
