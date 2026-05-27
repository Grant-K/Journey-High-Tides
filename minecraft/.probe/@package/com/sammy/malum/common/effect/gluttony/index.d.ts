import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $MobEffect } from "@package/net/minecraft/world/effect";

declare module "@package/com/sammy/malum/common/effect/gluttony" {
    export class $GluttonyEffect$GluttonyEffectProperties {
        scaleInitialDuration(arg0: number): $GluttonyEffect$GluttonyEffectProperties;
        scaleDurationLimit(arg0: number): $GluttonyEffect$GluttonyEffectProperties;
        scaleDurationGain(arg0: number): $GluttonyEffect$GluttonyEffectProperties;
        scaleAmplifierLimit(arg0: number): $GluttonyEffect$GluttonyEffectProperties;
        replaceEffectType(arg0: $Holder_<$MobEffect>): $GluttonyEffect$GluttonyEffectProperties;
        scaleInitialAmplifier(arg0: number): $GluttonyEffect$GluttonyEffectProperties;
        scaleAmplifierGain(arg0: number): $GluttonyEffect$GluttonyEffectProperties;
        getEffectType(): $Holder<$MobEffect>;
        setInitialDuration(arg0: number): $GluttonyEffect$GluttonyEffectProperties;
        setInitialAmplifier(arg0: number): $GluttonyEffect$GluttonyEffectProperties;
        setAmplifierLimit(arg0: number): $GluttonyEffect$GluttonyEffectProperties;
        setDurationGain(arg0: number): $GluttonyEffect$GluttonyEffectProperties;
        setDurationLimit(arg0: number): $GluttonyEffect$GluttonyEffectProperties;
        setAmplifierGain(arg0: number): $GluttonyEffect$GluttonyEffectProperties;
        getInitialDuration(): number;
        getInitialAmplifier(): number;
        getAmplifierLimit(): number;
        getDurationLimit(): number;
        getAmplifierGain(): number;
        getDurationGain(): number;
        apply(arg0: $LivingEntity): void;
        get effectType(): $Holder<$MobEffect>;
    }
}
