import { $FriendlyByteBuf, $PacketListener } from "@package/net/minecraft/network";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/ping" {
    export class $ClientboundPongResponsePacket extends $Record implements $Packet<$ClientPongPacketListener> {
        handle(arg0: $ClientPongPacketListener): void;
        type(): $PacketType<$ClientboundPongResponsePacket>;
        time(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPongResponsePacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPongResponsePacket}.
     */
    export type $ClientboundPongResponsePacket_ = { time?: number,  } | [time?: number, ];
    export class $PingPacketTypes {
        static SERVERBOUND_PING_REQUEST: $PacketType<$ServerboundPingRequestPacket>;
        static CLIENTBOUND_PONG_RESPONSE: $PacketType<$ClientboundPongResponsePacket>;
        constructor();
    }
    export class $ClientPongPacketListener {
    }
    export interface $ClientPongPacketListener extends $PacketListener {
        handlePongResponse(arg0: $ClientboundPongResponsePacket_): void;
    }
    export class $ServerPingPacketListener {
    }
    export interface $ServerPingPacketListener extends $PacketListener {
        handlePingRequest(arg0: $ServerboundPingRequestPacket): void;
    }
    export class $ServerboundPingRequestPacket implements $Packet<$ServerPingPacketListener> {
        handle(arg0: $ServerPingPacketListener): void;
        getTime(): number;
        type(): $PacketType<$ServerboundPingRequestPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundPingRequestPacket>;
        constructor(arg0: number);
        get time(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
}
