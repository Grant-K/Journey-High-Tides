import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/ai/control" {
    export class $Control {
    }
    export interface $Control {
    }
    export class $JumpControl implements $Control {
        tick(): void;
        jump(): void;
        constructor(arg0: $Mob);
    }
    export class $MoveControl$Operation extends $Enum<$MoveControl$Operation> {
        static values(): $MoveControl$Operation[];
        static valueOf(arg0: string): $MoveControl$Operation;
        static MOVE_TO: $MoveControl$Operation;
        static STRAFE: $MoveControl$Operation;
        static WAIT: $MoveControl$Operation;
        static JUMPING: $MoveControl$Operation;
    }
    /**
     * Values that may be interpreted as {@link $MoveControl$Operation}.
     */
    export type $MoveControl$Operation_ = "wait" | "move_to" | "strafe" | "jumping";
    export class $LookControl implements $Control {
        setLookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        setLookAt(arg0: $Entity, arg1: number, arg2: number): void;
        setLookAt(arg0: $Entity): void;
        setLookAt(arg0: $Vec3_): void;
        setLookAt(arg0: number, arg1: number, arg2: number): void;
        getWantedY(): number;
        isLookingAtTarget(): boolean;
        getWantedX(): number;
        getWantedZ(): number;
        tick(): void;
        xMaxRotAngle: number;
        yMaxRotSpeed: number;
        lookAtCooldown: number;
        constructor(arg0: $Mob);
        get wantedY(): number;
        get lookingAtTarget(): boolean;
        get wantedX(): number;
        get wantedZ(): number;
    }
    export class $SmoothSwimmingMoveControl extends $MoveControl {
        static MIN_SPEED_SQR: number;
        operation: $MoveControl$Operation;
        static MIN_SPEED: number;
        constructor(arg0: $Mob, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean);
    }
    export class $FlyingMoveControl extends $MoveControl {
        static MIN_SPEED_SQR: number;
        operation: $MoveControl$Operation;
        static MIN_SPEED: number;
        constructor(arg0: $Mob, arg1: number, arg2: boolean);
    }
    export class $BodyRotationControl implements $Control {
        clientTick(): void;
        rotateHeadIfNecessary(): void;
        rotateBodyIfNecessary(): void;
        rotateHeadTowardsFront(): void;
        mob: $Mob;
        constructor(arg0: $Mob);
    }
    export class $MoveControl implements $Control {
        getSpeedModifier(): number;
        setWantedPosition(arg0: number, arg1: number, arg2: number, arg3: number): void;
        hasWanted(): boolean;
        strafe(arg0: number, arg1: number): void;
        getWantedY(): number;
        getWantedX(): number;
        getWantedZ(): number;
        tick(): void;
        static MIN_SPEED_SQR: number;
        operation: $MoveControl$Operation;
        static MIN_SPEED: number;
        constructor(arg0: $Mob);
        get speedModifier(): number;
        get wantedY(): number;
        get wantedX(): number;
        get wantedZ(): number;
    }
    export class $SmoothSwimmingLookControl extends $LookControl {
        xMaxRotAngle: number;
        yMaxRotSpeed: number;
        lookAtCooldown: number;
        constructor(arg0: $Mob, arg1: number);
    }
}
