import { $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Set, $UUID_, $Set_ } from "@package/java/util";
import { $WarpRequirement } from "@package/net/blay09/mods/waystones/api/requirement";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as event from "@package/net/blay09/mods/waystones/api/event";
export * as requirement from "@package/net/blay09/mods/waystones/api/requirement";

declare module "@package/net/blay09/mods/waystones/api" {
    export class $WaystoneTeleportContext {
    }
    export interface $WaystoneTeleportContext {
        hasFlag(arg0: $ResourceLocation_): boolean;
        addFlag(arg0: $ResourceLocation_): $WaystoneTeleportContext;
        getEntity(): $Entity;
        getFlags(): $Set<$ResourceLocation>;
        removeFlag(arg0: $ResourceLocation_): $WaystoneTeleportContext;
        isDimensionalTeleport(): boolean;
        getAdditionalEntities(): $List<$Entity>;
        getLeashedEntities(): $List<$Mob>;
        setAppliesModifiers(arg0: boolean): $WaystoneTeleportContext;
        setRequirements(arg0: $WarpRequirement): $WaystoneTeleportContext;
        getTargetWaystone(): $Waystone;
        addAdditionalEntity(arg0: $Entity): $WaystoneTeleportContext;
        getFromWaystone(): ($Waystone) | undefined;
        setFromWaystone(arg0: $Waystone): $WaystoneTeleportContext;
        getWarpItem(): $ItemStack;
        setWarpItem(arg0: $ItemStack_): $WaystoneTeleportContext;
        playsSound(): boolean;
        setPlaysSound(arg0: boolean): $WaystoneTeleportContext;
        playsEffect(): boolean;
        setPlaysEffect(arg0: boolean): $WaystoneTeleportContext;
        appliesModifiers(): boolean;
        getRequirements(): $WarpRequirement;
        addFlags(arg0: $Set_<$ResourceLocation_>): $WaystoneTeleportContext;
        get entity(): $Entity;
        get flags(): $Set<$ResourceLocation>;
        get dimensionalTeleport(): boolean;
        get additionalEntities(): $List<$Entity>;
        get leashedEntities(): $List<$Mob>;
        get targetWaystone(): $Waystone;
    }
    export class $Waystone {
    }
    export interface $Waystone {
        getVisibility(): $WaystoneVisibility;
        getPos(): $BlockPos;
        isOwner(arg0: $Player): boolean;
        isValid(): boolean;
        isTransient(): boolean;
        getDimension(): $ResourceKey<$Level>;
        getOrigin(): $WaystoneOrigin;
        hasOwner(): boolean;
        isValidInLevel(arg0: $ServerLevel): boolean;
        getWaystoneType(): $ResourceLocation;
        getWaystoneUid(): $UUID;
        getOwnerUid(): $UUID;
        wasGenerated(): boolean;
        hasName(): boolean;
        getName(): $Component;
        get visibility(): $WaystoneVisibility;
        get pos(): $BlockPos;
        get valid(): boolean;
        get transient(): boolean;
        get dimension(): $ResourceKey<$Level>;
        get origin(): $WaystoneOrigin;
        get waystoneType(): $ResourceLocation;
        get waystoneUid(): $UUID;
        get ownerUid(): $UUID;
        get name(): $Component;
    }
    export class $WaystoneVisibility extends $Enum<$WaystoneVisibility> {
        static fromWaystoneType(arg0: $ResourceLocation_): $WaystoneVisibility;
        static values(): $WaystoneVisibility[];
        static valueOf(arg0: string): $WaystoneVisibility;
        static ORANGE_SHARESTONE: $WaystoneVisibility;
        static ACTIVATION: $WaystoneVisibility;
        static BROWN_SHARESTONE: $WaystoneVisibility;
        static GREEN_SHARESTONE: $WaystoneVisibility;
        static YELLOW_SHARESTONE: $WaystoneVisibility;
        static MAGENTA_SHARESTONE: $WaystoneVisibility;
        static LIGHT_GRAY_SHARESTONE: $WaystoneVisibility;
        static LIME_SHARESTONE: $WaystoneVisibility;
        static SHARD_ONLY: $WaystoneVisibility;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WaystoneVisibility>;
        static RED_SHARESTONE: $WaystoneVisibility;
        static BLUE_SHARESTONE: $WaystoneVisibility;
        static LIST_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$WaystoneVisibility>>;
        static LIGHT_BLUE_SHARESTONE: $WaystoneVisibility;
        static BLACK_SHARESTONE: $WaystoneVisibility;
        static GLOBAL: $WaystoneVisibility;
        static PINK_SHARESTONE: $WaystoneVisibility;
        static PURPLE_SHARESTONE: $WaystoneVisibility;
        static GRAY_SHARESTONE: $WaystoneVisibility;
        static CYAN_SHARESTONE: $WaystoneVisibility;
    }
    /**
     * Values that may be interpreted as {@link $WaystoneVisibility}.
     */
    export type $WaystoneVisibility_ = "activation" | "global" | "shard_only" | "orange_sharestone" | "magenta_sharestone" | "light_blue_sharestone" | "yellow_sharestone" | "lime_sharestone" | "pink_sharestone" | "gray_sharestone" | "light_gray_sharestone" | "cyan_sharestone" | "purple_sharestone" | "blue_sharestone" | "brown_sharestone" | "green_sharestone" | "red_sharestone" | "black_sharestone";
    export class $WaystoneManager {
    }
    export interface $WaystoneManager {
        getWaystoneById(arg0: $UUID_): ($Waystone) | undefined;
        getWaystones(): $Stream<$Waystone>;
        getWaystoneAt(arg0: $BlockGetter, arg1: $BlockPos_): ($Waystone) | undefined;
        getWaystonesByType(arg0: $ResourceLocation_): $Stream<$Waystone>;
        getGlobalWaystones(): $List<$Waystone>;
        findWaystoneByName(arg0: string): ($Waystone) | undefined;
        get waystones(): $Stream<$Waystone>;
        get globalWaystones(): $List<$Waystone>;
    }
    export class $WaystoneOrigin extends $Enum<$WaystoneOrigin> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $WaystoneOrigin[];
        static valueOf(arg0: string): $WaystoneOrigin;
        getRemappedEnumConstantName(): string;
        static VILLAGE: $WaystoneOrigin;
        static PLAYER: $WaystoneOrigin;
        static DUNGEON: $WaystoneOrigin;
        static UNKNOWN: $WaystoneOrigin;
        static WILDERNESS: $WaystoneOrigin;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $WaystoneOrigin}.
     */
    export type $WaystoneOrigin_ = "unknown" | "wilderness" | "dungeon" | "village" | "player";
}
