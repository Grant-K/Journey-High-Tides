import { $ChatFormatting_ } from "@package/net/minecraft";
import { $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";

declare module "@package/net/silentchaos512/gear/client/util" {
    export class $TextListBuilder {
        setDefaultBullet(): $TextListBuilder;
        setBullet(arg0: string): $TextListBuilder;
        removeLast(): $TextListBuilder;
        build(): $List<$Component>;
        unindent(): $TextListBuilder;
        add(arg0: $Component_): $TextListBuilder;
        add(arg0: $Component_, arg1: $ChatFormatting_): $TextListBuilder;
        indent(): $TextListBuilder;
        static BULLETS: string[];
        static VANILLA_BULLET: string;
        constructor();
        set bullet(value: string);
    }
    export class $GearTooltipFlag extends $Record implements $TooltipFlag {
        static withModifierKeys(arg0: boolean, arg1: boolean, arg2: boolean): $GearTooltipFlag;
        showConstruction(): boolean;
        showProperties(): boolean;
        isCreative(): boolean;
        advanced(): boolean;
        isAdvanced(): boolean;
        shiftDown(): boolean;
        ctrlDown(): boolean;
        altDown(): boolean;
        hasShiftDown(): boolean;
        hasControlDown(): boolean;
        hasAltDown(): boolean;
        constructor(ctrlDown: boolean, altDown: boolean, shiftDown: boolean, advanced: boolean, showProperties: boolean, showConstruction: boolean);
        get creative(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GearTooltipFlag}.
     */
    export type $GearTooltipFlag_ = { shiftDown?: boolean, showConstruction?: boolean, altDown?: boolean, advanced?: boolean, ctrlDown?: boolean, showProperties?: boolean,  } | [shiftDown?: boolean, showConstruction?: boolean, altDown?: boolean, advanced?: boolean, ctrlDown?: boolean, showProperties?: boolean, ];
}
