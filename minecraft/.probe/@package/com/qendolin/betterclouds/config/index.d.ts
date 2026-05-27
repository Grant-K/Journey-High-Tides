import { $JsonElement_, $JsonElement, $JsonDeserializationContext_, $JsonSerializer, $JsonSerializationContext, $JsonDeserializer, $InstanceCreator } from "@package/com/google/gson";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Type } from "@package/java/lang/reflect";
import { $List } from "@package/java/util";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";

declare module "@package/com/qendolin/betterclouds/config" {
    export class $Config {
        static getDefaultDimensions(): $List<$ResourceKey<$DimensionType>>;
        blockDistance(): number;
        preset(): $ShaderPresetConfig;
        loadDefaultPresets(): void;
        sortPresets(): void;
        addFirstPreset(): void;
        fuzziness: number;
        yOffset: number;
        windEffectFactor: number;
        distance: number;
        colorVariationFactor: number;
        fogRangeFactor: number;
        useIrisFBO: boolean;
        scaleFalloffMin: number;
        sparsity: number;
        randomPlacement: number;
        celestialBodyHalo: boolean;
        static REGISTRY_KEY_SERIALIZER: $Config$RegistryKeySerializer;
        enabled: boolean;
        spacing: number;
        static INSTANCE_CREATOR: $InstanceCreator<$Config>;
        lastTelemetryVersion: number;
        irisSupport: boolean;
        enabledDimensions: $List<$ResourceKey<$DimensionType>>;
        gpuIncompatibleMessageEnabled: boolean;
        windSpeedFactor: number;
        chunkSize: number;
        cloudOverride: boolean;
        issueReportEnabled: boolean;
        static DEFAULT_PRESET_KEY: string;
        yRange: number;
        migrationVersion: number;
        sereneSeasonsConfig: $SereneSeasonsConfig;
        selectedPreset: number;
        presets: $List<$ShaderPresetConfig>;
        fabricSeasonsConfig: $FabricSeasonsConfig;
        fogEndFactor: number;
        useFrustumCulling: boolean;
        usePersistentBuffers: boolean;
        travelSpeed: number;
        samplingScale: number;
        shuffle: boolean;
        sizeXZ: number;
        sizeY: number;
        constructor();
        constructor(other: $Config);
        static get defaultDimensions(): $List<$ResourceKey<$DimensionType>>;
    }
    export class $SereneSeasonsConfig {
        lateSummerCloudiness: number;
        midAutumnCloudiness: number;
        midWinterCloudiness: number;
        midSummerCloudiness: number;
        lateAutumnCloudiness: number;
        transitionDays: number;
        lateWinterCloudiness: number;
        earlyAutumnCloudiness: number;
        earlySpringCloudiness: number;
        earlyWinterCloudiness: number;
        midSpringCloudiness: number;
        lateSpringCloudiness: number;
        earlySummerCloudiness: number;
        constructor();
        constructor(other: $SereneSeasonsConfig);
    }
    export class $Config$RegistryKeySerializer implements $JsonSerializer<$ResourceKey<$DimensionType>>, $JsonDeserializer<$ResourceKey<$DimensionType>> {
        serialize(src: $ResourceKey_<$DimensionType>, typeOfSrc: $Type, context: $JsonSerializationContext): $JsonElement;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $ResourceKey<$DimensionType>;
    }
    export class $FabricSeasonsConfig {
        fallCloudiness: number;
        transitionDays: number;
        winterCloudiness: number;
        springCloudiness: number;
        summerCloudiness: number;
        constructor();
        constructor(other: $FabricSeasonsConfig);
    }
    export class $ShaderPresetConfig {
        isEqualTo(other: $ShaderPresetConfig): boolean;
        markAsCopy(): void;
        gamma(): number;
        opacityFactor: number;
        sunriseEndTime: number;
        editable: boolean;
        upscaleResolutionFactor: number;
        opacityExponent: number;
        dayBrightness: number;
        sunsetStartTime: number;
        sunPathAngle: number;
        title: string;
        saturation: number;
        sunsetEndTime: number;
        tintGreen: number;
        static INSTANCE_CREATOR: $InstanceCreator<$ShaderPresetConfig>;
        sunriseStartTime: number;
        tintRed: number;
        worldCurvatureSize: number;
        tintBlue: number;
        opacity: number;
        key: string;
        nightBrightness: number;
        constructor();
        constructor(other: $ShaderPresetConfig);
        constructor(title: string);
    }
}
