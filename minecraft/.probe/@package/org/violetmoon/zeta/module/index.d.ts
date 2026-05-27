import { $Supplier_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $Annotation } from "@package/java/lang/annotation";
import { $ItemStack, $Item_ } from "@package/net/minecraft/world/item";
import { $Stream } from "@package/java/util/stream";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ZGatherHints } from "@package/org/violetmoon/zeta/event/load";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Object, $Iterable_, $Record, $Class } from "@package/java/lang";
import { $List, $Map_, $Collection } from "@package/java/util";
import { $Zeta } from "@package/org/violetmoon/zeta";

declare module "@package/org/violetmoon/zeta/module" {
    export class $IDisableable<SELF> {
        static isEnabled(arg0: $Block_): boolean;
        static isEnabled(arg0: $Item_): boolean;
    }
    export interface $IDisableable<SELF> {
        setCondition(arg0: $BooleanSupplier_): SELF;
        doesConditionApply(): boolean;
        getModule(): $ZetaModule;
        isEnabled(): boolean;
        set condition(value: $BooleanSupplier_);
        get module(): $ZetaModule;
    }
    export class $ZetaModuleManager {
        getCategories(): $Collection<$ZetaCategory>;
        initCategories(arg0: $Iterable_<$ZetaCategory>): void;
        doFinalize(): void;
        modulesInCategory(arg0: $ZetaCategory): $List<$ZetaModule>;
        isEnabledOrOverlapping(arg0: $Class<$ZetaModule>): boolean;
        getInhabitedCategories(): $List<$ZetaCategory>;
        getCategory(arg0: string): $ZetaCategory;
        getOptional<M extends $ZetaModule>(arg0: $Class<M>): (M) | undefined;
        getModules(): $Collection<$ZetaModule>;
        get<M extends $ZetaModule>(arg0: $Class<M>): M;
        load(arg0: $ModuleFinder_): void;
        isEnabled(arg0: $Class<$ZetaModule>): boolean;
        constructor(arg0: $Zeta);
        get categories(): $Collection<$ZetaCategory>;
        get inhabitedCategories(): $List<$ZetaCategory>;
        get modules(): $Collection<$ZetaModule>;
    }
    export class $ModuleFinder {
    }
    export interface $ModuleFinder extends $Supplier<$Stream<$ZetaLoadModuleAnnotationData>> {
        and(arg0: $ModuleFinder_): $ModuleFinder;
    }
    /**
     * Values that may be interpreted as {@link $ModuleFinder}.
     */
    export type $ModuleFinder_ = (() => void);
    export class $ZetaCategory {
        isAddon(): boolean;
        getDisabledTooltip(): $Component;
        static unknownCategory(arg0: string): $ZetaCategory;
        requiredModsLoaded(): boolean;
        requiredMod: string;
        name: string;
        icon: $Supplier<$ItemStack>;
        constructor(arg0: string, arg1: $Supplier_<$ItemStack>, arg2: string);
        constructor(arg0: string, arg1: $Item_);
        constructor(arg0: string, arg1: $Item_, arg2: string);
        get addon(): boolean;
        get disabledTooltip(): $Component;
    }
    export class $ZetaLoadModuleAnnotationData extends $Record {
        static fromAnnotation(arg0: $Class<never>, arg1: $ZetaLoadModule): $ZetaLoadModuleAnnotationData;
        enabledByDefault(): boolean;
        category(): string;
        static fromForgeThing(arg0: $Class<never>, arg1: $Map_<string, $Object>): $ZetaLoadModuleAnnotationData;
        clientReplacement(): boolean;
        antiOverlap(): string[];
        loadPhase(): number;
        description(): string;
        clazz(): $Class<never>;
        name(): string;
        constructor(clazz: $Class<never>, category: string, name: string, description: string, antiOverlap: string[], enabledByDefault: boolean, clientReplacement: boolean, loadPhase: number);
    }
    /**
     * Values that may be interpreted as {@link $ZetaLoadModuleAnnotationData}.
     */
    export type $ZetaLoadModuleAnnotationData_ = { antiOverlap?: string[], loadPhase?: number, clientReplacement?: boolean, clazz?: $Class<never>, enabledByDefault?: boolean, name?: string, description?: string, category?: string,  } | [antiOverlap?: string[], loadPhase?: number, clientReplacement?: boolean, clazz?: $Class<never>, enabledByDefault?: boolean, name?: string, description?: string, category?: string, ];
    export class $ZetaModule {
        setEnabled(arg0: $Zeta, arg1: boolean): void;
        enabledByDefault(): boolean;
        category(): $ZetaCategory;
        disabledByOverlap(): boolean;
        antiOverlap(): $List<string>;
        postConstruct(): void;
        ignoreAntiOverlap(): boolean;
        addAnnotationHints(arg0: $ZGatherHints): void;
        lowerCaseName(): string;
        setEnabledByDefault(arg0: boolean): void;
        setIgnoreAntiOverlap(arg0: boolean): void;
        displayName(): string;
        description(): string;
        zeta(): $Zeta;
        isEnabled(): boolean;
        constructor();
    }
    export class $ZetaLoadModule implements $Annotation {
        enabledByDefault(): boolean;
        category(): string;
        clientReplacement(): boolean;
        antiOverlap(): string[];
        loadPhase(): number;
        description(): string;
        name(): string;
    }
}
