import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $LivingEntity, $Mob, $Entity, $MobSpawnType_ } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List_ } from "@package/java/util";
import { $RawAnimation } from "@package/software/bernie/geckolib/animation";
import { $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos_, $Holder_, $RegistryAccess, $NonNullList, $Holder } from "@package/net/minecraft/core";
import { $ConditionalEffect_, $Enchantment, $ItemEnchantments_ } from "@package/net/minecraft/world/item/enchantment";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Class } from "@package/java/lang";
import { $ServerLevelAccessor, $ClipContext$Fluid_, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EnchantmentValueEffect } from "@package/net/minecraft/world/item/enchantment/effects";
import { $Vec3_, $HitResult, $Vec3, $Vec2, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $Quaternionf, $Vector3f } from "@package/org/joml";

declare module "@package/io/redspace/ironsspellbooks/api/util" {
    export class $AnimationHolder {
        static pass(): $AnimationHolder;
        getForPlayer(): ($ResourceLocation) | undefined;
        getForMob(): ($RawAnimation) | undefined;
        static none(): $AnimationHolder;
        animatesLegs: boolean;
        isPass: boolean;
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: boolean, arg2: boolean);
        constructor(arg0: $ResourceLocation_, arg1: boolean, arg2: boolean);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: $ResourceLocation_, arg1: boolean);
        get forPlayer(): ($ResourceLocation) | undefined;
        get forMob(): ($RawAnimation) | undefined;
    }
    export class $Utils {
        static slerp(arg0: number, arg1: $Vec3_, arg2: $Vec3_): $Vec3;
        static lerp(arg0: number, arg1: $Vec3_, arg2: $Vec3_): $Vec3;
        static hasLineOfSight(arg0: $Level_, arg1: $Entity, arg2: $Entity, arg3: boolean): boolean;
        static hasLineOfSight(arg0: $Level_, arg1: $Vec3_, arg2: $Vec3_, arg3: boolean): boolean;
        static smoothstep(arg0: number, arg1: number, arg2: number): number;
        static getEnchantmentLevel(arg0: $Level_, arg1: $ResourceKey_<$Enchantment>, arg2: $ItemEnchantments_): number;
        static getEnchantmentLevel(arg0: $Level_, arg1: $ItemStack_, arg2: $ResourceKey_<$Enchantment>): number;
        static enchant(arg0: $ItemStack_, arg1: $RegistryAccess, arg2: $ResourceKey_<$Enchantment>, arg3: number): void;
        static loadAllItems(arg0: $CompoundTag_, arg1: $NonNullList<$ItemStack_>, arg2: string, arg3: $HolderLookup$Provider): void;
        static saveAllItems(arg0: $CompoundTag_, arg1: $NonNullList<$ItemStack_>, arg2: string, arg3: $HolderLookup$Provider): $CompoundTag;
        static getRandomVec3(arg0: number): $Vec3;
        static moveToRelativeGroundLevel(arg0: $Level_, arg1: $Vec3_, arg2: number): $Vec3;
        static moveToRelativeGroundLevel(arg0: $Level_, arg1: $Vec3_, arg2: number, arg3: number): $Vec3;
        static checkMonsterSpawnRules(arg0: $ServerLevelAccessor, arg1: $MobSpawnType_, arg2: $BlockPos_, arg3: $RandomSource): boolean;
        static canBeUpgraded(arg0: $ItemStack_): boolean;
        static getAngle(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static getAngle(arg0: $Vec2, arg1: $Vec2): number;
        static setPotion(arg0: $ItemStack_, arg1: $Holder_<$Potion>): $ItemStack;
        static applyCooldownReduction(arg0: number, arg1: $LivingEntity): number;
        static setPlayerSpellbookStack(arg0: $Player, arg1: $ItemStack_): void;
        static canImbue(arg0: $ItemStack_): boolean;
        static handleShriving(arg0: $ItemStack_): $ItemStack;
        static doMobBreakSuffocatingBlocks(arg0: $LivingEntity, arg1: $Vec3_): void;
        static doMobBreakSuffocatingBlocks(arg0: $LivingEntity): void;
        static isSameItemSameComponentsIgnoreDurability(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static intPow(arg0: number, arg1: number): number;
        static intPow(arg0: number, arg1: number): number;
        static v3d(arg0: $Vector3f): $Vec3;
        static getPlayerSpellbookStack(arg0: $Player): $ItemStack;
        static deconstructRGB(arg0: number): $Vector3f;
        /**
         * @deprecated
         */
        static raycastForEntity(arg0: $Level_, arg1: $Entity, arg2: number, arg3: boolean): $HitResult;
        /**
         * @deprecated
         */
        static raycastForEntity(arg0: $Level_, arg1: $Entity, arg2: number, arg3: boolean, arg4: number): $HitResult;
        /**
         * @deprecated
         */
        static raycastForEntity(arg0: $Level_, arg1: $Entity, arg2: $Vec3_, arg3: $Vec3_, arg4: boolean, arg5: number, arg6: $Predicate_<$Entity>): $HitResult;
        /**
         * @deprecated
         */
        static raycastForEntity(arg0: $Level_, arg1: $Entity, arg2: $Vec3_, arg3: $Vec3_, arg4: boolean): $HitResult;
        static timeFromTicks(arg0: number, arg1: number): string;
        static stringTruncation(arg0: number, arg1: number): string;
        static preCastTargetHelper(arg0: $Level_, arg1: $LivingEntity, arg2: $MagicData, arg3: $AbstractSpell_, arg4: number, arg5: number): boolean;
        static preCastTargetHelper(arg0: $Level_, arg1: $LivingEntity, arg2: $MagicData, arg3: $AbstractSpell_, arg4: number, arg5: number, arg6: boolean, arg7: $Predicate_<$LivingEntity>): boolean;
        static preCastTargetHelper(arg0: $Level_, arg1: $LivingEntity, arg2: $MagicData, arg3: $AbstractSpell_, arg4: number, arg5: number, arg6: boolean): boolean;
        static getWeaponDamage(arg0: $LivingEntity): number;
        static softCapFormula(arg0: number): number;
        static serverSideCancelCast(arg0: $ServerPlayer, arg1: boolean): void;
        static serverSideCancelCast(arg0: $ServerPlayer): void;
        static validAntiMagicTarget(arg0: $Entity): boolean;
        static handleSpellTeleport(arg0: $AbstractSpell_, arg1: $Entity, arg2: $Vec3_): boolean;
        static raycastForBlock(arg0: $Level_, arg1: $Vec3_, arg2: $Vec3_, arg3: $ClipContext$Fluid_): $BlockHitResult;
        static particleTrail(arg0: $Level_, arg1: $Vec3_, arg2: $Vec3_, arg3: $ParticleOptions_): void;
        static getTargetBlock(arg0: $Level_, arg1: $LivingEntity, arg2: $ClipContext$Fluid_, arg3: number): $BlockHitResult;
        static canHitWithRaycast(arg0: $Entity): boolean;
        static v3f(arg0: $Vec3_): $Vector3f;
        static getRandomScaled(arg0: number): number;
        static clampedKnockbackResistanceFactor(arg0: $Entity, arg1: number, arg2: number): number;
        static rotationFromDirection(arg0: $Vec3_): $Vec2;
        static packRGB(arg0: $Vector3f): number;
        static shouldHealEntity(arg0: $Entity, arg1: $Entity): boolean;
        /**
         * @deprecated
         */
        static shouldHealEntity(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        static processEnchantment(arg0: $Level_, arg1: $ResourceKey_<$Enchantment>, arg2: $DataComponentType_<$List_<$ConditionalEffect_<$EnchantmentValueEffect>>>, arg3: $ItemEnchantments_): number;
        static getPositionFromEntityLookDirection(arg0: $Entity, arg1: number): $Vec3;
        static performTaunt(arg0: $LivingEntity, arg1: number, arg2: $Predicate_<$Entity>): void;
        static performTaunt(arg0: $LivingEntity, arg1: $List_<$Entity>): void;
        static checkEntityIntersecting(arg0: $Entity, arg1: $Vec3_, arg2: $Vec3_, arg3: number): $HitResult;
        static signedMin(arg0: number, arg1: number): number;
        static doMeleeAttack(arg0: $Mob, arg1: $Entity, arg2: $DamageSource_): boolean;
        static createTremorBlock(arg0: $Level_, arg1: $BlockPos_, arg2: number): void;
        static createTremorBlockWithState(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: number): void;
        static serverSideInitiateQuickCast(arg0: $ServerPlayer, arg1: number): boolean;
        /**
         * @deprecated
         */
        static raycastForEntityOfClass(arg0: $Level_, arg1: $Entity, arg2: $Vec3_, arg3: $Vec3_, arg4: boolean, arg5: $Class<$Entity>): $HitResult;
        static releaseUsingHelper(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): void;
        static serverSideInitiateCast(arg0: $ServerPlayer): boolean;
        static getRandomVec3f(arg0: number): $Vector3f;
        static findRelativeGroundLevel(arg0: $Level_, arg1: $Vec3_, arg2: number): number;
        static sendTargetedNotification(arg0: $ServerPlayer, arg1: $LivingEntity, arg2: $AbstractSpell_): void;
        static enchantmentFromKey(arg0: $RegistryAccess, arg1: $ResourceKey_<$Enchantment>): $Holder<$Enchantment>;
        static addFreezeTicks(arg0: $LivingEntity, arg1: number, arg2: number): void;
        static addFreezeTicks(arg0: $LivingEntity, arg1: number): void;
        static getServerTick(): number;
        static getStackTraceAsString(): string;
        static spawnInWorld(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): void;
        static getTargetOld(arg0: $Level_, arg1: $Player, arg2: $ClipContext$Fluid_, arg3: number): $BlockHitResult;
        static rotationBetweenVectors(arg0: $Vector3f, arg1: $Vector3f): $Quaternionf;
        static random: $RandomSource;
        static NON_BASE_ATTRIBUTES: $Predicate<$Holder<$Attribute>>;
        static ONLY_MAGIC_ATTRIBUTES: $Predicate<$Holder<$Attribute>>;
        constructor();
        static get serverTick(): number;
        static get stackTraceAsString(): string;
    }
}
