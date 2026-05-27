import { $Level_ } from "@package/net/minecraft/world/level";
import { $Supplier } from "@package/java/util/function";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BotanyPotContext } from "@package/net/darkhax/botanypots/common/api/context";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/darkhax/botanypots/common/api/data/growthamount" {
    export class $GrowthAmountType<T extends $GrowthAmount> extends $Record {
        codec(): $MapCodec<T>;
        typeID(): $ResourceLocation;
        static getLazy(arg0: $ResourceLocation_): $Supplier<$GrowthAmountType<never>>;
        static get(arg0: $ResourceLocation_): $GrowthAmountType<never>;
        stream(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        static register<T extends $GrowthAmount>(arg0: $ResourceLocation_, arg1: $MapCodec_<T>, arg2: $StreamCodec_<$RegistryFriendlyByteBuf, T>): $GrowthAmountType<T>;
        static TYPE_CODEC: $Codec<$GrowthAmountType<never>>;
        static TYPE_STREAM: $StreamCodec<$ByteBuf, $GrowthAmountType<never>>;
        static GROWTH_AMOUNT_STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $GrowthAmount>;
        static GROWTH_AMOUNT_CODEC: $Codec<$GrowthAmount>;
        constructor(typeID: $ResourceLocation_, codec: $MapCodec_<T>, stream: $StreamCodec_<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $GrowthAmountType}.
     */
    export type $GrowthAmountType_<T> = { stream?: $StreamCodec_<$RegistryFriendlyByteBuf, $GrowthAmount>, typeID?: $ResourceLocation_, codec?: $MapCodec_<$GrowthAmount>,  } | [stream?: $StreamCodec_<$RegistryFriendlyByteBuf, $GrowthAmount>, typeID?: $ResourceLocation_, codec?: $MapCodec_<$GrowthAmount>, ];
    export class $GrowthAmount {
    }
    export interface $GrowthAmount {
        getAmount(arg0: $BotanyPotContext, arg1: $Level_): number;
        getType(): $GrowthAmountType<never>;
        get type(): $GrowthAmountType<never>;
    }
}
