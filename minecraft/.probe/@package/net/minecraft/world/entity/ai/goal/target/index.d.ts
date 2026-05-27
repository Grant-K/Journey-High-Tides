import { $Predicate_ } from "@package/java/util/function";
import { $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $TamableAnimal, $Mob, $LivingEntity, $PathfinderMob } from "@package/net/minecraft/world/entity";
import { $Raider } from "@package/net/minecraft/world/entity/raid";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $Class } from "@package/java/lang";
import { $IronGolem } from "@package/net/minecraft/world/entity/animal";

declare module "@package/net/minecraft/world/entity/ai/goal/target" {
    export class $NonTameRandomTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        targetType: $Class<T>;
        targetConditions: $TargetingConditions;
        constructor(arg0: $TamableAnimal, arg1: $Class<T>, arg2: boolean, arg3: $Predicate_<$LivingEntity>);
    }
    export class $DefendVillageTargetGoal extends $TargetGoal {
        constructor(arg0: $IronGolem);
    }
    export class $OwnerHurtByTargetGoal extends $TargetGoal {
        constructor(arg0: $TamableAnimal);
    }
    export class $HurtByTargetGoal extends $TargetGoal {
        setAlertOthers(...arg0: $Class<never>[]): $HurtByTargetGoal;
        timestamp: number;
        constructor(arg0: $PathfinderMob, ...arg1: $Class<never>[]);
        set alertOthers(value: $Class<never>[]);
    }
    export class $ResetUniversalAngerTargetGoal<T extends $Mob> extends $Goal {
        constructor(arg0: T, arg1: boolean);
    }
    export class $TargetGoal extends $Goal {
        setUnseenMemoryTicks(arg0: number): $TargetGoal;
        constructor(arg0: $Mob, arg1: boolean, arg2: boolean);
        constructor(arg0: $Mob, arg1: boolean);
        set unseenMemoryTicks(value: number);
    }
    export class $OwnerHurtTargetGoal extends $TargetGoal {
        constructor(arg0: $TamableAnimal);
    }
    export class $NearestHealableRaiderTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        decrementCooldown(): void;
        getCooldown(): number;
        targetType: $Class<T>;
        targetConditions: $TargetingConditions;
        constructor(arg0: $Raider, arg1: $Class<T>, arg2: boolean, arg3: $Predicate_<$LivingEntity>);
        get cooldown(): number;
    }
    export class $NearestAttackableWitchTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        setCanAttack(arg0: boolean): void;
        targetType: $Class<T>;
        targetConditions: $TargetingConditions;
        constructor(arg0: $Raider, arg1: $Class<T>, arg2: number, arg3: boolean, arg4: boolean, arg5: $Predicate_<$LivingEntity>);
        set canAttack(value: boolean);
    }
    export class $NearestAttackableTargetGoal<T extends $LivingEntity> extends $TargetGoal {
        setTarget(arg0: $LivingEntity): void;
        targetType: $Class<T>;
        targetConditions: $TargetingConditions;
        constructor(arg0: $Mob, arg1: $Class<T>, arg2: boolean, arg3: $Predicate_<$LivingEntity>);
        constructor(arg0: $Mob, arg1: $Class<T>, arg2: boolean);
        constructor(arg0: $Mob, arg1: $Class<T>, arg2: number, arg3: boolean, arg4: boolean, arg5: $Predicate_<$LivingEntity>);
        constructor(arg0: $Mob, arg1: $Class<T>, arg2: boolean, arg3: boolean);
        set target(value: $LivingEntity);
    }
}
