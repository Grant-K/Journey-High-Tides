import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $AccessorTemptingSensor } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $Entity, $PathfinderMob, $LivingEntity, $AgeableMob, $Mob } from "@package/net/minecraft/world/entity";
import { $SensorTypeAccessor } from "@package/com/blackgear/platform/core/mixin/access";
import { $ImmutableSet } from "@package/com/google/common/collect";
import { $SensorAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/ai/useless_sensors";
import { $Set, $Optional } from "@package/java/util";
import { $Villager } from "@package/net/minecraft/world/entity/npc";
import { $MemoryModuleType, $MemoryModuleType_ } from "@package/net/minecraft/world/entity/ai/memory";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $Predicate, $Supplier_, $Predicate_, $BiPredicate_ } from "@package/java/util/function";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $Object } from "@package/java/lang";

declare module "@package/net/minecraft/world/entity/ai/sensing" {
    export class $BreezeAttackEntitySensor extends $NearestLivingEntitySensor<$Breeze> {
        static RANDOM: $RandomSource;
        scanRate: number;
        static BREEZE_SENSOR_RADIUS: number;
        constructor();
    }
    export class $PiglinBruteSpecificSensor extends $Sensor<$LivingEntity> {
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
    export class $FrogAttackablesSensor extends $NearestVisibleLivingEntitySensor {
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGET_DETECTION_DISTANCE: number;
        constructor();
    }
    export class $TemptingSensor extends $Sensor<$PathfinderMob> implements $AccessorTemptingSensor {
        modifyExpressionValue$mjj000$quark$findTroughs(arg0: $Object, arg1: $ServerLevel, arg2: $PathfinderMob): $Object;
        quark$getTemptations(): $Predicate<$ItemStack>;
        static TEMPTATION_RANGE: number;
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor(arg0: $Predicate_<$ItemStack>);
    }
    export class $HoglinSpecificSensor extends $Sensor<$Hoglin> {
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
    export class $MobSensor<T extends $LivingEntity> extends $Sensor<T> {
        clearMemory(arg0: T): void;
        checkForMobsNearby(arg0: T): void;
        mobDetected(arg0: T): void;
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor(arg0: number, arg1: $BiPredicate_<T, $LivingEntity>, arg2: $Predicate_<T>, arg3: $MemoryModuleType_<boolean>, arg4: number);
    }
    export class $SensorType<U extends $Sensor<never>> implements $SensorTypeAccessor {
        static createSensorType$platform_$md$68cb88$0(arg0: $Supplier_<any>): $SensorType<any>;
        create(): U;
        static FROG_ATTACKABLES: $SensorType<$FrogAttackablesSensor>;
        static AXOLOTL_ATTACKABLES: $SensorType<$AxolotlAttackablesSensor>;
        static ARMADILLO_SCARE_DETECTED: $SensorType<$MobSensor<$Armadillo>>;
        static NEAREST_LIVING_ENTITIES: $SensorType<$NearestLivingEntitySensor<$LivingEntity>>;
        static VILLAGER_HOSTILES: $SensorType<$VillagerHostilesSensor>;
        static VILLAGER_BABIES: $SensorType<$VillagerBabiesSensor>;
        static NEAREST_BED: $SensorType<$NearestBedSensor>;
        static GOAT_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static IS_IN_WATER: $SensorType<$IsInWaterSensor>;
        static AXOLOTL_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static FROG_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static ARMADILLO_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static BREEZE_ATTACK_ENTITY_SENSOR: $SensorType<$BreezeAttackEntitySensor>;
        static GOLEM_DETECTED: $SensorType<$GolemSensor>;
        static SNIFFER_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static CAMEL_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static NEAREST_ADULT: $SensorType<$AdultSensor>;
        static DUMMY: $SensorType<$DummySensor>;
        static HURT_BY: $SensorType<$HurtBySensor>;
        static NEAREST_ITEMS: $SensorType<$NearestItemSensor>;
        static NEAREST_PLAYERS: $SensorType<$PlayerSensor>;
        static PIGLIN_SPECIFIC_SENSOR: $SensorType<$PiglinSpecificSensor>;
        static SECONDARY_POIS: $SensorType<$SecondaryPoiSensor>;
        static PIGLIN_BRUTE_SPECIFIC_SENSOR: $SensorType<$PiglinBruteSpecificSensor>;
        static HOGLIN_SPECIFIC_SENSOR: $SensorType<$HoglinSpecificSensor>;
        static WARDEN_ENTITY_SENSOR: $SensorType<$WardenEntitySensor>;
        constructor(arg0: $Supplier_<U>);
    }
    /**
     * Values that may be interpreted as {@link $SensorType}.
     */
    export type $SensorType_<U> = RegistryTypes.SensorType;
    export class $PlayerSensor extends $Sensor<$LivingEntity> {
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
    export class $AdultSensor extends $Sensor<$AgeableMob> {
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
    export class $PiglinSpecificSensor extends $Sensor<$LivingEntity> {
        redirect$cdi000$lithium$redirectFindNearestRepellent(arg0: $ServerLevel, arg1: $LivingEntity): $Optional<any>;
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
    export class $Sensor<E extends $LivingEntity> implements $SensorAccessor {
        static isEntityAttackable(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        static isEntityTargetable(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        static isEntityAttackableIgnoringLineOfSight(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        tick(arg0: $ServerLevel, arg1: E): void;
        requires(): $Set<$MemoryModuleType<never>>;
        getLastSenseTime(): number;
        getSenseInterval(): number;
        setLastSenseTime(arg0: number): void;
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
        constructor(arg0: number);
        get senseInterval(): number;
    }
    export class $VillagerBabiesSensor extends $Sensor<$LivingEntity> {
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
    export class $Sensing {
        hasLineOfSight(arg0: $Entity): boolean;
        tick(): void;
        constructor(arg0: $Mob);
    }
    export class $NearestLivingEntitySensor<T extends $LivingEntity> extends $Sensor<T> {
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
    export class $NearestVisibleLivingEntitySensor extends $Sensor<$LivingEntity> {
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
    export class $HurtBySensor extends $Sensor<$LivingEntity> {
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
    export class $WardenEntitySensor extends $NearestLivingEntitySensor<$Warden> {
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
    export class $VillagerHostilesSensor extends $NearestVisibleLivingEntitySensor {
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
    export interface $SensorType<U> extends RegistryMarked<RegistryTypes.SensorTypeTag, RegistryTypes.SensorType> {}
    export class $IsInWaterSensor extends $Sensor<$LivingEntity> {
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
    export class $DummySensor extends $Sensor<$LivingEntity> {
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
    export class $NearestBedSensor extends $Sensor<$Mob> {
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
    export class $NearestItemSensor extends $Sensor<$Mob> {
        static MAX_DISTANCE_TO_WANTED_ITEM: number;
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
    export class $GolemSensor extends $Sensor<$LivingEntity> {
        static golemDetected(arg0: $LivingEntity): void;
        static checkForNearbyGolem(arg0: $LivingEntity): void;
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor(arg0: number);
        constructor();
    }
    export class $AxolotlAttackablesSensor extends $NearestVisibleLivingEntitySensor {
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGET_DETECTION_DISTANCE: number;
        constructor();
    }
    export class $SecondaryPoiSensor extends $Sensor<$Villager> {
        wrapOperation$jjc000$farmersdelight$detectModdedFarmland$mixinextras$bridge$6(arg0: $ImmutableSet<any>, arg1: $Object, arg2: $Operation_<any>, arg3: $LocalRef<any>): boolean;
        wrapOperation$jjc000$farmersdelight$detectModdedFarmland(arg0: $ImmutableSet<any>, arg1: $Object, arg2: $Operation_<any>, arg3: $Villager): boolean;
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
}
