import { $Codec } from "@package/com/mojang/serialization";
import { $Color } from "@package/java/awt";
import { $Easing } from "@package/team/lodestar/lodestone/systems/easing";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/team/lodestar/lodestone/systems/particle/data/color" {
    export class $ColorParticleDataBuilder implements $ColorParticleDataWrapper {
        setEasing(arg0: $Easing): $ColorParticleDataBuilder;
        setCoefficient(arg0: number): $ColorParticleDataBuilder;
        unwrap(): $ColorParticleData;
        build(): $ColorParticleData;
        set easing(value: $Easing);
        set coefficient(value: number);
    }
    export class $ColorParticleDataWrapper {
    }
    export interface $ColorParticleDataWrapper {
        unwrap(): $ColorParticleData;
    }
    /**
     * Values that may be interpreted as {@link $ColorParticleDataWrapper}.
     */
    export type $ColorParticleDataWrapper_ = (() => $ColorParticleData);
    export class $ColorParticleData implements $ColorParticleDataWrapper {
        getProgress(arg0: number, arg1: number): number;
        overrideCoefficientMultiplier(arg0: number): $ColorParticleData;
        getStartingColor(): $Color;
        getEndingColor(): $Color;
        getColorCoefficient(): number;
        getColorCurve(): $Easing;
        rgbToHsv(arg0: number[], arg1: number[]): void;
        invert(): $ColorParticleDataBuilder;
        static createGrayParticleColor(arg0: $RandomSource, arg1: number, arg2: number): $ColorParticleData;
        static createGrayParticleColor(arg0: $RandomSource): $ColorParticleData;
        multiplyCoefficient(arg0: number): $ColorParticleData;
        static create(arg0: $Color): $ColorParticleDataBuilder;
        static create(arg0: $Color, arg1: $Color): $ColorParticleDataBuilder;
        static create(arg0: number, arg1: number, arg2: number): $ColorParticleDataBuilder;
        static create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $ColorParticleDataBuilder;
        unwrap(): $ColorParticleData;
        lock(): $ColorParticleData;
        copy(): $ColorParticleDataBuilder;
        static CODEC: $Codec<$ColorParticleData>;
        get startingColor(): $Color;
        get endingColor(): $Color;
        get colorCoefficient(): number;
        get colorCurve(): $Easing;
    }
}
