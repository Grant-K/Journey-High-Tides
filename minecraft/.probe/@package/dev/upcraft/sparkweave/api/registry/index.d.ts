import { $Supplier_, $BiConsumer, $Consumer, $Supplier } from "@package/java/util/function";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Holder, $Registry } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RegistryService } from "@package/dev/upcraft/sparkweave/api/platform/services";
import { $List, $Map } from "@package/java/util";

declare module "@package/dev/upcraft/sparkweave/api/registry" {
    export class $RegistryHandler<T> {
        static create<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: string): $RegistryHandler<T>;
    }
    export interface $RegistryHandler<T> extends $Consumer<$RegistryService> {
        getEntriesOrdered(): $List<$RegistrySupplier<$RegistryService>>;
        createNewRegistry(arg0: boolean, arg1: $ResourceLocation_): $Registry<$RegistryService>;
        createNewRegistry(arg0: boolean): $Registry<$RegistryService>;
        createNewRegistry(): $Registry<$RegistryService>;
        registry(): $ResourceKey<$Registry<$RegistryService>>;
        values(): $Map<$ResourceLocation, $RegistrySupplier<$RegistryService>>;
        stream(): $Stream<$RegistrySupplier<$RegistryService>>;
        register<S extends T>(arg0: string, arg1: $Supplier_<S>): $RegistrySupplier<S>;
        register<S extends T>(arg0: $ResourceKey_<$RegistryService>, arg1: $Supplier_<S>): $RegistrySupplier<S>;
        accept(arg0: $RegistryService): void;
        get entriesOrdered(): $List<$RegistrySupplier<$RegistryService>>;
    }
    export class $RegistryVisitor<T> {
    }
    export interface $RegistryVisitor<T> extends $BiConsumer<$ResourceLocation, T> {
        accept(arg0: $ResourceLocation_, arg1: $ResourceLocation_): void;
    }
    /**
     * Values that may be interpreted as {@link $RegistryVisitor}.
     */
    export type $RegistryVisitor_<T> = ((arg0: $ResourceLocation, arg1: $ResourceLocation) => void);
    export class $RegistrySupplier<T> {
    }
    export interface $RegistrySupplier<T> extends $Supplier<T> {
        getRegistryKey(): $ResourceKey<T>;
        is(arg0: $Supplier_<T>): boolean;
        is(arg0: T): boolean;
        getRegistry(): $Registry<T>;
        get(): T;
        matches(arg0: $TagKey_<T>): boolean;
        holder<R>(): $Holder<R>;
        getId(): $ResourceLocation;
        get registryKey(): $ResourceKey<T>;
        get registry(): $Registry<T>;
        get id(): $ResourceLocation;
    }
}
