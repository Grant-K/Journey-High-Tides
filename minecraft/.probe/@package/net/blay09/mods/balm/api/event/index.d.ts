import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $ParseResults } from "@package/com/mojang/brigadier";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BalmConfigSchema } from "@package/net/blay09/mods/balm/api/config/schema";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $InteractionResult, $InteractionResult_, $InteractionHand, $Container, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as client from "@package/net/blay09/mods/balm/api/event/client";
export * as server from "@package/net/blay09/mods/balm/api/event/server";

declare module "@package/net/blay09/mods/balm/api/event" {
    export class $LivingDeathEvent extends $BalmEvent {
        getDamageSource(): $DamageSource;
        getEntity(): $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_);
        get damageSource(): $DamageSource;
        get entity(): $LivingEntity;
    }
    export class $CommandEvent extends $BalmEvent {
        getParseResults(): $ParseResults<$CommandSourceStack>;
        constructor(arg0: $ParseResults<$CommandSourceStack>);
        get parseResults(): $ParseResults<$CommandSourceStack>;
    }
    export class $ConfigReloadedEvent extends $BalmEvent {
        getSchema(): $BalmConfigSchema;
        constructor(arg0: $BalmConfigSchema);
        constructor();
        get schema(): $BalmConfigSchema;
    }
    export class $BalmEvent extends $Event implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor();
    }
    export class $CropGrowEvent extends $BalmEvent {
        getPos(): $BlockPos;
        getLevel(): $Level;
        getState(): $BlockState;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_);
        get pos(): $BlockPos;
        get level(): $Level;
        get state(): $BlockState;
    }
    export class $BreakBlockEvent extends $BalmEvent {
        getBlockEntity(): $BlockEntity;
        getPos(): $BlockPos;
        getPlayer(): $Player;
        getLevel(): $Level;
        getState(): $BlockState;
        constructor(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockEntity);
        get blockEntity(): $BlockEntity;
        get pos(): $BlockPos;
        get player(): $Player;
        get level(): $Level;
        get state(): $BlockState;
    }
    export class $CropGrowEvent$Pre extends $CropGrowEvent {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $LivingDamageEvent extends $BalmEvent {
        getDamageAmount(): number;
        getDamageSource(): $DamageSource;
        setDamageAmount(arg0: number): void;
        getEntity(): $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: number);
        get damageSource(): $DamageSource;
        get entity(): $LivingEntity;
    }
    export class $PlayerRespawnEvent extends $BalmEvent {
        getNewPlayer(): $ServerPlayer;
        getOldPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer, arg1: $ServerPlayer);
        get newPlayer(): $ServerPlayer;
        get oldPlayer(): $ServerPlayer;
    }
    export class $PlayerAttackEvent extends $BalmEvent {
        getPlayer(): $Player;
        getTarget(): $Entity;
        constructor(arg0: $Player, arg1: $Entity);
        get player(): $Player;
        get target(): $Entity;
    }
    export class $UseBlockEvent extends $BalmEvent {
        getHand(): $InteractionHand;
        getPlayer(): $Player;
        getHitResult(): $BlockHitResult;
        getLevel(): $Level;
        setResult(arg0: $InteractionResult_): void;
        getInteractionResult(): $InteractionResult;
        constructor(arg0: $Player, arg1: $Level_, arg2: $InteractionHand_, arg3: $BlockHitResult);
        get hand(): $InteractionHand;
        get player(): $Player;
        get hitResult(): $BlockHitResult;
        get level(): $Level;
        set result(value: $InteractionResult_);
        get interactionResult(): $InteractionResult;
    }
    export class $PlayerLogoutEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
    export class $EntityAddedEvent extends $BalmEvent {
        getLevel(): $Level;
        getEntity(): $Entity;
        constructor(arg0: $Entity, arg1: $Level_);
        get level(): $Level;
        get entity(): $Entity;
    }
    export class $PlayerOpenMenuEvent extends $BalmEvent {
        getMenu(): $AbstractContainerMenu;
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer, arg1: $AbstractContainerMenu);
        get menu(): $AbstractContainerMenu;
        get player(): $ServerPlayer;
    }
    export class $DigSpeedEvent extends $BalmEvent {
        getSpeed(): number;
        getPlayer(): $Player;
        setSpeedOverride(arg0: number): void;
        getSpeedOverride(): number;
        getState(): $BlockState;
        constructor(arg0: $Player, arg1: $BlockState_, arg2: number);
        get speed(): number;
        get player(): $Player;
        get state(): $BlockState;
    }
    export class $TossItemEvent extends $BalmEvent {
        getItemStack(): $ItemStack;
        getPlayer(): $Player;
        constructor(arg0: $Player, arg1: $ItemStack_);
        get itemStack(): $ItemStack;
        get player(): $Player;
    }
    export class $LivingFallEvent extends $BalmEvent {
        getEntity(): $LivingEntity;
        setFallDamageOverride(arg0: number): void;
        getFallDamageOverride(): number;
        constructor(arg0: $LivingEntity);
        get entity(): $LivingEntity;
    }
    export class $CropGrowEvent$Post extends $CropGrowEvent {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $ConfigLoadedEvent extends $BalmEvent {
        getSchema(): $BalmConfigSchema;
        constructor(arg0: $BalmConfigSchema);
        get schema(): $BalmConfigSchema;
    }
    export class $UseItemEvent extends $BalmEvent {
        getHand(): $InteractionHand;
        getPlayer(): $Player;
        getLevel(): $Level;
        setResult(arg0: $InteractionResult_): void;
        getInteractionResult(): $InteractionResult;
        constructor(arg0: $Player, arg1: $Level_, arg2: $InteractionHand_);
        get hand(): $InteractionHand;
        get player(): $Player;
        get level(): $Level;
        set result(value: $InteractionResult_);
        get interactionResult(): $InteractionResult;
    }
    export class $LivingHealEvent extends $BalmEvent {
        getAmount(): number;
        getEntity(): $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: number);
        get amount(): number;
        get entity(): $LivingEntity;
    }
    export class $PlayerChangedDimensionEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        getFromDim(): $ResourceKey<$Level>;
        getToDim(): $ResourceKey<$Level>;
        constructor(arg0: $ServerPlayer, arg1: $ResourceKey_<$Level>, arg2: $ResourceKey_<$Level>);
        get player(): $ServerPlayer;
        get fromDim(): $ResourceKey<$Level>;
        get toDim(): $ResourceKey<$Level>;
    }
    export class $PlayerConnectedEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
    export class $ItemCraftedEvent extends $BalmEvent {
        getItemStack(): $ItemStack;
        getPlayer(): $Player;
        getCraftMatrix(): $Container;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $Container);
        get itemStack(): $ItemStack;
        get player(): $Player;
        get craftMatrix(): $Container;
    }
    export class $PlayerLoginEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
}
