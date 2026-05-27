import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $BucketItem } from "@package/net/minecraft/world/item";
import { $ReloadableServerResources } from "@package/net/minecraft/server";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $AdvancementModifierRegistry } from "@package/org/violetmoon/zeta/advancement";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $EntityType_ } from "@package/net/minecraft/world/entity";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $IAdvancementModifierDelegate, $IAdvancementModifier } from "@package/org/violetmoon/zeta/api";
import { $PreparableReloadListener_ } from "@package/net/minecraft/server/packs/resources";
import { $Set_ } from "@package/java/util";
import { $VariantRegistry, $ZetaRegistry, $RenderLayerRegistry } from "@package/org/violetmoon/zeta/registry";
import { $ZetaModule } from "@package/org/violetmoon/zeta/module";
import { $BooleanSupplier_ } from "@package/java/util/function";
import { $Holder_, $RegistryAccess } from "@package/net/minecraft/core";
import { $ConfigFlagManager } from "@package/org/violetmoon/zeta/config";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $IZetaPlayEvent, $IZetaLoadEvent } from "@package/org/violetmoon/zeta/event/bus";
import { $Runnable_, $Object, $Runnable } from "@package/java/lang";

declare module "@package/org/violetmoon/zeta/event/load" {
    export class $ZRegister {
    }
    export interface $ZRegister extends $IZetaLoadEvent {
        getAdvancementModifierRegistry(): $AdvancementModifierRegistry;
        getRenderLayerRegistry(): $RenderLayerRegistry;
        getVariantRegistry(): $VariantRegistry;
        getRegistry(): $ZetaRegistry;
        get advancementModifierRegistry(): $AdvancementModifierRegistry;
        get renderLayerRegistry(): $RenderLayerRegistry;
        get variantRegistry(): $VariantRegistry;
        get registry(): $ZetaRegistry;
    }
    export class $ZModulesReady {
    }
    export interface $ZModulesReady extends $IZetaLoadEvent {
    }
    export class $ZGatherAdvancementModifiers {
    }
    export interface $ZGatherAdvancementModifiers extends $IZetaLoadEvent {
        createBalancedDietMod(arg0: $Set_<$ItemLike_>): $IAdvancementModifier;
        createFuriousCocktailMod(arg0: $BooleanSupplier_, arg1: $Set_<$Holder_<$MobEffect>>): $IAdvancementModifier;
        createMonsterHunterMod(arg0: $Set_<$EntityType_<never>>): $IAdvancementModifier;
        createTwoByTwoMod(arg0: $Set_<$EntityType_<never>>): $IAdvancementModifier;
        createWaxOnWaxOffMod(arg0: $Set_<$Block_>, arg1: $Set_<$Block_>): $IAdvancementModifier;
        createFishyBusinessMod(arg0: $Set_<$ItemLike_>): $IAdvancementModifier;
        createTacticalFishingMod(arg0: $Set_<$BucketItem>): $IAdvancementModifier;
        createASeedyPlaceMod(arg0: $Set_<$Block_>): $IAdvancementModifier;
        createGlowAndBeholdMod(arg0: $Set_<$Block_>): $IAdvancementModifier;
        createAdventuringTimeMod(arg0: $Set_<$ResourceKey_<$Biome>>): $IAdvancementModifier;
        getDelegate(): $IAdvancementModifierDelegate;
        register(arg0: $IAdvancementModifier): void;
        get delegate(): $IAdvancementModifierDelegate;
    }
    export class $ZGatherHints {
    }
    export interface $ZGatherHints extends $IZetaLoadEvent {
        getRegistryAccess(): $RegistryAccess;
        hintItem(arg0: $ItemLike_, arg1: string, ...arg2: $Object[]): void;
        hintItem(arg0: $ItemLike_, ...arg1: $Object[]): void;
        gatherHintsFromModule(arg0: $ZetaModule, arg1: $ConfigFlagManager): void;
        accept(arg0: $ItemLike_, arg1: $Component_): void;
        get registryAccess(): $RegistryAccess;
    }
    export class $ZConfigChanged {
    }
    export interface $ZConfigChanged extends $IZetaLoadEvent {
    }
    export class $ZLoadComplete {
    }
    export interface $ZLoadComplete extends $IZetaLoadEvent {
        enqueueWork(arg0: $Runnable_): void;
    }
    /**
     * Values that may be interpreted as {@link $ZLoadComplete}.
     */
    export type $ZLoadComplete_ = ((arg0: $Runnable) => void);
    export class $ZAddReloadListener {
    }
    export interface $ZAddReloadListener extends $IZetaPlayEvent {
        getRegistryAccess(): $RegistryAccess;
        getServerResources(): $ReloadableServerResources;
        addListener(arg0: $PreparableReloadListener_): void;
        get registryAccess(): $RegistryAccess;
        get serverResources(): $ReloadableServerResources;
    }
    export class $ZGatherAdditionalFlags {
    }
    export interface $ZGatherAdditionalFlags extends $IZetaLoadEvent {
        flagManager(): $ConfigFlagManager;
    }
    /**
     * Values that may be interpreted as {@link $ZGatherAdditionalFlags}.
     */
    export type $ZGatherAdditionalFlags_ = (() => $ConfigFlagManager);
    export class $ZRegister$Post {
    }
    export interface $ZRegister$Post extends $IZetaLoadEvent {
    }
}
