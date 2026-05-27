import { $BlazeBurnerBlock$HeatLevel } from "@package/com/simibubi/create/content/processing/burner";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $TransportedItemStackHandlerBehaviour } from "@package/com/simibubi/create/content/kinetics/belt/behaviour";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List } from "@package/java/util";
import { $LevelBlock, $KubeLevelEvent } from "@package/dev/latvian/mods/kubejs/level";
import { $DeployerBlockEntity } from "@package/com/simibubi/create/content/kinetics/deployer";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $AbstractContraptionEntity } from "@package/com/simibubi/create/content/contraptions";
import { $BlockBreakingKineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $BasinBlockEntity } from "@package/com/simibubi/create/content/processing/basin";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";

declare module "@package/com/vomiter/kjscauto/machine" {
    export class $DeployerUseEventJS implements $KubeLevelEvent {
        getDamage(): number;
        /**
         * The remaining stack after consuming 1 item from transported input.
         */
        getRemainder(): $ItemStack;
        setDamage(arg0: number): void;
        /**
         * The item that is put on the deposit or belt.
         */
        getTransportedItem(): $ItemStack;
        getLevel(): $Level;
        getBlock(): $LevelBlock;
        /**
         * The item that the deployer holds.
         */
        getHeldItem(): $ItemStack;
        /**
         * All outputs produced by the recipe (may be empty or multiple).
         */
        getOutputs(): $List<$ItemStack>;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(arg0: $DeployerBlockEntity, arg1: $TransportedItemStack, arg2: $TransportedItemStackHandlerBehaviour, arg3: $Recipe<never>);
        get remainder(): $ItemStack;
        get transportedItem(): $ItemStack;
        get level(): $Level;
        get block(): $LevelBlock;
        get heldItem(): $ItemStack;
        get outputs(): $List<$ItemStack>;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $BasinOperationEventJS implements $KubeLevelEvent {
        /**
         * The recipe being applied.
         */
        getRecipe(): $Recipe<never>;
        /**
         * Basin position.
         */
        getPos(): $BlockPos;
        addInput(arg0: $ItemStack_): void;
        addInputFluid(arg0: $FluidStack_): void;
        getLevel(): $Level;
        /**
         * The basin block container.
         */
        getBlock(): $LevelBlock;
        /**
         * The basin block entity.
         */
        getBasin(): $BasinBlockEntity;
        /**
         * Current heat level as seen by the basin.
         */
        getHeatLevel(): $BlazeBurnerBlock$HeatLevel;
        getRecipeId(): $ResourceLocation;
        /**
         * All fluid outputs.
         */
        getFluidOutputs(): $List<$FluidStack>;
        /**
         * All item outputs (this list may include crafting remainders because Create merges them into the same list).
         */
        getOutputs(): $List<$ItemStack>;
        cancel(): $Object;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        constructor(arg0: $BasinBlockEntity, arg1: $Recipe<never>, arg2: $ResourceLocation_);
        get recipe(): $Recipe<never>;
        get pos(): $BlockPos;
        get level(): $Level;
        get block(): $LevelBlock;
        get basin(): $BasinBlockEntity;
        get heatLevel(): $BlazeBurnerBlock$HeatLevel;
        get recipeId(): $ResourceLocation;
        get fluidOutputs(): $List<$FluidStack>;
        get outputs(): $List<$ItemStack>;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $ContraptionAfterBlockDestroyEventJS extends $ContraptionBeforeBlockDestroyEventJS {
        getDrops(): $List<$ItemStack>;
        constructor(arg0: $Level_, arg1: $AbstractContraptionEntity, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: number, arg6: number, arg7: number);
        get drops(): $List<$ItemStack>;
    }
    export class $ContraptionBeforeBlockDestroyEventJS implements $KubeLevelEvent {
        /**
         * Computed break speed used by the contraption breaker.
         */
        getBreakSpeed(): number;
        /**
         * The position of the target block to be destroyed in the world.
         */
        getTargetPos(): $BlockPos;
        /**
         * Local position of the actor block inside the contraption (if available).
         */
        getActorPos(): $BlockPos;
        /**
         * BlockState of the actor block (e.g. create:mechanical_drill/create:mechanical_saw) mounted on the contraption.
         */
        getActorState(): $BlockState;
        getLevel(): $Level;
        /**
         * Block hardness at the target position (destroy speed).
         */
        getHardness(): number;
        /**
         * The target block to be destroyed.
         */
        getTargetBlock(): $LevelBlock;
        /**
         * Animation speed of the contraption context (Create internal; usually based on kinetic speed).
         */
        getAnimationSpeed(): number;
        /**
         * The contraption entity performing the breaking action.
         */
        getContraptionEntity(): $AbstractContraptionEntity;
        /**
         * If canceled, the target block will not be destroyed.
         */
        cancel(): $Object;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        constructor(arg0: $Level_, arg1: $AbstractContraptionEntity, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: number, arg6: number, arg7: number);
        get breakSpeed(): number;
        get targetPos(): $BlockPos;
        get actorPos(): $BlockPos;
        get actorState(): $BlockState;
        get level(): $Level;
        get hardness(): number;
        get targetBlock(): $LevelBlock;
        get animationSpeed(): number;
        get contraptionEntity(): $AbstractContraptionEntity;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $BlockDestroyEventJS implements $KubeLevelEvent {
        /**
         * Computed break speed used by the breaker (usually abs(speed)/100).
         */
        getBreakSpeed(): number;
        /**
         * The position of the drill/saw block.
         */
        getPos(): $BlockPos;
        /**
         * The breaker block entity (e.g. a saw/drill block entity).
         */
        getBreaker(): $BlockBreakingKineticBlockEntity;
        /**
         * The position of the target block to be destroyed.
         */
        getTargetPos(): $BlockPos;
        getLevel(): $Level;
        /**
         * Block hardness at the target position (destroy speed).
         */
        getHardness(): number;
        /**
         * The drill/saw block.
         */
        getBlock(): $LevelBlock;
        /**
         * The target block to be destroyed
         */
        getTargetBlock(): $LevelBlock;
        /**
         * Kinetic speed of the breaker (raw, same sign as Create speed).
         */
        getKineticSpeed(): number;
        cancel(): $Object;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        constructor(arg0: $Level_, arg1: $BlockBreakingKineticBlockEntity, arg2: $BlockPos_, arg3: $BlockState_, arg4: number, arg5: number, arg6: number);
        get breakSpeed(): number;
        get pos(): $BlockPos;
        get breaker(): $BlockBreakingKineticBlockEntity;
        get targetPos(): $BlockPos;
        get level(): $Level;
        get hardness(): number;
        get block(): $LevelBlock;
        get targetBlock(): $LevelBlock;
        get kineticSpeed(): number;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
}
