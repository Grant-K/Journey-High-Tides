import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $RegistryAccess } from "@package/net/minecraft/core";
import { $AbstractContraptionEntity, $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Object } from "@package/java/lang";
import { $KubeLevelEvent, $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List } from "@package/java/util";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/vomiter/kjscauto/contraption" {
    export class $ContraptionBeforeDisassembleEventJS implements $KubeLevelEvent {
        /**
         * The StructureTransform that will be used when placing blocks back into the world.
         */
        getTransform(): $StructureTransform;
        /**
         * Maximum world position of the contraption bounds.
         */
        getMaxPos(): $BlockPos;
        /**
         * All target world positions this contraption will try to place blocks into during disassembly.
         */
        getTargetPositions(): $List<$BlockPos>;
        /**
         * The world-space bounding box of the contraption at the moment before disassembly.
         */
        getContraptionBounds(): $AABB;
        /**
         * Minimum world position of the contraption bounds.
         */
        getMinPos(): $BlockPos;
        testTargetBlock(arg0: $Predicate_<$LevelBlock>): boolean;
        getLevel(): $Level;
        /**
         * All world blocks at target positions this contraption will try to place into during disassembly.
         */
        getTargetBlocks(): $List<$LevelBlock>;
        /**
         * The contraption entity that is about to disassemble.
         */
        getContraptionEntity(): $AbstractContraptionEntity;
        /**
         * If canceled, this contraption disassembly will not proceed.
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
        constructor(arg0: $Level_, arg1: $AbstractContraptionEntity, arg2: $StructureTransform, arg3: $AABB_);
        get transform(): $StructureTransform;
        get maxPos(): $BlockPos;
        get targetPositions(): $List<$BlockPos>;
        get contraptionBounds(): $AABB;
        get minPos(): $BlockPos;
        get level(): $Level;
        get targetBlocks(): $List<$LevelBlock>;
        get contraptionEntity(): $AbstractContraptionEntity;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
}
