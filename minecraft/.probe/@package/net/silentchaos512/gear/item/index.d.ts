import { $Supplier_ } from "@package/java/util/function";
import { $ItemStack, $Item$Properties, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PartType } from "@package/net/silentchaos512/gear/api/part";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $List, $List_, $Map } from "@package/java/util";
import { $MaterialInstance } from "@package/net/silentchaos512/gear/gear/material";
import { $GearType } from "@package/net/silentchaos512/gear/api/item";

declare module "@package/net/silentchaos512/gear/item" {
    export class $CompoundPartItem extends $Item {
        getColor(arg0: $ItemStack_, arg1: number): number;
        static getMaterials(arg0: $ItemStack_): $List<$MaterialInstance>;
        static getModelKey(arg0: $ItemStack_): string;
        getGearType(): $GearType;
        static getPrimaryMaterial(arg0: $ItemStack_): $MaterialInstance;
        getPartType(): $PartType;
        getColorWeight(arg0: number, arg1: number): number;
        create(arg0: $MaterialInstance): $ItemStack;
        create(arg0: $MaterialInstance, arg1: number): $ItemStack;
        create(arg0: $List_<$MaterialInstance>): $ItemStack;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        craftingRemainingItem: $Item;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Supplier_<$PartType>, arg1: $Item$Properties);
        get gearType(): $GearType;
        get partType(): $PartType;
    }
}
