import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Multimap } from "@package/com/google/common/collect";
import { $AttributeModifier_, $Attribute_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map_, $List_, $Collection } from "@package/java/util";
import { $ConfigProperty } from "@package/com/brandon3055/draconicevolution/api/config";
import { $Consumer_ } from "@package/java/util/function";
import { $TechLevel } from "@package/com/brandon3055/brandonscore/api";
import { $Stream } from "@package/java/util/stream";
import { $ModuleEntity, $ModuleContext, $InstallResult } from "@package/com/brandon3055/draconicevolution/api/modules/lib";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Material } from "@package/codechicken/lib/gui/modular/sprite";
import { $ModuleData, $ModuleProperties } from "@package/com/brandon3055/draconicevolution/api/modules/data";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as lib from "@package/com/brandon3055/draconicevolution/api/modules/lib";
export * as data from "@package/com/brandon3055/draconicevolution/api/modules/data";

declare module "@package/com/brandon3055/draconicevolution/api/modules" {
    export class $ModuleCategory {
        static ALL: $ModuleCategory;
        static ARMOR_HEAD: $ModuleCategory;
        static ENERGY: $ModuleCategory;
        static CHESTPIECE: $ModuleCategory;
        static ARMOR: $ModuleCategory;
        static ARMOR_LEGS: $ModuleCategory;
        static RANGED_WEAPON: $ModuleCategory;
        static TOOL_HOE: $ModuleCategory;
        static ARMOR_FEET: $ModuleCategory;
        static TOOL_SHOVEL: $ModuleCategory;
        static MELEE_WEAPON: $ModuleCategory;
        static ARMOR_CHEST: $ModuleCategory;
        static MINING_TOOL: $ModuleCategory;
        static TOOL_AXE: $ModuleCategory;
        constructor();
    }
    export interface $Module<T> extends RegistryMarked<RegistryTypes.DraconicevolutionModulesTag, RegistryTypes.DraconicevolutionModules> {}
    export class $Module<T extends $ModuleData<T>> {
    }
    export interface $Module<T extends $ModuleData<T>> {
        getCategories(): $Collection<$ModuleCategory>;
        createEntity(): $ModuleEntity<never>;
        getData(): T;
        getItem(): $Item;
        addInformation(arg0: $List_<$Component_>, arg1: $ModuleContext): void;
        entityCodec(): $Codec<$ModuleEntity<never>>;
        entityStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ModuleEntity<never>>;
        doInstallationCheck(arg0: $Stream<$Module_<never>>): $InstallResult;
        maxInstallable(): number;
        getModuleTechLevel(): $TechLevel;
        areModulesCompatible(arg0: $Module_<never>): $InstallResult;
        getTexture(): $Material;
        getProperties(): $ModuleProperties<T>;
        getType(): $ModuleType<T>;
        get categories(): $Collection<$ModuleCategory>;
        get data(): T;
        get item(): $Item;
        get moduleTechLevel(): $TechLevel;
        get texture(): $Material;
        get properties(): $ModuleProperties<T>;
        get type(): $ModuleType<T>;
    }
    /**
     * Values that may be interpreted as {@link $Module}.
     */
    export type $Module_<T> = RegistryTypes.DraconicevolutionModules;
    export class $ModuleType<T extends $ModuleData<T>> {
    }
    export interface $ModuleType<T extends $ModuleData<T>> {
        getAttributeModifiers(arg0: T, arg1: $EquipmentSlot_, arg2: $ItemStack_, arg3: $Multimap<$Attribute_, $AttributeModifier_>): void;
        getCategories(): $Collection<$ModuleCategory>;
        createEntity(arg0: $Module_<T>): $ModuleEntity<never>;
        getDisplayName(): $Component;
        getData(arg0: $Module_<never>): T;
        entityCodec(): $Codec<$ModuleEntity<never>>;
        entityStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ModuleEntity<never>>;
        maxInstallable(): number;
        areModulesCompatible(arg0: $Module_<T>, arg1: $Module_<never>): $InstallResult;
        getDefaultWidth(): number;
        getDefaultHeight(): number;
        getTypeProperties(arg0: T, arg1: $Map_<$ConfigProperty, $Consumer_<T>>): void;
        getName(): string;
        get categories(): $Collection<$ModuleCategory>;
        get displayName(): $Component;
        get defaultWidth(): number;
        get defaultHeight(): number;
        get name(): string;
    }
}
