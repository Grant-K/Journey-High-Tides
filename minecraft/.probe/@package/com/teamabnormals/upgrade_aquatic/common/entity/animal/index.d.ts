import { $Holder_, $HolderSet_, $Holder, $RegistryAccess, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $WeightedEntry, $Weight } from "@package/net/minecraft/util/random";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/teamabnormals/upgrade_aquatic/common/entity/animal" {
    export interface $PikeVariant extends RegistryMarked<RegistryTypes.UpgradeAquaticPikeVariantTag, RegistryTypes.UpgradeAquaticPikeVariant> {}
    export class $PikeVariant extends $Record implements $WeightedEntry {
        biomes(): ($HolderSet<$Biome>) | undefined;
        glowAssetId(): ($ResourceLocation) | undefined;
        assetId(): $ResourceLocation;
        static getSpawnVariant(arg0: $RegistryAccess, arg1: $Holder_<$Biome>, arg2: boolean, arg3: $RandomSource): $Holder<$PikeVariant>;
        getWeight(): $Weight;
        description(): $Component;
        weight(): number;
        size(): number;
        static CODEC: $Codec<$Holder<$PikeVariant>>;
        static DIRECT_CODEC: $Codec<$PikeVariant>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PikeVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$PikeVariant>>;
        constructor(assetId: $ResourceLocation_, description: $Component_, size: number, weight: number, biomes: ($HolderSet_<$Biome>) | undefined, glowAssetId: ($ResourceLocation_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PikeVariant}.
     */
    export type $PikeVariant_ = RegistryTypes.UpgradeAquaticPikeVariant | { assetId?: $ResourceLocation_, size?: number, weight?: number, glowAssetId?: ($ResourceLocation_) | undefined, biomes?: ($HolderSet_<$Biome>) | undefined, description?: $Component_,  } | [assetId?: $ResourceLocation_, size?: number, weight?: number, glowAssetId?: ($ResourceLocation_) | undefined, biomes?: ($HolderSet_<$Biome>) | undefined, description?: $Component_, ];
}
