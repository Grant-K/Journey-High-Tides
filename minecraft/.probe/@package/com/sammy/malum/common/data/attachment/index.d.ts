import { $Codec } from "@package/com/mojang/serialization";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/sammy/malum/common/data/attachment" {
    export class $SoulWardData {
        addCooldown(arg0: $LivingEntity, arg1: number): void;
        tickData(arg0: $LivingEntity): void;
        getAppliedCooldownMultiplier(): number;
        tryCorrectCooldown(arg0: $LivingEntity): void;
        setSoulWard(arg0: number): void;
        addSoulWard(arg0: number): void;
        getSoulWardCooldown(): number;
        getSoulWardCooldown(arg0: $LivingEntity): number;
        recoverSoulWard(arg0: $LivingEntity, arg1: number): void;
        isDepleted(): boolean;
        getSoulWard(): number;
        reduceSoulWard(arg0: number): void;
        static CODEC: $Codec<$SoulWardData>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SoulWardData>;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number);
        get appliedCooldownMultiplier(): number;
        get depleted(): boolean;
    }
}
