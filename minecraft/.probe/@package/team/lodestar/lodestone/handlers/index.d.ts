import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $LivingDamageEvent$Pre, $LivingDeathEvent, $LivingIncomingDamageEvent, $LivingDamageEvent$Post } from "@package/net/neoforged/neoforge/event/entity/living";
import { $AddAttributeTooltipsEvent } from "@package/net/neoforged/neoforge/client/event";
export * as screenparticle from "@package/team/lodestar/lodestone/handlers/screenparticle";

declare module "@package/team/lodestar/lodestone/handlers" {
    export class $ItemEventHandler$IEventResponder {
    }
    export interface $ItemEventHandler$IEventResponder {
        modifyAttributeTooltipEvent(arg0: $AddAttributeTooltipsEvent): void;
        outgoingDamageEvent(arg0: $LivingDamageEvent$Pre, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
        outgoingDamageEvent(arg0: $LivingIncomingDamageEvent, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
        incomingDamageEvent(arg0: $LivingDamageEvent$Pre, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
        incomingDamageEvent(arg0: $LivingIncomingDamageEvent, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
        finalizedIncomingDamageEvent(arg0: $LivingDamageEvent$Post, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
        finalizedOutgoingDamageEvent(arg0: $LivingDamageEvent$Post, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
        incomingDeathEvent(arg0: $LivingDeathEvent, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
        outgoingDeathEvent(arg0: $LivingDeathEvent, arg1: $LivingEntity, arg2: $LivingEntity, arg3: $ItemStack_): void;
    }
}
