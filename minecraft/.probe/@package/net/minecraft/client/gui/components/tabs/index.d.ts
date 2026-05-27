import { $LinearLayout } from "@package/net/minecraft/client/gui/layouts";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $TabNavigationBarAccessor } from "@package/wily/factoryapi/mixin/base";
import { $TabNavigationWidgetExtensionDuck } from "@package/com/qendolin/betterclouds/duck";
import { $AbstractWidget, $TabButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $TabNavigationBarAccessor as $TabNavigationBarAccessor$1 } from "@package/dev/isxander/yacl3/mixin";
import { $Consumer_ } from "@package/java/util/function";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Iterable_ } from "@package/java/lang";
import { $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/components/tabs" {
    export class $TabNavigationBar$Builder {
        addTabs(...arg0: $Tab[]): $TabNavigationBar$Builder;
        build(): $TabNavigationBar;
    }
    export class $TabManager {
        setCurrentTab(arg0: $Tab, arg1: boolean): void;
        setTabArea(arg0: $ScreenRectangle_): void;
        getCurrentTab(): $Tab;
        constructor(arg0: $Consumer_<$AbstractWidget>, arg1: $Consumer_<$AbstractWidget>);
        set tabArea(value: $ScreenRectangle_);
    }
    export class $Tab {
    }
    export interface $Tab {
        getTabTitle(): $Component;
        doLayout(arg0: $ScreenRectangle_): void;
        visitChildren(arg0: $Consumer_<$AbstractWidget>): void;
        get tabTitle(): $Component;
    }
    export class $GridLayoutTab implements $Tab {
        getTabTitle(): $Component;
        doLayout(arg0: $ScreenRectangle_): void;
        visitChildren(arg0: $Consumer_<$AbstractWidget>): void;
        constructor(arg0: $Component_);
        get tabTitle(): $Component;
    }
    export class $TabNavigationBar extends $AbstractContainerEventHandler implements $Renderable, $NarratableEntry, $TabNavigationBarAccessor, $TabNavigationWidgetExtensionDuck, $TabNavigationBarAccessor$1 {
        setWidth(arg0: number): void;
        keyPressed(arg0: number): boolean;
        updateNarration(arg0: $NarrationElementOutput): void;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        arrangeElements(): void;
        betterclouds$setRenderBackground(renderBackground: boolean): void;
        selectTab(arg0: number, arg1: boolean): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        static builder(arg0: $TabManager, arg1: number): $TabNavigationBar$Builder;
        isActive(): boolean;
        yacl$getLayout(): $LinearLayout;
        yacl$getWidth(): number;
        yacl$getTabManager(): $TabManager;
        yacl$getTabs(): $ImmutableList<$Tab>;
        yacl$getTabButtons(): $ImmutableList<$TabButton>;
        getCurrentTabIndex(): number;
        constructor(arg0: number, arg1: $TabManager, arg2: $Iterable_<$Tab>);
        set width(value: number);
        get active(): boolean;
        get currentTabIndex(): number;
    }
}
