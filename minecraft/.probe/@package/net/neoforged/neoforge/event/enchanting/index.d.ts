import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Holder_, $Holder, $Holder$Reference, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemEnchantments$Mutable, $Enchantment, $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceKey_ } from "@package/net/minecraft/resources";

declare module "@package/net/neoforged/neoforge/event/enchanting" {
    export class $EnchantmentLevelSetEvent extends $Event {
        getPos(): $BlockPos;
        getPower(): number;
        getLevel(): $Level;
        getItem(): $ItemStack;
        getEnchantLevel(): number;
        getEnchantRow(): number;
        getOriginalLevel(): number;
        setEnchantLevel(arg0: number): void;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: number, arg4: $ItemStack_, arg5: number);
        get pos(): $BlockPos;
        get power(): number;
        get level(): $Level;
        get item(): $ItemStack;
        get enchantRow(): number;
        get originalLevel(): number;
    }
    export class $GetEnchantmentLevelEvent extends $Event {
        getEnchantments(): $ItemEnchantments$Mutable;
        getLookup(): $HolderLookup$RegistryLookup<$Enchantment>;
        isTargetting(arg0: $ResourceKey_<$Enchantment>): boolean;
        isTargetting(arg0: $Holder_<$Enchantment>): boolean;
        getTargetEnchant(): $Holder<$Enchantment>;
        getStack(): $ItemStack;
        getHolder(arg0: $ResourceKey_<$Enchantment>): ($Holder$Reference<$Enchantment>) | undefined;
        constructor(arg0: $ItemStack_, arg1: $ItemEnchantments$Mutable, arg2: $Holder_<$Enchantment>, arg3: $HolderLookup$RegistryLookup<$Enchantment_>);
        get enchantments(): $ItemEnchantments$Mutable;
        get lookup(): $HolderLookup$RegistryLookup<$Enchantment>;
        get targetEnchant(): $Holder<$Enchantment>;
        get stack(): $ItemStack;
    }
}
