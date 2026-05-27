import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $PatternDefinition } from "@package/io/redspace/ironsjewelry/core/data";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/io/redspace/ironsjewelry/event" {
    export class $SetupJewelcraftingResultEvent extends $Event implements $ICancellableEvent {
        getPlayer(): $Player;
        getOriginalResult(): $ItemStack;
        getResult(): $ItemStack;
        setResult(arg0: $ItemStack_): void;
        getPattern(): $Holder<$PatternDefinition>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Holder_<$PatternDefinition>, arg1: $Player, arg2: $ItemStack_);
        get player(): $Player;
        get originalResult(): $ItemStack;
        get pattern(): $Holder<$PatternDefinition>;
    }
}
