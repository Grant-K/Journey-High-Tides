import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $RedstoneControl_ } from "@package/com/enderio/enderio/api/io";
import { $ConduitConnectionPath, $ConnectionPathPropertyConsumer_ } from "@package/com/enderio/enderio/api/conduits/connection/path";
import { $Set_, $Comparator, $Set } from "@package/java/util";
import { $BiConsumer_, $Function_, $Consumer_, $BiFunction_, $Function } from "@package/java/util/function";
import { $Holder_, $Holder, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConduitDataAccessor } from "@package/com/enderio/enderio/api/conduits/network/node/legacy";
import { $Record, $Comparable } from "@package/java/lang";
import { $ConnectionConfigType, $ConnectionConfigType_, $ConnectionConfig } from "@package/com/enderio/enderio/api/conduits/connection/config";
import { $ConduitBlockConnection_, $ConduitBlockConnection } from "@package/com/enderio/enderio/api/conduits/connection";
import { $ConduitBundle, $SlotType_ } from "@package/com/enderio/enderio/api/conduits/bundle";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $DyeColor_, $ItemStack_, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ConduitTickerBase } from "@package/com/enderio/enderio/api/conduits/ticker";
import { $ConduitNode } from "@package/com/enderio/enderio/api/conduits/network/node";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Vector2i } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
export * as connection from "@package/com/enderio/enderio/api/conduits/connection";
export * as network from "@package/com/enderio/enderio/api/conduits/network";
export * as model from "@package/com/enderio/enderio/api/conduits/model";
export * as bundle from "@package/com/enderio/enderio/api/conduits/bundle";
export * as screen from "@package/com/enderio/enderio/api/conduits/screen";
export * as facade from "@package/com/enderio/enderio/api/conduits/facade";
export * as ticker from "@package/com/enderio/enderio/api/conduits/ticker";

declare module "@package/com/enderio/enderio/api/conduits" {
    export class $ConduitType<T extends $Conduit<T, U>, U extends $ConnectionConfig> extends $Record {
        codec(): $MapCodec<T>;
        getTickRate(arg0: T): number;
        getTickRate<V extends $Conduit<never, never>>(arg0: $Holder_<V>): number;
        connectionConfigType(): $ConnectionConfigType<U>;
        doesRequireNetworkCaches(): boolean;
        connectionComparator(): $Comparator<$ConduitBlockConnection>;
        exposedCapabilities(): $Set<$BlockCapability<never, never>>;
        tickRateGetter(): $Function<T, number>;
        connectionPathComparator(): $Comparator<$ConduitConnectionPath>;
        ticker(): $ConduitTickerBase<T>;
        static builder<T extends $Conduit<T, U>, U extends $ConnectionConfig>(arg0: $BiFunction_<$ResourceLocation, $Component, T>, arg1: $ConnectionConfigType_<U>): $ConduitType$Builder<T, U>;
        static builder<T extends $Conduit<T, U>, U extends $ConnectionConfig>(arg0: $MapCodec_<T>, arg1: $ConnectionConfigType_<U>): $ConduitType$Builder<T, U>;
        static CODEC: $Codec<$ConduitType<never, never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ConduitType<never, never>>;
        constructor(codec: $MapCodec_<T>, connectionConfigType: $ConnectionConfigType_<U>, exposedCapabilities: $Set_<$BlockCapability<never, never>>, doesRequireNetworkCaches: boolean, ticker: $ConduitTickerBase<T>, tickRateGetter: $Function_<T, number>, connectionComparator: $Comparator<$ConduitBlockConnection_>, connectionPathComparator: $Comparator<$ConduitConnectionPath>);
        constructor(arg0: $MapCodec_<T>, arg1: $ConnectionConfigType_<U>);
    }
    /**
     * Values that may be interpreted as {@link $ConduitType}.
     */
    export type $ConduitType_<T, U> = RegistryTypes.EnderioConduitType | { doesRequireNetworkCaches?: boolean, connectionConfigType?: $ConnectionConfigType_<$ConnectionConfig>, ticker?: $ConduitTickerBase<$Conduit_<T, U>>, connectionPathComparator?: $Comparator<$ConduitConnectionPath>, tickRateGetter?: $Function_<$Conduit<T, U>, number>, exposedCapabilities?: $Set_<$BlockCapability<never, never>>, codec?: $MapCodec_<$Conduit_<T, U>>, connectionComparator?: $Comparator<$ConduitBlockConnection_>,  } | [doesRequireNetworkCaches?: boolean, connectionConfigType?: $ConnectionConfigType_<$ConnectionConfig>, ticker?: $ConduitTickerBase<$Conduit_<T, U>>, connectionPathComparator?: $Comparator<$ConduitConnectionPath>, tickRateGetter?: $Function_<$Conduit<T, U>, number>, exposedCapabilities?: $Set_<$BlockCapability<never, never>>, codec?: $MapCodec_<$Conduit_<T, U>>, connectionComparator?: $Comparator<$ConduitBlockConnection_>, ];
    export interface $Conduit<TConduit, TConnectionConfig> extends RegistryMarked<RegistryTypes.EnderioConduitTag, RegistryTypes.EnderioConduit> {}
    export interface $ConduitType<T, U> extends RegistryMarked<RegistryTypes.EnderioConduitTypeTag, RegistryTypes.EnderioConduitType> {}
    export class $ConduitType$Builder<T extends $Conduit<T, U>, U extends $ConnectionConfig> {
        doesRequireNetworkCaches(): $ConduitType$Builder<T, U>;
        connectionComparerFromReference(arg0: $Comparator<$ConduitConnectionPath>): $ConduitType$Builder<T, U>;
        exposeCapability<V>(arg0: $BlockCapability<V, never>): $ConduitType$Builder<T, U>;
        connectionComparator(arg0: $Comparator<$ConduitBlockConnection_>): $ConduitType$Builder<T, U>;
        build(): $ConduitType<T, U>;
        ticker(arg0: $ConduitTickerBase<T>, arg1: $Function_<T, number>): $ConduitType$Builder<T, U>;
        ticker(arg0: $ConduitTickerBase<T>, arg1: number): $ConduitType$Builder<T, U>;
    }
    export class $Conduit<TConduit extends $Conduit<TConduit, TConnectionConfig>, TConnectionConfig extends $ConnectionConfig> {
        static CODEC: $Codec<$Holder<$Conduit<never, never>>>;
        static DIRECT_CODEC: $Codec<$Conduit<never, never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Conduit<never, never>>>;
    }
    export interface $Conduit<TConduit extends $Conduit<TConduit, TConnectionConfig>, TConnectionConfig extends $ConnectionConfig> extends $Comparable<TConduit>, $TooltipProvider {
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        texture(): $ResourceLocation;
        addToTooltip(arg0: $Item$TooltipContext, arg1: $Consumer_<$Component>, arg2: $TooltipFlag): void;
        getInventorySize(): number;
        collectNodePathProperties(arg0: $ConduitNode, arg1: $ConnectionPathPropertyConsumer_): void;
        canReplaceConduit(arg0: TConduit): boolean;
        canConnectToConduit(arg0: TConduit): boolean;
        /**
         * @deprecated
         */
        copyLegacyData(arg0: $ConduitNode, arg1: $ConduitDataAccessor, arg2: $BiConsumer_<$Direction, $ConnectionConfig>): void;
        hasAdvancedTooltip(): boolean;
        showDebugTooltip(): boolean;
        /**
         * @deprecated
         */
        canConnectToBlock(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): boolean;
        canConnectToBlock(arg0: $Level_, arg1: $ConduitCapabilityAccessor_, arg2: $BlockPos_, arg3: $Direction_): boolean;
        hasMenu(): boolean;
        canForceConnectToBlock(arg0: $Level_, arg1: $ConduitCapabilityAccessor_, arg2: $BlockPos_, arg3: $Direction_): boolean;
        /**
         * @deprecated
         */
        canForceConnectToBlock(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): boolean;
        proxyCapability<TCapability, TContext>(arg0: $Level_, arg1: $ConduitNode, arg2: $BlockCapability<TCapability, TContext>, arg3: TContext): TCapability;
        canConnectConduits(arg0: $ConduitNode, arg1: $ConduitNode): boolean;
        getExtraWorldData(arg0: $ConduitBundle, arg1: $ConduitNode): $CompoundTag;
        getExtraGuiData(arg0: $ConduitBundle, arg1: $ConduitNode, arg2: $Direction_): $CompoundTag;
        onConnectionsUpdated(arg0: $ConduitNode, arg1: $Level_, arg2: $BlockPos_, arg3: $Set_<$Direction_>): void;
        hasServerConnectionChecks(): boolean;
        onConnectTo(arg0: $ConduitNode, arg1: $ConduitNode): void;
        shouldCheckConnectionsOnNeighborChange(): boolean;
        /**
         * @deprecated
         */
        hasConnectionDelay(): boolean;
        /**
         * @deprecated
         */
        convertConnection(arg0: boolean, arg1: boolean, arg2: $DyeColor_, arg3: $DyeColor_, arg4: $RedstoneControl_, arg5: $DyeColor_): TConnectionConfig;
        /**
         * @deprecated
         */
        getIndexForLegacySlot(arg0: $SlotType_): number;
        getInventorySlotPosition(arg0: number): $Vector2i;
        onRemoved(arg0: $ConduitNode, arg1: $Level_, arg2: $BlockPos_): void;
        onCreated(arg0: $ConduitNode, arg1: $Level_, arg2: $BlockPos_, arg3: $Player): void;
        description(): $Component;
        type(): $ConduitType<TConduit, TConnectionConfig>;
        get inventorySize(): number;
    }
    /**
     * Values that may be interpreted as {@link $Conduit}.
     */
    export type $Conduit_<TConduit, TConnectionConfig> = RegistryTypes.EnderioConduit;
    export class $ConduitCapabilityAccessor {
    }
    export interface $ConduitCapabilityAccessor {
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $Direction_, arg2: C): T;
        getSidedCapability<T>(arg0: $BlockCapability<T, $Direction_>, arg1: $Direction_): T;
    }
    /**
     * Values that may be interpreted as {@link $ConduitCapabilityAccessor}.
     */
    export type $ConduitCapabilityAccessor_ = ((arg0: $BlockCapability<any, any>, arg1: $Direction, arg2: any) => any);
}
