import { $Codec } from "@package/com/mojang/serialization";
import { $MapCodecHelper } from "@package/net/darkhax/bookshelf/common/api/data/codecs/map";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum } from "@package/java/lang";
import { $EnumStreamCodec } from "@package/net/darkhax/bookshelf/common/api/data/codecs";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $Quaternionf, $Vector3f } from "@package/org/joml";

declare module "@package/net/darkhax/botanypots/common/api/data/display/math" {
    export class $AxisAlignedRotation extends $Enum<$AxisAlignedRotation> {
        static values(): $AxisAlignedRotation[];
        static valueOf(arg0: string): $AxisAlignedRotation;
        static X_270: $AxisAlignedRotation;
        static CODEC: $Codec<$AxisAlignedRotation>;
        static Z_180: $AxisAlignedRotation;
        offset: $Vector3f;
        static X_180: $AxisAlignedRotation;
        static Z_270: $AxisAlignedRotation;
        static CODEC_HELPER: $MapCodecHelper<$AxisAlignedRotation>;
        rotation: $Quaternionf;
        static X_0: $AxisAlignedRotation;
        static STREAM: $EnumStreamCodec<$AxisAlignedRotation>;
        static Z_0: $AxisAlignedRotation;
        static Y_0: $AxisAlignedRotation;
        static Y_180: $AxisAlignedRotation;
        static Y_90: $AxisAlignedRotation;
        static Z_90: $AxisAlignedRotation;
        static X_90: $AxisAlignedRotation;
        static Y_270: $AxisAlignedRotation;
    }
    /**
     * Values that may be interpreted as {@link $AxisAlignedRotation}.
     */
    export type $AxisAlignedRotation_ = "x_0" | "x_90" | "x_180" | "x_270" | "y_0" | "y_90" | "y_180" | "y_270" | "z_0" | "z_90" | "z_180" | "z_270";
    export class $TintColor {
        pack(): number;
        asHex(): string;
        asPercents(): number[];
        static fromHex(arg0: string): $TintColor;
        red(): number;
        asArray(): number[];
        blue(): number;
        green(): number;
        static unpack(arg0: number): $TintColor;
        alpha(): number;
        static WHITE: $TintColor;
        static CODEC: $Codec<$TintColor>;
        static CODEC_STRING: $Codec<$TintColor>;
        static CODEC_ARGB: $Codec<$TintColor>;
        static STREAM: $StreamCodec<$ByteBuf, $TintColor>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
}
