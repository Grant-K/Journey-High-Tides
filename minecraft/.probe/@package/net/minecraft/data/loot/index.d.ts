import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $BlockLootAccessor } from "@package/com/aetherteam/aether/mixin/mixins/common/accessor";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $BlockLootTableGeneratorAccessor } from "@package/net/fabricmc/fabric/mixin/datagen/loot";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer$Builder } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $FunctionUserBuilder } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $BlockLootSubProviderAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $List, $Map, $Set_, $List_ } from "@package/java/util";
import { $FabricBlockLootTableGenerator } from "@package/net/fabricmc/fabric/api/datagen/v1/loot";
import { $CachedOutput_, $DataProvider, $PackOutput } from "@package/net/minecraft/data";
import { $BiConsumer, $BiConsumer_, $Function_, $Function } from "@package/java/util/function";
import { $ResourceCondition } from "@package/net/fabricmc/fabric/api/resource/conditions/v1";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder, $LootItemCondition$Builder_, $ConditionUserBuilder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Record, $Comparable } from "@package/java/lang";
import { $LootTable, $LootTable$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
export * as packs from "@package/net/minecraft/data/loot/packs";

declare module "@package/net/minecraft/data/loot" {
    export class $LootTableProvider implements $DataProvider {
        getTables(): $List<$LootTableProvider$SubProviderEntry>;
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        subProviders: $List<$LootTableProvider$SubProviderEntry>;
        constructor(arg0: $PackOutput, arg1: $Set_<$ResourceKey_<$LootTable>>, arg2: $List_<$LootTableProvider$SubProviderEntry_>, arg3: $CompletableFuture<$HolderLookup$Provider>);
        get tables(): $List<$LootTableProvider$SubProviderEntry>;
        get name(): string;
    }
    export class $BlockLootSubProvider implements $LootTableSubProvider, $BlockLootAccessor, $BlockLootSubProviderAccessor, $BlockLootTableGeneratorAccessor, $FabricBlockLootTableGenerator {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        generate(): void;
        dropOther(arg0: $Block_, arg1: $ItemLike_): void;
        createSingleItemTable(arg0: $ItemLike_, arg1: $NumberProvider_): $LootTable$Builder;
        createSingleItemTable(arg0: $ItemLike_): $LootTable$Builder;
        applyExplosionCondition<T extends $ConditionUserBuilder<T>>(arg0: $ItemLike_, arg1: $ConditionUserBuilder<T>): T;
        applyExplosionDecay<T extends $FunctionUserBuilder<T>>(arg0: $ItemLike_, arg1: $FunctionUserBuilder<T>): T;
        createShearsDispatchTable(arg0: $Block_, arg1: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        createSilkTouchOrShearsDispatchTable(arg0: $Block_, arg1: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        createSingleItemTableWithSilkTouch(arg0: $Block_, arg1: $ItemLike_): $LootTable$Builder;
        createSingleItemTableWithSilkTouch(arg0: $Block_, arg1: $ItemLike_, arg2: $NumberProvider_): $LootTable$Builder;
        createSilkTouchOnlyTable(arg0: $ItemLike_): $LootTable$Builder;
        createPotFlowerItemTable(arg0: $ItemLike_): $LootTable$Builder;
        createSlabItemTable(arg0: $Block_): $LootTable$Builder;
        createNameableBlockEntityTable(arg0: $Block_): $LootTable$Builder;
        createShulkerBoxDrop(arg0: $Block_): $LootTable$Builder;
        createCopperOreDrops(arg0: $Block_): $LootTable$Builder;
        createLapisOreDrops(arg0: $Block_): $LootTable$Builder;
        createRedstoneOreDrops(arg0: $Block_): $LootTable$Builder;
        createBannerDrop(arg0: $Block_): $LootTable$Builder;
        createBeeNestDrop(arg0: $Block_): $LootTable$Builder;
        createBeeHiveDrop(arg0: $Block_): $LootTable$Builder;
        createCaveVinesDrop(arg0: $Block_): $LootTable$Builder;
        createOreDrop(arg0: $Block_, arg1: $Item_): $LootTable$Builder;
        createMushroomBlockDrop(arg0: $Block_, arg1: $ItemLike_): $LootTable$Builder;
        createGrassDrops(arg0: $Block_): $LootTable$Builder;
        static createShearsOnlyDrop(arg0: $ItemLike_): $LootTable$Builder;
        createMultifaceBlockDrops(arg0: $Block_, arg1: $LootItemCondition$Builder_): $LootTable$Builder;
        createLeavesDrops(arg0: $Block_, arg1: $Block_, ...arg2: number[]): $LootTable$Builder;
        createOakLeavesDrops(arg0: $Block_, arg1: $Block_, ...arg2: number[]): $LootTable$Builder;
        createMangroveLeavesDrops(arg0: $Block_): $LootTable$Builder;
        createCropDrops(arg0: $Block_, arg1: $Item_, arg2: $Item_, arg3: $LootItemCondition$Builder_): $LootTable$Builder;
        createDoublePlantShearsDrop(arg0: $Block_): $LootTable$Builder;
        createDoublePlantWithSeedDrops(arg0: $Block_, arg1: $Block_): $LootTable$Builder;
        createCandleDrops(arg0: $Block_): $LootTable$Builder;
        createPetalsDrops(arg0: $Block_): $LootTable$Builder;
        static createCandleCakeDrops(arg0: $Block_): $LootTable$Builder;
        addNetherVinesDropTable(arg0: $Block_, arg1: $Block_): void;
        createDoorTable(arg0: $Block_): $LootTable$Builder;
        dropPottedContents(arg0: $Block_): void;
        otherWhenSilkTouch(arg0: $Block_, arg1: $Block_): void;
        dropWhenSilkTouch(arg0: $Block_): void;
        static noDrop(): $LootTable$Builder;
        dropSelf(arg0: $Block_): void;
        createSilkTouchDispatchTable(arg0: $Block_, arg1: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        doesNotHaveSilkTouch(): $LootItemCondition$Builder;
        createAttachedStemDrops(arg0: $Block_, arg1: $Item_): $LootTable$Builder;
        createStemDrops(arg0: $Block_, arg1: $Item_): $LootTable$Builder;
        createSinglePropConditionTable<T extends $Comparable<T>>(arg0: $Block_, arg1: $Property<T>, arg2: T): $LootTable$Builder;
        hasSilkTouch(): $LootItemCondition$Builder;
        hasShearsOrSilkTouch(): $LootItemCondition$Builder;
        doesNotHaveShearsOrSilkTouch(): $LootItemCondition$Builder;
        static createSelfDropDispatchTable(arg0: $Block_, arg1: $LootItemCondition$Builder_, arg2: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        static getNormalLeavesSaplingChances$aether_$md$68cb88$0(): number[];
        add(arg0: $Block_, arg1: $LootTable$Builder): void;
        add(arg0: $Block_, arg1: $Function_<$Block, $LootTable$Builder>): void;
        withConditions(...arg0: $ResourceCondition[]): $BlockLootSubProvider;
        getRegistries(): $HolderLookup$Provider;
        create$hasSilkTouch(): $LootItemCondition$Builder;
        static HAS_SHEARS: $LootItemCondition$Builder;
        static NORMAL_LEAVES_STICK_CHANCES: number[];
        registries: $HolderLookup$Provider;
        map: $Map<$ResourceKey<$LootTable>, $LootTable$Builder>;
        static NORMAL_LEAVES_SAPLING_CHANCES: number[];
        static get normalLeavesSaplingChances$aether_$md$68cb88$0(): number[];
    }
    export class $LootTableProvider$SubProviderEntry extends $Record {
        paramSet(): $LootContextParamSet;
        provider(): $Function<$HolderLookup$Provider, $LootTableSubProvider>;
        constructor(provider: $Function_<$HolderLookup$Provider, $LootTableSubProvider>, paramSet: $LootContextParamSet);
    }
    /**
     * Values that may be interpreted as {@link $LootTableProvider$SubProviderEntry}.
     */
    export type $LootTableProvider$SubProviderEntry_ = { provider?: $Function_<$HolderLookup$Provider, $LootTableSubProvider>, paramSet?: $LootContextParamSet,  } | [provider?: $Function_<$HolderLookup$Provider, $LootTableSubProvider>, paramSet?: $LootContextParamSet, ];
    export class $LootTableSubProvider {
    }
    export interface $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
    }
    /**
     * Values that may be interpreted as {@link $LootTableSubProvider}.
     */
    export type $LootTableSubProvider_ = ((arg0: $BiConsumer<$ResourceKey<$LootTable>, $LootTable$Builder>) => void);
    export class $EntityLootSubProvider implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        generate(): void;
        registries: $HolderLookup$Provider;
        map: $Map<$EntityType<never>, $Map<$ResourceKey<$LootTable>, $LootTable$Builder>>;
    }
}
