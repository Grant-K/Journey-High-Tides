import { $CreativeModeTab$DisplayItemsGenerator, $ItemStack, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Collection, $Set, $List } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/de/dafuqs/fractal/api" {
    export class $ICreativeTabConfiguration {
    }
    export interface $ICreativeTabConfiguration {
        fractal$setTabOffset(arg0: number): void;
        fractal$setTextColor(arg0: number, arg1: number, arg2: number): void;
    }
    export class $CreativeSubTabStyle extends $Record {
        backgroundTexture(): $ResourceLocation;
        selectedSubtabTextureLeft(): $ResourceLocation;
        selectedSubtabTextureRight(): $ResourceLocation;
        unselectedSubtabTextureRight(): $ResourceLocation;
        enabledScrollbarTexture(): $ResourceLocation;
        disabledScrollbarTexture(): $ResourceLocation;
        tabTopFirstSelectedTexture(): $ResourceLocation;
        tabTopSelectedTexture(): $ResourceLocation;
        tabTopLastSelectedTexture(): $ResourceLocation;
        tabTopFirstUnselectedTexture(): $ResourceLocation;
        tabTopUnselectedTexture(): $ResourceLocation;
        tabTopLastUnselectedTexture(): $ResourceLocation;
        tabBottomFirstSelectedTexture(): $ResourceLocation;
        tabBottomSelectedTexture(): $ResourceLocation;
        tabBottomLastSelectedTexture(): $ResourceLocation;
        tabBottomFirstUnselectedTexture(): $ResourceLocation;
        tabBottomUnselectedTexture(): $ResourceLocation;
        tabBottomLastUnselectedTexture(): $ResourceLocation;
        unselectedSubtabTextureLeft(): $ResourceLocation;
        static DEFAULT_SUBTAB_UNSELECTED_TEXTURE_LEFT: $ResourceLocation;
        static DEFAULT_SUBTAB_SELECTED_TEXTURE_RIGHT: $ResourceLocation;
        static DEFAULT_SUBTAB_SELECTED_TEXTURE_LEFT: $ResourceLocation;
        static DEFAULT_SUBTAB_UNSELECTED_TEXTURE_RIGHT: $ResourceLocation;
        constructor(backgroundTexture: $ResourceLocation_, selectedSubtabTextureLeft: $ResourceLocation_, unselectedSubtabTextureLeft: $ResourceLocation_, selectedSubtabTextureRight: $ResourceLocation_, unselectedSubtabTextureRight: $ResourceLocation_, enabledScrollbarTexture: $ResourceLocation_, disabledScrollbarTexture: $ResourceLocation_, tabTopFirstSelectedTexture: $ResourceLocation_, tabTopSelectedTexture: $ResourceLocation_, tabTopLastSelectedTexture: $ResourceLocation_, tabTopFirstUnselectedTexture: $ResourceLocation_, tabTopUnselectedTexture: $ResourceLocation_, tabTopLastUnselectedTexture: $ResourceLocation_, tabBottomFirstSelectedTexture: $ResourceLocation_, tabBottomSelectedTexture: $ResourceLocation_, tabBottomLastSelectedTexture: $ResourceLocation_, tabBottomFirstUnselectedTexture: $ResourceLocation_, tabBottomUnselectedTexture: $ResourceLocation_, tabBottomLastUnselectedTexture: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $CreativeSubTabStyle}.
     */
    export type $CreativeSubTabStyle_ = { unselectedSubtabTextureLeft?: $ResourceLocation_, tabTopFirstUnselectedTexture?: $ResourceLocation_, selectedSubtabTextureLeft?: $ResourceLocation_, tabBottomFirstSelectedTexture?: $ResourceLocation_, disabledScrollbarTexture?: $ResourceLocation_, tabTopLastSelectedTexture?: $ResourceLocation_, tabTopFirstSelectedTexture?: $ResourceLocation_, tabBottomUnselectedTexture?: $ResourceLocation_, tabBottomLastSelectedTexture?: $ResourceLocation_, tabTopLastUnselectedTexture?: $ResourceLocation_, enabledScrollbarTexture?: $ResourceLocation_, tabBottomSelectedTexture?: $ResourceLocation_, tabBottomLastUnselectedTexture?: $ResourceLocation_, selectedSubtabTextureRight?: $ResourceLocation_, tabTopUnselectedTexture?: $ResourceLocation_, tabBottomFirstUnselectedTexture?: $ResourceLocation_, backgroundTexture?: $ResourceLocation_, unselectedSubtabTextureRight?: $ResourceLocation_, tabTopSelectedTexture?: $ResourceLocation_,  } | [unselectedSubtabTextureLeft?: $ResourceLocation_, tabTopFirstUnselectedTexture?: $ResourceLocation_, selectedSubtabTextureLeft?: $ResourceLocation_, tabBottomFirstSelectedTexture?: $ResourceLocation_, disabledScrollbarTexture?: $ResourceLocation_, tabTopLastSelectedTexture?: $ResourceLocation_, tabTopFirstSelectedTexture?: $ResourceLocation_, tabBottomUnselectedTexture?: $ResourceLocation_, tabBottomLastSelectedTexture?: $ResourceLocation_, tabTopLastUnselectedTexture?: $ResourceLocation_, enabledScrollbarTexture?: $ResourceLocation_, tabBottomSelectedTexture?: $ResourceLocation_, tabBottomLastUnselectedTexture?: $ResourceLocation_, selectedSubtabTextureRight?: $ResourceLocation_, tabTopUnselectedTexture?: $ResourceLocation_, tabBottomFirstUnselectedTexture?: $ResourceLocation_, backgroundTexture?: $ResourceLocation_, unselectedSubtabTextureRight?: $ResourceLocation_, tabTopSelectedTexture?: $ResourceLocation_, ];
    export class $CreativeSubTab extends $CreativeModeTab {
        getStyle(): $CreativeSubTabStyle;
        shouldShowParentTitle(): boolean;
        getIndexInParent(): number;
        getIdentifier(): $ResourceLocation;
        getParent(): $CreativeModeTab;
        static DEFAULT_STYLE: $CreativeSubTabStyle;
        static SUBTABS: $List<$CreativeSubTab>;
        tabsAfter: $List<$ResourceLocation>;
        tabsBefore: $List<$ResourceLocation>;
        displayItemsGenerator: $CreativeModeTab$DisplayItemsGenerator;
        displayItemsSearchTab: $Set<$ItemStack>;
        displayItems: $Collection<$ItemStack>;
        get style(): $CreativeSubTabStyle;
        get indexInParent(): number;
        get identifier(): $ResourceLocation;
        get parent(): $CreativeModeTab;
    }
}
