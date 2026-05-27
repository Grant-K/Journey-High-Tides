import { $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Holder } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IBlockExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $EnchantmentInstance, $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $EnchantmentTableStats_ } from "@package/dev/shadowsoffire/apothic_enchanting/table";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $List, $List_, $Set } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/dev/shadowsoffire/apothic_enchanting/api" {
    export class $EnchantableItem {
    }
    export interface $EnchantableItem {
        selectEnchantments(arg0: $List_<$EnchantmentInstance>, arg1: $RandomSource, arg2: $ItemStack_, arg3: number, arg4: $EnchantmentTableStats_): $List<$EnchantmentInstance>;
    }
    export class $EnchantmentStatBlock {
    }
    export interface $EnchantmentStatBlock extends $IBlockExtension {
        getTableParticle(arg0: $BlockState_): $ParticleOptions;
        getMaxEnchantingPower(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): number;
        getQuantaBonus(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): number;
        getArcanaBonus(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): number;
        getBonusClues(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): number;
        getBlacklistedEnchantments(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): $Set<$Holder<$Enchantment>>;
        spawnTableParticle(arg0: $BlockState_, arg1: $Level_, arg2: $RandomSource, arg3: $BlockPos_, arg4: $BlockPos_): void;
        allowsTreasure(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        providesStability(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
    }
}
