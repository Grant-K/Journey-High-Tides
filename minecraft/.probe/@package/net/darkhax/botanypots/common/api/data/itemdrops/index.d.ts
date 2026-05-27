import { $Level_ } from "@package/net/minecraft/world/level";
import { $Consumer_, $Supplier } from "@package/java/util/function";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BotanyPotContext } from "@package/net/darkhax/botanypots/common/api/context";
import { $List } from "@package/java/util";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/darkhax/botanypots/common/api/data/itemdrops" {
    export class $ItemDropProvider {
    }
    export interface $ItemDropProvider {
        getDisplayItems(): $List<$ItemStack>;
        apply(arg0: $BotanyPotContext, arg1: $Level_, arg2: $Consumer_<$ItemStack>): void;
        getType(): $ItemDropProviderType<never>;
        get displayItems(): $List<$ItemStack>;
        get type(): $ItemDropProviderType<never>;
    }
    export class $ItemDropProviderType<T extends $ItemDropProvider> extends $Record {
        codec(): $MapCodec<T>;
        typeID(): $ResourceLocation;
        static getLazy(arg0: $ResourceLocation_): $Supplier<$ItemDropProviderType<never>>;
        static get(arg0: $ResourceLocation_): $ItemDropProviderType<never>;
        stream(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        static register<T extends $ItemDropProvider>(arg0: $ResourceLocation_, arg1: $MapCodec_<T>, arg2: $StreamCodec_<$RegistryFriendlyByteBuf, T>): $ItemDropProviderType<T>;
        static TYPE_CODEC: $Codec<$ItemDropProviderType<never>>;
        static DROP_PROVIDER_STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $ItemDropProvider>;
        static TYPE_STREAM: $StreamCodec<$ByteBuf, $ItemDropProviderType<never>>;
        static LIST_CODEC: $Codec<$List<$ItemDropProvider>>;
        static DROP_PROVIDER_CODEC: $Codec<$ItemDropProvider>;
        constructor(typeID: $ResourceLocation_, codec: $MapCodec_<T>, stream: $StreamCodec_<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $ItemDropProviderType}.
     */
    export type $ItemDropProviderType_<T> = { stream?: $StreamCodec_<$RegistryFriendlyByteBuf, $ItemDropProvider>, typeID?: $ResourceLocation_, codec?: $MapCodec_<$ItemDropProvider>,  } | [stream?: $StreamCodec_<$RegistryFriendlyByteBuf, $ItemDropProvider>, typeID?: $ResourceLocation_, codec?: $MapCodec_<$ItemDropProvider>, ];
}
