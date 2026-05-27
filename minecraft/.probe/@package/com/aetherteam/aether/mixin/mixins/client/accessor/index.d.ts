import { $MutableComponent, $Component, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Language } from "@package/net/minecraft/locale";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $LogoRenderer, $SplashRenderer, $LerpingBossEvent } from "@package/net/minecraft/client/gui/components";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CloudStatus, $CloudStatus_ } from "@package/net/minecraft/client";
import { $UUID, $List, $Map_, $Map, $UUID_, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ChannelAccess$ChannelHandle } from "@package/net/minecraft/client/sounds";
import { $BlockColor_, $BlockColor } from "@package/net/minecraft/client/color/block";
import { $MeshData, $Tesselator, $VertexBuffer } from "@package/com/mojang/blaze3d/vertex";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Gui$HeartType } from "@package/net/minecraft/client/gui";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/aetherteam/aether/mixin/mixins/client/accessor" {
    export class $GuiAccessor {
    }
    export interface $GuiAccessor {
        aether$getRandom(): $RandomSource;
        aether$getLastHealthTime(): number;
        aether$getHealthBlinkTime(): number;
    }
    export class $SoundEngineAccessor {
    }
    export interface $SoundEngineAccessor {
        aether$getInstanceToChannel(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
    }
    /**
     * Values that may be interpreted as {@link $SoundEngineAccessor}.
     */
    export type $SoundEngineAccessor_ = (() => $Map_<$SoundInstance, $ChannelAccess$ChannelHandle>);
    export class $AbstractWidgetAccessor {
    }
    export interface $AbstractWidgetAccessor {
        aether$getAlpha(): number;
    }
    /**
     * Values that may be interpreted as {@link $AbstractWidgetAccessor}.
     */
    export type $AbstractWidgetAccessor_ = (() => number);
    export class $HeartTypeAccessor {
        static callForPlayer(arg0: $Player): $Gui$HeartType;
    }
    export interface $HeartTypeAccessor {
    }
    export class $I18nAccessor {
        static aether$getLanguage(): $Language;
    }
    export interface $I18nAccessor {
    }
    export class $ButtonAccessor {
    }
    export interface $ButtonAccessor {
        callCreateNarrationMessage(): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $ButtonAccessor}.
     */
    export type $ButtonAccessor_ = (() => $MutableComponent_);
    export class $TitleScreenAccessor {
    }
    export interface $TitleScreenAccessor {
        aether$getSplash(): $SplashRenderer;
        aether$setSplash(arg0: $SplashRenderer): void;
        aether$setFading(arg0: boolean): void;
        aether$getLogoRenderer(): $LogoRenderer;
        aether$setLogoRenderer(arg0: $LogoRenderer): void;
        callGetMultiplayerDisabledReason(): $Component;
    }
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        aether$getNarratables(): $List<$NarratableEntry>;
    }
    /**
     * Values that may be interpreted as {@link $ScreenAccessor}.
     */
    export type $ScreenAccessor_ = (() => $List_<$NarratableEntry>);
    export class $BlockColorsAccessor {
    }
    export interface $BlockColorsAccessor {
        aether$getBlockColors(): $Map<$Block, $BlockColor>;
    }
    /**
     * Values that may be interpreted as {@link $BlockColorsAccessor}.
     */
    export type $BlockColorsAccessor_ = (() => $Map_<$Block_, $BlockColor_>);
    export class $MinecraftAccessor {
    }
    export interface $MinecraftAccessor {
        aether$setIsLocalServer(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftAccessor}.
     */
    export type $MinecraftAccessor_ = ((arg0: boolean) => void);
    export class $PlayerModelAccessor {
    }
    export interface $PlayerModelAccessor {
        aether$getSlim(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PlayerModelAccessor}.
     */
    export type $PlayerModelAccessor_ = (() => boolean);
    export class $QuadrupedModelAccessor {
    }
    export interface $QuadrupedModelAccessor {
        aether$getHead(): $ModelPart;
    }
    /**
     * Values that may be interpreted as {@link $QuadrupedModelAccessor}.
     */
    export type $QuadrupedModelAccessor_ = (() => $ModelPart);
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        aether$getStarBuffer(): $VertexBuffer;
        aether$getSkyBuffer(): $VertexBuffer;
        aether$getCloudBuffer(): $VertexBuffer;
        aether$setCloudBuffer(arg0: $VertexBuffer): void;
        aether$getPrevCloudsType(): $CloudStatus;
        aether$setPrevCloudsType(arg0: $CloudStatus_): void;
        aether$isGenerateClouds(): boolean;
        aether$setGenerateClouds(arg0: boolean): void;
        callBuildClouds(arg0: $Tesselator, arg1: number, arg2: number, arg3: number, arg4: $Vec3_): $MeshData;
    }
    export class $EntityRendererAccessor {
    }
    export interface $EntityRendererAccessor {
        aether$getShadowRadius(): number;
        aether$setShadowRadius(arg0: number): void;
    }
    export class $BossHealthOverlayAccessor {
    }
    export interface $BossHealthOverlayAccessor {
        getEvents(): $Map<$UUID, $LerpingBossEvent>;
        get events(): $Map<$UUID, $LerpingBossEvent>;
    }
    /**
     * Values that may be interpreted as {@link $BossHealthOverlayAccessor}.
     */
    export type $BossHealthOverlayAccessor_ = (() => $Map_<$UUID_, $LerpingBossEvent>);
}
