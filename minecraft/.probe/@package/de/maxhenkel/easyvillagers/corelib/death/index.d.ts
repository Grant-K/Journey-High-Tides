import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $UUID, $Collection_ } from "@package/java/util";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/de/maxhenkel/easyvillagers/corelib/death" {
    export class $Death {
        getBlockPos(): $BlockPos;
        toNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        toNBT(arg0: $HolderLookup$Provider, arg1: boolean): $CompoundTag;
        getPosX(): number;
        getPosY(): number;
        getExperience(): number;
        getEquipment(): $NonNullList<$ItemStack>;
        static fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $Death;
        getMainInventory(): $NonNullList<$ItemStack>;
        getArmorInventory(): $NonNullList<$ItemStack>;
        getOffHandInventory(): $NonNullList<$ItemStack>;
        getAdditionalItems(): $NonNullList<$ItemStack>;
        processDrops(arg0: $Collection_<$ItemEntity>): void;
        getPlayerName(): string;
        static fromPlayer(arg0: $Player): $Death;
        getDimension(): string;
        getPosZ(): number;
        getPlayerUUID(): $UUID;
        getAllItems(): $NonNullList<$ItemStack>;
        getTimestamp(): number;
        getModel(): number;
        getId(): $UUID;
        get blockPos(): $BlockPos;
        get posX(): number;
        get posY(): number;
        get experience(): number;
        get equipment(): $NonNullList<$ItemStack>;
        get mainInventory(): $NonNullList<$ItemStack>;
        get armorInventory(): $NonNullList<$ItemStack>;
        get offHandInventory(): $NonNullList<$ItemStack>;
        get additionalItems(): $NonNullList<$ItemStack>;
        get playerName(): string;
        get dimension(): string;
        get posZ(): number;
        get playerUUID(): $UUID;
        get allItems(): $NonNullList<$ItemStack>;
        get timestamp(): number;
        get model(): number;
        get id(): $UUID;
    }
    export class $PlayerDeathEvent extends $Event {
        getPlayer(): $ServerPlayer;
        storeDeath(): void;
        removeDrops(): void;
        getSource(): $DamageSource;
        getDeath(): $Death;
        constructor(arg0: $Death, arg1: $ServerPlayer, arg2: $DamageSource_);
        get player(): $ServerPlayer;
        get source(): $DamageSource;
        get death(): $Death;
    }
}
