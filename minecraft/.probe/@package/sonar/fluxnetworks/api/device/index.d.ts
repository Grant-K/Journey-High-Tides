import { $MenuProvider } from "@package/net/minecraft/world";
import { $GlobalPos } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Enum } from "@package/java/lang";
import { $UUID } from "@package/java/util";

declare module "@package/sonar/fluxnetworks/api/device" {
    export class $IFluxProvider {
    }
    export interface $IFluxProvider extends $MenuProvider {
        getDisplayName(): $Component;
        onPlayerOpened(arg0: $Player): void;
        onPlayerClosed(arg0: $Player): void;
        getNetworkID(): number;
        get displayName(): $Component;
        get networkID(): number;
    }
    export class $IFluxDevice {
    }
    export interface $IFluxDevice extends $IFluxProvider {
        getCustomName(): string;
        getDisplayStack(): $ItemStack;
        getOwnerUUID(): $UUID;
        getGlobalPos(): $GlobalPos;
        getRawPriority(): number;
        getRawLimit(): number;
        getSurgeMode(): boolean;
        getDisableLimit(): boolean;
        getDeviceType(): $FluxDeviceType;
        isForcedLoading(): boolean;
        isChunkLoaded(): boolean;
        getTransferBuffer(): number;
        readCustomTag(arg0: $CompoundTag_, arg1: number): void;
        writeCustomTag(arg0: $CompoundTag_, arg1: number): void;
        getMaxTransferLimit(): number;
        getTransferChange(): number;
        get customName(): string;
        get displayStack(): $ItemStack;
        get ownerUUID(): $UUID;
        get globalPos(): $GlobalPos;
        get rawPriority(): number;
        get rawLimit(): number;
        get surgeMode(): boolean;
        get disableLimit(): boolean;
        get deviceType(): $FluxDeviceType;
        get forcedLoading(): boolean;
        get chunkLoaded(): boolean;
        get transferBuffer(): number;
        get maxTransferLimit(): number;
        get transferChange(): number;
    }
    export class $FluxDeviceType extends $Enum<$FluxDeviceType> {
        isPlug(): boolean;
        static fromId(arg0: number): $FluxDeviceType;
        isController(): boolean;
        isStorage(): boolean;
        isPoint(): boolean;
        static values(): $FluxDeviceType[];
        static valueOf(arg0: string): $FluxDeviceType;
        getId(): number;
        static STORAGE: $FluxDeviceType;
        mColor: number;
        static CONTROLLER: $FluxDeviceType;
        static VALUES: $FluxDeviceType[];
        static PLUG: $FluxDeviceType;
        static POINT: $FluxDeviceType;
        get plug(): boolean;
        get controller(): boolean;
        get storage(): boolean;
        get point(): boolean;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $FluxDeviceType}.
     */
    export type $FluxDeviceType_ = "point" | "plug" | "storage" | "controller";
}
