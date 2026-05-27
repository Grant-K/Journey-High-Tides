import { $Registry } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceLocation, $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/com/falaut/kubejsnaturesaura/custom" {
    export class $StructureFinderItemBuilder extends $ItemBuilder {
        setRadius(arg0: number): $StructureFinderItemBuilder;
        setColor(arg0: number): $StructureFinderItemBuilder;
        setStructure(arg0: $ResourceLocation_): $StructureFinderItemBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_);
        set radius(value: number);
        set structure(value: $ResourceLocation_);
    }
    export class $AuraCacheItemBuilder extends $ItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_);
    }
}
