import { $CapePoint, $Vector3 } from "@package/dev/tr7zw/waveycapes/versionless/util";
import { $List } from "@package/java/util";

declare module "@package/dev/tr7zw/waveycapes/versionless/sim" {
    export class $BasicSimulation {
    }
    export interface $BasicSimulation {
        applyMovement(arg0: $Vector3): void;
        simulate(): void;
        getGravity(): number;
        setGravity(arg0: number): void;
        isSneaking(): boolean;
        setSneaking(arg0: boolean): void;
        setGravityDirection(arg0: $Vector3): void;
        getPoints(): $List<$CapePoint>;
        empty(): boolean;
        init(arg0: number): boolean;
        set gravityDirection(value: $Vector3);
        get points(): $List<$CapePoint>;
    }
}
