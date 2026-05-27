import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Dist_ } from "@package/net/neoforged/api/distmarker";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $List_ } from "@package/java/util";
import { $Lazy } from "@package/net/neoforged/neoforge/common/util";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $VolumeOption, $EntitySelector, $JsonFile } from "@package/eu/ha3/presencefootsteps/config";
import { $Path_ } from "@package/java/nio/file";
import { $Locomotion_, $Locomotion } from "@package/eu/ha3/presencefootsteps/sound/generator";
import { $SoundEngine } from "@package/eu/ha3/presencefootsteps/sound";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $HitResult } from "@package/net/minecraft/world/phys";
export * as util from "@package/eu/ha3/presencefootsteps/util";
export * as world from "@package/eu/ha3/presencefootsteps/world";
export * as sound from "@package/eu/ha3/presencefootsteps/sound";
export * as api from "@package/eu/ha3/presencefootsteps/api";
export * as mixins from "@package/eu/ha3/presencefootsteps/mixins";
export * as config from "@package/eu/ha3/presencefootsteps/config";

declare module "@package/eu/ha3/presencefootsteps" {
    export class $PFConfig extends $JsonFile {
        getEnabled(): boolean;
        getDisabled(): boolean;
        toggleDisabled(): boolean;
        toggleMultiplayer(): boolean;
        cycleTargetSelector(): $EntitySelector;
        setLocomotion(arg0: $Locomotion_): $Locomotion;
        isFirstRun(): boolean;
        setNotFirstRun(): void;
        toggleFootwear(): boolean;
        setDisabled(arg0: boolean): boolean;
        setGlobalVolume(arg0: number): number;
        setRunningVolumeIncrease(arg0: number): number;
        getGlobalVolume(): number;
        getRunningVolumeIncrease(): number;
        getEntitySelector(): $EntitySelector;
        getEnabledMP(): boolean;
        getMaxSteppingEntities(): number;
        populateCrashReport(arg0: $CrashReportCategory): void;
        getLocomotion(): $Locomotion;
        getEnabledFootwear(): boolean;
        hostileEntitiesVolume: $VolumeOption;
        passiveEntitiesVolume: $VolumeOption;
        foliageSoundsVolume: $VolumeOption;
        clientPlayerVolume: $VolumeOption;
        runningVolumeIncrease: number;
        wetSoundsVolume: $VolumeOption;
        otherPlayerVolume: $VolumeOption;
        constructor(arg0: $Path_, arg1: $PresenceFootsteps);
        get enabled(): boolean;
        get firstRun(): boolean;
        get entitySelector(): $EntitySelector;
        get enabledMP(): boolean;
        get maxSteppingEntities(): number;
        get enabledFootwear(): boolean;
    }
    export class $PresenceFootsteps {
        showSystemToast(arg0: $Component_, arg1: $Component_): void;
        static getInstance(): $PresenceFootsteps;
        debugHud: $PFDebugHud;
        keyBinding: $Lazy<$KeyMapping>;
        engine: $SoundEngine;
        static MOD_ID: string;
        static logger: $Logger;
        static MOD_NAME: $Component;
        config: $PFConfig;
        constructor(arg0: $IEventBus, arg1: $Dist_);
        static get instance(): $PresenceFootsteps;
    }
    export class $PFDebugHud {
        render(arg0: $HitResult, arg1: $HitResult, arg2: $List_<string>): void;
        constructor(arg0: $SoundEngine);
    }
}
