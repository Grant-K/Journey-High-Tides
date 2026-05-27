import { $AttributedCharacterIterator$Attribute, $AttributedCharacterIterator } from "@package/java/text";
import { $TextHitInfo, $TextAttribute } from "@package/java/awt/font";
import { $AWTEvent, $Component, $Rectangle } from "@package/java/awt";
import { $Object, $Character$Subset } from "@package/java/lang";
import { $Map_, $Locale, $Map } from "@package/java/util";

declare module "@package/java/awt/im" {
    export class $InputContext {
        dispose(): void;
        dispatchEvent(arg0: $AWTEvent): void;
        selectInputMethod(arg0: $Locale): boolean;
        setCharacterSubsets(arg0: $Character$Subset[]): void;
        setCompositionEnabled(arg0: boolean): void;
        isCompositionEnabled(): boolean;
        reconvert(): void;
        getInputMethodControlObject(): $Object;
        endComposition(): void;
        getLocale(): $Locale;
        removeNotify(arg0: $Component): void;
        static getInstance(): $InputContext;
        set characterSubsets(value: $Character$Subset[]);
        get inputMethodControlObject(): $Object;
        get locale(): $Locale;
        static get instance(): $InputContext;
    }
    export class $InputMethodHighlight {
        getStyle(): $Map<$TextAttribute, never>;
        getVariation(): number;
        isSelected(): boolean;
        getState(): number;
        static UNSELECTED_CONVERTED_TEXT_HIGHLIGHT: $InputMethodHighlight;
        static SELECTED_CONVERTED_TEXT_HIGHLIGHT: $InputMethodHighlight;
        static RAW_TEXT: number;
        static CONVERTED_TEXT: number;
        static UNSELECTED_RAW_TEXT_HIGHLIGHT: $InputMethodHighlight;
        static SELECTED_RAW_TEXT_HIGHLIGHT: $InputMethodHighlight;
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: $Map_<$TextAttribute, never>);
        constructor(arg0: boolean, arg1: number, arg2: number);
        constructor(arg0: boolean, arg1: number);
        get style(): $Map<$TextAttribute, never>;
        get variation(): number;
        get selected(): boolean;
        get state(): number;
    }
    export class $InputMethodRequests {
    }
    export interface $InputMethodRequests {
        getTextLocation(arg0: $TextHitInfo): $Rectangle;
        getLocationOffset(arg0: number, arg1: number): $TextHitInfo;
        getInsertPositionOffset(): number;
        getCommittedText(arg0: number, arg1: number, arg2: $AttributedCharacterIterator$Attribute[]): $AttributedCharacterIterator;
        getCommittedTextLength(): number;
        cancelLatestCommittedText(arg0: $AttributedCharacterIterator$Attribute[]): $AttributedCharacterIterator;
        getSelectedText(arg0: $AttributedCharacterIterator$Attribute[]): $AttributedCharacterIterator;
        get insertPositionOffset(): number;
        get committedTextLength(): number;
    }
}
