import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/com/github/alexthe666/citadel/animation" {
    export class $AnimationEvent<T extends $Entity> extends $Event {
        getAnimation(): $Animation;
        getEntity(): T;
        get animation(): $Animation;
        get entity(): T;
    }
    export class $Animation {
        /**
         * @deprecated
         */
        getID(): number;
        getDuration(): number;
        static create(arg0: number): $Animation;
        /**
         * @deprecated
         */
        static create(arg0: number, arg1: number): $Animation;
        get ID(): number;
        get duration(): number;
    }
    export class $AnimationEvent$Tick<T extends $Entity> extends $AnimationEvent<T> {
        getTick(): number;
        constructor(arg0: T, arg1: $Animation, arg2: number);
        get tick(): number;
    }
    export class $AnimationEvent$Start<T extends $Entity> extends $AnimationEvent<T> implements $ICancellableEvent {
        setAnimation(arg0: $Animation): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: T, arg1: $Animation);
        set animation(value: $Animation);
    }
}
