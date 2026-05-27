import { $ModuleHost, $PropertyProvider } from "@package/com/brandon3055/draconicevolution/api/capability";
import { $IOPStorage } from "@package/com/brandon3055/brandonscore/api/power";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/com/brandon3055/draconicevolution/api/event" {
    export class $ModularItemInitEvent extends $Event {
        getPropertyProvider(): $PropertyProvider;
        getHost(): $ModuleHost;
        getStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $ModuleHost, arg2: $PropertyProvider);
        get propertyProvider(): $PropertyProvider;
        get host(): $ModuleHost;
        get stack(): $ItemStack;
    }
    export class $ModularEnergyItemInitEvent extends $Event {
        getPropertyProvider(): $PropertyProvider;
        getOpStorage(): $IOPStorage;
        getHost(): $ModuleHost;
        getStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $ModuleHost, arg2: $PropertyProvider, arg3: $IOPStorage);
        get propertyProvider(): $PropertyProvider;
        get opStorage(): $IOPStorage;
        get host(): $ModuleHost;
        get stack(): $ItemStack;
    }
}
