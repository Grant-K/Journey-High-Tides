import { $Consumer_ } from "@package/java/util/function";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $TabOrderedElement } from "@package/net/minecraft/client/gui/components";
import { $List_ } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/narration" {
    export class $NarrationThunk<T> {
        getText(arg0: $Consumer_<string>): void;
        static from(arg0: $List_<$Component_>): $NarrationThunk<never>;
        static from(arg0: string): $NarrationThunk<never>;
        static from(arg0: $Component_): $NarrationThunk<never>;
        static EMPTY: $NarrationThunk<never>;
    }
    export class $NarrationElementOutput {
    }
    export interface $NarrationElementOutput {
        nest(): $NarrationElementOutput;
        add(arg0: $NarratedElementType_, arg1: $Component_): void;
        add(arg0: $NarratedElementType_, arg1: $NarrationThunk<never>): void;
        add(arg0: $NarratedElementType_, ...arg1: $Component_[]): void;
        add(arg0: $NarratedElementType_, arg1: string): void;
    }
    export class $NarratableEntry$NarrationPriority extends $Enum<$NarratableEntry$NarrationPriority> {
        isTerminal(): boolean;
        static values(): $NarratableEntry$NarrationPriority[];
        static valueOf(arg0: string): $NarratableEntry$NarrationPriority;
        static HOVERED: $NarratableEntry$NarrationPriority;
        static NONE: $NarratableEntry$NarrationPriority;
        static FOCUSED: $NarratableEntry$NarrationPriority;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NarratableEntry$NarrationPriority}.
     */
    export type $NarratableEntry$NarrationPriority_ = "none" | "hovered" | "focused";
    export class $ScreenNarrationCollector$EntryKey {
    }
    export class $NarratableEntry {
    }
    export interface $NarratableEntry extends $TabOrderedElement, $NarrationSupplier {
        narrationPriority(): $NarratableEntry$NarrationPriority;
        isActive(): boolean;
        get active(): boolean;
    }
    export class $NarratedElementType extends $Enum<$NarratedElementType> {
        static values(): $NarratedElementType[];
        static valueOf(arg0: string): $NarratedElementType;
        static POSITION: $NarratedElementType;
        static USAGE: $NarratedElementType;
        static HINT: $NarratedElementType;
        static TITLE: $NarratedElementType;
    }
    /**
     * Values that may be interpreted as {@link $NarratedElementType}.
     */
    export type $NarratedElementType_ = "title" | "position" | "hint" | "usage";
    export class $ScreenNarrationCollector {
        collectNarrationText(arg0: boolean): string;
        update(arg0: $Consumer_<$NarrationElementOutput>): void;
        constructor();
    }
    export class $ScreenNarrationCollector$NarrationEntry {
    }
    export class $NarrationSupplier {
    }
    export interface $NarrationSupplier {
        updateNarration(arg0: $NarrationElementOutput): void;
    }
    /**
     * Values that may be interpreted as {@link $NarrationSupplier}.
     */
    export type $NarrationSupplier_ = ((arg0: $NarrationElementOutput) => void);
    export class $ScreenNarrationCollector$Output implements $NarrationElementOutput {
        add(arg0: $NarratedElementType_, arg1: $Component_): void;
        add(arg0: $NarratedElementType_, ...arg1: $Component_[]): void;
        add(arg0: $NarratedElementType_, arg1: string): void;
    }
}
