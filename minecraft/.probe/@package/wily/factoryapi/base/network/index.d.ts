import { $Supplier_, $Function_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Executor } from "@package/java/util/concurrent";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Runnable_ } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/wily/factoryapi/base/network" {
    export class $CommonNetwork$PlayBuf {
        static fromBuf(buf: $FriendlyByteBuf): $CommonNetwork$PlayBuf;
        static create(): $CommonNetwork$PlayBuf;
        static of(buf: $RegistryFriendlyByteBuf): $CommonNetwork$PlayBuf;
    }
    export interface $CommonNetwork$PlayBuf extends $Supplier<$RegistryFriendlyByteBuf> {
    }
    /**
     * Values that may be interpreted as {@link $CommonNetwork$PlayBuf}.
     */
    export type $CommonNetwork$PlayBuf_ = (() => void);
    export class $SecureExecutor implements $Executor {
        executeAll(): void;
        isSecure(): boolean;
        executeWhen(supplier: $BooleanSupplier_): void;
        executeNowIfPossible(supplier: $BooleanSupplier_): void;
        executeNowIfPossible(action: $Runnable_, supplier: $BooleanSupplier_): void;
        clear(): void;
        execute(runnable: $Runnable_): void;
        constructor();
        get secure(): boolean;
    }
    export class $CommonNetwork$Identifier<T extends $CommonNetwork$Payload> {
        static create<T extends $CommonNetwork$Payload>(location: $ResourceLocation_, decoder: $Function_<$CommonNetwork$PlayBuf, T>): $CommonNetwork$Identifier<T>;
        static create<T extends $CommonNetwork$Payload>(location: $ResourceLocation_, decoder: $Supplier_<T>): $CommonNetwork$Identifier<T>;
    }
    export interface $CommonNetwork$Identifier<T extends $CommonNetwork$Payload> {
        codec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        type(): $CustomPacketPayload$Type<T>;
        decode(arg0: $RegistryFriendlyByteBuf): T;
        location(): $ResourceLocation;
    }
    export class $CommonNetwork$Payload {
    }
    export interface $CommonNetwork$Payload extends $CustomPacketPayload {
        applyClient(): void;
        applyServer(player: $Supplier_<$Player>): void;
        applySided(client: boolean, player: $Supplier_<$Player>): void;
        identifier(): $CommonNetwork$Identifier<$CommonNetwork$Payload>;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        encode(buf: $RegistryFriendlyByteBuf): void;
        encode(arg0: $CommonNetwork$PlayBuf_): void;
        apply(arg0: $CommonNetwork$Payload$Context): void;
    }
    export class $CommonNetwork$Payload$Context {
        static createClientContext(): $CommonNetwork$Payload$Context;
        static createServerContext(player: $Supplier_<$Player>): $CommonNetwork$Payload$Context;
        static createContext(executor: $SecureExecutor, playerSupplier: $Supplier_<$Player>, isClient: boolean): $CommonNetwork$Payload$Context;
    }
    export interface $CommonNetwork$Payload$Context {
        player(): $Player;
        executor(): $SecureExecutor;
        server(): $MinecraftServer;
        isClient(): boolean;
        get client(): boolean;
    }
}
