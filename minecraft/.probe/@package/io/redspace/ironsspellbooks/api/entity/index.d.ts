import { $ItemStack } from "@package/net/minecraft/world/item";
import { $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $SyncedSpellData } from "@package/io/redspace/ironsspellbooks/capabilities/magic";
import { $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";

declare module "@package/io/redspace/ironsspellbooks/api/entity" {
    export class $IMagicEntity {
    }
    export interface $IMagicEntity {
        /**
         * @deprecated
         */
        getItemBySlot(arg0: $EquipmentSlot_): $ItemStack;
        getMagicData(): $MagicData;
        isDrinkingPotion(): boolean;
        startDrinkingPotion(): void;
        isCasting(): boolean;
        cancelCast(): void;
        castComplete(): void;
        setSyncedSpellData(arg0: $SyncedSpellData): void;
        initiateCastSpell(arg0: $AbstractSpell_, arg1: number): void;
        setTeleportLocationBehindTarget(arg0: number): boolean;
        setBurningDashDirectionData(): void;
        notifyDangerousProjectile(arg0: $Projectile): void;
        getHasUsedSingleAttack(): boolean;
        setHasUsedSingleAttack(arg0: boolean): void;
        get magicData(): $MagicData;
        get drinkingPotion(): boolean;
        get casting(): boolean;
        set syncedSpellData(value: $SyncedSpellData);
        set teleportLocationBehindTarget(value: number);
    }
}
