import { $ModifyGluttonyPropertiesEvent, $MalignantCritEvent$Pre, $ModifySpiritSpoilsEvent, $MalignantCritEvent$Post, $CollectSpiritEvent, $SoulWardDamageEvent, $ModifySoulWardPropertiesEvent } from "@package/com/sammy/malum/core/systems/events";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ItemEventHandler$IEventResponder } from "@package/team/lodestar/lodestone/handlers";
export * as spirit from "@package/com/sammy/malum/common/item/spirit";

declare module "@package/com/sammy/malum/common/item" {
    export class $IMalumEventResponder {
    }
    export interface $IMalumEventResponder extends $ItemEventHandler$IEventResponder {
        malignantCritEvent(arg0: $MalignantCritEvent$Pre, arg1: $LivingEntity): void;
        finalizedMalignantCritEvent(arg0: $MalignantCritEvent$Post, arg1: $LivingEntity): void;
        modifyGluttonyPropertiesEvent(arg0: $ModifyGluttonyPropertiesEvent, arg1: $LivingEntity): void;
        spiritCollectionEvent(arg0: $CollectSpiritEvent, arg1: $LivingEntity, arg2: number): void;
        modifySpiritSpoilsEvent(arg0: $ModifySpiritSpoilsEvent, arg1: $LivingEntity): void;
        modifySoulWardPropertiesEvent(arg0: $ModifySoulWardPropertiesEvent, arg1: $LivingEntity, arg2: $ItemStack_): void;
        soulWardDamageEvent(arg0: $SoulWardDamageEvent, arg1: $LivingEntity, arg2: $ItemStack_): void;
    }
}
