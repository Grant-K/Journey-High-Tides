import { $GeneratorsCreateOutput } from "@package/dev/bluephs/dgjs/wrapper";
import { $ItemStack_, $ItemStack, $Item_ } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $KubeCreateOutput } from "@package/dev/latvian/mods/kubejs/create/wrapper";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/simibubi/create/content/processing/recipe" {
    export class $ProcessingOutput implements $GeneratorsCreateOutput, $KubeCreateOutput {
        getChance(): number;
        rollOutput(arg0: $RandomSource): $ItemStack;
        getStack(): $ItemStack;
        /**
         * @deprecated
         */
        static CODEC: $Codec<$ProcessingOutput>;
        /**
         * @deprecated
         */
        static CODEC_OLD: $Codec<$ProcessingOutput>;
        static EMPTY: $ProcessingOutput;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ProcessingOutput>;
        static CODEC_NEW: $Codec<$ProcessingOutput>;
        constructor(arg0: $Item_, arg1: number, arg2: number);
        constructor(arg0: $Item_, arg1: number, arg2: $DataComponentPatch_, arg3: number);
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number);
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: $DataComponentPatch_, arg3: number);
        constructor(arg0: $ItemStack_, arg1: number);
        get chance(): number;
        get stack(): $ItemStack;
    }
}
