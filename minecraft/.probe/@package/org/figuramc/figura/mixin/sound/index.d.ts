import { $SoundEngine } from "@package/net/minecraft/client/sounds";

declare module "@package/org/figuramc/figura/mixin/sound" {
    export class $SoundManagerAccessor {
    }
    export interface $SoundManagerAccessor {
        getSoundEngine(): $SoundEngine;
        get soundEngine(): $SoundEngine;
    }
    /**
     * Values that may be interpreted as {@link $SoundManagerAccessor}.
     */
    export type $SoundManagerAccessor_ = (() => $SoundEngine);
}
