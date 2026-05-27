import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $MultiblockHandler$IMultiblock } from "@package/blusunrize/immersiveengineering/api/multiblocks";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Rotation_, $Block_, $Rotation } from "@package/net/minecraft/world/level/block";

declare module "@package/flaxbeard/immersivepetroleum/api/event" {
    export class $ProjectorEvent extends $Event {
        getRotation(): $Rotation;
        getWorldPos(): $BlockPos;
        getTemplateWorld(): $Level;
        getTemplateState(): $BlockState;
        getTemplatePos(): $BlockPos;
        getMultiblock(): $MultiblockHandler$IMultiblock;
        getWorld(): $Level;
        getState(): $BlockState;
        constructor(arg0: $MultiblockHandler$IMultiblock, arg1: $Level_, arg2: $BlockPos_, arg3: $Level_, arg4: $BlockPos_, arg5: $BlockState_, arg6: $Rotation_);
        get rotation(): $Rotation;
        get worldPos(): $BlockPos;
        get templateWorld(): $Level;
        get templateState(): $BlockState;
        get templatePos(): $BlockPos;
        get multiblock(): $MultiblockHandler$IMultiblock;
        get world(): $Level;
        get state(): $BlockState;
    }
    export class $ProjectorEvent$PlaceBlock extends $ProjectorEvent {
        setBlockState(arg0: $BlockState_): void;
        setState(arg0: $Block_): void;
        constructor(arg0: $MultiblockHandler$IMultiblock, arg1: $Level_, arg2: $BlockPos_, arg3: $Level_, arg4: $BlockPos_, arg5: $BlockState_, arg6: $Rotation_);
        set blockState(value: $BlockState_);
        set state(value: $Block_);
    }
    export class $ProjectorEvent$RenderBlock extends $ProjectorEvent {
        setState(arg0: $BlockState_): void;
        setState(arg0: $Block_): void;
        constructor(arg0: $MultiblockHandler$IMultiblock, arg1: $Level_, arg2: $BlockPos_, arg3: $Level_, arg4: $BlockPos_, arg5: $BlockState_, arg6: $Rotation_);
    }
    export class $ProjectorEvent$PlaceBlockPost extends $ProjectorEvent {
        constructor(arg0: $MultiblockHandler$IMultiblock, arg1: $Level_, arg2: $BlockPos_, arg3: $Level_, arg4: $BlockPos_, arg5: $BlockState_, arg6: $Rotation_);
    }
}
