import { $SpectatorMenu, $SpectatorMenuListener } from "@package/net/minecraft/client/gui/spectator";
import { $SpectatorGuiAccessor } from "@package/wily/factoryapi/base/client";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/spectator" {
    export class $SpectatorGui implements $SpectatorMenuListener, $SpectatorGuiAccessor {
        renderTooltip(arg0: $GuiGraphics): void;
        onHotbarSelected(arg0: number): void;
        onMouseMiddleClick(): void;
        isMenuActive(): boolean;
        onMouseScrolled(arg0: number): void;
        renderHotbar(arg0: $GuiGraphics): void;
        handler$eop000$factory_api$renderHotbar(guiGraphics: $GuiGraphics, ci: $CallbackInfo): void;
        handler$eop000$factory_api$renderHotbarReturn(guiGraphics: $GuiGraphics, ci: $CallbackInfo): void;
        handler$eop000$factory_api$renderTooltip(guiGraphics: $GuiGraphics, ci: $CallbackInfo): void;
        handler$eop000$factory_api$renderTooltipReturn(guiGraphics: $GuiGraphics, ci: $CallbackInfo): void;
        onSpectatorMenuClosed(arg0: $SpectatorMenu): void;
        getVisibility(): number;
        getMenu(): $SpectatorMenu;
        constructor(arg0: $Minecraft);
        get menuActive(): boolean;
        get visibility(): number;
        get menu(): $SpectatorMenu;
    }
}
