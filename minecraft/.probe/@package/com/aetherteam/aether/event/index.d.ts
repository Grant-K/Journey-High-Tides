import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $RecipeType_, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $EntityTeleportEvent, $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $BossRoomTracker_, $BossRoomTracker } from "@package/com/aetherteam/nitrogen/entity";
import { $BlockEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/com/aetherteam/aether/event" {
    export class $PlacementBanEvent$SpawnParticles extends $PlacementBanEvent implements $ICancellableEvent {
        getItemStack(): $ItemStack;
        getBlockState(): $BlockState;
        getPos(): $BlockPos;
        getFace(): $Direction;
        getLevel(): $LevelAccessor;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction_, arg3: $ItemStack_, arg4: $BlockState_);
        get itemStack(): $ItemStack;
        get blockState(): $BlockState;
        get pos(): $BlockPos;
        get face(): $Direction;
        get level(): $LevelAccessor;
    }
    export class $BossFightEvent extends $EntityEvent {
        getDungeon(): $BossRoomTracker<never>;
        constructor(arg0: $Entity, arg1: $BossRoomTracker_<never>);
        get dungeon(): $BossRoomTracker<never>;
    }
    export class $FreezeEvent$FreezeFromBlock extends $FreezeEvent implements $ICancellableEvent {
        getSourcePos(): $BlockPos;
        getSourceBlock(): $BlockState;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockState_, arg5: $BlockState_);
        get sourcePos(): $BlockPos;
        get sourceBlock(): $BlockState;
    }
    export class $PlacementConvertEvent extends $Event implements $ICancellableEvent {
        getPos(): $BlockPos;
        getLevel(): $LevelAccessor;
        getOldBlockState(): $BlockState;
        getNewBlockState(): $BlockState;
        setNewBlockState(arg0: $BlockState_): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_);
        get pos(): $BlockPos;
        get level(): $LevelAccessor;
        get oldBlockState(): $BlockState;
    }
    export class $PlacementBanEvent$CheckBlock extends $PlacementBanEvent {
        getBlockState(): $BlockState;
        getPos(): $BlockPos;
        setBanned(arg0: boolean): void;
        getLevel(): $LevelAccessor;
        isBanned(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_);
        get blockState(): $BlockState;
        get pos(): $BlockPos;
        get level(): $LevelAccessor;
    }
    export class $BossFightEvent$Stop extends $BossFightEvent {
        constructor(arg0: $Entity, arg1: $BossRoomTracker_<never>);
    }
    export class $EggLayEvent extends $EntityEvent implements $ICancellableEvent {
        getVolume(): number;
        getPitch(): number;
        getSound(): $SoundEvent;
        setItem(arg0: $ItemStack_): void;
        setSound(arg0: $SoundEvent_): void;
        getItem(): $ItemStack;
        setVolume(arg0: number): void;
        setPitch(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Entity, arg1: $SoundEvent_, arg2: number, arg3: number, arg4: $ItemStack_);
    }
    export class $ValkyrieTeleportEvent extends $EntityTeleportEvent implements $ICancellableEvent {
        constructor(arg0: $Entity, arg1: number, arg2: number, arg3: number);
    }
    export class $ItemUseConvertEvent extends $PlayerEvent implements $ICancellableEvent {
        getItemStack(): $ItemStack;
        getPos(): $BlockPos;
        getLevel(): $LevelAccessor;
        getOldBlockState(): $BlockState;
        getNewBlockState(): $BlockState;
        setNewBlockState(arg0: $BlockState_): void;
        getRecipeType(): $RecipeType<never>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $BlockState_, arg5: $BlockState_, arg6: $RecipeType_<never>);
        get itemStack(): $ItemStack;
        get pos(): $BlockPos;
        get level(): $LevelAccessor;
        get oldBlockState(): $BlockState;
        get recipeType(): $RecipeType<never>;
    }
    export class $TriggerTrapEvent extends $BlockEvent implements $ICancellableEvent {
        getPlayer(): $Player;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_);
        get player(): $Player;
    }
    export class $PlacementBanEvent$CheckItem extends $PlacementBanEvent {
        getItemStack(): $ItemStack;
        getPos(): $BlockPos;
        setBanned(arg0: boolean): void;
        getLevel(): $LevelAccessor;
        isBanned(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $ItemStack_);
        get itemStack(): $ItemStack;
        get pos(): $BlockPos;
        get level(): $LevelAccessor;
    }
    export class $BossFightEvent$Start extends $BossFightEvent {
        constructor(arg0: $Entity, arg1: $BossRoomTracker_<never>);
    }
    export class $FreezeEvent$FreezeFromItem extends $FreezeEvent implements $ICancellableEvent {
        getSourceStack(): $ItemStack;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: $ItemStack_);
        get sourceStack(): $ItemStack;
    }
    export class $PlacementBanEvent extends $Event {
        constructor();
    }
    export class $FreezeEvent extends $Event implements $ICancellableEvent {
        getPos(): $BlockPos;
        getLevel(): $LevelAccessor;
        getPriorBlock(): $BlockState;
        getFrozenBlock(): $BlockState;
        setFrozenBlock(arg0: $BlockState_): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_);
        get pos(): $BlockPos;
        get level(): $LevelAccessor;
        get priorBlock(): $BlockState;
    }
    export class $BossFightEvent$AddPlayer extends $BossFightEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $Entity, arg1: $BossRoomTracker_<never>, arg2: $ServerPlayer);
        get player(): $ServerPlayer;
    }
    export class $BossFightEvent$RemovePlayer extends $BossFightEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $Entity, arg1: $BossRoomTracker_<never>, arg2: $ServerPlayer);
        get player(): $ServerPlayer;
    }
}
