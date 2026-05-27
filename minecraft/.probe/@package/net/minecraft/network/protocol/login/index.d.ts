import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PublicKey, $PrivateKey } from "@package/java/security";
import { $INamedPacket } from "@package/com/connectivity/networkstats";
import { $ServerPacketListener } from "@package/net/minecraft/network/protocol/game";
import { $UUID, $UUID_ } from "@package/java/util";
import { $ClientCookiePacketListener, $ServerCookiePacketListener } from "@package/net/minecraft/network/protocol/cookie";
import { $ClientboundPacketListener, $FriendlyByteBuf, $ProtocolInfo$Unbound, $ProtocolInfo, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $CustomQueryAnswerPayload_, $CustomQueryAnswerPayload, $CustomQueryPayload } from "@package/net/minecraft/network/protocol/login/custom";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $SecretKey } from "@package/javax/crypto";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as custom from "@package/net/minecraft/network/protocol/login/custom";

declare module "@package/net/minecraft/network/protocol/login" {
    export class $ServerboundCustomQueryAnswerPacket extends $Record implements $Packet<$ServerLoginPacketListener>, $INamedPacket {
        transactionId(): number;
        handle(arg0: $ServerLoginPacketListener): void;
        payload(): $CustomQueryAnswerPayload;
        getName(): string;
        type(): $PacketType<$ServerboundCustomQueryAnswerPacket>;
        setName(arg0: string): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundCustomQueryAnswerPacket>;
        constructor(arg0: number, arg1: $CustomQueryAnswerPayload_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundCustomQueryAnswerPacket}.
     */
    export type $ServerboundCustomQueryAnswerPacket_ = { transactionId?: number, payload?: $CustomQueryAnswerPayload_,  } | [transactionId?: number, payload?: $CustomQueryAnswerPayload_, ];
    export class $LoginProtocols {
        static CLIENTBOUND: $ProtocolInfo<$ClientLoginPacketListener>;
        static CLIENTBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ClientLoginPacketListener, $FriendlyByteBuf>;
        static SERVERBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ServerLoginPacketListener, $FriendlyByteBuf>;
        static SERVERBOUND: $ProtocolInfo<$ServerLoginPacketListener>;
        constructor();
    }
    export class $ClientboundGameProfilePacket extends $Record implements $Packet<$ClientLoginPacketListener> {
        gameProfile(): $GameProfile;
        isTerminal(): boolean;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        handle(arg0: $ClientLoginPacketListener): void;
        type(): $PacketType<$ClientboundGameProfilePacket>;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundGameProfilePacket>;
        constructor(arg0: $GameProfile, arg1: boolean);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundGameProfilePacket}.
     */
    export type $ClientboundGameProfilePacket_ = { gameProfile?: $GameProfile, strictErrorHandling?: boolean,  } | [gameProfile?: $GameProfile, strictErrorHandling?: boolean, ];
    export class $ClientboundCustomQueryPacket extends $Record implements $Packet<$ClientLoginPacketListener>, $INamedPacket {
        transactionId(): number;
        handle(arg0: $ClientLoginPacketListener): void;
        payload(): $CustomQueryPayload;
        getName(): string;
        type(): $PacketType<$ClientboundCustomQueryPacket>;
        setName(arg0: string): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCustomQueryPacket>;
        constructor(arg0: number, arg1: $CustomQueryPayload);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCustomQueryPacket}.
     */
    export type $ClientboundCustomQueryPacket_ = { transactionId?: number, payload?: $CustomQueryPayload,  } | [transactionId?: number, payload?: $CustomQueryPayload, ];
    export class $ServerboundLoginAcknowledgedPacket implements $Packet<$ServerLoginPacketListener> {
        isTerminal(): boolean;
        handle(arg0: $ServerLoginPacketListener): void;
        type(): $PacketType<$ServerboundLoginAcknowledgedPacket>;
        isSkippable(): boolean;
        static INSTANCE: $ServerboundLoginAcknowledgedPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundLoginAcknowledgedPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ServerboundHelloPacket extends $Record implements $Packet<$ServerLoginPacketListener> {
        profileId(): $UUID;
        handle(arg0: $ServerLoginPacketListener): void;
        name(): string;
        type(): $PacketType<$ServerboundHelloPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundHelloPacket>;
        constructor(arg0: string, arg1: $UUID_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundHelloPacket}.
     */
    export type $ServerboundHelloPacket_ = { name?: string, profileId?: $UUID_,  } | [name?: string, profileId?: $UUID_, ];
    export class $LoginPacketTypes {
        static CLIENTBOUND_GAME_PROFILE: $PacketType<$ClientboundGameProfilePacket>;
        static CLIENTBOUND_CUSTOM_QUERY: $PacketType<$ClientboundCustomQueryPacket>;
        static CLIENTBOUND_HELLO: $PacketType<$ClientboundHelloPacket>;
        static CLIENTBOUND_LOGIN_DISCONNECT: $PacketType<$ClientboundLoginDisconnectPacket>;
        static SERVERBOUND_KEY: $PacketType<$ServerboundKeyPacket>;
        static CLIENTBOUND_LOGIN_COMPRESSION: $PacketType<$ClientboundLoginCompressionPacket>;
        static SERVERBOUND_HELLO: $PacketType<$ServerboundHelloPacket>;
        static SERVERBOUND_CUSTOM_QUERY_ANSWER: $PacketType<$ServerboundCustomQueryAnswerPacket>;
        static SERVERBOUND_LOGIN_ACKNOWLEDGED: $PacketType<$ServerboundLoginAcknowledgedPacket>;
        constructor();
    }
    export class $ClientboundHelloPacket implements $Packet<$ClientLoginPacketListener> {
        getChallenge(): number[];
        shouldAuthenticate(): boolean;
        getServerId(): string;
        handle(arg0: $ClientLoginPacketListener): void;
        getPublicKey(): $PublicKey;
        type(): $PacketType<$ClientboundHelloPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundHelloPacket>;
        constructor(arg0: string, arg1: number[], arg2: number[], arg3: boolean);
        get challenge(): number[];
        get serverId(): string;
        get publicKey(): $PublicKey;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerLoginPacketListener {
    }
    export interface $ServerLoginPacketListener extends $ServerCookiePacketListener, $ServerPacketListener {
        handleCustomQueryPacket(arg0: $ServerboundCustomQueryAnswerPacket_): void;
        handleKey(arg0: $ServerboundKeyPacket): void;
        handleLoginAcknowledgement(arg0: $ServerboundLoginAcknowledgedPacket): void;
        handleHello(arg0: $ServerboundHelloPacket_): void;
        protocol(): $ConnectionProtocol;
    }
    export class $ServerboundKeyPacket implements $Packet<$ServerLoginPacketListener> {
        isChallengeValid(arg0: number[], arg1: $PrivateKey): boolean;
        getSecretKey(arg0: $PrivateKey): $SecretKey;
        handle(arg0: $ServerLoginPacketListener): void;
        type(): $PacketType<$ServerboundKeyPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundKeyPacket>;
        constructor(arg0: $SecretKey, arg1: $PublicKey, arg2: number[]);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLoginCompressionPacket implements $Packet<$ClientLoginPacketListener> {
        getCompressionThreshold(): number;
        handle(arg0: $ClientLoginPacketListener): void;
        type(): $PacketType<$ClientboundLoginCompressionPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLoginCompressionPacket>;
        constructor(arg0: number);
        get compressionThreshold(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLoginDisconnectPacket implements $Packet<$ClientLoginPacketListener> {
        getReason(): $Component;
        handle(arg0: $ClientLoginPacketListener): void;
        type(): $PacketType<$ClientboundLoginDisconnectPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLoginDisconnectPacket>;
        constructor(arg0: $Component_);
        get reason(): $Component;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientLoginPacketListener {
    }
    export interface $ClientLoginPacketListener extends $ClientCookiePacketListener, $ClientboundPacketListener {
        handleHello(arg0: $ClientboundHelloPacket): void;
        handleGameProfile(arg0: $ClientboundGameProfilePacket_): void;
        handleDisconnect(arg0: $ClientboundLoginDisconnectPacket): void;
        handleCompression(arg0: $ClientboundLoginCompressionPacket): void;
        handleCustomQuery(arg0: $ClientboundCustomQueryPacket_): void;
        protocol(): $ConnectionProtocol;
    }
}
