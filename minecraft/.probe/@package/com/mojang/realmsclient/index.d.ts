import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $RealmsAvailabilityAccessor } from "@package/wily/factoryapi/mixin/base";
import { $ImageButton, $ObjectSelectionList$Entry, $WidgetSprites, $Renderable, $SpriteIconButton$CenteredIcon } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $RealmsServiceException } from "@package/com/mojang/realmsclient/exception";
import { $RealmsServer } from "@package/com/mojang/realmsclient/dto";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Enum, $Record } from "@package/java/lang";
import { $RealmsScreen, $RealmsObjectSelectionList } from "@package/net/minecraft/realms";
export * as gui from "@package/com/mojang/realmsclient/gui";
export * as dto from "@package/com/mojang/realmsclient/dto";
export * as util from "@package/com/mojang/realmsclient/util";
export * as client from "@package/com/mojang/realmsclient/client";
export * as exception from "@package/com/mojang/realmsclient/exception";

declare module "@package/com/mojang/realmsclient" {
    export class $RealmsMainScreen$EmptyEntry extends $RealmsMainScreen$Entry {
    }
    export class $RealmsMainScreen$ButtonEntry extends $RealmsMainScreen$Entry {
    }
    export class $RealmsAvailability$Result extends $Record {
        createErrorScreen(arg0: $Screen): $Screen;
        type(): $RealmsAvailability$Type;
        exception(): $RealmsServiceException;
        constructor(arg0: $RealmsAvailability$Type_);
        constructor(arg0: $RealmsAvailability$Type_, arg1: $RealmsServiceException);
        constructor(arg0: $RealmsServiceException);
    }
    /**
     * Values that may be interpreted as {@link $RealmsAvailability$Result}.
     */
    export type $RealmsAvailability$Result_ = { type?: $RealmsAvailability$Type_, exception?: $RealmsServiceException,  } | [type?: $RealmsAvailability$Type_, exception?: $RealmsServiceException, ];
    export class $RealmsMainScreen$RealmsCall<T> {
    }
    export interface $RealmsMainScreen$RealmsCall<T> {
    }
    /**
     * Values that may be interpreted as {@link $RealmsMainScreen$RealmsCall}.
     */
    export type $RealmsMainScreen$RealmsCall_<T> = (() => void);
    export class $RealmsAvailability implements $RealmsAvailabilityAccessor {
        static setFuture$factory_api_$md$68cb88$0(arg0: $CompletableFuture<any>): void;
        static get(): $CompletableFuture<$RealmsAvailability$Result>;
        constructor();
        static set future$factory_api_$md$68cb88$0(value: $CompletableFuture<any>);
    }
    export class $RealmsMainScreen$NotificationButton extends $SpriteIconButton$CenteredIcon {
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $RealmsMainScreen$ServerEntry extends $RealmsMainScreen$Entry {
    }
    export class $RealmsMainScreen$CrossButton extends $ImageButton {
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        sprites: $WidgetSprites;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $RealmsMainScreen$Entry extends $ObjectSelectionList$Entry<$RealmsMainScreen$Entry> {
    }
    export class $RealmsMainScreen$AvailableSnapshotEntry extends $RealmsMainScreen$Entry {
    }
    export class $RealmsAvailability$Type extends $Enum<$RealmsAvailability$Type> {
        static values(): $RealmsAvailability$Type[];
        static valueOf(arg0: string): $RealmsAvailability$Type;
        static SUCCESS: $RealmsAvailability$Type;
        static AUTHENTICATION_ERROR: $RealmsAvailability$Type;
        static NEEDS_PARENTAL_CONSENT: $RealmsAvailability$Type;
        static INCOMPATIBLE_CLIENT: $RealmsAvailability$Type;
        static UNEXPECTED_ERROR: $RealmsAvailability$Type;
    }
    /**
     * Values that may be interpreted as {@link $RealmsAvailability$Type}.
     */
    export type $RealmsAvailability$Type_ = "success" | "incompatible_client" | "needs_parental_consent" | "authentication_error" | "unexpected_error";
    export class $RealmsMainScreen$NotificationMessageEntry extends $RealmsMainScreen$Entry {
    }
    export class $Unit extends $Enum<$Unit> {
        static convertTo(arg0: number, arg1: $Unit_): number;
        static humanReadable(arg0: number, arg1: $Unit_): string;
        static humanReadable(arg0: number): string;
        static getLargest(arg0: number): $Unit;
        static values(): $Unit[];
        static valueOf(arg0: string): $Unit;
        static B: $Unit;
        static MB: $Unit;
        static KB: $Unit;
        static GB: $Unit;
    }
    /**
     * Values that may be interpreted as {@link $Unit}.
     */
    export type $Unit_ = "b" | "kb" | "mb" | "gb";
    export class $RealmsMainScreen$LayoutState extends $Enum<$RealmsMainScreen$LayoutState> {
    }
    /**
     * Values that may be interpreted as {@link $RealmsMainScreen$LayoutState}.
     */
    export type $RealmsMainScreen$LayoutState_ = "loading" | "no_realms" | "list";
    export class $RealmsMainScreen extends $RealmsScreen {
        static getVersionComponent(arg0: string, arg1: number): $Component;
        static getVersionComponent(arg0: string, arg1: boolean): $Component;
        static play(arg0: $RealmsServer, arg1: $Screen, arg2: boolean): void;
        static play(arg0: $RealmsServer, arg1: $Screen): void;
        static isSnapshot(): boolean;
        static refreshPendingInvites(): void;
        static refreshServerList(): void;
        resetScreen(): void;
        init(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen);
        static get snapshot(): boolean;
    }
    export class $RealmsMainScreen$ParentEntry extends $RealmsMainScreen$Entry {
    }
    export class $RealmsMainScreen$RealmSelectionList extends $RealmsObjectSelectionList<$RealmsMainScreen$Entry> {
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $RealmsMainScreen$Entry;
    }
}
