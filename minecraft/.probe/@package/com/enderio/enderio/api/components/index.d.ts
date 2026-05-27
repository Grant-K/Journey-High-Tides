import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_, $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/enderio/enderio/api/components" {
    export class $GrindingBallData extends $Record {
        saveOptional(arg0: $HolderLookup$Provider): $Tag;
        durability(): number;
        static parseOptional(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $GrindingBallData;
        bonusMultiplier(): number;
        powerUse(): number;
        outputMultiplier(): number;
        isIdentity(): boolean;
        save(arg0: $HolderLookup$Provider): $Tag;
        static parse(arg0: $HolderLookup$Provider, arg1: $Tag_): ($GrindingBallData) | undefined;
        static IDENTITY: $GrindingBallData;
        static DATA_MAP_TYPE: $DataMapType<$Item, $GrindingBallData>;
        static CODEC: $Codec<$GrindingBallData>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $GrindingBallData>;
        constructor(outputMultiplier: number, bonusMultiplier: number, powerUse: number, durability: number);
        get identity(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GrindingBallData}.
     */
    export type $GrindingBallData_ = { durability?: number, bonusMultiplier?: number, powerUse?: number, outputMultiplier?: number,  } | [durability?: number, bonusMultiplier?: number, powerUse?: number, outputMultiplier?: number, ];
}
