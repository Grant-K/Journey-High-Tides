import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $LootTableAccessor as $LootTableAccessor$1, $LootPoolAccessor as $LootPoolAccessor$1 } from "@package/net/fabricmc/fabric/mixin/loot";
import { $LootPoolAccess } from "@package/com/blackgear/platform/common/data/neoforge";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ILootPoolHooks } from "@package/net/darkhax/bookshelf/common/impl/data/loot/modifiers";
import { $LootParamsParamSetAccess } from "@package/umpaz/brewinandchewin/common/access";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer$Builder, $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Map, $Set, $List, $Map_, $Collection_, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec, $ProblemReporter } from "@package/net/minecraft/util";
import { $AccessorLootPool, $AccessorLootTable as $AccessorLootTable$1 } from "@package/net/darkhax/bookshelf/common/mixin/access/loot";
import { $LootEntryList, $LootFunctionList, $LootConditionList } from "@package/com/almostreliable/lootjs/loot";
import { $Consumer_, $BiConsumer, $Consumer, $BiConsumer_, $Function_, $UnaryOperator_ } from "@package/java/util/function";
import { $Container } from "@package/net/minecraft/world";
import { $HolderGetter$Provider, $Registry, $Holder, $HolderGetter$Provider_ } from "@package/net/minecraft/core";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $LootParamsBzVisitedLootInterface } from "@package/com/telepathicgrunt/the_bumblezone/loot";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $LootType_, $LootType } from "@package/com/almostreliable/lootjs/core";
import { $LootTableExtension, $LootParamsExtension, $LootPoolExtension, $LootContextExtension } from "@package/com/almostreliable/lootjs/loot/extension";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Enum, $Iterable_, $Record, $Object } from "@package/java/lang";
import { $AccessorMixinLootTable } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $LootUnificationHandler } from "@package/com/almostreliable/unified/unification/loot";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ItemContainerContents, $ChargedProjectiles, $BundleContents } from "@package/net/minecraft/world/item/component";
import { $LootPoolAccessor, $LootTableAccessor } from "@package/com/jesz/createdieselgenerators/mixins";
import { $LootContextAccessor as $LootContextAccessor$1 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/loot";
import { $FunctionUserBuilder, $LootItemFunction$Builder, $LootItemFunction$Builder_, $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $ImmutableList$Builder } from "@package/com/google/common/collect";
import { $FabricLootPoolBuilder as $FabricLootPoolBuilder$1, $FabricLootTableBuilder } from "@package/net/fabricmc/fabric/api/loot/v2";
import { $UnificationLookup } from "@package/com/almostreliable/unified/api/unification";
import { $LootContextAccessor as $LootContextAccessor$2, $LootParamsAccessor } from "@package/umpaz/brewinandchewin/common/mixin";
import { $Stream } from "@package/java/util/stream";
import { $LootTableAccessor as $LootTableAccessor$2 } from "@package/com/blackgear/platform/core/mixin/neoforge/access";
import { $INoMapContext } from "@package/com/lootintegrations/loot";
import { $FabricLootPoolBuilder, $FabricLootTableBuilder as $FabricLootTableBuilder$1 } from "@package/net/fabricmc/fabric/api/loot/v3";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $ConditionUserBuilder, $LootItemCondition$Builder, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $DebugInfo } from "@package/com/almostreliable/lootjs/util";
import { $AccessorLootTable, $AccessorLootPool as $AccessorLootPool$1 } from "@package/org/violetmoon/zeta/mixin/mixins";
import { $LootContextAccessor } from "@package/com/craisinlord/integrated_api/mixins/resources";
import { $PostLootAction, $PostLootActionOwner, $PostLootAction_ } from "@package/com/almostreliable/lootjs/loot/table";
import { $LootContextParam, $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as parameters from "@package/net/minecraft/world/level/storage/loot/parameters";
export * as predicates from "@package/net/minecraft/world/level/storage/loot/predicates";
export * as providers from "@package/net/minecraft/world/level/storage/loot/providers";
export * as entries from "@package/net/minecraft/world/level/storage/loot/entries";
export * as functions from "@package/net/minecraft/world/level/storage/loot/functions";

declare module "@package/net/minecraft/world/level/storage/loot" {
    export class $IntRange$IntLimiter {
    }
    export interface $IntRange$IntLimiter {
    }
    /**
     * Values that may be interpreted as {@link $IntRange$IntLimiter}.
     */
    export type $IntRange$IntLimiter_ = (() => void);
    export class $LootParams$Builder {
        withParameter<T>(arg0: $LootContextParam<T>, arg1: T): $LootParams$Builder;
        withOptionalParameter<T>(arg0: $LootContextParam<T>, arg1: T): $LootParams$Builder;
        withLuck(arg0: number): $LootParams$Builder;
        getOptionalParameter<T>(arg0: $LootContextParam<T>): T;
        withDynamicDrop(arg0: $ResourceLocation_, arg1: $LootParams$DynamicDrop_): $LootParams$Builder;
        handler$jkc000$lootjs$setType(arg0: $LootContextParamSet, arg1: $CallbackInfoReturnable<any>): void;
        getLevel(): $ServerLevel;
        create(arg0: $LootContextParamSet): $LootParams;
        getParameter<T>(arg0: $LootContextParam<T>): T;
        luck: number;
        constructor(arg0: $ServerLevel);
        get level(): $ServerLevel;
    }
    export class $LootTable$Builder implements $FunctionUserBuilder<$LootTable$Builder>, $FabricLootTableBuilder, $FabricLootTableBuilder$1 {
        setRandomSequence(arg0: $ResourceLocation_): $LootTable$Builder;
        setParamSet(arg0: $LootContextParamSet): $LootTable$Builder;
        pools(arg0: $Collection_<any>): $LootTable$Builder;
        withPool(arg0: $LootPool$Builder): $LootTable$Builder;
        modifyPools(arg0: $Consumer_<any>): $LootTable$Builder;
        build(): $LootTable;
        apply(arg0: $Collection_<any>): $LootTable$Builder;
        apply(arg0: $LootItemFunction$Builder_): $LootTable$Builder;
        apply(arg0: $LootItemFunction): $LootTable$Builder;
        pool(arg0: $LootPool): $LootTable$Builder;
        apply<E>(arg0: E[], arg1: $Function_<E, $LootItemFunction$Builder>): $LootTable$Builder;
        apply<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemFunction$Builder>): $LootTable$Builder;
        unwrap(): $LootTable$Builder;
        constructor();
        set randomSequence(value: $ResourceLocation_);
        set paramSet(value: $LootContextParamSet);
    }
    export class $LootPool$Builder implements $FunctionUserBuilder<$LootPool$Builder>, $ConditionUserBuilder<$LootPool$Builder>, $FabricLootPoolBuilder$1, $FabricLootPoolBuilder {
        setRolls(arg0: $NumberProvider_): $LootPool$Builder;
        setBonusRolls(arg0: $NumberProvider_): $LootPool$Builder;
        conditionally(arg0: $LootItemCondition): $LootPool$Builder;
        conditionally(arg0: $Collection_<any>): $LootPool$Builder;
        build(): $LootPool;
        name(arg0: string): $LootPool$Builder;
        add(arg0: $LootPoolEntryContainer$Builder<never>): $LootPool$Builder;
        apply(arg0: $LootItemFunction): $LootPool$Builder;
        apply(arg0: $Collection_<any>): $LootPool$Builder;
        apply(arg0: $LootItemFunction$Builder_): $LootPool$Builder;
        with(arg0: $LootPoolEntryContainer): $LootPool$Builder;
        with(arg0: $Collection_<any>): $LootPool$Builder;
        apply<E>(arg0: E[], arg1: $Function_<E, $LootItemFunction$Builder>): $LootPool$Builder;
        apply<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemFunction$Builder>): $LootPool$Builder;
        when<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemCondition$Builder>): $LootPool$Builder;
        when(arg0: $LootItemCondition$Builder_): $LootPool$Builder;
        unwrap(): $LootPool$Builder;
        entries: $ImmutableList$Builder<$LootPoolEntryContainer>;
        functions: $ImmutableList$Builder<$LootItemFunction>;
        conditions: $ImmutableList$Builder<$LootItemCondition>;
        constructor();
        set rolls(value: $NumberProvider_);
        set bonusRolls(value: $NumberProvider_);
    }
    export class $LootContext$EntityTarget extends $Enum<$LootContext$EntityTarget> implements $StringRepresentable {
        getSerializedName(): string;
        getParam(): $LootContextParam<$Entity>;
        static getByName(name: string): $LootContext$EntityTarget;
        getName(): string;
        static values(): $LootContext$EntityTarget[];
        static valueOf(arg0: string): $LootContext$EntityTarget;
        getRemappedEnumConstantName(): string;
        static DIRECT_ATTACKER: $LootContext$EntityTarget;
        static CODEC: $StringRepresentable$EnumCodec<$LootContext$EntityTarget>;
        static ATTACKER: $LootContext$EntityTarget;
        static ATTACKING_PLAYER: $LootContext$EntityTarget;
        static THIS: $LootContext$EntityTarget;
        get serializedName(): string;
        get param(): $LootContextParam<$Entity>;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LootContext$EntityTarget}.
     */
    export type $LootContext$EntityTarget_ = "this" | "attacker" | "direct_attacker" | "attacking_player" | string;
    export class $LootDataType<T> extends $Record {
        codec(): $Codec<T>;
        registryKey(): $ResourceKey<$Registry<T>>;
        conditionalCodec(): $Codec<(T) | undefined>;
        handler$edo000$probejs$apply(resourceLocation: $ResourceLocation_, ops: $DynamicOps<any>, value: $Object, cir: $CallbackInfoReturnable<any>): void;
        runValidation(arg0: $ValidationContext, arg1: $ResourceKey_<T>, arg2: T): void;
        idSetter(): $BiConsumer<T, $ResourceLocation>;
        deserialize<V>(arg0: $ResourceLocation_, arg1: $DynamicOps<V>, arg2: V): (T) | undefined;
        validator(): $LootDataType$Validator<T>;
        static values(): $Stream<$LootDataType<never>>;
        defaultValue(): T;
        static TABLE: $LootDataType<$LootTable>;
        static MODIFIER: $LootDataType<$LootItemFunction>;
        static PREDICATE: $LootDataType<$LootItemCondition>;
        constructor(registryKey: $ResourceKey_<$Registry<T>>, codec: $Codec<T>, validator: $LootDataType$Validator_<T>, defaultValue: T, conditionalCodec: $Codec<(T) | undefined>, idSetter: $BiConsumer_<T, $ResourceLocation>);
    }
    /**
     * Values that may be interpreted as {@link $LootDataType}.
     */
    export type $LootDataType_<T> = { conditionalCodec?: $Codec<(T) | undefined>, defaultValue?: any, codec?: $Codec<any>, registryKey?: $ResourceKey_<$Registry<any>>, validator?: $LootDataType$Validator_<any>, idSetter?: $BiConsumer_<any, $ResourceLocation>,  } | [conditionalCodec?: $Codec<(T) | undefined>, defaultValue?: any, codec?: $Codec<any>, registryKey?: $ResourceKey_<$Registry<any>>, validator?: $LootDataType$Validator_<any>, idSetter?: $BiConsumer_<any, $ResourceLocation>, ];
    export class $LootContext implements $LootContextAccessor$1, $LootContextAccessor, $LootContextAccessor$2, $INoMapContext, $LootContextExtension {
        getParamOrNull<T>(arg0: $LootContextParam<T>): T;
        getRandom(): $RandomSource;
        getLuck(): number;
        getResolver(): $HolderGetter$Provider;
        setQueriedLootTableId(arg0: $ResourceLocation_): void;
        static createVisitedEntry(arg0: $LootItemFunction): $LootContext$VisitedEntry<$LootItemFunction>;
        static createVisitedEntry(arg0: $LootItemCondition): $LootContext$VisitedEntry<$LootItemCondition>;
        static createVisitedEntry(arg0: $LootTable): $LootContext$VisitedEntry<$LootTable>;
        pushVisitedElement(arg0: $LootContext$VisitedEntry_<never>): boolean;
        hasParam(arg0: $LootContextParam<never>): boolean;
        getParam<T>(arg0: $LootContextParam<T>): T;
        hasVisitedElement(arg0: $LootContext$VisitedEntry_<never>): boolean;
        popVisitedElement(arg0: $LootContext$VisitedEntry_<never>): void;
        areMapsDisabled(): boolean;
        getQueriedLootTableId(): $ResourceLocation;
        lootjs$self(): $LootContext;
        lootjs$getData(): $Map<any, any>;
        lootjs$getType(): $LootType;
        disabledMaps(): void;
        addDynamicDrops(arg0: $ResourceLocation_, arg1: $Consumer_<$ItemStack>): void;
        getLevel(): $ServerLevel;
        getEntity(): $Entity;
        getId(): $ResourceLocation;
        isType(arg0: $LootType_): boolean;
        getPosition(): $Vec3;
        getAttackingEntity(): $Entity;
        getKillerPlayer(): $ServerPlayer;
        getDamageSource(): $DamageSource;
        getTool(): $ItemStack;
        isExploded(): boolean;
        getExplosionRadius(): number;
        getServer(): $MinecraftServer;
        bumblezone$getParams(): $LootParams;
        brewinandchewin$getParams(): $LootParams;
        getParams(): $LootParams;
        get random(): $RandomSource;
        get luck(): number;
        get resolver(): $HolderGetter$Provider;
        get level(): $ServerLevel;
        get entity(): $Entity;
        get id(): $ResourceLocation;
        get position(): $Vec3;
        get attackingEntity(): $Entity;
        get killerPlayer(): $ServerPlayer;
        get damageSource(): $DamageSource;
        get tool(): $ItemStack;
        get exploded(): boolean;
        get explosionRadius(): number;
        get server(): $MinecraftServer;
        get params(): $LootParams;
    }
    export class $ValidationContext {
        forChild(arg0: string): $ValidationContext;
        enterElement(arg0: string, arg1: $ResourceKey_<never>): $ValidationContext;
        validateUser(arg0: $LootContextUser): void;
        hasVisitedElement(arg0: $ResourceKey_<never>): boolean;
        allowsReferences(): boolean;
        reportProblem(arg0: string): void;
        setParams(arg0: $LootContextParamSet): $ValidationContext;
        reporter(): $ProblemReporter;
        resolver(): $HolderGetter$Provider;
        constructor(arg0: $ProblemReporter, arg1: $LootContextParamSet);
        constructor(arg0: $ProblemReporter, arg1: $LootContextParamSet, arg2: $HolderGetter$Provider_);
        set params(value: $LootContextParamSet);
    }
    export class $LootContextUser {
    }
    export interface $LootContextUser {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        validate(arg0: $ValidationContext): void;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $IntRange {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static exact(arg0: number): $IntRange;
        static range(arg0: number, arg1: number): $IntRange;
        static lowerBound(arg0: number): $IntRange;
        static upperBound(arg0: number): $IntRange;
        test(arg0: $LootContext, arg1: number): boolean;
        clamp(arg0: $LootContext, arg1: number): number;
        static CODEC: $Codec<$IntRange>;
        constructor(arg0: $NumberProvider_, arg1: $NumberProvider_);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $LootDataType$Validator<T> {
    }
    export interface $LootDataType$Validator<T> {
        run(arg0: $ValidationContext, arg1: $ResourceKey_<T>, arg2: T): void;
    }
    /**
     * Values that may be interpreted as {@link $LootDataType$Validator}.
     */
    export type $LootDataType$Validator_<T> = ((arg0: $ValidationContext, arg1: $ResourceKey<T>, arg2: T) => void);
    export class $LootParams$DynamicDrop {
    }
    export interface $LootParams$DynamicDrop {
        add(arg0: $Consumer_<$ItemStack>): void;
    }
    /**
     * Values that may be interpreted as {@link $LootParams$DynamicDrop}.
     */
    export type $LootParams$DynamicDrop_ = ((arg0: $Consumer<$ItemStack>) => void);
    export class $ContainerComponentManipulators {
        static ALL_MANIPULATORS: $Map<$DataComponentType<never>, $ContainerComponentManipulator<never>>;
        static CODEC: $Codec<$ContainerComponentManipulator<never>>;
        static CHARGED_PROJECTILES: $ContainerComponentManipulator<$ChargedProjectiles>;
        static CONTAINER: $ContainerComponentManipulator<$ItemContainerContents>;
        static BUNDLE_CONTENTS: $ContainerComponentManipulator<$BundleContents>;
    }
    export interface $ContainerComponentManipulators {
    }
    export class $LootParams implements $LootParamsBzVisitedLootInterface, $LootParamsAccessor, $LootParamsParamSetAccess, $LootParamsExtension {
        getParamOrNull<T>(arg0: $LootContextParam<T>): T;
        getLuck(): number;
        getOptionalParameter<T>(arg0: $LootContextParam<T>): T;
        lootjs$setType(arg0: $LootType_): void;
        brewinandchewin$setParamSet(arg0: $LootContextParamSet): void;
        hasParam(arg0: $LootContextParam<never>): boolean;
        lootjs$getType(): $LootType;
        addDynamicDrops(arg0: $ResourceLocation_, arg1: $Consumer_<$ItemStack>): void;
        getLevel(): $ServerLevel;
        getVisitedBzVisitedLootRL(): $Set<any>;
        addVisitedBzVisitedLootRL(arg0: $ResourceLocation_): void;
        brewinandchewin$getParamSet(): $LootContextParamSet;
        getParameter<T>(arg0: $LootContextParam<T>): T;
        brewinandchewin$getParams(): $Map<$LootContextParam<never>, $Object>;
        constructor(arg0: $ServerLevel, arg1: $Map_<$LootContextParam<never>, $Object>, arg2: $Map_<$ResourceLocation_, $LootParams$DynamicDrop_>, arg3: number);
        get luck(): number;
        get level(): $ServerLevel;
        get visitedBzVisitedLootRL(): $Set<any>;
    }
    export class $ContainerComponentManipulator<T> {
    }
    export interface $ContainerComponentManipulator<T> {
        setContents(arg0: $ItemStack_, arg1: $Stream<$ItemStack_>): void;
        setContents(arg0: T, arg1: $Stream<$ItemStack_>): T;
        setContents(arg0: $ItemStack_, arg1: T, arg2: $Stream<$ItemStack_>): void;
        modifyItems(arg0: $ItemStack_, arg1: $UnaryOperator_<$ItemStack>): void;
        getContents(arg0: T): $Stream<$ItemStack>;
        type(): $DataComponentType<T>;
        empty(): T;
    }
    export class $LootTable implements $LootUnificationHandler, $AccessorMixinLootTable, $AccessorLootTable$1, $AccessorLootTable, $PostLootActionOwner, $LootTableExtension, $LootTableAccessor$1, $LootTableAccessor$2, $LootTableAccessor {
        getRandomItems(arg0: $LootParams, arg1: number, arg2: $Consumer_<$ItemStack>): void;
        getRandomItems(arg0: $LootParams, arg1: $Consumer_<$ItemStack>): void;
        getRandomItems(arg0: $LootContext, arg1: $Consumer_<$ItemStack>): void;
        getRandomItems(arg0: $LootParams, arg1: $RandomSource): $ObjectArrayList<$ItemStack>;
        getRandomItems(arg0: $LootParams, arg1: number): $ObjectArrayList<$ItemStack>;
        getRandomItems(arg0: $LootParams): $ObjectArrayList<$ItemStack>;
        getRandomItems(arg0: $LootContext): $ObjectArrayList<$ItemStack>;
        static lootTable(): $LootTable$Builder;
        getParamSet(): $LootContextParamSet;
        setLootTableId(arg0: $ResourceLocation_): void;
        removePool(arg0: string): $LootPool;
        addPool(arg0: $LootPool): void;
        lootjs$setPostLootAction(arg0: $PostLootAction_): void;
        lootjs$getPostLootAction(): $PostLootAction;
        lootjs$getPools(): $List<any>;
        lootjs$setPools(arg0: $List_<any>): void;
        lootjs$createFunctionList(): $LootFunctionList;
        static createStackSplitter(arg0: $ServerLevel, arg1: $Consumer_<$ItemStack>): $Consumer<$ItemStack>;
        /**
         * @deprecated
         */
        getRandomItemsRaw(arg0: $LootParams, arg1: $Consumer_<$ItemStack>): void;
        /**
         * @deprecated
         */
        getRandomItemsRaw(arg0: $LootContext, arg1: $Consumer_<$ItemStack>): void;
        almostunified$unify(lookup: $UnificationLookup): boolean;
        getLootTableId(): $ResourceLocation;
        handler$fmc000$balm$getRandomItems(arg0: $LootContext, arg1: $CallbackInfoReturnable<any>): void;
        handler$dne000$lootintegrations$on(arg0: $LootContext, arg1: $CallbackInfoReturnable<any>): void;
        lootjs$setRandomSequence(arg0: $ResourceLocation_): void;
        lootjs$getRandomSequence(): $ResourceLocation;
        lootjs$setParamSet(arg0: $LootContextParamSet): void;
        lootjs$getParamSet(): $LootContextParamSet;
        isFrozen(): boolean;
        freeze(): void;
        fill(arg0: $Container, arg1: $LootParams, arg2: number): void;
        validate(arg0: $ValidationContext): void;
        getPool(arg0: string): $LootPool;
        getRandomSequence(): ($ResourceLocation) | undefined;
        getPools(): $List<$LootPool>;
        bookshelf$randomSequence(): ($ResourceLocation) | undefined;
        bookshelf$pools(): $List<$LootPool>;
        bookshelf$functions(): $List<$LootItemFunction>;
        zeta$getPools(): $List<$LootPool>;
        fabric_getPools(): $List<$LootPool>;
        fabric_getFunctions(): $List<$LootItemFunction>;
        fabric_getRandomSequenceId(): ($ResourceLocation) | undefined;
        static CODEC: $Codec<$Holder<$LootTable>>;
        static DEFAULT_PARAM_SET: $LootContextParamSet;
        pools: $List<$LootPool>;
        static DIRECT_CODEC: $Codec<$LootTable>;
        static RANDOMIZE_SEED: number;
        static EMPTY: $LootTable;
        get paramSet(): $LootContextParamSet;
        get frozen(): boolean;
        get randomSequence(): ($ResourceLocation) | undefined;
    }
    export class $LootPool implements $LootUnificationHandler, $AccessorLootPool, $ILootPoolHooks, $AccessorLootPool$1, $LootPoolExtension, $LootPoolAccessor$1, $LootPoolAccess, $LootPoolAccessor {
        addRandomItems(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
        almostunified$unify(lookup: $UnificationLookup): boolean;
        getRolls(): $NumberProvider;
        getBonusRolls(): $NumberProvider;
        setRolls(arg0: $NumberProvider_): void;
        setBonusRolls(arg0: $NumberProvider_): void;
        static lootPool(): $LootPool$Builder;
        bookshelf$setHash(arg0: number): void;
        bookshelf$getHash(): number;
        lootjs$asVanillaPool(): $LootPool;
        lootjs$getEntries(): $LootEntryList;
        lootjs$getConditions(): $LootConditionList;
        lootjs$getFunctions(): $LootFunctionList;
        lootjs$setName(arg0: string): void;
        setEntries(entries: $List_<any>): void;
        isFrozen(): boolean;
        getEntries(): $List<any>;
        freeze(): void;
        getName(): string;
        validate(arg0: $ValidationContext): void;
        bookshelf$matches(arg0: number): boolean;
        lootjs$collectDebugInfo(arg0: $DebugInfo): void;
        bookshelf$entries(): $List<$LootPoolEntryContainer>;
        bookshelf$setEntries(arg0: $List_<$LootPoolEntryContainer>): void;
        bookshelf$conditions(): $List<$LootItemCondition>;
        bookshelf$rolls(): $NumberProvider;
        bookshelf$bonusRolls(): $NumberProvider;
        zeta$getLootPoolEntries(): $List<$LootPoolEntryContainer>;
        zeta$setLootPoolEntries(arg0: $List_<$LootPoolEntryContainer>): void;
        fabric_getRolls(): $NumberProvider;
        fabric_getBonusRolls(): $NumberProvider;
        fabric_getEntries(): $List<$LootPoolEntryContainer>;
        fabric_getConditions(): $List<$LootItemCondition>;
        fabric_getFunctions(): $List<$LootItemFunction>;
        functions(): $List<$LootItemFunction>;
        entries: $List<$LootPoolEntryContainer>;
        static CODEC: $Codec<$LootPool>;
        conditions: $List<$LootItemCondition>;
        rolls: $NumberProvider;
        bonusRolls: $NumberProvider;
        constructor(arg0: $List_<$LootPoolEntryContainer>, arg1: $List_<$LootItemCondition>, arg2: $List_<$LootItemFunction>, arg3: $NumberProvider_, arg4: $NumberProvider_, arg5: (string) | undefined);
        get frozen(): boolean;
        get name(): string;
    }
    export class $IntRange$IntChecker {
    }
    export interface $IntRange$IntChecker {
    }
    /**
     * Values that may be interpreted as {@link $IntRange$IntChecker}.
     */
    export type $IntRange$IntChecker_ = (() => void);
    export class $LootContext$Builder {
        withQueriedLootTableId(arg0: $ResourceLocation_): $LootContext$Builder;
        withOptionalRandomSeed(arg0: number): $LootContext$Builder;
        withOptionalRandomSource(arg0: $RandomSource): $LootContext$Builder;
        getLevel(): $ServerLevel;
        create(arg0: ($ResourceLocation_) | undefined): $LootContext;
        constructor(arg0: $LootContext);
        constructor(arg0: $LootParams);
        get level(): $ServerLevel;
    }
    export class $LootContext$VisitedEntry<T> extends $Record {
        type(): $LootDataType<T>;
        value(): T;
        constructor(type: $LootDataType_<T>, value: T);
    }
    /**
     * Values that may be interpreted as {@link $LootContext$VisitedEntry}.
     */
    export type $LootContext$VisitedEntry_<T> = { value?: any, type?: $LootDataType_<any>,  } | [value?: any, type?: $LootDataType_<any>, ];
    export class $BuiltInLootTables {
        static all(): $Set<$ResourceKey<$LootTable>>;
        static register(arg0: $ResourceKey_<$LootTable>): $ResourceKey<$LootTable>;
        static PANDA_SNEEZE: $ResourceKey<$LootTable>;
        static ANCIENT_CITY_ICE_BOX: $ResourceKey<$LootTable>;
        static PILLAGER_OUTPOST: $ResourceKey<$LootTable>;
        static SHEEP_CYAN: $ResourceKey<$LootTable>;
        static DESERT_WELL_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static CLERIC_GIFT: $ResourceKey<$LootTable>;
        static SHEEP_PURPLE: $ResourceKey<$LootTable>;
        static VILLAGE_SHEPHERD: $ResourceKey<$LootTable>;
        static STRONGHOLD_LIBRARY: $ResourceKey<$LootTable>;
        static SPAWNER_OMINOUS_TRIAL_CHAMBER_CONSUMABLES: $ResourceKey<$LootTable>;
        static BASTION_OTHER: $ResourceKey<$LootTable>;
        static SHEEP_BLACK: $ResourceKey<$LootTable>;
        static UNDERWATER_RUIN_BIG: $ResourceKey<$LootTable>;
        static OCEAN_RUIN_WARM_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static SHEEP_LIGHT_GRAY: $ResourceKey<$LootTable>;
        static RUINED_PORTAL: $ResourceKey<$LootTable>;
        static VILLAGE_TOOLSMITH: $ResourceKey<$LootTable>;
        static VILLAGE_BUTCHER: $ResourceKey<$LootTable>;
        static VILLAGE_WEAPONSMITH: $ResourceKey<$LootTable>;
        static SHEEP_LIGHT_BLUE: $ResourceKey<$LootTable>;
        static UNDERWATER_RUIN_SMALL: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_RARE: $ResourceKey<$LootTable>;
        static BURIED_TREASURE: $ResourceKey<$LootTable>;
        static EQUIPMENT_TRIAL_CHAMBER_RANGED: $ResourceKey<$LootTable>;
        static SHIPWRECK_SUPPLY: $ResourceKey<$LootTable>;
        static SHEEP_YELLOW: $ResourceKey<$LootTable>;
        static ABANDONED_MINESHAFT: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_INTERSECTION_BARREL: $ResourceKey<$LootTable>;
        static FISHING_JUNK: $ResourceKey<$LootTable>;
        static SHEEP_GRAY: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_WATER_DISPENSER: $ResourceKey<$LootTable>;
        static SHEEP_PINK: $ResourceKey<$LootTable>;
        static SPAWNER_TRIAL_CHAMBER_KEY: $ResourceKey<$LootTable>;
        static VILLAGE_SAVANNA_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_UNIQUE: $ResourceKey<$LootTable>;
        static VILLAGE_MASON: $ResourceKey<$LootTable>;
        static FISHING: $ResourceKey<$LootTable>;
        static FISHERMAN_GIFT: $ResourceKey<$LootTable>;
        static BASTION_TREASURE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CORRIDOR: $ResourceKey<$LootTable>;
        static BUTCHER_GIFT: $ResourceKey<$LootTable>;
        static CAT_MORNING_GIFT: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS_COMMON: $ResourceKey<$LootTable>;
        static VILLAGE_TANNERY: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD: $ResourceKey<$LootTable>;
        static TRAIL_RUINS_ARCHAEOLOGY_RARE: $ResourceKey<$LootTable>;
        static TRAIL_RUINS_ARCHAEOLOGY_COMMON: $ResourceKey<$LootTable>;
        static BOGGED_SHEAR: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CORRIDOR_DISPENSER: $ResourceKey<$LootTable>;
        static DESERT_PYRAMID: $ResourceKey<$LootTable>;
        static SHEEP_BLUE: $ResourceKey<$LootTable>;
        static CARTOGRAPHER_GIFT: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_ENTRANCE: $ResourceKey<$LootTable>;
        static EQUIPMENT_TRIAL_CHAMBER_MELEE: $ResourceKey<$LootTable>;
        static STRONGHOLD_CROSSING: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS_UNIQUE: $ResourceKey<$LootTable>;
        static SHEEP_MAGENTA: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CHAMBER_DISPENSER: $ResourceKey<$LootTable>;
        static SPAWNER_TRIAL_ITEMS_TO_DROP_WHEN_OMINOUS: $ResourceKey<$LootTable>;
        static DESERT_PYRAMID_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static SHEEP_RED: $ResourceKey<$LootTable>;
        static ARMORER_GIFT: $ResourceKey<$LootTable>;
        static MASON_GIFT: $ResourceKey<$LootTable>;
        static SHIPWRECK_TREASURE: $ResourceKey<$LootTable>;
        static FISHING_TREASURE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS_RARE: $ResourceKey<$LootTable>;
        static VILLAGE_ARMORER: $ResourceKey<$LootTable>;
        static SIMPLE_DUNGEON: $ResourceKey<$LootTable>;
        static NETHER_BRIDGE: $ResourceKey<$LootTable>;
        static JUNGLE_TEMPLE_DISPENSER: $ResourceKey<$LootTable>;
        static EQUIPMENT_TRIAL_CHAMBER: $ResourceKey<$LootTable>;
        static VILLAGE_CARTOGRAPHER: $ResourceKey<$LootTable>;
        static FARMER_GIFT: $ResourceKey<$LootTable>;
        static END_CITY_TREASURE: $ResourceKey<$LootTable>;
        static JUNGLE_TEMPLE: $ResourceKey<$LootTable>;
        static FISHING_FISH: $ResourceKey<$LootTable>;
        static ANCIENT_CITY: $ResourceKey<$LootTable>;
        static SNIFFER_DIGGING: $ResourceKey<$LootTable>;
        static SPAWNER_TRIAL_CHAMBER_CONSUMABLES: $ResourceKey<$LootTable>;
        static FLETCHER_GIFT: $ResourceKey<$LootTable>;
        static SHEEP_GREEN: $ResourceKey<$LootTable>;
        static SHEEP_ORANGE: $ResourceKey<$LootTable>;
        static BASTION_BRIDGE: $ResourceKey<$LootTable>;
        static OCEAN_RUIN_COLD_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static WOODLAND_MANSION: $ResourceKey<$LootTable>;
        static PIGLIN_BARTERING: $ResourceKey<$LootTable>;
        static SPAWN_BONUS_CHEST: $ResourceKey<$LootTable>;
        static SHEEP_BROWN: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_SUPPLY: $ResourceKey<$LootTable>;
        static VILLAGE_DESERT_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS: $ResourceKey<$LootTable>;
        static EMPTY: $ResourceKey<$LootTable>;
        static SHIPWRECK_MAP: $ResourceKey<$LootTable>;
        static SHEPHERD_GIFT: $ResourceKey<$LootTable>;
        static STRONGHOLD_CORRIDOR: $ResourceKey<$LootTable>;
        static LIBRARIAN_GIFT: $ResourceKey<$LootTable>;
        static BASTION_HOGLIN_STABLE: $ResourceKey<$LootTable>;
        static VILLAGE_FLETCHER: $ResourceKey<$LootTable>;
        static VILLAGE_TEMPLE: $ResourceKey<$LootTable>;
        static SHEEP_LIME: $ResourceKey<$LootTable>;
        static IGLOO_CHEST: $ResourceKey<$LootTable>;
        static SHEEP_WHITE: $ResourceKey<$LootTable>;
        static TOOLSMITH_GIFT: $ResourceKey<$LootTable>;
        static WEAPONSMITH_GIFT: $ResourceKey<$LootTable>;
        static VILLAGE_SNOWY_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_COMMON: $ResourceKey<$LootTable>;
        static SPAWNER_OMINOUS_TRIAL_CHAMBER_KEY: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CORRIDOR_POT: $ResourceKey<$LootTable>;
        static VILLAGE_TAIGA_HOUSE: $ResourceKey<$LootTable>;
        static VILLAGE_FISHER: $ResourceKey<$LootTable>;
        static VILLAGE_PLAINS_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_INTERSECTION: $ResourceKey<$LootTable>;
        static LEATHERWORKER_GIFT: $ResourceKey<$LootTable>;
        constructor();
    }
}
