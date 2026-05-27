import { $TintColor, $AxisAlignedRotation_, $AxisAlignedRotation } from "@package/net/darkhax/botanypots/common/api/data/display/math";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $RenderOptions } from "@package/net/darkhax/botanypots/common/api/data/display/types";
import { $Set_, $List, $List_, $Set } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $Vector3f } from "@package/org/joml";

declare module "@package/net/darkhax/botanypots/common/impl/data/display/types" {
    export class $BasicOptions implements $RenderOptions {
        getColor(): ($TintColor) | undefined;
        getScale(): $Vector3f;
        getFaces(): $Set<$Direction>;
        static ofDefault(): $BasicOptions;
        static ofDefault(arg0: $Set_<$Direction_>): $BasicOptions;
        getRotations(): $List<$AxisAlignedRotation>;
        shouldRenderFluid(): boolean;
        getOffset(): $Vector3f;
        static CODEC: $Codec<$BasicOptions>;
        static DEFAULT_SCALE: $Vector3f;
        static DEFAULT_FACES: $Set<$Direction>;
        static STREAM: $StreamCodec<$FriendlyByteBuf, $BasicOptions>;
        static DEFAULT_OFFSET: $Vector3f;
        constructor(arg0: $Vector3f, arg1: $Vector3f, arg2: $List_<$AxisAlignedRotation_>, arg3: boolean, arg4: ($TintColor) | undefined, arg5: $Set_<$Direction_>);
        get color(): ($TintColor) | undefined;
        get scale(): $Vector3f;
        get faces(): $Set<$Direction>;
        get rotations(): $List<$AxisAlignedRotation>;
        get offset(): $Vector3f;
    }
}
