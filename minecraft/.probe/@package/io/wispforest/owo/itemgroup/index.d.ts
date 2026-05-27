import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Consumer_, $BiConsumer, $BiConsumer_, $Supplier_, $Supplier } from "@package/java/util/function";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $CreativeModeTab_, $CreativeModeTab$ItemDisplayParameters_, $Item$Properties, $CreativeModeTab, $Item, $ItemStack_, $CreativeModeTab$DisplayItemsGenerator, $ItemStack, $CreativeModeTab$Output } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ItemGroupButton, $ItemGroupTab$ContentSupplier_, $ItemGroupTab } from "@package/io/wispforest/owo/itemgroup/gui";
import { $List, $Set, $Collection } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Record } from "@package/java/lang";
export * as gui from "@package/io/wispforest/owo/itemgroup/gui";

declare module "@package/io/wispforest/owo/itemgroup" {
    export class $Icon {
        static of(texture: $ResourceLocation_, textureSize: number, frameDelay: number, loop: boolean): $Icon;
        static of(texture: $ResourceLocation_, u: number, v: number, textureWidth: number, textureHeight: number): $Icon;
        static of(item: $ItemLike_): $Icon;
        static of(stack: $ItemStack_): $Icon;
    }
    export interface $Icon {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Icon}.
     */
    export type $Icon_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
    export class $OwoItemSettingsExtension {
    }
    export interface $OwoItemSettingsExtension {
        stackGenerator(): $BiConsumer<$Item, $CreativeModeTab$Output>;
        stackGenerator(generator: $BiConsumer_<$Item, $CreativeModeTab$Output>): $Item$Properties;
        groupSupplier(): $Supplier<$OwoItemGroup>;
        shouldTrackUsageStat(): boolean;
        trackUsageStat(): $Item$Properties;
        group(ref: $ItemGroupReference_): $Item$Properties;
        /**
         * @deprecated
         */
        group(group: $OwoItemGroup): $Item$Properties;
        /**
         * @deprecated
         */
        group(): $OwoItemGroup;
        group(groupSupplier: $Supplier_<$OwoItemGroup>): $Item$Properties;
        tab(tab: number): $Item$Properties;
        tab(): number;
    }
    export class $OwoItemGroup extends $CreativeModeTab {
        getTab(index: number): $ItemGroupTab;
        getButtons(): $List<$ItemGroupButton>;
        addTab(icon: $Icon_, name: string, contentTag: $TagKey_<$Item>, texture: $ResourceLocation_, primary: boolean): void;
        addTab(icon: $Icon_, name: string, contentTag: $TagKey_<$Item>, primary: boolean): void;
        addCustomTab(icon: $Icon_, name: string, contentSupplier: $ItemGroupTab$ContentSupplier_, texture: $ResourceLocation_, primary: boolean): void;
        addCustomTab(icon: $Icon_, name: string, contentSupplier: $ItemGroupTab$ContentSupplier_, primary: boolean): void;
        selectSingleTab(tab: number, context: $CreativeModeTab$ItemDisplayParameters_): void;
        deselectTab(tab: number, context: $CreativeModeTab$ItemDisplayParameters_): void;
        toggleTab(tab: number, context: $CreativeModeTab$ItemDisplayParameters_): void;
        isTabSelected(tab: number): boolean;
        selectedTabs(): $IntSet;
        owo$getBackgroundTexture(): $ResourceLocation;
        getScrollerTextures(): $OwoItemGroup$ScrollerTextures;
        getTabTextures(): $OwoItemGroup$TabTextures;
        getTabStackHeight(): number;
        getButtonStackHeight(): number;
        hasDynamicTitle(): boolean;
        shouldDisplaySingleTab(): boolean;
        canSelectMultipleTabs(): boolean;
        addButton(button: $ItemGroupButton): void;
        selectTab(tab: number, context: $CreativeModeTab$ItemDisplayParameters_): void;
        icon(): $Icon;
        static builder(id: $ResourceLocation_, iconSupplier: $Supplier_<$Icon>): $OwoItemGroup$Builder;
        initialize(): void;
        id(): $ResourceLocation;
        buttons: $List<$ItemGroupButton>;
        tabsAfter: $List<$ResourceLocation>;
        tabs: $List<$ItemGroupTab>;
        tabsBefore: $List<$ResourceLocation>;
        displayItemsGenerator: $CreativeModeTab$DisplayItemsGenerator;
        static DEFAULT_STACK_GENERATOR: $BiConsumer<$Item, $CreativeModeTab$Output>;
        displayItemsSearchTab: $Set<$ItemStack>;
        displayItems: $Collection<$ItemStack>;
        get scrollerTextures(): $OwoItemGroup$ScrollerTextures;
        get tabTextures(): $OwoItemGroup$TabTextures;
        get tabStackHeight(): number;
        get buttonStackHeight(): number;
    }
    export class $OwoItemGroup$ButtonDefinition {
        static tooltipFor(group: $CreativeModeTab_, component: string, componentName: string): $Component;
    }
    export interface $OwoItemGroup$ButtonDefinition {
        tooltip(): $Component;
        texture(): $ResourceLocation;
        icon(): $Icon;
    }
    export class $ItemGroupReference extends $Record {
        groupSup(): $Supplier<$OwoItemGroup>;
        group(): $OwoItemGroup;
        tab(): number;
        /**
         * @deprecated
         */
        constructor(group: $OwoItemGroup, tab: number);
        constructor(groupSup: $Supplier_<$OwoItemGroup>, tab: number);
    }
    /**
     * Values that may be interpreted as {@link $ItemGroupReference}.
     */
    export type $ItemGroupReference_ = { tab?: number, groupSup?: $Supplier_<$OwoItemGroup>,  } | [tab?: number, groupSup?: $Supplier_<$OwoItemGroup>, ];
    export class $OwoItemGroup$ScrollerTextures extends $Record {
        disabled(): $ResourceLocation;
        enabled(): $ResourceLocation;
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $OwoItemGroup$ScrollerTextures}.
     */
    export type $OwoItemGroup$ScrollerTextures_ = { enabled?: $ResourceLocation_, disabled?: $ResourceLocation_,  } | [enabled?: $ResourceLocation_, disabled?: $ResourceLocation_, ];
    export class $OwoItemGroup$Builder {
        backgroundTexture(backgroundTexture: $ResourceLocation_): $OwoItemGroup$Builder;
        withoutMultipleSelection(): $OwoItemGroup$Builder;
        disableDynamicTitle(): $OwoItemGroup$Builder;
        scrollerTextures(scrollerTextures: $OwoItemGroup$ScrollerTextures_): $OwoItemGroup$Builder;
        tabTextures(tabTextures: $OwoItemGroup$TabTextures_): $OwoItemGroup$Builder;
        tabStackHeight(tabStackHeight: number): $OwoItemGroup$Builder;
        buttonStackHeight(buttonStackHeight: number): $OwoItemGroup$Builder;
        displaySingleTab(): $OwoItemGroup$Builder;
        build(): $OwoItemGroup;
        initializer(initializer: $Consumer_<$OwoItemGroup>): $OwoItemGroup$Builder;
    }
    export class $OwoItemGroup$TabTextures extends $Record {
        topSelectedFirstColumn(): $ResourceLocation;
        topSelected(): $ResourceLocation;
        topUnselected(): $ResourceLocation;
        bottomSelectedFirstColumn(): $ResourceLocation;
        bottomSelected(): $ResourceLocation;
        bottomUnselected(): $ResourceLocation;
        constructor(topSelected: $ResourceLocation_, topSelectedFirstColumn: $ResourceLocation_, topUnselected: $ResourceLocation_, bottomSelected: $ResourceLocation_, bottomSelectedFirstColumn: $ResourceLocation_, bottomUnselected: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $OwoItemGroup$TabTextures}.
     */
    export type $OwoItemGroup$TabTextures_ = { topSelected?: $ResourceLocation_, bottomSelected?: $ResourceLocation_, topUnselected?: $ResourceLocation_, bottomUnselected?: $ResourceLocation_, topSelectedFirstColumn?: $ResourceLocation_, bottomSelectedFirstColumn?: $ResourceLocation_,  } | [topSelected?: $ResourceLocation_, bottomSelected?: $ResourceLocation_, topUnselected?: $ResourceLocation_, bottomUnselected?: $ResourceLocation_, topSelectedFirstColumn?: $ResourceLocation_, bottomSelectedFirstColumn?: $ResourceLocation_, ];
}
