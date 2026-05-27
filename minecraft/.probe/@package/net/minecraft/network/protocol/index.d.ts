import { $INamedPacket } from "@package/com/connectivity/networkstats";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $CrashReport, $ReportedException } from "@package/net/minecraft";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $IPacketFlowExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ChannelHandlerContext } from "@package/io/netty/channel";
import { $ServerboundPacketListener, $ConnectionProtocol_, $ClientboundPacketListener, $ProtocolInfo$Unbound, $PacketListener, $ConnectionProtocol, $ProtocolInfo } from "@package/net/minecraft/network";
import { $BlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Record, $Exception, $Iterable } from "@package/java/lang";
import { $StreamCodec_, $StreamCodec, $StreamDecoder_, $StreamMemberEncoder_ } from "@package/net/minecraft/network/codec";
export * as game from "@package/net/minecraft/network/protocol/game";
export * as common from "@package/net/minecraft/network/protocol/common";
export * as ping from "@package/net/minecraft/network/protocol/ping";
export * as login from "@package/net/minecraft/network/protocol/login";
export * as configuration from "@package/net/minecraft/network/protocol/configuration";
export * as handshake from "@package/net/minecraft/network/protocol/handshake";
export * as status from "@package/net/minecraft/network/protocol/status";
export * as cookie from "@package/net/minecraft/network/protocol/cookie";

declare module "@package/net/minecraft/network/protocol" {
    export class $PacketType<T extends $Packet<never>> extends $Record {
        flow(): $PacketFlow;
        id(): $ResourceLocation;
        constructor(arg0: $PacketFlow_, arg1: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $PacketType}.
     */
    export type $PacketType_<T> = { flow?: $PacketFlow_, id?: $ResourceLocation_,  } | [flow?: $PacketFlow_, id?: $ResourceLocation_, ];
    export class $ProtocolInfoBuilder$CodecEntry<T extends $PacketListener, P extends $Packet<T>, B extends $ByteBuf> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ProtocolInfoBuilder$CodecEntry}.
     */
    export type $ProtocolInfoBuilder$CodecEntry_<T, P, B> = { serializer?: $StreamCodec_<$ByteBuf, $Packet<T>>, type?: $PacketType_<$Packet<T>>,  } | [serializer?: $StreamCodec_<$ByteBuf, $Packet<T>>, type?: $PacketType_<$Packet<T>>, ];
    export class $ProtocolInfoBuilder$Implementation<L extends $PacketListener> extends $Record implements $ProtocolInfo<L> {
        codec(): $StreamCodec<$ByteBuf, $Packet<L>>;
        flow(): $PacketFlow;
        bundlerInfo(): $BundlerInfo;
        id(): $ConnectionProtocol;
    }
    /**
     * Values that may be interpreted as {@link $ProtocolInfoBuilder$Implementation}.
     */
    export type $ProtocolInfoBuilder$Implementation_<L> = { id?: $ConnectionProtocol_, bundlerInfo?: $BundlerInfo, codec?: $StreamCodec_<$ByteBuf, $Packet<$PacketListener>>, flow?: $PacketFlow_,  } | [id?: $ConnectionProtocol_, bundlerInfo?: $BundlerInfo, codec?: $StreamCodec_<$ByteBuf, $Packet<$PacketListener>>, flow?: $PacketFlow_, ];
    export class $PacketFlow extends $Enum<$PacketFlow> implements $IPacketFlowExtension {
        getOpposite(): $PacketFlow;
        static values(): $PacketFlow[];
        static valueOf(arg0: string): $PacketFlow;
        id(): string;
        isServerbound(): boolean;
        isClientbound(): boolean;
        getReceptionSide(): $LogicalSide;
        self(): $PacketFlow;
        static CLIENTBOUND: $PacketFlow;
        static SERVERBOUND: $PacketFlow;
        get opposite(): $PacketFlow;
        get serverbound(): boolean;
        get clientbound(): boolean;
        get receptionSide(): $LogicalSide;
    }
    /**
     * Values that may be interpreted as {@link $PacketFlow}.
     */
    export type $PacketFlow_ = "serverbound" | "clientbound";
    export class $BundlerInfo {
        static createForPacket<T extends $PacketListener, P extends $BundlePacket<T>>(arg0: $PacketType_<P>, arg1: $Function_<$Iterable<$Packet<T>>, P>, arg2: $BundleDelimiterPacket<T>): $BundlerInfo;
        static BUNDLE_SIZE_LIMIT: number;
    }
    export interface $BundlerInfo {
        unbundlePacket(arg0: $Packet<never>, arg1: $Consumer_<$Packet<never>>, arg2: $ChannelHandlerContext): void;
        /**
         * @deprecated
         */
        unbundlePacket(arg0: $Packet<never>, arg1: $Consumer_<$Packet<never>>): void;
        startPacketBundling(arg0: $Packet<never>): $BundlerInfo$Bundler;
    }
    export class $ProtocolInfoBuilder<T extends $PacketListener, B extends $ByteBuf> {
        buildUnbound(): $ProtocolInfo$Unbound<T, B>;
        withBundlePacket<P extends $BundlePacket<T>, D extends $BundleDelimiterPacket<T>>(arg0: $PacketType_<P>, arg1: $Function_<$Iterable<$Packet<T>>, P>, arg2: D): $ProtocolInfoBuilder<T, B>;
        addPacket<P extends $Packet<T>>(arg0: $PacketType_<P>, arg1: $StreamCodec_<B, P>): $ProtocolInfoBuilder<T, B>;
        static serverboundProtocol<T extends $ServerboundPacketListener, B extends $ByteBuf>(arg0: $ConnectionProtocol_, arg1: $Consumer_<$ProtocolInfoBuilder<T, B>>): $ProtocolInfo$Unbound<T, B>;
        static clientboundProtocol<T extends $ClientboundPacketListener, B extends $ByteBuf>(arg0: $ConnectionProtocol_, arg1: $Consumer_<$ProtocolInfoBuilder<T, B>>): $ProtocolInfo$Unbound<T, B>;
        build(arg0: $Function_<$ByteBuf, B>): $ProtocolInfo<T>;
        constructor(arg0: $ConnectionProtocol_, arg1: $PacketFlow_);
    }
    export class $ProtocolCodecBuilder<B extends $ByteBuf, L extends $PacketListener> {
        build(): $StreamCodec<B, $Packet<L>>;
        add<T extends $Packet<L>>(arg0: $PacketType_<T>, arg1: $StreamCodec_<B, T>): $ProtocolCodecBuilder<B, L>;
        constructor(arg0: $PacketFlow_);
    }
    export class $BundlerInfo$Bundler {
    }
    export interface $BundlerInfo$Bundler {
        addPacket(arg0: $Packet<never>): $Packet<never>;
    }
    /**
     * Values that may be interpreted as {@link $BundlerInfo$Bundler}.
     */
    export type $BundlerInfo$Bundler_ = ((arg0: $Packet<never>) => $Packet<never>);
    export class $BundleDelimiterPacket<T extends $PacketListener> implements $Packet<T> {
        handle(arg0: T): void;
        type(): $PacketType<$BundleDelimiterPacket<T>>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        constructor();
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $Packet<T extends $PacketListener> {
        static codec<B extends $ByteBuf, T extends $Packet<never>>(arg0: $StreamMemberEncoder_<B, T>, arg1: $StreamDecoder_<B, T>): $StreamCodec<B, T>;
    }
    export interface $Packet<T extends $PacketListener> {
        isSkippable(): boolean;
        isTerminal(): boolean;
        handle(arg0: T): void;
        type(): $PacketType<$Packet<T>>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $BundlePacket<T extends $PacketListener> implements $Packet<T>, $INamedPacket {
        subPackets(): $Iterable<$Packet<T>>;
        getName(): string;
        type(): $PacketType<$BundlePacket<T>>;
        setName(arg0: string): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $PacketUtils {
        static fillCrashReport<T extends $PacketListener>(arg0: $CrashReport, arg1: T, arg2: $Packet<T>): void;
        static makeReportedException<T extends $PacketListener>(arg0: $Exception, arg1: $Packet<T>, arg2: T): $ReportedException;
        static ensureRunningOnSameThread<T extends $PacketListener>(arg0: $Packet<T>, arg1: T, arg2: $ServerLevel): void;
        static ensureRunningOnSameThread<T extends $PacketListener>(arg0: $Packet<T>, arg1: T, arg2: $BlockableEventLoop<never>): void;
        constructor();
    }
}
