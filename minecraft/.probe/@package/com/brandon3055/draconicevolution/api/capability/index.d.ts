import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $TechLevel } from "@package/com/brandon3055/brandonscore/api";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Stream } from "@package/java/util/stream";
import { $ModuleEntity, $ModuleContext, $InstallResult } from "@package/com/brandon3055/draconicevolution/api/modules/lib";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ModuleData } from "@package/com/brandon3055/draconicevolution/api/modules/data";
import { $UUID, $List, $Map_, $List_, $Collection } from "@package/java/util";
import { $AutoCloseable } from "@package/java/lang";
import { $BooleanProperty, $ConfigProperty, $IntegerProperty, $DecimalProperty } from "@package/com/brandon3055/draconicevolution/api/config";
import { $Module, $ModuleType, $Module_, $ModuleCategory } from "@package/com/brandon3055/draconicevolution/api/modules";

declare module "@package/com/brandon3055/draconicevolution/api/capability" {
    export class $ModuleHost {
        static checkAddModule(arg0: $ModuleHost, arg1: $Module_<never>): $InstallResult;
    }
    export interface $ModuleHost extends $IdentityProvider, $AutoCloseable, $PropertyProvider {
        markDirty(): void;
        getGridWidth(): number;
        getGridHeight(): number;
        addInformation(arg0: $Map_<$Component_, $Component_>, arg1: $ModuleContext): void;
        getModuleEntities(): $List<$ModuleEntity<never>>;
        getInstalledTypes(): $Stream<$ModuleType<never>>;
        getModuleCategories(): $Collection<$ModuleCategory>;
        checkRemoveModule(arg0: $ModuleEntity<never>, arg1: $List_<$Component_>): boolean;
        getTypeBlackList(): $Collection<$ModuleType<never>>;
        isModuleSupported(arg0: $ModuleEntity<never>): boolean;
        getHostTechLevel(): $TechLevel;
        getAdditionalTypes(): $Collection<$ModuleType<never>>;
        getDataInformation<T extends $ModuleData<T>>(arg0: T, arg1: $Map_<$Component_, $Component_>, arg2: $ModuleContext): void;
        getEntitiesByType(arg0: $ModuleType<never>): $Stream<$ModuleEntity<never>>;
        handleTick(arg0: $ModuleContext): void;
        getModuleData<T extends $ModuleData<T>>(arg0: $ModuleType<T>): T;
        getModuleData<T extends $ModuleData<T>>(arg0: $ModuleType<T>, arg1: T): T;
        addModule(arg0: $ModuleEntity<never>, arg1: $ModuleContext): void;
        removeModule(arg0: $ModuleEntity<never>, arg1: $ModuleContext): void;
        getModules(): $Stream<$Module<never>>;
        close(): void;
        save(): void;
        get gridWidth(): number;
        get gridHeight(): number;
        get moduleEntities(): $List<$ModuleEntity<never>>;
        get installedTypes(): $Stream<$ModuleType<never>>;
        get moduleCategories(): $Collection<$ModuleCategory>;
        get typeBlackList(): $Collection<$ModuleType<never>>;
        get hostTechLevel(): $TechLevel;
        get additionalTypes(): $Collection<$ModuleType<never>>;
        get modules(): $Stream<$Module<never>>;
    }
    export class $IdentityProvider {
        static resolveDuplicateIdentities(arg0: $Stream<$ItemStack_>, arg1: $HolderLookup$Provider): void;
    }
    export interface $IdentityProvider {
        getIdentity(): $UUID;
        regenIdentity(): void;
        get identity(): $UUID;
    }
    export class $PropertyProvider {
    }
    export interface $PropertyProvider extends $IdentityProvider, $AutoCloseable {
        markDirty(): void;
        getProviderName(): string;
        hasDecimal(arg0: string): boolean;
        hasBool(arg0: string): boolean;
        getDecimal(arg0: string): $DecimalProperty;
        hasInt(arg0: string): boolean;
        hasProperty(arg0: string): boolean;
        getBool(arg0: string): $BooleanProperty;
        getProperty(arg0: string): $ConfigProperty;
        getInt(arg0: string): $IntegerProperty;
        getProperties(): $Collection<$ConfigProperty>;
        close(): void;
        get providerName(): string;
        get properties(): $Collection<$ConfigProperty>;
    }
}
