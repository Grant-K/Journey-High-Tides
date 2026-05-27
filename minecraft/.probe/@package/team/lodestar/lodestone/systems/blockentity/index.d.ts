import { $Level_, $BlockGetter } from "@package/net/minecraft/world/level";
import { $ItemInteractionResult, $InteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $HitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/team/lodestar/lodestone/systems/blockentity" {
    export class $LodestoneBlockEntity extends $BlockEntity {
        clientTick(arg0: $Level_): void;
        setDirty(): void;
        playSound(arg0: $SoundEvent_): void;
        playSound(arg0: $SoundEvent_, arg1: number, arg2: number): void;
        playSound(arg0: $SoundEvent_, arg1: number): void;
        onPlace(arg0: $LivingEntity, arg1: $ItemStack_): void;
        serverTick(arg0: $ServerLevel): void;
        onBreak(arg0: $Player): void;
        /**
         * @deprecated
         */
        tick(): void;
        commonTick(arg0: $Level_): void;
        onClone(arg0: $BlockState_, arg1: $HitResult, arg2: $BlockGetter, arg3: $BlockPos_, arg4: $Player): $ItemStack;
        onUse(arg0: $Player, arg1: $InteractionHand_): $ItemInteractionResult;
        onEntityInside(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): void;
        onNeighborUpdate(arg0: $BlockState_, arg1: $BlockPos_, arg2: $BlockPos_): void;
        onUseWithoutItem(arg0: $Player): $InteractionResult;
        onUseWithItem(arg0: $Player, arg1: $ItemStack_, arg2: $InteractionHand_): $ItemInteractionResult;
        notifyObservers(): void;
        update(arg0: $Level_): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
