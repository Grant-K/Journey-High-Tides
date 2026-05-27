import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";

declare module "@package/com/klikli_dev/occultism/common/entity/job/event" {
    export class $ItemProcessingJobEvent extends $EntityEvent {
        getResult(): $ItemStack;
        getInput(): $ItemStack;
        setResult(arg0: $ItemStack_): void;
        setInput(arg0: $ItemStack_): void;
        constructor(arg0: $Entity, arg1: $ItemStack_, arg2: $ItemStack_);
    }
}
