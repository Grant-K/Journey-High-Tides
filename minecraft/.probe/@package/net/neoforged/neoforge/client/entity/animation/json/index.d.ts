import { $AnimationTarget, $AnimationTarget_ } from "@package/net/neoforged/neoforge/client/entity/animation";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $AnimationChannel$Interpolation_, $AnimationChannel$Interpolation, $Keyframe, $AnimationDefinition, $AnimationChannel, $AnimationChannel$Target_ } from "@package/net/minecraft/client/animation";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";

declare module "@package/net/neoforged/neoforge/client/entity/animation/json" {
    export class $AnimationTypeManager {
        static getTargetName(arg0: $AnimationTarget_): $ResourceLocation;
        static getInterpolation(arg0: $ResourceLocation_): $AnimationChannel$Interpolation;
        static getKeyframeCodec(arg0: $AnimationTarget_): $Codec<$Keyframe>;
        static getTargetFromChannelTarget(arg0: $AnimationChannel$Target_): $AnimationTarget;
        static getInterpolationName(arg0: $AnimationChannel$Interpolation_): $ResourceLocation;
        static getTargetList(): string;
        static getInterpolationList(): string;
        static getTarget(arg0: $ResourceLocation_): $AnimationTarget;
        static init(): void;
        static get targetList(): string;
        static get interpolationList(): string;
    }
    export class $AnimationHolder {
        getOrNull(): $AnimationDefinition;
        isBound(): boolean;
        get(): $AnimationDefinition;
        key(): $ResourceLocation;
        static EMPTY_ANIMATION: $AnimationDefinition;
        get orNull(): $AnimationDefinition;
        get bound(): boolean;
    }
    export class $AnimationLoader extends $SimpleJsonResourceReloadListener {
        getAnimation(arg0: $ResourceLocation_): $AnimationDefinition;
        getAnimationHolder(arg0: $ResourceLocation_): $AnimationHolder;
        static INSTANCE: $AnimationLoader;
    }
    export class $AnimationParser {
        static CHANNEL_CODEC: $MapCodec<$AnimationChannel>;
        static CODEC: $Codec<$AnimationDefinition>;
    }
}
