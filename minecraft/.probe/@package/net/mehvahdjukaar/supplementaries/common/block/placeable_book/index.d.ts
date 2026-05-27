import { $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/supplementaries/common/block/placeable_book" {
    export interface $BookType extends RegistryMarked<RegistryTypes.SupplementariesPlaceableBooksTag, RegistryTypes.SupplementariesPlaceableBooks> {}
    export class $BookType extends $Record {
        isHorizontal(): boolean;
        enchantPower(): number;
        bookVisuals(): $ResourceLocation;
        item(): $Item;
        static CODEC: $Codec<$BookType>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BookType>;
        constructor(item: $Item_, enchantPower: number, isHorizontal: boolean, bookVisuals: $ResourceLocation_);
        get horizontal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BookType}.
     */
    export type $BookType_ = RegistryTypes.SupplementariesPlaceableBooks | { bookVisuals?: $ResourceLocation_, item?: $Item_, enchantPower?: number, isHorizontal?: boolean,  } | [bookVisuals?: $ResourceLocation_, item?: $Item_, enchantPower?: number, isHorizontal?: boolean, ];
}
