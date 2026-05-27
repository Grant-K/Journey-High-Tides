import { $Level_ } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $Item$TooltipContext, $ItemStack_, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $List, $List_ } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $RegistrySupplier } from "@package/dev/architectury/registry/registries";

declare module "@package/net/sweenus/simplyswords/power" {
    export interface $GemPower extends RegistryMarked<RegistryTypes.SimplyswordsGemPowerTag, RegistryTypes.SimplyswordsGemPower> {}
    export class $PowerType extends $Enum<$PowerType> {
        getEntries(): $List<$RegistrySupplier<$GemPower>>;
        static values(): $PowerType[];
        static valueOf(name: string): $PowerType;
        static NETHER: $PowerType;
        static RUNIC: $PowerType;
        static RUNEFUSED: $PowerType;
        get entries(): $List<$RegistrySupplier<$GemPower>>;
    }
    /**
     * Values that may be interpreted as {@link $PowerType}.
     */
    export type $PowerType_ = "runic" | "runefused" | "nether";
    export class $GemPower implements $TooltipProvider {
        inventoryTick(stack: $ItemStack_, world: $Level_, user: $LivingEntity, slot: number, selected: boolean): void;
        addToTooltip(context: $Item$TooltipContext, tooltip: $Consumer_<$Component>, type: $TooltipFlag): void;
        applicableTypes(): $List<$PowerType>;
        postHit(stack: $ItemStack_, target: $LivingEntity, attacker: $LivingEntity): void;
        appendTooltip(itemStack: $ItemStack_, tooltipContext: $Item$TooltipContext, tooltip: $List_<$Component_>, type: $TooltipFlag, isRunic: boolean): void;
        isGreater(): boolean;
        isEmpty(): boolean;
        static EMPTY: $GemPower;
        constructor(isGreater: boolean, ...applicableTypes: $PowerType_[]);
        get greater(): boolean;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GemPower}.
     */
    export type $GemPower_ = RegistryTypes.SimplyswordsGemPower;
}
