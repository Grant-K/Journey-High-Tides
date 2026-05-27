import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ConfigurationTask$Type_ } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload, $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $ServerCommonPacketListener, $ClientCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $Supplier_ } from "@package/java/util/function";
import { $ICommonPacketListener } from "@package/net/neoforged/neoforge/common/extensions";
import { $ChannelHandlerContext } from "@package/io/netty/channel";
import { $Connection, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Runnable_, $Record } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/network/handling" {
    export class $IPayloadHandler<T extends $CustomPacketPayload> {
    }
    export interface $IPayloadHandler<T extends $CustomPacketPayload> {
        handle(arg0: T, arg1: $IPayloadContext): void;
    }
    /**
     * Values that may be interpreted as {@link $IPayloadHandler}.
     */
    export type $IPayloadHandler_<T> = ((arg0: T, arg1: $IPayloadContext) => void);
    export class $ServerPayloadContext extends $Record implements $IPayloadContext {
        flow(): $PacketFlow;
        enqueueWork<T>(arg0: $Supplier_<T>): $CompletableFuture<T>;
        enqueueWork(arg0: $Runnable_): $CompletableFuture<void>;
        finishCurrentTask(arg0: $ConfigurationTask$Type_): void;
        listener(): $ServerCommonPacketListener;
        payloadId(): $ResourceLocation;
        handle(arg0: $CustomPacketPayload_): void;
        channelHandlerContext(): $ChannelHandlerContext;
        reply(arg0: $CustomPacketPayload_): void;
        handle(arg0: $Packet<never>): void;
        protocol(): $ConnectionProtocol;
        connection(): $Connection;
        disconnect(arg0: $Component_): void;
        player(): $Player;
        constructor(listener: $ServerCommonPacketListener, payloadId: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ServerPayloadContext}.
     */
    export type $ServerPayloadContext_ = { payloadId?: $ResourceLocation_, listener?: $ServerCommonPacketListener,  } | [payloadId?: $ResourceLocation_, listener?: $ServerCommonPacketListener, ];
    export class $IPayloadContext {
    }
    export interface $IPayloadContext {
        flow(): $PacketFlow;
        player(): $Player;
        enqueueWork(arg0: $Runnable_): $CompletableFuture<void>;
        enqueueWork<T>(arg0: $Supplier_<T>): $CompletableFuture<T>;
        channelHandlerContext(): $ChannelHandlerContext;
        finishCurrentTask(arg0: $ConfigurationTask$Type_): void;
        listener(): $ICommonPacketListener;
        reply(arg0: $CustomPacketPayload_): void;
        handle(arg0: $CustomPacketPayload_): void;
        handle(arg0: $Packet<never>): void;
        protocol(): $ConnectionProtocol;
        connection(): $Connection;
        disconnect(arg0: $Component_): void;
    }
    export class $DirectionalPayloadHandler<T extends $CustomPacketPayload> extends $Record implements $IPayloadHandler<T> {
        clientSide(): $IPayloadHandler<T>;
        serverSide(): $IPayloadHandler<T>;
        handle(arg0: T, arg1: $IPayloadContext): void;
        constructor(clientSide: $IPayloadHandler_<T>, serverSide: $IPayloadHandler_<T>);
    }
    /**
     * Values that may be interpreted as {@link $DirectionalPayloadHandler}.
     */
    export type $DirectionalPayloadHandler_<T> = { serverSide?: $IPayloadHandler_<$CustomPacketPayload>, clientSide?: $IPayloadHandler_<$CustomPacketPayload>,  } | [serverSide?: $IPayloadHandler_<$CustomPacketPayload>, clientSide?: $IPayloadHandler_<$CustomPacketPayload>, ];
    export class $ClientPayloadContext extends $Record implements $IPayloadContext {
        flow(): $PacketFlow;
        player(): $Player;
        enqueueWork<T>(arg0: $Supplier_<T>): $CompletableFuture<T>;
        enqueueWork(arg0: $Runnable_): $CompletableFuture<void>;
        finishCurrentTask(arg0: $ConfigurationTask$Type_): void;
        payloadId(): $ResourceLocation;
        handle(arg0: $CustomPacketPayload_): void;
        channelHandlerContext(): $ChannelHandlerContext;
        reply(arg0: $CustomPacketPayload_): void;
        handle(arg0: $Packet<never>): void;
        protocol(): $ConnectionProtocol;
        connection(): $Connection;
        disconnect(arg0: $Component_): void;
        listener(): $ICommonPacketListener;
        constructor(listener: $ClientCommonPacketListener, payloadId: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ClientPayloadContext}.
     */
    export type $ClientPayloadContext_ = { payloadId?: $ResourceLocation_, listener?: $ClientCommonPacketListener,  } | [payloadId?: $ResourceLocation_, listener?: $ClientCommonPacketListener, ];
    export class $MainThreadPayloadHandler<T extends $CustomPacketPayload> extends $Record implements $IPayloadHandler<T> {
        handle(arg0: T, arg1: $IPayloadContext): void;
        handler(): $IPayloadHandler<T>;
        constructor(handler: $IPayloadHandler_<T>);
    }
    /**
     * Values that may be interpreted as {@link $MainThreadPayloadHandler}.
     */
    export type $MainThreadPayloadHandler_<T> = { handler?: $IPayloadHandler_<$CustomPacketPayload>,  } | [handler?: $IPayloadHandler_<$CustomPacketPayload>, ];
}
