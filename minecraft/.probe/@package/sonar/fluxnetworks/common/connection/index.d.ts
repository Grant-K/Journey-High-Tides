import { $GlobalPos_, $NonNullList } from "@package/net/minecraft/core";
import { $LongList } from "@package/it/unimi/dsi/fastutil/longs";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IFluxProvider, $IFluxDevice } from "@package/sonar/fluxnetworks/api/device";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluxDeviceConfigComponent_ } from "@package/sonar/fluxnetworks/common/data";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $AccessLevel, $SecurityLevel_, $NetworkMember, $SecurityLevel } from "@package/sonar/fluxnetworks/api/network";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Slot, $ContainerListener, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $UUID, $List, $UUID_, $Collection } from "@package/java/util";
import { $TileFluxDevice } from "@package/sonar/fluxnetworks/common/device";

declare module "@package/sonar/fluxnetworks/common/connection" {
    export class $FluxMenu extends $AbstractContainerMenu {
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        mProvider: $IFluxProvider;
        mOnResultListener: $FluxMenu$OnResultListener;
        constructor(arg0: number, arg1: $Inventory, arg2: $IFluxProvider);
    }
    export class $NetworkStatistics {
        getConnectionCount(): number;
        startProfiling(): void;
        stopProfiling(): void;
        readNBT(arg0: $CompoundTag_): void;
        writeNBT(arg0: $CompoundTag_): void;
        fluxPointCount: number;
        energyInput: number;
        static CHANGE_COUNT: number;
        fluxPlugCount: number;
        energyOutput: number;
        totalEnergy: number;
        averageTickMicro: number;
        fluxControllerCount: number;
        fluxStorageCount: number;
        totalBuffer: number;
        energyChange: $LongList;
        constructor(arg0: $FluxNetwork);
        get connectionCount(): number;
    }
    export class $FluxNetwork {
        getConnectionByPos(arg0: $GlobalPos_): $IFluxDevice;
        onDelete(): void;
        getOwnerUUID(): $UUID;
        isValid(): boolean;
        setNetworkName(arg0: string): boolean;
        setNetworkColor(arg0: number): boolean;
        getSecurityLevel(): $SecurityLevel;
        setSecurityLevel(arg0: $SecurityLevel_): boolean;
        getLogicalDevices(arg0: number): $List<$TileFluxDevice>;
        getBufferLimiter(): number;
        changeMembership(arg0: $Player, arg1: $UUID_, arg2: number): number;
        getMemberByUUID(arg0: $UUID_): $NetworkMember;
        getAllConnections(): $Collection<$IFluxDevice>;
        onEndServerTick(): void;
        getStatistics(): $NetworkStatistics;
        getAllMembers(): $Collection<$NetworkMember>;
        getNetworkColor(): number;
        getNetworkName(): string;
        getNetworkID(): number;
        getPlayerAccess(arg0: $Player): $AccessLevel;
        canPlayerAccess(arg0: $Player): boolean;
        canPlayerAccess(arg0: $Player, arg1: string): boolean;
        readCustomTag(arg0: $CompoundTag_, arg1: number): void;
        writeCustomTag(arg0: $CompoundTag_, arg1: number): void;
        enqueueConnectionRemoval(arg0: $TileFluxDevice, arg1: boolean): void;
        enqueueConnectionAddition(arg0: $TileFluxDevice): boolean;
        static STORAGE: number;
        static OWNER_UUID: string;
        static NETWORK_COLOR: string;
        static MEMBERS: string;
        static MAX_NETWORK_NAME_LENGTH: number;
        static NETWORK_NAME: string;
        static PLUG: number;
        static CONNECTIONS: string;
        static INVALID: $FluxNetwork;
        static ANY: number;
        static SECURITY_LEVEL: string;
        static CONTROLLER: number;
        static POINT: number;
        static MAX_PASSWORD_LENGTH: number;
        get ownerUUID(): $UUID;
        get valid(): boolean;
        get bufferLimiter(): number;
        get allConnections(): $Collection<$IFluxDevice>;
        get statistics(): $NetworkStatistics;
        get allMembers(): $Collection<$NetworkMember>;
        get networkID(): number;
    }
    export class $FluxMenu$OnResultListener {
    }
    export interface $FluxMenu$OnResultListener {
        onResult(arg0: $FluxMenu, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $FluxMenu$OnResultListener}.
     */
    export type $FluxMenu$OnResultListener_ = ((arg0: $FluxMenu, arg1: number, arg2: number) => void);
    export class $TransferHandler {
        getBuffer(): number;
        setLimit(arg0: number): void;
        getLimit(): number;
        applyConfiguration(arg0: $FluxDeviceConfigComponent_, arg1: number): void;
        onNetworkChanged(): void;
        getChange(): number;
        getRawPriority(): number;
        getRawLimit(): number;
        getSurgeMode(): boolean;
        getDisableLimit(): boolean;
        readCustomTag(arg0: $CompoundTag_, arg1: number): void;
        writeCustomTag(arg0: $CompoundTag_, arg1: number): void;
        changeSettings(arg0: $CompoundTag_): boolean;
        writePacketBuffer(arg0: $FriendlyByteBuf, arg1: number): void;
        readPacketBuffer(arg0: $FriendlyByteBuf, arg1: number): void;
        setSurgeMode(arg0: boolean): boolean;
        setDisableLimit(arg0: boolean): void;
        getRequest(): number;
        setPriority(arg0: number): boolean;
        getPriority(): number;
        static PRI_GAIN_MAX: number;
        static PRI_USER_MIN: number;
        static STORAGE_PRI_DIFF: number;
        static PRI_GAIN_MIN: number;
        static PRI_USER_MAX: number;
        get buffer(): number;
        get change(): number;
        get rawPriority(): number;
        get rawLimit(): number;
        get request(): number;
    }
}
