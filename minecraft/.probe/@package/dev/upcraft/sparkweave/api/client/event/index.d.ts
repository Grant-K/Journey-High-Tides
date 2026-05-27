import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $EntityRendererProvider_, $EntityRendererProvider } from "@package/net/minecraft/client/renderer/entity";
import { $MenuScreens$ScreenConstructor, $Screen } from "@package/net/minecraft/client/gui/screens";
import { $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $BlockEntityRendererProvider, $BlockEntityRendererProvider_ } from "@package/net/minecraft/client/renderer/blockentity";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Event } from "@package/dev/upcraft/sparkweave/api/event";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/dev/upcraft/sparkweave/api/client/event" {
    export class $RegisterBlockEntityRenderersEvent {
        static EVENT: $Event<$RegisterBlockEntityRenderersEvent$Callback>;
    }
    export interface $RegisterBlockEntityRenderersEvent {
        registerRenderer<T extends $BlockEntity>(arg0: $Supplier_<$BlockEntityType<T>>, arg1: $BlockEntityRendererProvider_<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $RegisterBlockEntityRenderersEvent}.
     */
    export type $RegisterBlockEntityRenderersEvent_ = ((arg0: $Supplier<$BlockEntityType<any>>, arg1: $BlockEntityRendererProvider<any>) => void);
    export class $RegisterMenuScreensEvent {
        static EVENT: $Event<$RegisterMenuScreensEvent$Callback>;
    }
    export interface $RegisterMenuScreensEvent {
        register<MENU extends $AbstractContainerMenu, SCREEN extends $Screen>(arg0: $Supplier_<$MenuType<MENU>>, arg1: $RegisterMenuScreensEvent$ScreenConstructor_<MENU, SCREEN>): void;
    }
    /**
     * Values that may be interpreted as {@link $RegisterMenuScreensEvent}.
     */
    export type $RegisterMenuScreensEvent_ = ((arg0: $Supplier<$MenuType<any>>, arg1: $RegisterMenuScreensEvent$ScreenConstructor<any, any>) => void);
    export class $RegisterMenuScreensEvent$ScreenConstructor<MENU extends $AbstractContainerMenu, SCREEN extends $Screen> {
    }
    export interface $RegisterMenuScreensEvent$ScreenConstructor<MENU extends $AbstractContainerMenu, SCREEN extends $Screen> extends $MenuScreens$ScreenConstructor<MENU, SCREEN> {
    }
    /**
     * Values that may be interpreted as {@link $RegisterMenuScreensEvent$ScreenConstructor}.
     */
    export type $RegisterMenuScreensEvent$ScreenConstructor_<MENU, SCREEN> = (() => void);
    export class $RegisterEntityRenderersEvent {
        static EVENT: $Event<$RegisterEntityRenderersEvent$Callback>;
    }
    export interface $RegisterEntityRenderersEvent {
        registerRenderer<T extends $Entity>(arg0: $Supplier_<$EntityType<T>>, arg1: $EntityRendererProvider_<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $RegisterEntityRenderersEvent}.
     */
    export type $RegisterEntityRenderersEvent_ = ((arg0: $Supplier<$EntityType<any>>, arg1: $EntityRendererProvider<any>) => void);
    export class $RegisterMenuScreensEvent$Callback {
    }
    export interface $RegisterMenuScreensEvent$Callback {
        registerMenuScreens(arg0: $RegisterMenuScreensEvent_): void;
    }
    /**
     * Values that may be interpreted as {@link $RegisterMenuScreensEvent$Callback}.
     */
    export type $RegisterMenuScreensEvent$Callback_ = ((arg0: $RegisterMenuScreensEvent) => void);
    export class $RegisterEntityRenderersEvent$Callback {
    }
    export interface $RegisterEntityRenderersEvent$Callback {
        registerEntityRenderers(arg0: $RegisterEntityRenderersEvent_): void;
    }
    /**
     * Values that may be interpreted as {@link $RegisterEntityRenderersEvent$Callback}.
     */
    export type $RegisterEntityRenderersEvent$Callback_ = ((arg0: $RegisterEntityRenderersEvent) => void);
    export class $RegisterBlockEntityRenderersEvent$Callback {
    }
    export interface $RegisterBlockEntityRenderersEvent$Callback {
        registerBlockEntityRenderers(arg0: $RegisterBlockEntityRenderersEvent_): void;
    }
    /**
     * Values that may be interpreted as {@link $RegisterBlockEntityRenderersEvent$Callback}.
     */
    export type $RegisterBlockEntityRenderersEvent$Callback_ = ((arg0: $RegisterBlockEntityRenderersEvent) => void);
}
