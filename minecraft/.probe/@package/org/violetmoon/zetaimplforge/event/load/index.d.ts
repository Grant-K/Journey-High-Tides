import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $AdvancementModifierRegistry } from "@package/org/violetmoon/zeta/advancement";
import { $Zeta } from "@package/org/violetmoon/zeta";
import { $RenderLayerRegistry, $VariantRegistry, $ZetaRegistry } from "@package/org/violetmoon/zeta/registry";
import { $ZetaModule } from "@package/org/violetmoon/zeta/module";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ConfigFlagManager } from "@package/org/violetmoon/zeta/config";
import { $ZGatherAdditionalFlags, $ZModulesReady, $ZRegister, $ZRegister$Post, $ZGatherAdditionalFlags_, $ZConfigChanged, $ZGatherHints } from "@package/org/violetmoon/zeta/event/load";
import { $ZFirstClientTick } from "@package/org/violetmoon/zeta/client/event/play";
import { $Object } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/org/violetmoon/zetaimplforge/event/load" {
    export class $ForgeZGatherAdditionalFlags extends $Event implements $ZGatherAdditionalFlags, $IModBusEvent {
        flagManager(): $ConfigFlagManager;
        constructor(arg0: $ZGatherAdditionalFlags_);
    }
    export class $ForgeZModulesReady extends $Event implements $ZModulesReady, $IModBusEvent {
        constructor();
    }
    export class $ForgeZFirstClientTick extends $Event implements $ZFirstClientTick, $IModBusEvent {
        constructor();
    }
    export class $ForgeZConfigChange extends $Event implements $ZConfigChanged, $IModBusEvent {
        constructor();
    }
    export class $ForgeZRegister extends $Event implements $ZRegister, $IModBusEvent {
        getAdvancementModifierRegistry(): $AdvancementModifierRegistry;
        getRenderLayerRegistry(): $RenderLayerRegistry;
        getVariantRegistry(): $VariantRegistry;
        getRegistry(): $ZetaRegistry;
        constructor(arg0: $Zeta);
        get advancementModifierRegistry(): $AdvancementModifierRegistry;
        get renderLayerRegistry(): $RenderLayerRegistry;
        get variantRegistry(): $VariantRegistry;
        get registry(): $ZetaRegistry;
    }
    export class $ForgeZRegister$Post extends $Event implements $ZRegister$Post, $IModBusEvent {
        constructor();
    }
    export class $ForgeZGatherHints extends $Event implements $ZGatherHints, $IModBusEvent {
        getRegistryAccess(): $RegistryAccess;
        hintItem(arg0: $ItemLike_, arg1: string, ...arg2: $Object[]): void;
        hintItem(arg0: $ItemLike_, ...arg1: $Object[]): void;
        gatherHintsFromModule(arg0: $ZetaModule, arg1: $ConfigFlagManager): void;
        accept(arg0: $ItemLike_, arg1: $Component_): void;
        constructor(arg0: $ZGatherHints);
        get registryAccess(): $RegistryAccess;
    }
}
