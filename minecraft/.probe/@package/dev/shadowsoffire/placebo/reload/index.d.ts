import { $Supplier } from "@package/java/util/function";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $CodecProvider } from "@package/dev/shadowsoffire/placebo/codec";

declare module "@package/dev/shadowsoffire/placebo/reload" {
    export class $DynamicHolder<R extends $CodecProvider<R>> implements $Supplier<R> {
        isBound(): boolean;
        getRegistryPath(): string;
        is(arg0: $ResourceLocation_): boolean;
        getOptional(): (R) | undefined;
        get(): R;
        getId(): $ResourceLocation;
        static EMPTY: $ResourceLocation;
        get bound(): boolean;
        get registryPath(): string;
        get optional(): (R) | undefined;
        get id(): $ResourceLocation;
    }
}
