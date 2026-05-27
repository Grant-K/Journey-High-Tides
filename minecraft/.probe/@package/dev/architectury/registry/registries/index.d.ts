import { $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $Holder, $Registry } from "@package/net/minecraft/core";
import { $RegistrarOption } from "@package/dev/architectury/registry/registries/options";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Iterable } from "@package/java/lang";
import { $Map$Entry, $Set } from "@package/java/util";
import { $OptionalSupplier } from "@package/dev/architectury/utils";
export * as options from "@package/dev/architectury/registry/registries/options";

declare module "@package/dev/architectury/registry/registries" {
    export class $RegistrySupplier<T> {
    }
    export interface $RegistrySupplier<T> extends $DeferredSupplier<T>, $Holder<T> {
        getRegistrarManager(): $RegistrarManager;
        getRegistrar(): $Registrar<T>;
        listen(callback: $Consumer_<T>): void;
        get registrarManager(): $RegistrarManager;
        get registrar(): $Registrar<T>;
    }
    export class $RegistrarManager {
        forRegistry<T>(key: $ResourceKey_<$Registry<T>>, callback: $Consumer_<$Registrar<T>>): void;
        getModId(): string;
        static get(modId: string): $RegistrarManager;
        /**
         * @deprecated
         */
        get<T>(registry: $Registry<T>): $Registrar<T>;
        get<T>(key: $ResourceKey_<$Registry<T>>): $Registrar<T>;
        builder<T>(registryId: $ResourceLocation_, ...typeGetter: T[]): $RegistrarBuilder<T>;
        /**
         * @deprecated
         */
        static getId<T>(object: T, fallback: $Registry<T>): $ResourceLocation;
        static getId<T>(object: T, fallback: $ResourceKey_<$Registry<T>>): $ResourceLocation;
        get modId(): string;
    }
    export class $Registrar<T> {
    }
    export interface $Registrar<T> extends $Iterable<T> {
        getIds(): $Set<$ResourceLocation>;
        getRawId(arg0: T): number;
        byRawId(arg0: number): T;
        delegate(arg0: $ResourceLocation_): $RegistrySupplier<T>;
        getHolder(arg0: $ResourceKey_<T>): $Holder<T>;
        getHolder(id: $ResourceLocation_): $Holder<T>;
        get(arg0: $ResourceLocation_): T;
        wrap<R extends T>(obj: R): $RegistrySupplier<R>;
        contains(arg0: $ResourceLocation_): boolean;
        entrySet(): $Set<$Map$Entry<$ResourceKey<T>, T>>;
        getKey(arg0: T): ($ResourceKey<T>) | undefined;
        register<E extends T>(arg0: $ResourceLocation_, arg1: $Supplier_<E>): $RegistrySupplier<E>;
        key(): $ResourceKey<$Registry<T>>;
        listen<R extends T>(supplier: $RegistrySupplier<R>, callback: $Consumer_<R>): void;
        listen(arg0: $ResourceLocation_, arg1: $Consumer_<T>): void;
        getId(arg0: T): $ResourceLocation;
        containsValue(arg0: T): boolean;
        get ids(): $Set<$ResourceLocation>;
    }
    export class $DeferredSupplier<T> {
    }
    export interface $DeferredSupplier<T> extends $OptionalSupplier<T> {
        getRegistryKey(): $ResourceKey<$Registry<T>>;
        getRegistryId(): $ResourceLocation;
        getKey(): $ResourceKey<T>;
        getId(): $ResourceLocation;
        get registryKey(): $ResourceKey<$Registry<T>>;
        get registryId(): $ResourceLocation;
        get key(): $ResourceKey<T>;
        get id(): $ResourceLocation;
    }
    export class $RegistrarBuilder<T> {
    }
    export interface $RegistrarBuilder<T> {
        syncToClients(): $RegistrarBuilder<T>;
        option(arg0: $RegistrarOption): $RegistrarBuilder<T>;
        build(): $Registrar<T>;
    }
}
