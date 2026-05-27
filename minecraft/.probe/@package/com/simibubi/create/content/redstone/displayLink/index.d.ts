import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FactoryPanelSupportBehaviour } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $DisplayTarget, $DisplaySource } from "@package/com/simibubi/create/api/behaviour/display";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Object } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as target from "@package/com/simibubi/create/content/redstone/displayLink/target";

declare module "@package/com/simibubi/create/content/redstone/displayLink" {
    export class $DisplayLinkContext {
        blockEntity(): $DisplayLinkBlockEntity;
        getTargetPos(): $BlockPos;
        getSourcePos(): $BlockPos;
        getSourceBlockEntity(): $BlockEntity;
        getTargetBlockEntity(): $BlockEntity;
        sourceConfig(): $CompoundTag;
        level(): $Level;
        flapDisplayContext: $Object;
        constructor(arg0: $Level_, arg1: $DisplayLinkBlockEntity);
        get targetPos(): $BlockPos;
        get sourcePos(): $BlockPos;
        get sourceBlockEntity(): $BlockEntity;
        get targetBlockEntity(): $BlockEntity;
    }
    export class $DisplayLinkBlockEntity extends $LinkWithBulbBlockEntity implements $TransformableBlockEntity {
        getDirection(): $Direction;
        getSourcePosition(): $BlockPos;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getTargetPosition(): $BlockPos;
        getSourceConfig(): $CompoundTag;
        updateGatheredData(): void;
        tickSource(): void;
        onNoLongerPowered(): void;
        setSourceConfig(arg0: $CompoundTag_): void;
        handler$lff001$sable$accountForSubLevels(arg0: $CallbackInfoReturnable<any>): void;
        target(arg0: $BlockPos_): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        refreshTicks: number;
        targetLine: number;
        static ATTACHMENTS_NBT_KEY: string;
        activeTarget: $DisplayTarget;
        computerBehaviour: $AbstractComputerBehaviour;
        factoryPanelSupport: $FactoryPanelSupportBehaviour;
        activeSource: $DisplaySource;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get direction(): $Direction;
        get sourcePosition(): $BlockPos;
        get targetPosition(): $BlockPos;
    }
    export class $LinkWithBulbBlockEntity extends $SmartBlockEntity {
        pulse(): void;
        getBulbFacing(arg0: $BlockState_): $Direction;
        getBulbOffset(arg0: $BlockState_): $Vec3;
        getGlow(arg0: number): number;
        sendPulseNextSync(): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
