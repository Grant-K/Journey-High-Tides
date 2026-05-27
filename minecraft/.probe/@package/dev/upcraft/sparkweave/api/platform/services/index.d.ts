import { $Registry } from "@package/net/minecraft/core";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $RegistryHandler, $RegistryVisitor_ } from "@package/dev/upcraft/sparkweave/api/registry";

declare module "@package/dev/upcraft/sparkweave/api/platform/services" {
    export class $RegistryService {
        static get(): $RegistryService;
        static INSTANCE: $RegistryService;
    }
    export interface $RegistryService {
        createRegistryHandler<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: string): $RegistryHandler<T>;
        handleRegister<T>(arg0: $RegistryHandler<T>): void;
        visitRegistry<T>(arg0: $Registry<T>, arg1: $RegistryVisitor_<T>): void;
    }
}
