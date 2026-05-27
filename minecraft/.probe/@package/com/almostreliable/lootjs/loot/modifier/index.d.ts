import { $JsonObject_ } from "@package/com/google/gson";
import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EquipmentSlot_, $Entity } from "@package/net/minecraft/world/entity";
import { $List, $Map_, $Collection_, $List_ } from "@package/java/util";
import { $ModifyLootAction$Callback_ } from "@package/com/almostreliable/lootjs/loot/modifier/handler";
import { $LootFunctionsContainer, $LootConditionsContainer, $LootActionContainer, $AddAttributesFunction$Builder } from "@package/com/almostreliable/lootjs/loot";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Holder_, $HolderSet_, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $LootBucket } from "@package/com/almostreliable/lootjs/core";
import { $ItemFilter, $ItemFilter_ } from "@package/com/almostreliable/lootjs/core/filters";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $Explosion$BlockInteraction_ } from "@package/net/minecraft/world/level";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $SetEnchantmentsFunction$Builder, $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $DistancePredicate_, $StatePropertiesPredicate_, $DamageSourcePredicate_, $ItemPredicate_, $EntityPredicate_, $MinMaxBounds$Doubles_, $LocationPredicate_ } from "@package/net/minecraft/advancements/critereon";
import { $Potion_ } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $LootEntry } from "@package/com/almostreliable/lootjs/core/entry";
import { $MutableLootPool } from "@package/com/almostreliable/lootjs/loot/table";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as handler from "@package/com/almostreliable/lootjs/loot/modifier/handler";

declare module "@package/com/almostreliable/lootjs/loot/modifier" {
    export class $LootAction {
    }
    export interface $LootAction {
        apply(arg0: $LootContext, arg1: $LootBucket): void;
    }
    /**
     * Values that may be interpreted as {@link $LootAction}.
     */
    export type $LootAction_ = ((arg0: $LootContext, arg1: $LootBucket) => void);
    export class $GroupedLootAction$Builder implements $LootConditionsContainer<$GroupedLootAction$Builder>, $LootFunctionsContainer<$GroupedLootAction$Builder>, $LootActionContainer<$GroupedLootAction$Builder> {
        rolls(arg0: $NumberProvider_): $GroupedLootAction$Builder;
        containsLoot(arg0: $ItemFilter_, arg1: boolean): $GroupedLootAction$Builder;
        containsLoot(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        addFunction(arg0: $LootItemFunction): $GroupedLootAction$Builder;
        build(): $GroupedLootAction;
        blockEntity(arg0: $Predicate_<$BlockEntity>): $GroupedLootAction$Builder;
        matchTool(arg0: $ItemPredicate_): $GroupedLootAction$Builder;
        luck(arg0: $MinMaxBounds$Doubles_): $GroupedLootAction$Builder;
        randomChance(arg0: $NumberProvider_): $GroupedLootAction$Builder;
        killedByPlayer(): $GroupedLootAction$Builder;
        survivesExplosion(): $GroupedLootAction$Builder;
        matchTime(arg0: number, arg1: number, arg2: number): $GroupedLootAction$Builder;
        matchTime(arg0: number, arg1: number): $GroupedLootAction$Builder;
        matchPlayerCustom(arg0: $Predicate_<$ServerPlayer>): $GroupedLootAction$Builder;
        matchMainHand(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchOffHand(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchHead(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchChest(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchLegs(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchFeet(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchEquip(arg0: $EquipmentSlot_, arg1: $ItemFilter_): $GroupedLootAction$Builder;
        matchAnyInventorySlot(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchAnyHotbarSlot(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchWeather(arg0: boolean, arg1: boolean): $GroupedLootAction$Builder;
        randomChanceWithEnchantment(arg0: $Holder_<$Enchantment>, arg1: number[]): $GroupedLootAction$Builder;
        randomTableBonus(arg0: $Holder_<$Enchantment>, arg1: number[]): $GroupedLootAction$Builder;
        matchBiome(arg0: $HolderSet_<$Biome>): $GroupedLootAction$Builder;
        matchDimension(...arg0: $ResourceLocation_[]): $GroupedLootAction$Builder;
        matchStructure(arg0: $HolderSet_<$Structure>): $GroupedLootAction$Builder;
        matchStructure(arg0: $HolderSet_<$Structure>, arg1: boolean): $GroupedLootAction$Builder;
        isLightLevel(arg0: number, arg1: number): $GroupedLootAction$Builder;
        matchBlock(arg0: $Block_): $GroupedLootAction$Builder;
        matchBlock(arg0: $Block_, arg1: $StatePropertiesPredicate_): $GroupedLootAction$Builder;
        matchEntity(arg0: $EntityPredicate_): $GroupedLootAction$Builder;
        matchAttacker(arg0: $EntityPredicate_): $GroupedLootAction$Builder;
        matchDirectAttacker(arg0: $EntityPredicate_): $GroupedLootAction$Builder;
        matchPlayer(arg0: $EntityPredicate_): $GroupedLootAction$Builder;
        matchDamageSource(arg0: $DamageSourcePredicate_): $GroupedLootAction$Builder;
        matchDistance(arg0: $DistancePredicate_): $GroupedLootAction$Builder;
        matchEntityCustom(arg0: $Predicate_<$Entity>): $GroupedLootAction$Builder;
        matchAttackerCustom(arg0: $Predicate_<$Entity>): $GroupedLootAction$Builder;
        matchDirectAttackerCustom(arg0: $Predicate_<$Entity>): $GroupedLootAction$Builder;
        hasAnyStage(...arg0: string[]): $GroupedLootAction$Builder;
        matchAnyOf(...arg0: $LootItemCondition[]): $GroupedLootAction$Builder;
        matchAllOf(...arg0: $LootItemCondition[]): $GroupedLootAction$Builder;
        matchCustomCondition(arg0: $JsonObject_): $GroupedLootAction$Builder;
        matchLocation(arg0: $LocationPredicate_): $GroupedLootAction$Builder;
        matchLocation(arg0: $BlockPos_, arg1: $LocationPredicate_): $GroupedLootAction$Builder;
        damage(arg0: $NumberProvider_): $GroupedLootAction$Builder;
        enchant(arg0: $Consumer_<$SetEnchantmentsFunction$Builder>): $GroupedLootAction$Builder;
        enchant(arg0: boolean, arg1: $Consumer_<$SetEnchantmentsFunction$Builder>): $GroupedLootAction$Builder;
        enchantWithLevels(arg0: $NumberProvider_): $GroupedLootAction$Builder;
        setCustomData(arg0: $CompoundTag_): $GroupedLootAction$Builder;
        limitCount(arg0: $NumberProvider_, arg1: $NumberProvider_): $GroupedLootAction$Builder;
        addAttributes(arg0: $Consumer_<$AddAttributesFunction$Builder>): $GroupedLootAction$Builder;
        smelt(): $GroupedLootAction$Builder;
        addPotion(arg0: $Potion_): $GroupedLootAction$Builder;
        applyBonus(arg0: $Holder_<$Enchantment>, arg1: number): $GroupedLootAction$Builder;
        enchantRandomly(): $GroupedLootAction$Builder;
        enchantRandomly(arg0: $HolderSet_<$Enchantment>): $GroupedLootAction$Builder;
        applyEnchantmentBonus(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_): $GroupedLootAction$Builder;
        applyEnchantmentBonus(arg0: $NumberProvider_): $GroupedLootAction$Builder;
        applyBinomialDistributionBonus(arg0: $Holder_<$Enchantment>, arg1: number, arg2: number): $GroupedLootAction$Builder;
        applyOreBonus(arg0: $Holder_<$Enchantment>): $GroupedLootAction$Builder;
        simulateExplosionDecay(): $GroupedLootAction$Builder;
        addLore(...arg0: $Component_[]): $GroupedLootAction$Builder;
        replaceLore(...arg0: $Component_[]): $GroupedLootAction$Builder;
        toggleTooltips(arg0: $Map_<string, boolean>): $GroupedLootAction$Builder;
        jsonFunction(arg0: $JsonObject_): $GroupedLootAction$Builder;
        setCount(arg0: $NumberProvider_): $GroupedLootAction$Builder;
        setName(arg0: $Component_): $GroupedLootAction$Builder;
        dropExperience(arg0: $NumberProvider_): $GroupedLootAction$Builder;
        modifyLoot(arg0: $ItemFilter_, arg1: $ModifyLootAction$Callback_): $GroupedLootAction$Builder;
        replaceLoot(arg0: $ItemFilter_, arg1: $LootEntry, arg2: boolean, arg3: $DataComponentType_<never>[]): $GroupedLootAction$Builder;
        replaceLoot(arg0: $ItemFilter_, arg1: $LootEntry, arg2: boolean): $GroupedLootAction$Builder;
        replaceLoot(arg0: $ItemFilter_, arg1: $LootEntry): $GroupedLootAction$Builder;
        addAlternativesLoot(...arg0: $LootEntry[]): $GroupedLootAction$Builder;
        addSequenceLoot(...arg0: $LootEntry[]): $GroupedLootAction$Builder;
        removeLoot(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        triggerExplosion(arg0: number, arg1: $Explosion$BlockInteraction_, arg2: boolean): $GroupedLootAction$Builder;
        triggerExplosion(arg0: number, arg1: boolean, arg2: boolean): $GroupedLootAction$Builder;
        triggerLightningStrike(arg0: boolean): $GroupedLootAction$Builder;
        customAction(arg0: $LootAction_): $GroupedLootAction$Builder;
        playerAction(arg0: $Consumer_<$ServerPlayer>): $GroupedLootAction$Builder;
        addLoot(...arg0: $LootEntry[]): $GroupedLootAction$Builder;
        group(arg0: $Consumer_<$GroupedLootAction$Builder>): $GroupedLootAction$Builder;
        group(arg0: $ItemFilter_, arg1: $Consumer_<$GroupedLootAction$Builder>): $GroupedLootAction$Builder;
        pool(arg0: $Consumer_<$MutableLootPool>): $GroupedLootAction$Builder;
        addAction(arg0: $LootAction_): $GroupedLootAction$Builder;
        addCondition(arg0: $LootItemCondition): $GroupedLootAction$Builder;
        constructor(arg0: $ItemFilter_);
        constructor();
        set customData(value: $CompoundTag_);
        set count(value: $NumberProvider_);
        set name(value: $Component_);
    }
    export class $LootModifier$Builder extends $GroupedLootAction$Builder {
        name(arg0: string): $LootModifier$Builder;
        constructor(arg0: $Predicate_<$LootContext>, arg1: string);
    }
    export class $GroupedLootAction implements $LootAction {
        rolls(): $NumberProvider;
        containsLootFilter(): $ItemFilter;
        functions(): $List<$LootItemFunction>;
        exact(): boolean;
        actions(): $List<$LootAction>;
        conditions(): $List<$LootItemCondition>;
        apply(arg0: $LootContext, arg1: $LootBucket): void;
        constructor(arg0: $NumberProvider_, arg1: $List_<$LootItemCondition>, arg2: $List_<$LootItemFunction>, arg3: $Collection_<$LootAction_>, arg4: $ItemFilter_, arg5: boolean);
    }
}
