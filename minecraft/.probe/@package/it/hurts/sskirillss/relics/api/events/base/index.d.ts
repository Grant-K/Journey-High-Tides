import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/it/hurts/sskirillss/relics/api/events/base" {
    export class $RelicEvent extends $Event {
        getEntity(): $LivingEntity;
        getStack(): $ItemStack;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_);
        get entity(): $LivingEntity;
        get stack(): $ItemStack;
    }
}
