import { $Level } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ClientKubeEvent } from "@package/dev/latvian/mods/kubejs/client";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Multimap } from "@package/com/google/common/collect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AttributeModifier_, $Attribute, $AttributeModifier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Minecraft } from "@package/net/minecraft/client";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List, $Set, $Set_, $Collection_, $Collection } from "@package/java/util";
import { $KubeLivingEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $CurioRenderer$RenderContext } from "@package/net/zhaiji/kubejscurios/curios";
import { $Tuple } from "@package/net/minecraft/util";
import { $Predicate, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $SlotContext_, $SlotContext } from "@package/top/theillusivec4/curios/api";
import { $Holder_, $RegistryAccess, $Holder } from "@package/net/minecraft/core";
import { $TriState_, $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ICuriosItemHandler, $ICurio$DropRule_, $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/zhaiji/kubejscurios/kubejs" {
    export class $KubeJSCuriosEventJS$DropRules implements $KubeLivingEntityEvent {
        addOverride(arg0: $Predicate_<$ItemStack>, arg1: $ICurio$DropRule_): void;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        getEntity(): $LivingEntity;
        curioHandler: $ICuriosItemHandler;
        recentlyHit: boolean;
        lootingLevel: number;
        source: $DamageSource;
        overrides: $List<$Tuple<$Predicate<$ItemStack>, $ICurio$DropRule>>;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: number, arg3: boolean, arg4: $ICuriosItemHandler);
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $KubeJSCuriosEventJS$CurioChange implements $KubeLivingEntityEvent {
        getEntity(): $LivingEntity;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        slotType: string;
        newStack: $ItemStack;
        index: number;
        oldStack: $ItemStack;
        constructor(arg0: $LivingEntity, arg1: string, arg2: number, arg3: $ItemStack_, arg4: $ItemStack_);
        get entity(): $LivingEntity;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $KubeJSCuriosEventJS$registerRenderer implements $ClientKubeEvent {
        remove(arg0: $Item_): void;
        register(arg0: $Item_, arg1: $Consumer_<$CurioRenderer$RenderContext>): void;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor();
        get client(): $Minecraft;
    }
    export class $KubeJSCuriosEventJS$CurioCanEquip implements $KubeLivingEntityEvent {
        setResult(arg0: $TriState_): void;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        getEntity(): $LivingEntity;
        result: $TriState;
        stack: $ItemStack;
        slotContext: $SlotContext;
        constructor(arg0: $LivingEntity, arg1: $SlotContext_, arg2: $ItemStack_, arg3: $TriState_);
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $KubeJSCuriosEventJS$CurioCanUnequip implements $KubeLivingEntityEvent {
        setResult(arg0: $TriState_): void;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        getEntity(): $LivingEntity;
        result: $TriState;
        stack: $ItemStack;
        slotContext: $SlotContext;
        constructor(arg0: $LivingEntity, arg1: $SlotContext_, arg2: $ItemStack_, arg3: $TriState_);
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $KubeJSCuriosEventJS$CurioDrops implements $KubeLivingEntityEvent {
        getEntity(): $LivingEntity;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        curioHandler: $ICuriosItemHandler;
        drops: $Collection<$ItemEntity>;
        recentlyHit: boolean;
        lootingLevel: number;
        source: $DamageSource;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: $Collection_<$ItemEntity>, arg3: number, arg4: boolean, arg5: $ICuriosItemHandler);
        get entity(): $LivingEntity;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $KubeJSCuriosEventJS$SlotModifiersUpdated implements $KubeLivingEntityEvent {
        getTypes(): $Set<string>;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        getEntity(): $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $Set_<string>);
        get types(): $Set<string>;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $KubeJSCuriosEventJS$CurioAttributeModifier implements $KubeLivingEntityEvent {
        removeModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_): boolean;
        addModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_): boolean;
        clearModifiers(): void;
        removeAttribute(arg0: $Holder_<$Attribute>): $Collection<$AttributeModifier>;
        getModifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        getEntity(): $LivingEntity;
        stack: $ItemStack;
        originalModifiers: $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        id: $ResourceLocation;
        slotContext: $SlotContext;
        constructor(arg0: $ItemStack_, arg1: $SlotContext_, arg2: $ResourceLocation_, arg3: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>);
        get modifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
}
