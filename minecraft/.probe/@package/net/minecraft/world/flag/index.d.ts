import { $Consumer_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Map, $Set } from "@package/java/util";
import { $Iterable_ } from "@package/java/lang";

declare module "@package/net/minecraft/world/flag" {
    export class $FeatureElement {
        static FILTERED_REGISTRIES: $Set<$ResourceKey<$Registry<$FeatureElement>>>;
    }
    export interface $FeatureElement {
        requiredFeatures(): $FeatureFlagSet;
        isEnabled(arg0: $FeatureFlagSet): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FeatureElement}.
     */
    export type $FeatureElement_ = (() => $FeatureFlagSet);
    export class $FeatureFlagSet {
        isSubsetOf(arg0: $FeatureFlagSet): boolean;
        subtract(arg0: $FeatureFlagSet): $FeatureFlagSet;
        intersects(arg0: $FeatureFlagSet): boolean;
        isEmpty(): boolean;
        join(arg0: $FeatureFlagSet): $FeatureFlagSet;
        static of(): $FeatureFlagSet;
        static of(arg0: $FeatureFlag): $FeatureFlagSet;
        static of(arg0: $FeatureFlag, ...arg1: $FeatureFlag[]): $FeatureFlagSet;
        contains(arg0: $FeatureFlag): boolean;
        static MAX_CONTAINER_SIZE: number;
        get empty(): boolean;
    }
    export class $FeatureFlagRegistry$Builder {
        createVanilla(arg0: string): $FeatureFlag;
        /**
         * @deprecated
         */
        create(arg0: $ResourceLocation_): $FeatureFlag;
        create(arg0: $ResourceLocation_, arg1: boolean): $FeatureFlag;
        build(): $FeatureFlagRegistry;
        constructor(arg0: string);
    }
    export class $FeatureFlags {
        static isExperimental(arg0: $FeatureFlagSet): boolean;
        static printMissingFlags(arg0: $FeatureFlagSet, arg1: $FeatureFlagSet): string;
        static printMissingFlags(arg0: $FeatureFlagRegistry, arg1: $FeatureFlagSet, arg2: $FeatureFlagSet): string;
        static BUNDLE: $FeatureFlag;
        static CODEC: $Codec<$FeatureFlagSet>;
        static VANILLA: $FeatureFlag;
        static DEFAULT_FLAGS: $FeatureFlagSet;
        static TRADE_REBALANCE: $FeatureFlag;
        static VANILLA_SET: $FeatureFlagSet;
        static REGISTRY: $FeatureFlagRegistry;
        constructor();
    }
    export class $FeatureFlagUniverse {
        constructor(arg0: string);
    }
    export class $FeatureFlag {
        isModded(): boolean;
        get modded(): boolean;
    }
    export class $FeatureFlagRegistry {
        codec(): $Codec<$FeatureFlagSet>;
        toNames(arg0: $FeatureFlagSet): $Set<$ResourceLocation>;
        isSubset(arg0: $FeatureFlagSet): boolean;
        hasAnyModdedFlags(): boolean;
        fromNames(arg0: $Iterable_<$ResourceLocation>): $FeatureFlagSet;
        fromNames(arg0: $Iterable_<$ResourceLocation>, arg1: $Consumer_<$ResourceLocation>): $FeatureFlagSet;
        getAllFlags(): $Map<$ResourceLocation, $FeatureFlag>;
        getFlag(arg0: $ResourceLocation_): $FeatureFlag;
        allFlags(): $FeatureFlagSet;
        subset(...arg0: $FeatureFlag[]): $FeatureFlagSet;
    }
}
