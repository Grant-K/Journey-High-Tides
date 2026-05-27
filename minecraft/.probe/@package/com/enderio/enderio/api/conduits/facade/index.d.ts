import { $IntFunction } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/enderio/enderio/api/conduits/facade" {
    export class $FacadeType extends $Enum<$FacadeType> implements $StringRepresentable {
        getSerializedName(): string;
        isBlastResistant(): boolean;
        doesHideConduits(): boolean;
        static values(): $FacadeType[];
        static valueOf(arg0: string): $FacadeType;
        getRemappedEnumConstantName(): string;
        static TRANSPARENT_HARDENED: $FacadeType;
        static CODEC: $Codec<$FacadeType>;
        static HARDENED: $FacadeType;
        static BY_ID: $IntFunction<$FacadeType>;
        static TRANSPARENT: $FacadeType;
        static BASIC: $FacadeType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FacadeType>;
        get serializedName(): string;
        get blastResistant(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FacadeType}.
     */
    export type $FacadeType_ = "basic" | "hardened" | "transparent" | "transparent_hardened";
}
