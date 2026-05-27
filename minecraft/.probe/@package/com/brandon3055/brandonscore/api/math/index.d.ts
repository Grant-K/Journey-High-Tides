import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec2 } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/brandon3055/brandonscore/api/math" {
    export class $Vector2 {
        distanceSq(arg0: $Vector2): number;
        distanceSq(arg0: number, arg1: number): number;
        writeToNBT(arg0: $CompoundTag_): $CompoundTag;
        static fromNBT(arg0: $CompoundTag_): $Vector2;
        subtract(arg0: number, arg1: number): $Vector2;
        subtract(arg0: number): $Vector2;
        subtract(arg0: $Vector2): $Vector2;
        divide(arg0: $Vector2): $Vector2;
        divide(arg0: number): $Vector2;
        divide(arg0: number, arg1: number): $Vector2;
        isZero(): boolean;
        negate(): $Vector2;
        magSquared(): number;
        toArrayD(): number[];
        toArrayF(): number[];
        mag(): number;
        distance(arg0: number, arg1: number): number;
        distance(arg0: $Vector2): number;
        multiply(arg0: $Vector2): $Vector2;
        multiply(arg0: number): $Vector2;
        multiply(arg0: number, arg1: number): $Vector2;
        normalize(): $Vector2;
        floor(): $Vector2;
        ceil(): $Vector2;
        add(arg0: number): $Vector2;
        add(arg0: $Vector2): $Vector2;
        add(arg0: number, arg1: number): $Vector2;
        set(arg0: number[]): $Vector2;
        set(arg0: number, arg1: number): $Vector2;
        set(arg0: number[]): $Vector2;
        set(arg0: number): $Vector2;
        set(arg0: $Vector2): $Vector2;
        copy(): $Vector2;
        static CODEC: $Codec<$Vector2>;
        x: number;
        y: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Vector2>;
        constructor(arg0: $Vector2);
        constructor();
        constructor(arg0: $Vec2);
        constructor(arg0: number, arg1: number);
        get zero(): boolean;
    }
}
