import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ObjectSelectionList, $ObjectSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $PackRepository, $PackSource, $Pack, $PackCompatibility } from "@package/net/minecraft/server/packs/repository";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Path_ } from "@package/java/nio/file";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Runnable_, $AutoCloseable } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/screens/packs" {
    export class $PackSelectionScreen$Watcher implements $AutoCloseable {
    }
    export class $PackSelectionModel {
        getSelected(): $Stream<$PackSelectionModel$Entry>;
        getUnselected(): $Stream<$PackSelectionModel$Entry>;
        findNewPacks(): void;
        commit(): void;
        constructor(arg0: $Runnable_, arg1: $Function_<$Pack, $ResourceLocation>, arg2: $PackRepository, arg3: $Consumer_<$PackRepository>);
        get selected(): $Stream<$PackSelectionModel$Entry>;
        get unselected(): $Stream<$PackSelectionModel$Entry>;
    }
    export class $PackSelectionModel$SelectedPackEntry extends $PackSelectionModel$EntryBase {
        pack: $Pack;
    }
    export class $PackSelectionModel$UnselectedPackEntry extends $PackSelectionModel$EntryBase {
        pack: $Pack;
    }
    export class $TransferableSelectionList extends $ObjectSelectionList<$TransferableSelectionList$PackEntry> {
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        screen: $PackSelectionScreen;
        active: boolean;
        hovered: $TransferableSelectionList$PackEntry;
        constructor(arg0: $Minecraft, arg1: $PackSelectionScreen, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $PackSelectionModel$EntryBase implements $PackSelectionModel$Entry {
        getCompatibility(): $PackCompatibility;
        isFixedPosition(): boolean;
        getPackSource(): $PackSource;
        moveUp(): void;
        moveDown(): void;
        canMoveUp(): boolean;
        canMoveDown(): boolean;
        getIconTexture(): $ResourceLocation;
        getDescription(): $Component;
        getTitle(): $Component;
        isRequired(): boolean;
        getId(): string;
        getExtendedDescription(): $Component;
        canSelect(): boolean;
        canUnselect(): boolean;
        pack: $Pack;
        constructor(arg0: $PackSelectionModel, arg1: $Pack);
        get compatibility(): $PackCompatibility;
        get fixedPosition(): boolean;
        get packSource(): $PackSource;
        get iconTexture(): $ResourceLocation;
        get description(): $Component;
        get title(): $Component;
        get required(): boolean;
        get id(): string;
        get extendedDescription(): $Component;
    }
    export class $PackSelectionScreen extends $Screen {
        updateFocus(arg0: $TransferableSelectionList): void;
        clearSelected(): void;
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
        constructor(arg0: $PackRepository, arg1: $Consumer_<$PackRepository>, arg2: $Path_, arg3: $Component_);
    }
    export class $TransferableSelectionList$PackEntry extends $ObjectSelectionList$Entry<$TransferableSelectionList$PackEntry> {
        keyboardSelection(): void;
        getPackId(): string;
        constructor(arg0: $Minecraft, arg1: $TransferableSelectionList, arg2: $PackSelectionModel$Entry);
        get packId(): string;
    }
    export class $PackSelectionModel$Entry {
    }
    export interface $PackSelectionModel$Entry {
        getCompatibility(): $PackCompatibility;
        isFixedPosition(): boolean;
        getPackSource(): $PackSource;
        moveUp(): void;
        moveDown(): void;
        getExtendedDescription(): $Component;
        unselect(): void;
        canSelect(): boolean;
        canUnselect(): boolean;
        canMoveUp(): boolean;
        canMoveDown(): boolean;
        getIconTexture(): $ResourceLocation;
        getDescription(): $Component;
        select(): void;
        isSelected(): boolean;
        getTitle(): $Component;
        isRequired(): boolean;
        getId(): string;
        get compatibility(): $PackCompatibility;
        get fixedPosition(): boolean;
        get packSource(): $PackSource;
        get extendedDescription(): $Component;
        get iconTexture(): $ResourceLocation;
        get description(): $Component;
        get selected(): boolean;
        get title(): $Component;
        get required(): boolean;
        get id(): string;
    }
}
