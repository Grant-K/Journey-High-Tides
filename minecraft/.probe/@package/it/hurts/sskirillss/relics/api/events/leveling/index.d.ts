import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $RelicEvent } from "@package/it/hurts/sskirillss/relics/api/events/base";

declare module "@package/it/hurts/sskirillss/relics/api/events/leveling" {
    export class $ExperienceAddEvent extends $RelicEvent implements $ICancellableEvent {
        getAmount(): number;
        setAmount(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number);
    }
}
