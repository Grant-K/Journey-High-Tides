import { $LevelReader } from "@package/net/minecraft/world/level";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos_, $Holder_, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $Enchantment, $ItemEnchantments, $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $LivingEntity, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";

declare module "@package/org/violetmoon/zeta/item/ext" {
    export class $ItemExtensionFactory {
    }
    export interface $ItemExtensionFactory {
        getInternal(arg0: $ItemStack_): $IZetaItemExtensions;
        get(arg0: $ItemStack_): $IZetaItemExtensions;
    }
    /**
     * Values that may be interpreted as {@link $ItemExtensionFactory}.
     */
    export type $ItemExtensionFactory_ = ((arg0: $ItemStack) => $IZetaItemExtensions);
    export class $IZetaItemExtensions {
    }
    export interface $IZetaItemExtensions {
        shouldCauseReequipAnimationZeta(arg0: $ItemStack_, arg1: $ItemStack_, arg2: boolean): boolean;
        onItemUseFirstZeta(arg0: $ItemStack_, arg1: $UseOnContext): $InteractionResult;
        isRepairableZeta(arg0: $ItemStack_): boolean;
        onEntityItemUpdateZeta(arg0: $ItemStack_, arg1: $ItemEntity): boolean;
        doesSneakBypassUseZeta(arg0: $ItemStack_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): boolean;
        canEquipZeta(arg0: $ItemStack_, arg1: $EquipmentSlot_, arg2: $LivingEntity): boolean;
        isBookEnchantableZeta(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getEnchantmentValueZeta(arg0: $ItemStack_): number;
        canShearZeta(arg0: $ItemStack_): boolean;
        getEnchantmentLevelZeta(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): number;
        /**
         * @deprecated
         */
        getAllEnchantmentsZeta(arg0: $ItemStack_, arg1: $HolderLookup$RegistryLookup<$Enchantment_>): $ItemEnchantments;
        getBurnTimeZeta(arg0: $ItemStack_, arg1: $RecipeType_<never>): number;
        damageItemZeta<T extends $LivingEntity>(arg0: $ItemStack_, arg1: number, arg2: T, arg3: $Consumer_<$Item>): number;
        isEnderMaskZeta(arg0: $ItemStack_, arg1: $Player, arg2: $EnderMan): boolean;
        canElytraFlyZeta(arg0: $ItemStack_, arg1: $LivingEntity): boolean;
    }
}
