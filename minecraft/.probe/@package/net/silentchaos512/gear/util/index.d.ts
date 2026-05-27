import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/silentchaos512/gear/util" {
    export class $Serializer<B, V> {
        codec(): $MapCodec<V>;
        streamCodec(): $StreamCodec<B, V>;
        constructor(arg0: $MapCodec_<V>, arg1: $StreamCodec_<B, V>);
    }
}
