import { $TransformType_ } from "@package/dev/kosmx/playerAnim/api";
import { $FirstPersonConfiguration, $FirstPersonMode } from "@package/dev/kosmx/playerAnim/api/firstPerson";
import { $IAnimation } from "@package/dev/kosmx/playerAnim/api/layered";
import { $Vec3f, $Pair } from "@package/dev/kosmx/playerAnim/core/util";

declare module "@package/dev/kosmx/playerAnim/core/impl" {
    export class $AnimationProcessor {
        get3DTransform(modelName: string, type: $TransformType_, value0: $Vec3f): $Vec3f;
        getFirstPersonMode(): $FirstPersonMode;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        setTickDelta(tickDelta: number): void;
        tick(): void;
        getBend(modelName: string): $Pair<number, number>;
        isFirstPersonAnimationDisabled(): boolean;
        isActive(): boolean;
        constructor(animation: $IAnimation);
        get firstPersonMode(): $FirstPersonMode;
        get firstPersonConfiguration(): $FirstPersonConfiguration;
        set tickDelta(value: number);
        get firstPersonAnimationDisabled(): boolean;
        get active(): boolean;
    }
}
