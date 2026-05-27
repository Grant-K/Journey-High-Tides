import { $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockHarvester } from "@package/dev/simulated_team/simulated/content/blocks/auger_shaft";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $List_ } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $AugerDistributor, $AugerDistributor_ } from "@package/dev/simulated_team/simulated/content/blocks/auger_shaft/auger_groups";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $KineticBlockEntityExtension } from "@package/dev/simulated_team/simulated/mixin_interface/extra_kinetics";
import { $ChatFormatting } from "@package/net/minecraft";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $IHaveGoggleInformation, $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $KineticNetwork } from "@package/com/simibubi/create/content/kinetics";
import { $Enum } from "@package/java/lang";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/base" {
    export class $IRotate {
    }
    export interface $IRotate extends $IWrenchable {
        getRotationAxis(arg0: $BlockState_): $Direction$Axis;
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        hideStressImpact(): boolean;
        showCapacityWithAnnotation(): boolean;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
        getColor(): number;
        getTextColor(): $ChatFormatting;
        getParticleSpeed(): number;
        static getFormattedSpeedText(arg0: number, arg1: boolean): $LangBuilder;
        getSpeedValue(): number;
        static values(): $IRotate$SpeedLevel[];
        static valueOf(arg0: string): $IRotate$SpeedLevel;
        static of(arg0: number): $IRotate$SpeedLevel;
        static MEDIUM: $IRotate$SpeedLevel;
        static SLOW: $IRotate$SpeedLevel;
        static NONE: $IRotate$SpeedLevel;
        static FAST: $IRotate$SpeedLevel;
        get color(): number;
        get textColor(): $ChatFormatting;
        get particleSpeed(): number;
        get speedValue(): number;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$SpeedLevel}.
     */
    export type $IRotate$SpeedLevel_ = "none" | "slow" | "medium" | "fast";
    export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation, $KineticBlockEntityExtension {
        setSpeed(arg0: number): void;
        getSpeed(): number;
        isSource(): boolean;
        static convertToDirection(arg0: number, arg1: $Direction_): number;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        static switchToBlockState(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        onSpeedChanged(arg0: number): void;
        warnOfMovement(): void;
        clearKineticInformation(): void;
        getGeneratedSpeed(): number;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        calculateAddedStressCapacity(): number;
        getOrCreateNetwork(): $KineticNetwork;
        removeSource(): void;
        hasSource(): boolean;
        getTheoreticalSpeed(): number;
        hasNetwork(): boolean;
        calculateStressApplied(): number;
        detachKinetics(): void;
        setNetwork(arg0: number): void;
        attachKinetics(): void;
        needsSpeedUpdate(): boolean;
        getFlickerScore(): number;
        redirect$ijj000$simulated$useProperSource(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        handler$ijj000$simulated$injectRemove(arg0: $CallbackInfo): void;
        handler$ijj000$simulated$saveConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        handler$ijj000$simulated$readConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        redirect$ijj000$simulated$useProperSource2(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        handler$ijj000$simulated$removeConnected(arg0: $CallbackInfo): void;
        isSpeedRequirementFulfilled(): boolean;
        handler$ijp000$simulated$addExtraKineticsInfo(arg0: $List_<any>, arg1: boolean, arg2: $CallbackInfoReturnable<any>): void;
        static convertToLinear(arg0: number): number;
        static convertToAngular(arg0: number): number;
        isOverStressed(): boolean;
        propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        addPropagationLocations(arg0: $IRotate, arg1: $BlockState_, arg2: $List_<$BlockPos_>): $List<$BlockPos>;
        isCustomConnection(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_): boolean;
        tickAudio(): void;
        getRotationAngleOffset(arg0: $Direction$Axis_): number;
        simulated$setConnectedToExtraKinetics(arg0: boolean): void;
        simulated$getConnectedToExtraKinetics(): boolean;
        simulated$setValidationCountdown(arg0: number): void;
        setSource(arg0: $BlockPos_): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get generatedSpeed(): number;
        get orCreateNetwork(): $KineticNetwork;
        get theoreticalSpeed(): number;
        get flickerScore(): number;
        get speedRequirementFulfilled(): boolean;
        get overStressed(): boolean;
    }
    export class $BlockBreakingKineticBlockEntity extends $KineticBlockEntity implements $BlockHarvester {
        static isBreakable(arg0: $BlockState_, arg1: number): boolean;
        canBreak(arg0: $BlockState_, arg1: number): boolean;
        onBlockBroken(arg0: $BlockState_): void;
        destroyNextTick(): void;
        simulated$getAssociatedDistributor(): $AugerDistributor;
        simulated$setDistributor(arg0: $AugerDistributor_): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        depositItemStack(arg0: $BlockPos_, arg1: $ItemStack_): $ItemStack;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        updateSpeed: boolean;
        static NEXT_BREAKER_ID: $AtomicInteger;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
