import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $RegistryAccess, $Holder$Reference, $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Enum, $Record } from "@package/java/lang";
import { $EntityHitResult, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $PotatoProjectileEntity } from "@package/com/simibubi/create/content/equipment/potatoCannon";

declare module "@package/com/simibubi/create/api/equipment/potatoCannon" {
    export class $PotatoProjectileRenderMode {
        static CODEC: $Codec<$PotatoProjectileRenderMode>;
    }
    export interface $PotatoProjectileRenderMode {
        codec(): $MapCodec<$PotatoProjectileRenderMode>;
        transform(arg0: $PoseStack, arg1: $PotatoProjectileEntity, arg2: number): void;
    }
    export class $PotatoProjectileBlockHitAction {
        static CODEC: $Codec<$PotatoProjectileBlockHitAction>;
    }
    export interface $PotatoProjectileBlockHitAction {
        codec(): $MapCodec<$PotatoProjectileBlockHitAction>;
        execute(arg0: $LevelAccessor, arg1: $ItemStack_, arg2: $BlockHitResult): boolean;
    }
    export class $PotatoProjectileEntityHitAction {
        static CODEC: $Codec<$PotatoProjectileEntityHitAction>;
    }
    export interface $PotatoProjectileEntityHitAction {
        codec(): $MapCodec<$PotatoProjectileEntityHitAction>;
        execute(arg0: $ItemStack_, arg1: $EntityHitResult, arg2: $PotatoProjectileEntityHitAction$Type_): boolean;
    }
    export interface $PotatoCannonProjectileType extends RegistryMarked<RegistryTypes.CreatePotatoProjectileTypeTag, RegistryTypes.CreatePotatoProjectileType> {}
    export class $PotatoProjectileEntityHitAction$Type extends $Enum<$PotatoProjectileEntityHitAction$Type> {
        static values(): $PotatoProjectileEntityHitAction$Type[];
        static valueOf(arg0: string): $PotatoProjectileEntityHitAction$Type;
        static ON_HIT: $PotatoProjectileEntityHitAction$Type;
        static PRE_HIT: $PotatoProjectileEntityHitAction$Type;
    }
    /**
     * Values that may be interpreted as {@link $PotatoProjectileEntityHitAction$Type}.
     */
    export type $PotatoProjectileEntityHitAction$Type_ = "pre_hit" | "on_hit";
    export class $PotatoCannonProjectileType extends $Record {
        drag(): number;
        knockback(): number;
        damage(): number;
        renderMode(): $PotatoProjectileRenderMode;
        items(): $HolderSet<$Item>;
        dropStack(): $ItemStack;
        soundPitch(): number;
        static getTypeForItem(arg0: $RegistryAccess, arg1: $Item_): ($Holder$Reference<$PotatoCannonProjectileType>) | undefined;
        velocityMultiplier(): number;
        reloadTicks(): number;
        gravityMultiplier(): number;
        preEntityHit(): ($PotatoProjectileEntityHitAction) | undefined;
        preEntityHit(arg0: $ItemStack_, arg1: $EntityHitResult): boolean;
        onEntityHit(arg0: $ItemStack_, arg1: $EntityHitResult): boolean;
        onEntityHit(): ($PotatoProjectileEntityHitAction) | undefined;
        onBlockHit(): ($PotatoProjectileBlockHitAction) | undefined;
        onBlockHit(arg0: $LevelAccessor, arg1: $ItemStack_, arg2: $BlockHitResult): boolean;
        sticky(): boolean;
        split(): number;
        static CODEC: $Codec<$PotatoCannonProjectileType>;
        constructor(items: $HolderSet_<$Item>, reloadTicks: number, damage: number, split: number, knockback: number, drag: number, velocityMultiplier: number, gravityMultiplier: number, soundPitch: number, sticky: boolean, dropStack: $ItemStack_, renderMode: $PotatoProjectileRenderMode, preEntityHit: ($PotatoProjectileEntityHitAction) | undefined, onEntityHit: ($PotatoProjectileEntityHitAction) | undefined, onBlockHit: ($PotatoProjectileBlockHitAction) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PotatoCannonProjectileType}.
     */
    export type $PotatoCannonProjectileType_ = RegistryTypes.CreatePotatoProjectileType | { onEntityHit?: ($PotatoProjectileEntityHitAction) | undefined, preEntityHit?: ($PotatoProjectileEntityHitAction) | undefined, items?: $HolderSet_<$Item>, dropStack?: $ItemStack_, reloadTicks?: number, renderMode?: $PotatoProjectileRenderMode, gravityMultiplier?: number, split?: number, sticky?: boolean, onBlockHit?: ($PotatoProjectileBlockHitAction) | undefined, knockback?: number, velocityMultiplier?: number, damage?: number, drag?: number, soundPitch?: number,  } | [onEntityHit?: ($PotatoProjectileEntityHitAction) | undefined, preEntityHit?: ($PotatoProjectileEntityHitAction) | undefined, items?: $HolderSet_<$Item>, dropStack?: $ItemStack_, reloadTicks?: number, renderMode?: $PotatoProjectileRenderMode, gravityMultiplier?: number, split?: number, sticky?: boolean, onBlockHit?: ($PotatoProjectileBlockHitAction) | undefined, knockback?: number, velocityMultiplier?: number, damage?: number, drag?: number, soundPitch?: number, ];
}
