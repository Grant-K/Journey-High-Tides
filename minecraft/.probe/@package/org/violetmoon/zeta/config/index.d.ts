import { $Predicate, $Consumer_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $ZetaModule, $ZetaCategory } from "@package/org/violetmoon/zeta/module";
import { $ZRegister } from "@package/org/violetmoon/zeta/event/load";
import { $LootItemConditionType } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $List, $Map, $Set, $List_, $Collection } from "@package/java/util";
import { $Object, $Iterable, $Class } from "@package/java/lang";
import { $Zeta } from "@package/org/violetmoon/zeta";
export * as type from "@package/org/violetmoon/zeta/config/type";

declare module "@package/org/violetmoon/zeta/config" {
    export class $ConfigManager {
        onReload(): void;
        getRootConfig(): $SectionDefinition;
        isCategoryEnabled(arg0: $ZetaCategory): boolean;
        getConfigFlagManager(): $ConfigFlagManager;
        getGeneralSection(): $SectionDefinition;
        getCategorySection(arg0: $ZetaCategory): $SectionDefinition;
        getCategoryEnabledOption(arg0: $ZetaCategory): $ValueDefinition<boolean>;
        getModuleEnabledOption(arg0: $ZetaModule): $ValueDefinition<boolean>;
        addOnReloadListener(arg0: string, arg1: $Consumer_<$IZetaConfigInternals>): void;
        static EVIL_CONFIG_STORAGE_THAT_I_NEED: $Set<$ConfigManager>;
        constructor(arg0: $Zeta, arg1: $Object);
        get rootConfig(): $SectionDefinition;
        get configFlagManager(): $ConfigFlagManager;
        get generalSection(): $SectionDefinition;
    }
    export class $Definition {
        setParent(arg0: $SectionDefinition): void;
        commentToArray(): string[];
        commentToString(): string;
        getTranslatedDisplayName(arg0: $Function_<string, string>): string;
        getTranslatedComment(arg0: $Function_<string, string>): $List<string>;
        parent: $SectionDefinition;
        path: $List<string>;
        hint: $Object;
        name: string;
        comment: $List<string>;
        lowercaseName: string;
        englishDisplayName: string;
        constructor(arg0: $Definition$Builder<never, $Definition>);
    }
    export class $IZetaConfigInternals {
    }
    export interface $IZetaConfigInternals {
        get<T>(arg0: $ValueDefinition<T>): T;
        flush(): void;
        set<T>(arg0: $ValueDefinition<T>, arg1: T): void;
    }
    export class $SectionDefinition$Builder extends $Definition$Builder<$SectionDefinition$Builder, $SectionDefinition> {
        addSubsection(arg0: $Consumer_<$SectionDefinition$Builder>): $SectionDefinition;
        addSubsection(arg0: $SectionDefinition): $SectionDefinition$Builder;
        addValue<T>(arg0: $Consumer_<$ValueDefinition$Builder<T>>): $ValueDefinition<T>;
        addValue(arg0: $ValueDefinition<never>): $SectionDefinition$Builder;
        constructor();
    }
    export class $Definition$Builder<B extends $Definition$Builder<B, T>, T extends $Definition> {
        hint(arg0: $Object): B;
        lowercaseName(arg0: string): B;
        englishDisplayName(arg0: string): B;
        build(): T;
        name(arg0: string): B;
        comment(arg0: string): B;
        comment(arg0: $List_<string>): B;
        constructor();
    }
    export class $ConfigFlagManager {
        onRegister(arg0: $ZRegister): void;
        getAllFlags(): $Set<string>;
        getFlag(arg0: string): boolean;
        isValidFlag(arg0: string): boolean;
        putModuleFlag(arg0: $ZetaModule): void;
        putFlag(arg0: $ZetaModule, arg1: string, arg2: boolean): void;
        clear(): void;
        zeta: $Zeta;
        static FLAG_CONDITION_TYPE: $LootItemConditionType;
        constructor(arg0: $Zeta);
        get allFlags(): $Set<string>;
    }
    export class $ValueDefinition<T> extends $Definition {
        isOfType(arg0: $Class<never>): boolean;
        downcast<X>(arg0: $Class<X>): $ValueDefinition<X>;
        validate(arg0: $Object): boolean;
        parent: $SectionDefinition;
        path: $List<string>;
        defaultValue: T;
        hint: $Object;
        validator: $Predicate<$Object>;
        name: string;
        comment: $List<string>;
        lowercaseName: string;
        englishDisplayName: string;
        constructor(arg0: $ValueDefinition$Builder<T>);
    }
    export class $ValueDefinition$Builder<T> extends $Definition$Builder<$ValueDefinition$Builder<T>, $ValueDefinition<T>> {
        validator(arg0: $Predicate_<$Object>): $ValueDefinition$Builder<$ValueDefinition<T>>;
        defaultValue(arg0: $ValueDefinition<T>): $ValueDefinition$Builder<$ValueDefinition<T>>;
        constructor();
    }
    export class $SectionDefinition extends $Definition {
        getValueErased<T>(arg0: string, arg1: $Class<never>): $ValueDefinition<T>;
        getSubsections(): $Collection<$SectionDefinition>;
        getAllChildren(): $Iterable<$Definition>;
        finish(): void;
        getValues(): $Collection<$ValueDefinition<never>>;
        getValue(arg0: string): $ValueDefinition<never>;
        getValue<T>(arg0: string, arg1: $Class<T>): $ValueDefinition<T>;
        subsections: $Map<string, $SectionDefinition>;
        parent: $SectionDefinition;
        path: $List<string>;
        values: $Map<string, $ValueDefinition<never>>;
        hint: $Object;
        name: string;
        comment: $List<string>;
        lowercaseName: string;
        englishDisplayName: string;
        constructor(arg0: $SectionDefinition$Builder);
        get allChildren(): $Iterable<$Definition>;
    }
}
