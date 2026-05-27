import { $Level_ } from "@package/net/minecraft/world/level";
import { $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $GenericStack, $KeyCounter, $AEItemKey, $GenericStack_, $AEKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/api/crafting" {
    export class $PatternDetailsTooltip$Property extends $Record {
        name(): $Component;
        value(): $Component;
        constructor(name: $Component_, value: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $PatternDetailsTooltip$Property}.
     */
    export type $PatternDetailsTooltip$Property_ = { value?: $Component_, name?: $Component_,  } | [value?: $Component_, name?: $Component_, ];
    export class $IPatternDetails {
    }
    export interface $IPatternDetails {
        getTooltip(arg0: $Level_, arg1: $TooltipFlag): $PatternDetailsTooltip;
        getInputs(): $IPatternDetails$IInput[];
        getPrimaryOutput(): $GenericStack;
        supportsPushInputsToExternalInventory(): boolean;
        pushInputsToExternalInventory(arg0: $KeyCounter[], arg1: $IPatternDetails$PatternInputSink_): void;
        getDefinition(): $AEItemKey;
        getOutputs(): $List<$GenericStack>;
        get inputs(): $IPatternDetails$IInput[];
        get primaryOutput(): $GenericStack;
        get definition(): $AEItemKey;
        get outputs(): $List<$GenericStack>;
    }
    export class $PatternDetailsTooltip {
        addInput(arg0: $GenericStack_): void;
        addInput(arg0: $AEKey, arg1: number): void;
        getOutputMethod(): $Component;
        setOutputMethod(arg0: $Component_): void;
        getInputs(): $List<$GenericStack>;
        addOutput(arg0: $GenericStack_): void;
        addOutput(arg0: $AEKey, arg1: number): void;
        addInputsAndOutputs(arg0: $IPatternDetails): void;
        addProperty(arg0: $Component_, arg1: $Component_): void;
        addProperty(arg0: $Component_): void;
        getOutputs(): $List<$GenericStack>;
        getProperties(): $List<$PatternDetailsTooltip$Property>;
        static OUTPUT_TEXT_PRODUCES: $Component;
        static OUTPUT_TEXT_CRAFTS: $Component;
        constructor(arg0: $Component_);
        get inputs(): $List<$GenericStack>;
        get outputs(): $List<$GenericStack>;
        get properties(): $List<$PatternDetailsTooltip$Property>;
    }
    export class $IPatternDetails$PatternInputSink {
    }
    export interface $IPatternDetails$PatternInputSink {
        pushInput(arg0: $AEKey, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IPatternDetails$PatternInputSink}.
     */
    export type $IPatternDetails$PatternInputSink_ = ((arg0: $AEKey, arg1: number) => void);
    export class $IPatternDetails$IInput {
    }
    export interface $IPatternDetails$IInput {
        getRemainingKey(arg0: $AEKey): $AEKey;
        isValid(arg0: $AEKey, arg1: $Level_): boolean;
        getMultiplier(): number;
        getPossibleInputs(): $GenericStack[];
        get multiplier(): number;
        get possibleInputs(): $GenericStack[];
    }
}
