import { $Consumer } from "@package/java/util/function";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Registry } from "@package/net/minecraft/core";
import { $ResourceLocation, $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/com/benbenlaw/core/integration/kubejs" {
    export class $ResourceBlockBuilder extends $BlockBuilder {
        /**
         * The particle the block gives off, optional defaults to minecraft:flames
         */
        particle(arg0: string): $ResourceBlockBuilder;
        /**
         * The height modifier for the block to drop. Default is 0. Can be negative
         */
        dropHeightModifier(arg0: number): $ResourceBlockBuilder;
        /**
         * The tool to collect the block. Can be an item or a tag, use # to specify a tag, If broken without the tool drops the defined loot table
         */
        toolToCollectTheBlock(arg0: string): $ResourceBlockBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
    }
}
