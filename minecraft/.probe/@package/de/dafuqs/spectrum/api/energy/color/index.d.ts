import { $TagKey_ } from "@package/net/minecraft/tags";
import { $DyeColor_, $DyeColor } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $Vector3f } from "@package/org/joml";

declare module "@package/de/dafuqs/spectrum/api/energy/color" {
    export interface $InkColor extends RegistryMarked<RegistryTypes.SpectrumInkColorTag, RegistryTypes.SpectrumInkColor> {}
    export class $InkColor {
        getColorInt(): number;
        isIn(arg0: $TagKey_<$InkColor>): boolean;
        getDyeColor(): ($DyeColor) | undefined;
        getID(): $ResourceLocation;
        static ofId(arg0: $ResourceLocation_): ($InkColor) | undefined;
        static ofDyeColor(arg0: $DyeColor_): $InkColor;
        static ofIdString(arg0: string): ($InkColor) | undefined;
        getColoredName(): $MutableComponent;
        getColoredInkName(): $MutableComponent;
        getColorVec(): $Vector3f;
        getTextColorInt(): number;
        getTextColorVec(): $Vector3f;
        getRequiredAdvancement(): $ResourceLocation;
        getName(): $MutableComponent;
        static CODEC: $Codec<$InkColor>;
        static PACKET_CODEC: $StreamCodec<$ByteBuf, $InkColor>;
        constructor(arg0: ($DyeColor_) | undefined, arg1: number, arg2: number, arg3: $ResourceLocation_);
        constructor(arg0: $DyeColor_, arg1: number, arg2: number, arg3: $ResourceLocation_);
        constructor(arg0: $DyeColor_, arg1: number, arg2: $ResourceLocation_);
        get colorInt(): number;
        get dyeColor(): ($DyeColor) | undefined;
        get ID(): $ResourceLocation;
        get coloredName(): $MutableComponent;
        get coloredInkName(): $MutableComponent;
        get colorVec(): $Vector3f;
        get textColorInt(): number;
        get textColorVec(): $Vector3f;
        get requiredAdvancement(): $ResourceLocation;
        get name(): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $InkColor}.
     */
    export type $InkColor_ = RegistryTypes.SpectrumInkColor;
}
