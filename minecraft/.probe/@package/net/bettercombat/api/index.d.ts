import { $ConditionalTrailAppearance, $ConditionalTrailAppearance_, $ParticlePlacement, $ParticlePlacement_ } from "@package/net/bettercombat/api/fx";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $List, $List_ } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
export * as fx from "@package/net/bettercombat/api/fx";

declare module "@package/net/bettercombat/api" {
    export class $WeaponAttributes$HitBoxShape extends $Enum<$WeaponAttributes$HitBoxShape> {
        static values(): $WeaponAttributes$HitBoxShape[];
        static valueOf(name: string): $WeaponAttributes$HitBoxShape;
        static FORWARD_BOX: $WeaponAttributes$HitBoxShape;
        static VERTICAL_PLANE: $WeaponAttributes$HitBoxShape;
        static HORIZONTAL_PLANE: $WeaponAttributes$HitBoxShape;
    }
    /**
     * Values that may be interpreted as {@link $WeaponAttributes$HitBoxShape}.
     */
    export type $WeaponAttributes$HitBoxShape_ = "forward_box" | "vertical_plane" | "horizontal_plane";
    export class $AttackHand extends $Record {
        itemStack(): $ItemStack;
        attack(): $WeaponAttributes$Attack;
        upswingRate(): number;
        isOffHand(): boolean;
        combo(): $ComboState;
        attributes(): $WeaponAttributes;
        constructor(attack: $WeaponAttributes$Attack, combo: $ComboState_, isOffHand: boolean, attributes: $WeaponAttributes, itemStack: $ItemStack_);
        get offHand(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AttackHand}.
     */
    export type $AttackHand_ = { isOffHand?: boolean, itemStack?: $ItemStack_, attributes?: $WeaponAttributes, attack?: $WeaponAttributes$Attack, combo?: $ComboState_,  } | [isOffHand?: boolean, itemStack?: $ItemStack_, attributes?: $WeaponAttributes, attack?: $WeaponAttributes$Attack, combo?: $ComboState_, ];
    export class $WeaponAttributes {
        pose(): string;
        attacks(): $WeaponAttributes$Attack[];
        isTwoHanded(): boolean;
        category(): string;
        rangeBonus(): number;
        two_handed(): boolean;
        attackRange(): number;
        offHandPose(): string;
        trailAppearance(): $ConditionalTrailAppearance;
        static empty(): $WeaponAttributes;
        constructor(attack_range: number, range_bonus: number, pose: string, off_hand_pose: string, isTwoHanded: boolean, category: string, attacks: $WeaponAttributes$Attack[], trail_appearance: $ConditionalTrailAppearance_);
        get twoHanded(): boolean;
    }
    export class $WeaponAttributes$Attack {
        angle(): number;
        animation(): string;
        rangeMultiplier(): number;
        damageMultiplier(): number;
        movementSpeedMultiplier(): number;
        upswing(): number;
        hitbox(): $WeaponAttributes$HitBoxShape;
        trailParticles(): $List<$ParticlePlacement>;
        swingSound(): $WeaponAttributes$Sound;
        impactSound(): $WeaponAttributes$Sound;
        conditions(): $WeaponAttributes$Condition[];
        static empty(): $WeaponAttributes$Attack;
        constructor();
        constructor(conditions: $WeaponAttributes$Condition_[], hitbox: $WeaponAttributes$HitBoxShape_, damage_multiplier: number, movement_speed_multiplier: number, range_multiplier: number, angle: number, upswing: number, animation: string, swing_sound: $WeaponAttributes$Sound, impact_sound: $WeaponAttributes$Sound, trail_particles: $List_<$ParticlePlacement_>);
    }
    export class $MinecraftClient_BetterCombat {
    }
    export interface $MinecraftClient_BetterCombat {
        hasTargetsInReach(): boolean;
        getComboCount(): number;
        getCurrentAttack(): $WeaponAttributes$Attack;
        getCursorTarget(): $Entity;
        getSwingProgress(): number;
        getUpswingTicks(): number;
        cancelUpswing(): void;
        getCurrentAttackHand(): $AttackHand;
        isWeaponSwingInProgress(): boolean;
        get comboCount(): number;
        get currentAttack(): $WeaponAttributes$Attack;
        get cursorTarget(): $Entity;
        get swingProgress(): number;
        get upswingTicks(): number;
        get currentAttackHand(): $AttackHand;
        get weaponSwingInProgress(): boolean;
    }
    export class $WeaponAttributes$Condition extends $Enum<$WeaponAttributes$Condition> {
        static values(): $WeaponAttributes$Condition[];
        static valueOf(name: string): $WeaponAttributes$Condition;
        static NO_OFFHAND_ITEM: $WeaponAttributes$Condition;
        static NOT_MOUNTED: $WeaponAttributes$Condition;
        static NOT_DUAL_WIELDING: $WeaponAttributes$Condition;
        static DUAL_WIELDING_ANY: $WeaponAttributes$Condition;
        static DUAL_WIELDING_SAME_CATEGORY: $WeaponAttributes$Condition;
        static MOUNTED: $WeaponAttributes$Condition;
        static MAIN_HAND_ONLY: $WeaponAttributes$Condition;
        static OFF_HAND_ONLY: $WeaponAttributes$Condition;
        static DUAL_WIELDING_SAME: $WeaponAttributes$Condition;
        static OFF_HAND_SHIELD: $WeaponAttributes$Condition;
    }
    /**
     * Values that may be interpreted as {@link $WeaponAttributes$Condition}.
     */
    export type $WeaponAttributes$Condition_ = "not_dual_wielding" | "dual_wielding_any" | "dual_wielding_same" | "dual_wielding_same_category" | "no_offhand_item" | "off_hand_shield" | "main_hand_only" | "off_hand_only" | "mounted" | "not_mounted";
    export class $WeaponAttributes$Sound {
        volume(): number;
        pitch(): number;
        randomness(): number;
        id(): string;
        constructor();
        constructor(id: string);
    }
    export class $ComboState extends $Record {
        total(): number;
        current(): number;
        constructor(current: number, total: number);
    }
    /**
     * Values that may be interpreted as {@link $ComboState}.
     */
    export type $ComboState_ = { current?: number, total?: number,  } | [current?: number, total?: number, ];
    export class $EntityPlayer_BetterCombat {
    }
    export interface $EntityPlayer_BetterCombat {
        getCurrentAttack(): $AttackHand;
        getMainHandIdleAnimation(): string;
        getOffHandIdleAnimation(): string;
        get currentAttack(): $AttackHand;
        get mainHandIdleAnimation(): string;
        get offHandIdleAnimation(): string;
    }
}
