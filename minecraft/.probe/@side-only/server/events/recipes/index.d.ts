import { $TagKey_ } from "@package/net/minecraft/tags";
import { $CookingBookCategory_, $CraftingBookCategory_, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $GrowthAmount } from "@package/net/darkhax/botanypots/common/api/data/growthamount";
import { $RecipeResultComponent_, $WeightedRecipeResultComponent_, $ConditionComponent_, $EntityToSacrificeComponent_ } from "@package/com/klikli_dev/occultism_kubejs/component";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Display_ } from "@package/net/darkhax/botanypots/common/api/data/display/types";
import { $Map_, $List_ } from "@package/java/util";
import { $SpiritRepairRegexData } from "@package/com/sammy/malum/common/recipe/spirit_repair";
import { $ProcessingOutput, $HeatCondition } from "@package/com/simibubi/create/content/processing/recipe";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $KubeRecipe } from "@package/dev/latvian/mods/kubejs/recipe";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $Holder$Reference } from "@package/net/minecraft/core";
import { $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $UnknownKubeRecipe } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $SpiritIngredient_ } from "@package/com/sammy/malum/core/systems/recipe";
import { $ItemDropProvider } from "@package/net/darkhax/botanypots/common/api/data/itemdrops";
import { $SizedIngredient_ } from "@package/net/neoforged/neoforge/common/crafting";

declare module "@side-only/server/events/recipes" {
    export class Create$Cutting extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Milling extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$MechanicalCrafting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        acceptMirrored(acceptMirrored: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Createdieselgenerators$CompressionMolding extends $KubeRecipe {
        results(results: $List_<$ItemStack_>): this;
        mold(mold: string): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
    }
    export class Botanypots$Crop extends $KubeRecipe {
        input(input: $Ingredient_): this;
        soil(soil: $Ingredient_): this;
        display(display: any): this;
        drops(drops: $List_<$ItemDropProvider>): this;
        growTime(growTime: number): this;
        yield(yield: number): this;
    }
    export class DocumentedRecipes {
        kubejs: {
            shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Kubejs$Shaped;
            shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Kubejs$Shapeless;
        }
        ae2: {
            matter_cannon(): Ae2$MatterCannon;
            charger(): Ae2$Charger;
            inscriber(): Ae2$Inscriber;
            entropy(): Ae2$Entropy;
            transform(): Ae2$Transform;
        }
        create: {
            cutting(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Cutting;
            sequenced_assembly(results: $List_<$ProcessingOutput>, ingredient: $Ingredient_, sequence: $List_<$KubeRecipe>, transitionalItem?: $ProcessingOutput, loops?: number): Create$SequencedAssembly;
            basin(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Basin;
            pressing(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Pressing;
            compacting(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Compacting;
            item_application(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$ItemApplication;
            crushing(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Crushing;
            milling(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Milling;
            filling(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Filling;
            sandpaper_polishing(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$SandpaperPolishing;
            conversion(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Conversion;
            emptying(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Emptying;
            deploying(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Deploying;
            mechanical_crafting(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>, acceptMirrored?: boolean): Create$MechanicalCrafting;
            haunting(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Haunting;
            splashing(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Splashing;
            mixing(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Mixing;
        }
        botanypots: {
            soil(input: $Ingredient_, display: $Display_, growthModifier?: number, yieldModifier?: number): Botanypots$Soil;
            crop(input: $Ingredient_, soil: $Ingredient_, display: any, drops: $List_<$ItemDropProvider>, growTime: number, yield?: number): Botanypots$Crop;
            fertilizer(heldItem: $Ingredient_, growth: $GrowthAmount): Botanypots$Fertilizer;
        }
        createdieselgenerators: {
            compression_molding(results: $List_<$ItemStack_>, mold: string, ingredients: $List_<$Ingredient_>): Createdieselgenerators$CompressionMolding;
            basin_fermenting(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Createdieselgenerators$BasinFermenting;
            wire_cutting(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Createdieselgenerators$WireCutting;
            distillation(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Createdieselgenerators$Distillation;
            casting(results: $List_<$ItemStack_>, mold: string, ingredients: $List_<$SizedFluidIngredient>): Createdieselgenerators$Casting;
            bulk_fermenting(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Createdieselgenerators$BulkFermenting;
            hammering(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Createdieselgenerators$Hammering;
        }
        minecraft: {
            crafting_shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Minecraft$CraftingShaped;
            blasting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Blasting;
            campfire_cooking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$CampfireCooking;
            smelting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smelting;
            smithing_transform(result: $ItemStack_, template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTransform;
            stonecutting(result: $ItemStack_, ingredient: $Ingredient_): Minecraft$Stonecutting;
            smoking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smoking;
            crafting_shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Minecraft$CraftingShapeless;
            smithing_trim(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTrim;
        }
        malum: {
            void_favor(input: $Ingredient_, result: $ItemStack_): Malum$VoidFavor;
            runeworking(input: $SizedIngredient_, secondaryInput: $SizedIngredient_, result: $ItemStack_, soundType?: $Holder$Reference<any>): Malum$Runeworking;
            soul_binding(input: $SizedIngredient_, result: any, spirits: $List_<$SpiritIngredient_>, extraInputs: $List_<$SizedIngredient_>): Malum$SoulBinding;
            spirit_repair(validItems: $List_<any>, spirits: $List_<$SpiritIngredient_>, repairMaterial: $SizedIngredient_, durabilityPercentage?: number, regex?: $SpiritRepairRegexData): Malum$SpiritRepair;
            spirit_infusion(input: $SizedIngredient_, result: $ItemStack_, spirits: $List_<$SpiritIngredient_>, extraInputs: $List_<$SizedIngredient_>, carryOverComponentData?: boolean): Malum$SpiritInfusion;
            unchained_transmutation(input: $Ingredient_, result: $ItemStack_, group: string): Malum$UnchainedTransmutation;
            spirit_focusing(input: $Ingredient_, result: $ItemStack_, spirits: $List_<$SpiritIngredient_>, time?: number, durabilityCost?: number): Malum$SpiritFocusing;
        }
        irons_spellbooks: {
            alchemist_cauldron_brew(results: $List_<$FluidStack_>, input: $Ingredient_, baseFluid: $FluidStack_, byproduct?: $ItemStack_): IronsSpellbooks$AlchemistCauldronBrew;
            alchemist_cauldron_empty(result: $ItemStack_, input: $Ingredient_, fluid: $FluidStack_, sound?: $SoundEvent_): IronsSpellbooks$AlchemistCauldronEmpty;
            alchemist_cauldron_fill(fluid: $FluidStack_, input: $Ingredient_, result: $ItemStack_, mustFitAll?: boolean, sound?: $SoundEvent_): IronsSpellbooks$AlchemistCauldronFill;
        }
        naturesaura: {
            animal_spawner(entity: string, ingredients: $List_<$Ingredient_>, aura?: number, time?: number): Naturesaura$AnimalSpawner;
            tree_ritual(output: $ItemStack_, ingredients: $List_<$Ingredient_>, sapling?: $Ingredient_, time?: number): Naturesaura$TreeRitual;
            altar(output: $ItemStack_, input: $Ingredient_, aura?: number, time?: number, catalyst?: $Ingredient_): Naturesaura$Altar;
            offering(output: $ItemStack_, input: $Ingredient_, startItem: $Ingredient_): Naturesaura$Offering;
        }
        occultism: {
            miner(result: $WeightedRecipeResultComponent_, ingredient: $Ingredient_): Occultism$Miner;
            spirit_trade(result: $WeightedRecipeResultComponent_, ingredient: $Ingredient_, traderId: string): Occultism$SpiritTrade;
            crushing(result: $RecipeResultComponent_, ingredient: $Ingredient_, crushingTime?: $TickDuration_, minTier?: number, maxTier?: number, ignoreCrushingMultiplier?: boolean): Occultism$Crushing;
            ritual(result: $ItemStack_, ingredients: $List_<$Ingredient_>, activationItem: $Ingredient_, pentacleId: string, duration?: $TickDuration_, spiritMaxAge?: number, spiritJobType?: string, ritualDummy?: $ItemStack_, ritualType?: string, entityToSummon?: string, entityTagToSummon?: $TagKey_<any>, entityNbt?: string, entityToSacrifice?: $EntityToSacrificeComponent_, itemToUse?: $Ingredient_, command?: string, condition?: $ConditionComponent_): Occultism$Ritual;
            spirit_fire(result: $ItemStack_, ingredient: $Ingredient_): Occultism$SpiritFire;
        }
    }
    export class Create$Conversion extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Naturesaura$TreeRitual extends $KubeRecipe {
        output(output: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        sapling(sapling: $Ingredient_): this;
        time(time: number): this;
    }
    export class Create$Crushing extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Botanypots$Fertilizer extends $KubeRecipe {
        heldItem(heldItem: $Ingredient_): this;
        growth(growth: $GrowthAmount): this;
    }
    export class Minecraft$Stonecutting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class Create$Haunting extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$CampfireCooking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Createdieselgenerators$Casting extends $KubeRecipe {
        results(results: $List_<$ItemStack_>): this;
        mold(mold: string): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient>): this;
    }
    export class Minecraft$Smelting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Occultism$Crushing extends $KubeRecipe {
        result(result: $RecipeResultComponent_): this;
        ingredient(ingredient: $Ingredient_): this;
        crushingTime(crushingTime: $TickDuration_): this;
        minTier(minTier: number): this;
        maxTier(maxTier: number): this;
        ignoreCrushingMultiplier(ignoreCrushingMultiplier: boolean): this;
    }
    export class IronsSpellbooks$AlchemistCauldronFill extends $KubeRecipe {
        fluid(fluid: $FluidStack_): this;
        input(input: $Ingredient_): this;
        result(result: $ItemStack_): this;
        mustFitAll(mustFitAll: boolean): this;
        sound(sound: $SoundEvent_): this;
    }
    export class Ae2$Charger extends $UnknownKubeRecipe {
    }
    export class Kubejs$Shaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Occultism$Ritual extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        activationItem(activationItem: $Ingredient_): this;
        pentacleId(pentacleId: string): this;
        duration(duration: $TickDuration_): this;
        spiritMaxAge(spiritMaxAge: number): this;
        spiritJobType(spiritJobType: string): this;
        ritualDummy(ritualDummy: $ItemStack_): this;
        ritualType(ritualType: string): this;
        entityToSummon(entityToSummon: string): this;
        entityTagToSummon(entityTagToSummon: $TagKey_<any>): this;
        entityNbt(entityNbt: string): this;
        entityToSacrifice(entityToSacrifice: $EntityToSacrificeComponent_): this;
        itemToUse(itemToUse: $Ingredient_): this;
        command(command: string): this;
        condition(condition: $ConditionComponent_): this;
    }
    export class Create$Mixing extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Ae2$Transform extends $UnknownKubeRecipe {
    }
    export class Createdieselgenerators$WireCutting extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$SandpaperPolishing extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Malum$SpiritInfusion extends $KubeRecipe {
        input(input: $SizedIngredient_): this;
        result(result: $ItemStack_): this;
        spirits(spirits: $List_<$SpiritIngredient_>): this;
        extraInputs(extraInputs: $List_<$SizedIngredient_>): this;
        carryOverComponentData(carryOverComponentData: boolean): this;
    }
    export class Malum$SoulBinding extends $KubeRecipe {
        input(input: $SizedIngredient_): this;
        result(result: any): this;
        spirits(spirits: $List_<$SpiritIngredient_>): this;
        extraInputs(extraInputs: $List_<$SizedIngredient_>): this;
    }
    export class Create$Filling extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$ItemApplication extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        keepHeldItem(keepHeldItem: boolean): this;
        superheated(): this;
        heated(): this;
        keepHeldItem(): this;
    }
    export class Minecraft$CraftingShapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Ae2$MatterCannon extends $UnknownKubeRecipe {
    }
    export class Botanypots$Soil extends $KubeRecipe {
        input(input: $Ingredient_): this;
        display(display: $Display_): this;
        growthModifier(growthModifier: number): this;
        yieldModifier(yieldModifier: number): this;
    }
    export class IronsSpellbooks$AlchemistCauldronBrew extends $KubeRecipe {
        results(results: $List_<$FluidStack_>): this;
        input(input: $Ingredient_): this;
        baseFluid(baseFluid: $FluidStack_): this;
        byproduct(byproduct: $ItemStack_): this;
    }
    export class Naturesaura$Offering extends $KubeRecipe {
        output(output: $ItemStack_): this;
        input(input: $Ingredient_): this;
        startItem(startItem: $Ingredient_): this;
    }
    export class Create$Pressing extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Naturesaura$AnimalSpawner extends $KubeRecipe {
        entity(entity: string): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        aura(aura: number): this;
        time(time: number): this;
    }
    export class Malum$UnchainedTransmutation extends $KubeRecipe {
        input(input: $Ingredient_): this;
        result(result: $ItemStack_): this;
        group(group: string): this;
    }
    export class Naturesaura$Altar extends $KubeRecipe {
        output(output: $ItemStack_): this;
        input(input: $Ingredient_): this;
        aura(aura: number): this;
        time(time: number): this;
        catalyst(catalyst: $Ingredient_): this;
    }
    export class Createdieselgenerators$BulkFermenting extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Compacting extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Emptying extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$Smoking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Occultism$SpiritTrade extends $KubeRecipe {
        result(result: $WeightedRecipeResultComponent_): this;
        ingredient(ingredient: $Ingredient_): this;
        traderId(traderId: string): this;
    }
    export class Minecraft$Blasting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Malum$SpiritFocusing extends $KubeRecipe {
        input(input: $Ingredient_): this;
        result(result: $ItemStack_): this;
        spirits(spirits: $List_<$SpiritIngredient_>): this;
        time(time: number): this;
        durabilityCost(durabilityCost: number): this;
    }
    export class Createdieselgenerators$Distillation extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$SequencedAssembly extends $KubeRecipe {
        results(results: $List_<$ProcessingOutput>): this;
        ingredient(ingredient: $Ingredient_): this;
        sequence(sequence: $List_<$KubeRecipe>): this;
        transitionalItem(transitionalItem: $ProcessingOutput): this;
        loops(loops: number): this;
    }
    export class Malum$VoidFavor extends $KubeRecipe {
        input(input: $Ingredient_): this;
        result(result: $ItemStack_): this;
    }
    export class Minecraft$SmithingTransform extends $KubeRecipe {
        result(result: $ItemStack_): this;
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class Malum$Runeworking extends $KubeRecipe {
        input(input: $SizedIngredient_): this;
        secondaryInput(secondaryInput: $SizedIngredient_): this;
        result(result: $ItemStack_): this;
        soundType(soundType: $Holder$Reference<any>): this;
    }
    export class Kubejs$Shapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Occultism$Miner extends $KubeRecipe {
        result(result: $WeightedRecipeResultComponent_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class Createdieselgenerators$Hammering extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$SmithingTrim extends $KubeRecipe {
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class Ae2$Entropy extends $UnknownKubeRecipe {
    }
    export class Createdieselgenerators$BasinFermenting extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Ae2$Inscriber extends $UnknownKubeRecipe {
    }
    export class IronsSpellbooks$AlchemistCauldronEmpty extends $KubeRecipe {
        result(result: $ItemStack_): this;
        input(input: $Ingredient_): this;
        fluid(fluid: $FluidStack_): this;
        sound(sound: $SoundEvent_): this;
    }
    export class Occultism$SpiritFire extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class Malum$SpiritRepair extends $KubeRecipe {
        validItems(validItems: $List_<any>): this;
        spirits(spirits: $List_<$SpiritIngredient_>): this;
        repairMaterial(repairMaterial: $SizedIngredient_): this;
        durabilityPercentage(durabilityPercentage: number): this;
        regex(regex: $SpiritRepairRegexData): this;
    }
    export class Minecraft$CraftingShaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Create$Deploying extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        keepHeldItem(keepHeldItem: boolean): this;
        superheated(): this;
        heated(): this;
        keepHeldItem(): this;
    }
    export class Create$Splashing extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Basin extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition): this;
        superheated(): this;
        heated(): this;
    }
}
