import { $Level } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $IHasTranslationKey$IHasEnumNameTranslationKey, $IHasTranslationKey, $IHasTextComponent$IHasEnumNameTextComponent, $ILangEntry, $IHasTextComponent } from "@package/mekanism/api/text";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $UUID, $List, $Set, $Collection_, $Collection } from "@package/java/util";
import { $IIncrementalEnum } from "@package/mekanism/api";
import { $BufferedTransmitter, $Transmitter } from "@package/mekanism/common/content/network/transmitter";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IntFunction, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Range3D } from "@package/mekanism/common/lib/math";
import { $TileEntityTransmitter } from "@package/mekanism/common/tile/transmitter";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Object } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as acceptor from "@package/mekanism/common/lib/transmitter/acceptor";

declare module "@package/mekanism/common/lib/transmitter" {
    export class $CompatibleTransmitterValidator<ACCEPTOR, NETWORK extends $DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER>, TRANSMITTER extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER>> {
        isNetworkCompatible(net: NETWORK): boolean;
        isTransmitterCompatible(transmitter: $Transmitter<never, never, never>): boolean;
        constructor();
    }
    export class $ConnectionType extends $Enum<$ConnectionType> implements $IIncrementalEnum<$ConnectionType>, $StringRepresentable, $IHasTranslationKey, $IHasTextComponent$IHasEnumNameTextComponent {
        getSerializedName(): string;
        getTranslationKey(): string;
        byIndex(index: number): $ConnectionType;
        canAccept(): boolean;
        getTextComponent(): $Component;
        canSendTo(): boolean;
        static values(): $ConnectionType[];
        static valueOf(name: string): $ConnectionType;
        getNext(): $ConnectionType;
        getNext(arg0: $Predicate_<$ConnectionType>): $ConnectionType;
        adjust(arg0: number): $ConnectionType;
        adjust(arg0: number, arg1: $Predicate_<$ConnectionType>): $ConnectionType;
        getPrevious(arg0: $Predicate_<$ConnectionType>): $ConnectionType;
        getPrevious(): $ConnectionType;
        getRemappedEnumConstantName(): string;
        getTranslatedName(): $Component;
        static PULL: $ConnectionType;
        static BY_ID: $IntFunction<$ConnectionType>;
        static NONE: $ConnectionType;
        static NORMAL: $ConnectionType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConnectionType>;
        static PUSH: $ConnectionType;
        get serializedName(): string;
        get translationKey(): string;
        get textComponent(): $Component;
        get remappedEnumConstantName(): string;
        get translatedName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionType}.
     */
    export type $ConnectionType_ = "normal" | "push" | "pull" | "none";
    export class $INetworkDataHandler {
    }
    export interface $INetworkDataHandler {
        getNeededInfo(): $Component;
        getStoredInfo(): $Component;
        getFlowInfo(): $Component;
        getNetworkReaderCapacity(): $Object;
        get neededInfo(): $Component;
        get storedInfo(): $Component;
        get flowInfo(): $Component;
        get networkReaderCapacity(): $Object;
    }
    export class $TransmissionType extends $Enum<$TransmissionType> implements $IHasTranslationKey$IHasEnumNameTranslationKey, $StringRepresentable {
        getSerializedName(): string;
        getTranslationKey(): string;
        checkTransmissionType(transmitter: $TileEntityTransmitter): boolean;
        checkTransmissionType(transmitter: $Transmitter<never, never, never>): boolean;
        getTransmission(): string;
        getLangEntry(): $ILangEntry;
        getLegacyOrdinal(): number;
        getName(): string;
        static values(): $TransmissionType[];
        static valueOf(name: string): $TransmissionType;
        getTranslatedName(): $Component;
        getRemappedEnumConstantName(): string;
        static ITEM: $TransmissionType;
        static HEAT: $TransmissionType;
        static ENERGY: $TransmissionType;
        static CODEC: $Codec<$TransmissionType>;
        static FLUID: $TransmissionType;
        static BY_ID: $IntFunction<$TransmissionType>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TransmissionType>;
        static CHEMICAL: $TransmissionType;
        get serializedName(): string;
        get translationKey(): string;
        get transmission(): string;
        get langEntry(): $ILangEntry;
        get legacyOrdinal(): number;
        get translatedName(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TransmissionType}.
     */
    export type $TransmissionType_ = "energy" | "fluids" | "chemicals" | "items" | "heat";
    export class $DynamicBufferedNetwork$TransferEvent<NETWORK extends $DynamicBufferedNetwork<never, NETWORK, never, never>> extends $Event {
        network: NETWORK;
        constructor(network: NETWORK);
    }
    export class $DynamicNetwork<ACCEPTOR, NETWORK extends $DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER>, TRANSMITTER extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER>> implements $INetworkDataHandler, $IHasTextComponent {
        getUUID(): $UUID;
        onUpdate(): void;
        invalidate(triggerTransmitter: TRANSMITTER): void;
        getWorld(): $Level;
        deregister(): void;
        isRemote(): boolean;
        getTransmitter(pos: number): TRANSMITTER;
        getTransmitter(pos: $BlockPos_): TRANSMITTER;
        getTransmitters(): $Collection<TRANSMITTER>;
        transmittersSize(): number;
        getAcceptorCount(): number;
        hasAcceptor(acceptorPos: $BlockPos_): boolean;
        getAcceptorDirections(pos: number): $Set<$Direction>;
        removeTransmitter(transmitter: TRANSMITTER): void;
        addTransmitter(transmitter: TRANSMITTER): void;
        getCachedAcceptor(acceptorPos: number, side: $Direction_): ACCEPTOR;
        acceptorChanged(transmitter: TRANSMITTER, side: $Direction_): void;
        adoptTransmittersAndAcceptorsFrom(net: NETWORK): $List<TRANSMITTER>;
        getTransmitterValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
        addNewTransmitters(newTransmitters: $Collection_<TRANSMITTER>, transmitterValidator: $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>): void;
        commit(): void;
        isEmpty(): boolean;
        register(): void;
        getNeededInfo(): $Component;
        getStoredInfo(): $Component;
        getFlowInfo(): $Component;
        getNetworkReaderCapacity(): $Object;
        get UUID(): $UUID;
        get world(): $Level;
        get remote(): boolean;
        get transmitters(): $Collection<TRANSMITTER>;
        get acceptorCount(): number;
        get transmitterValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
        get empty(): boolean;
        get neededInfo(): $Component;
        get storedInfo(): $Component;
        get flowInfo(): $Component;
        get networkReaderCapacity(): $Object;
    }
    export class $DynamicBufferedNetwork<ACCEPTOR, NETWORK extends $DynamicBufferedNetwork<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>, BUFFER, TRANSMITTER extends $BufferedTransmitter<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>> extends $DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER> {
        absorbBuffer(transmitter: TRANSMITTER): void;
        markDirty(): void;
        getCapacity(): number;
        getBuffer(): BUFFER;
        updateCapacity(): void;
        getPacketRange(): $Range3D;
        validateSaveShares(triggerTransmitter: TRANSMITTER): void;
        clampBuffer(): void;
        adoptTransmittersAndAcceptorsFrom(net: NETWORK): $List<TRANSMITTER>;
        isCompatibleWith(other: NETWORK): boolean;
        currentScale: number;
        get capacity(): number;
        get buffer(): BUFFER;
        get packetRange(): $Range3D;
    }
}
