import { $TintColor, $AxisAlignedRotation } from "@package/net/darkhax/botanypots/common/api/data/display/math";
import { $Direction } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $Set } from "@package/java/util";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";
import { $Vector3f } from "@package/org/joml";

declare module "@package/net/darkhax/botanypots/common/api/data/display/types" {
    export class $Display {
    }
    export interface $Display {
        getType(): $DisplayType<never>;
        get type(): $DisplayType<never>;
    }
    /**
     * Values that may be interpreted as {@link $Display}.
     */
    export type $Display_ = (() => $DisplayType_<never>);
    export class $DisplayType<T extends $Display> extends $Record {
        codec(): $MapCodec<T>;
        typeId(): $ResourceLocation;
        static get<T extends $Display>(arg0: $ResourceLocation_): $DisplayType<T>;
        stream(): $StreamCodec<$FriendlyByteBuf, T>;
        static register<T extends $Display>(arg0: $ResourceLocation_, arg1: $MapCodec_<T>, arg2: $StreamCodec_<$FriendlyByteBuf, T>): $DisplayType<T>;
        static TYPE_CODEC: $Codec<$DisplayType<never>>;
        static DISPLAY_STATE_STREAM: $StreamCodec<$FriendlyByteBuf, $Display>;
        static DISPLAY_STATE_CODEC: $Codec<$Display>;
        static TYPE_STREAM: $StreamCodec<$ByteBuf, $DisplayType<$Display>>;
        static LIST_CODEC: $Codec<$List<$Display>>;
        constructor(typeId: $ResourceLocation_, codec: $MapCodec_<T>, stream: $StreamCodec_<$FriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $DisplayType}.
     */
    export type $DisplayType_<T> = { stream?: $StreamCodec_<$FriendlyByteBuf, $Display_>, typeId?: $ResourceLocation_, codec?: $MapCodec_<$Display_>,  } | [stream?: $StreamCodec_<$FriendlyByteBuf, $Display_>, typeId?: $ResourceLocation_, codec?: $MapCodec_<$Display_>, ];
    export class $RenderOptions {
    }
    export interface $RenderOptions {
        getColor(): ($TintColor) | undefined;
        getScale(): $Vector3f;
        getFaces(): $Set<$Direction>;
        getRotations(): $List<$AxisAlignedRotation>;
        shouldRenderFluid(): boolean;
        getOffset(): $Vector3f;
        get color(): ($TintColor) | undefined;
        get scale(): $Vector3f;
        get faces(): $Set<$Direction>;
        get rotations(): $List<$AxisAlignedRotation>;
        get offset(): $Vector3f;
    }
}
