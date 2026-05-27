import { $Level_ } from "@package/net/minecraft/world/level";
import { $Ingredient, $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $UUID, $List, $Map } from "@package/java/util";
import { $PlayerInteractEvent$RightClickItem } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Consumer } from "@package/java/util/function";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Multiblock } from "@package/com/klikli_dev/modonomicon/api/multiblock";
import { $RitualRecipe } from "@package/com/klikli_dev/occultism/crafting/recipe";
import { $LivingDeathEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/klikli_dev/occultism/common/blockentity" {
    export class $NetworkedBlockEntity extends $BlockEntity {
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        loadNetwork(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        saveNetwork(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        markNetworkDirty(): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $SacrificialBowlBlockEntity extends $NetworkedBlockEntity {
        itemStackHandler: $ItemStackHandler;
        lastChangeTime: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $GoldenSacrificialBowlBlockEntity extends $SacrificialBowlBlockEntity {
        onLivingDeath(arg0: $LivingDeathEvent): void;
        getTier(arg0: $BlockState_): number;
        getSignal(): number;
        getCurrentRitualRecipe(): $RecipeHolder<$RitualRecipe>;
        sacrificeFulfilled(): boolean;
        itemUseFulfilled(): boolean;
        restoreCastingPlayer(): void;
        notifyItemUse(arg0: $PlayerInteractEvent$RightClickItem): void;
        notifySacrifice(arg0: $LivingEntity): void;
        onPlayerRightClickItem(arg0: $PlayerInteractEvent$RightClickItem): void;
        tick(): void;
        static getDifference(arg0: $Multiblock, arg1: $Level_, arg2: $BlockPos_): $Map<$BlockPos, $Block>;
        startRitual(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: $RecipeHolder_<$RitualRecipe>): boolean;
        stopRitual(arg0: boolean, arg1: boolean): void;
        stopRitual(arg0: boolean): void;
        activate(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $InteractionHand_, arg4: $Direction_): boolean;
        consumedIngredients: $List<$ItemStack>;
        itemStackHandler: $ItemStackHandler;
        itemUseProvided: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        currentRitualRecipe: $RecipeHolder<$RitualRecipe>;
        rightClickItemListener: $Consumer<$PlayerInteractEvent$RightClickItem>;
        currentTime: number;
        castingPlayer: $ServerPlayer;
        remainingAdditionalIngredients: $List<$Ingredient>;
        tier: number;
        currentRitualRecipeId: $ResourceLocation;
        ritualActive: boolean;
        lastChangeTime: number;
        sacrificeProvided: boolean;
        livingDeathEventListener: $Consumer<$LivingDeathEvent>;
        castingPlayerId: $UUID;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get signal(): number;
    }
}
