import { $ChannelHandlerContext } from "@package/io/netty/channel";
import { $Connection } from "@package/net/minecraft/network";
import { $Enum } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/network/connection" {
    export class $ConnectionType extends $Enum<$ConnectionType> {
        isOther(): boolean;
        isNeoForge(): boolean;
        static values(): $ConnectionType[];
        static valueOf(arg0: string): $ConnectionType;
        static OTHER: $ConnectionType;
        static NEOFORGE: $ConnectionType;
        get other(): boolean;
        get neoForge(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionType}.
     */
    export type $ConnectionType_ = "neoforge" | "other";
    export class $ConnectionUtils {
        static setConnection(arg0: $ChannelHandlerContext, arg1: $Connection): void;
        static getConnection(arg0: $ChannelHandlerContext): $Connection;
        static removeConnection(arg0: $ChannelHandlerContext): void;
    }
}
