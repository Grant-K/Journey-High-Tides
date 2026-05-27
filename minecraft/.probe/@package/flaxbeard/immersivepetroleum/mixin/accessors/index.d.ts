import { $File } from "@package/java/io";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $Map } from "@package/java/util";
import { $Boat$Status_, $Boat$Status } from "@package/net/minecraft/world/entity/vehicle";

declare module "@package/flaxbeard/immersivepetroleum/mixin/accessors" {
    export class $DataStorageTestAccess {
    }
    export interface $DataStorageTestAccess {
        getDataFolder(): $File;
        getCache(): $Map<string, $SavedData>;
        invokeGetDataFile(arg0: string): $File;
        get dataFolder(): $File;
        get cache(): $Map<string, $SavedData>;
    }
    export class $BoatAccess {
    }
    export interface $BoatAccess {
        oldStatus(): $Boat$Status;
        oldStatus(arg0: $Boat$Status_): void;
        invokeGetStatus(): $Boat$Status;
        setOutOfControlTicks(arg0: number): void;
        getOutOfControlTicks(): number;
        getPaddlePositions(): number[];
        setDeltaRotation(arg0: number): void;
        getDeltaRotation(): number;
        isInputLeft(): boolean;
        isInputRight(): boolean;
        isInputUp(): boolean;
        isInputDown(): boolean;
        invokeTickLerp(): void;
        invokeTickBubbleColumn(): void;
        invokeFloatBoat(): void;
        status(): $Boat$Status;
        status(arg0: $Boat$Status_): void;
        get paddlePositions(): number[];
        get inputLeft(): boolean;
        get inputRight(): boolean;
        get inputUp(): boolean;
        get inputDown(): boolean;
    }
}
