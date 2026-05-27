import { $Level } from "@package/net/minecraft/world/level";
import { $DensityFunctionWrapper } from "@package/dev/worldgen/lithostitched/api/worldgen/util";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Climate$TargetPoint, $Climate$ParameterList, $Biome } from "@package/net/minecraft/world/level/biome";
import { $List } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Function } from "@package/java/util/function";
import { $Holder_, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LoadPredicate } from "@package/dev/worldgen/lithostitched/api/predicate";
import { $Enum } from "@package/java/lang";
import { $ParameterMap } from "@package/dev/worldgen/lithostitched/impl/worldgen/biomeinjector/internal";
import { $LevelStem } from "@package/net/minecraft/world/level/dimension";
import { $DensityFunction } from "@package/net/minecraft/world/level/levelgen";
import { $Region } from "@package/dev/worldgen/lithostitched/impl/worldgen/biomeinjector/region";

declare module "@package/dev/worldgen/lithostitched/api/worldgen/biomeinjector" {
    export class $BiomeInjector$InjectorBuilder {
        dispatchAlternateLayout(parameterBuilder: $ParameterBuilder, points: $Climate$ParameterList<$Holder_<$Biome>>): $BiomeInjector;
        addPoints(points: $Climate$ParameterList<$Holder_<$Biome>>): $BiomeInjector;
        replacePartially(targets: $HolderSet_<$Biome>, replacement: $Holder_<$Biome>, parameterBuilder: $ParameterBuilder): $BiomeInjector;
        replacePartially(target: $Holder_<$Biome>, replacement: $Holder_<$Biome>, parameterBuilder: $ParameterBuilder): $BiomeInjector;
        replaceFully(targets: $HolderSet_<$Biome>, replacement: $Holder_<$Biome>): $BiomeInjector;
        replaceFully(target: $Holder_<$Biome>, replacement: $Holder_<$Biome>): $BiomeInjector;
        replaceFully(biome: $Holder_<$Biome>, parameterBuilder: $ParameterBuilder): $BiomeInjector;
        priority(priority: number): $BiomeInjector$InjectorBuilder;
    }
    export class $BiomeInjector$ClimateParameter extends $Enum<$BiomeInjector$ClimateParameter> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $BiomeInjector$ClimateParameter[];
        static valueOf(name: string): $BiomeInjector$ClimateParameter;
        getRemappedEnumConstantName(): string;
        static HUMIDITY: $BiomeInjector$ClimateParameter;
        static CODEC: $Codec<$BiomeInjector$ClimateParameter>;
        getter: $Function<$Climate$TargetPoint, number>;
        static TEMPERATURE: $BiomeInjector$ClimateParameter;
        static CONTINENTALNESS: $BiomeInjector$ClimateParameter;
        static EROSION: $BiomeInjector$ClimateParameter;
        static WEIRDNESS: $BiomeInjector$ClimateParameter;
        static DEPTH: $BiomeInjector$ClimateParameter;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BiomeInjector$ClimateParameter}.
     */
    export type $BiomeInjector$ClimateParameter_ = "continentalness" | "erosion" | "weirdness" | "humidity" | "temperature" | "depth";
    export class $BiomeInjector {
        static builder(level: $ResourceKey_<$Level>, predicate: $LoadPredicate): $BiomeInjector$InjectorBuilder;
        static builder(level: $ResourceKey_<$Level>): $BiomeInjector$InjectorBuilder;
        static PRIORITY_CODEC: $MapCodec<number>;
        static CODEC: $Codec<$BiomeInjector>;
        static DEFAULT_PRIORITY: number;
        static DIMENSION_CODEC: $MapCodec<$ResourceKey<$LevelStem>>;
    }
    export interface $BiomeInjector {
        codec(): $MapCodec<$BiomeInjector>;
        mapAll(noiseHelper: $DensityFunctionWrapper): void;
        possibleBiomes(): $List<$Holder<$Biome>>;
        predicate(): ($LoadPredicate) | undefined;
        dimension(): $ResourceKey<$LevelStem>;
        priority(): number;
    }
    /**
     * Values that may be interpreted as {@link $BiomeInjector}.
     */
    export type $BiomeInjector_ = RegistryTypes.LithostitchedBiomeInjector;
    export class $ParameterBuilder {
        static create(): $ParameterBuilder;
    }
    export interface $ParameterBuilder {
        climateMin(climateParameter: $BiomeInjector$ClimateParameter_, d: number): $ParameterBuilder;
        climateMax(climateParameter: $BiomeInjector$ClimateParameter_, d: number): $ParameterBuilder;
        climateRange(climateParameter: $BiomeInjector$ClimateParameter_, d: number, e: number): $ParameterBuilder;
        densityFunctionMin(holder: $Holder_<$DensityFunction>, d: number): $ParameterBuilder;
        densityFunctionMax(holder: $Holder_<$DensityFunction>, d: number): $ParameterBuilder;
        densityFunctionRange(holder: $Holder_<$DensityFunction>, d: number, e: number): $ParameterBuilder;
        climateExactly(climateParameter: $BiomeInjector$ClimateParameter_, d: number): $ParameterBuilder;
        densityFunctionExactly(holder: $Holder_<$DensityFunction>, d: number): $ParameterBuilder;
        region(resourceKey: $ResourceKey_<$Region>): $ParameterBuilder;
        build(): $ParameterMap;
    }
    export interface $BiomeInjector extends RegistryMarked<RegistryTypes.LithostitchedBiomeInjectorTag, RegistryTypes.LithostitchedBiomeInjector> {}
}
