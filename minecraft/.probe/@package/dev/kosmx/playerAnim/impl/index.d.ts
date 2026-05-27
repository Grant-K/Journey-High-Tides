import { $AnimationProcessor } from "@package/dev/kosmx/playerAnim/core/impl";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IPlayer } from "@package/dev/kosmx/playerAnim/api";
import { $AnimationApplier } from "@package/dev/kosmx/playerAnim/impl/animation";
import { $IAnimation } from "@package/dev/kosmx/playerAnim/api/layered";
import { $SetableSupplier } from "@package/dev/kosmx/playerAnim/core/util";
export * as animation from "@package/dev/kosmx/playerAnim/impl/animation";

declare module "@package/dev/kosmx/playerAnim/impl" {
    export class $IPlayerModel {
    }
    export interface $IPlayerModel {
        playerAnimator_prepForFirstPersonRender(): void;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerModel}.
     */
    export type $IPlayerModel_ = (() => void);
    export class $IMutableModel {
    }
    export interface $IMutableModel {
        setEmoteSupplier(arg0: $SetableSupplier<$AnimationProcessor>): void;
        getEmoteSupplier(): $SetableSupplier<$AnimationProcessor>;
    }
    export class $IUpperPartHelper {
    }
    export interface $IUpperPartHelper {
        isUpperPart(): boolean;
        setUpperPart(arg0: boolean): void;
    }
    export class $IAnimatedPlayer {
    }
    export interface $IAnimatedPlayer extends $IPlayer {
        playerAnimator_getAnimation(arg0: $ResourceLocation_): $IAnimation;
        playerAnimator_getAnimation(): $AnimationApplier;
        playerAnimator_setAnimation(arg0: $ResourceLocation_, arg1: $IAnimation): $IAnimation;
        /**
         * @deprecated
         */
        getAnimation(): $AnimationApplier;
        get animation(): $AnimationApplier;
    }
}
