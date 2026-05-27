import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $IFireItemBehavior_, $IFireItemBehaviorRegistry } from "@package/net/mehvahdjukaar/supplementaries/common/block/fire_behaviors";
import { $Event } from "@package/net/neoforged/bus/api";

declare module "@package/net/mehvahdjukaar/supplementaries/api/neoforge" {
    export class $RegisterFireBehaviorsEvent extends $Event implements $IFireItemBehaviorRegistry {
        getRegistryAccess(): $RegistryAccess;
        registerCannonBehavior(item: $ItemLike_, behavior: $IFireItemBehavior_): void;
        registerPresentBehavior(item: $ItemLike_, behavior: $IFireItemBehavior_): void;
        constructor(registry: $RegistryAccess, delegate: $IFireItemBehaviorRegistry);
        get registryAccess(): $RegistryAccess;
    }
}
