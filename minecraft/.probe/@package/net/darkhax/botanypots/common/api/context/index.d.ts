import { $Crop } from "@package/net/darkhax/botanypots/common/api/data/recipes/crop";
import { $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Soil } from "@package/net/darkhax/botanypots/common/api/data/recipes/soil";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LootParams } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/darkhax/botanypots/common/api/context" {
    export class $BotanyPotContext {
    }
    export interface $BotanyPotContext extends $RecipeInput {
        getPlayer(): $Player;
        getRequiredGrowthTicks(): number;
        getSoil(): $Soil;
        getSeedItem(): $ItemStack;
        getHarvestItem(): $ItemStack;
        getSoilItem(): $ItemStack;
        createLootParams(arg0: $BlockState_): $LootParams;
        runFunction(arg0: $ResourceLocation_): void;
        getInteractionItem(): $ItemStack;
        isServerThread(): boolean;
        getCrop(): $Crop;
        get player(): $Player;
        get requiredGrowthTicks(): number;
        get soil(): $Soil;
        get seedItem(): $ItemStack;
        get harvestItem(): $ItemStack;
        get soilItem(): $ItemStack;
        get interactionItem(): $ItemStack;
        get serverThread(): boolean;
        get crop(): $Crop;
    }
}
