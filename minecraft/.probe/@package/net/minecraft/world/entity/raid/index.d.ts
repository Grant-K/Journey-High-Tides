import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SpellData } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $PortalProcessor, $Entity, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $HashMap, $Map, $Set } from "@package/java/util";
import { $InteractionHand, $Difficulty_ } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $Holder, $BlockPos_, $HolderGetter } from "@package/net/minecraft/core";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Enum } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $RaidsAccessor } from "@package/me/kall/doespotatotick/mixin/access";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PatrollingMonster } from "@package/net/minecraft/world/entity/monster";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $BannerPattern_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/entity/raid" {
    export class $Raider$RaiderCelebration extends $Goal {
    }
    export class $Raider$ObtainRaidLeaderBannerGoal<T extends $Raider> extends $Goal {
    }
    export class $Raid {
        getCenter(): $BlockPos;
        static getLeaderBannerInstance(arg0: $HolderGetter<$BannerPattern_>): $ItemStack;
        getRaidOmenLevel(): number;
        getMaxRaidOmenLevel(): number;
        getGroupsSpawned(): number;
        joinRaid(arg0: number, arg1: $Raider, arg2: $BlockPos_, arg3: boolean): void;
        removeLeader(arg0: number): void;
        addHeroOfTheVillage(arg0: $Entity): void;
        removeFromRaid(arg0: $Raider, arg1: boolean): void;
        addWaveMob(arg0: number, arg1: $Raider, arg2: boolean): boolean;
        setLeader(arg0: number, arg1: $Raider): void;
        getLeader(arg0: number): $Raider;
        updateBossbar(): void;
        isLoss(): boolean;
        isOver(): boolean;
        getEnchantOdds(): number;
        getNumGroups(arg0: $Difficulty_): number;
        getLevel(): $Level;
        tick(): void;
        isVictory(): boolean;
        isBetweenWaves(): boolean;
        hasFirstWaveSpawned(): boolean;
        getTotalRaidersAlive(): number;
        getTotalHealth(): number;
        getAllRaiders(): $Set<$Raider>;
        setRaidOmenLevel(arg0: number): void;
        absorbRaidOmen(arg0: $ServerPlayer): boolean;
        getHealthOfLivingRaiders(): number;
        isStarted(): boolean;
        isActive(): boolean;
        isStopped(): boolean;
        stop(): void;
        getId(): number;
        save(arg0: $CompoundTag_): $CompoundTag;
        static RAID_REMOVAL_THRESHOLD_SQR: number;
        static TICKS_PER_DAY: number;
        static VILLAGE_RADIUS_BUFFER: number;
        static MAX_CELEBRATION_TICKS: number;
        static VALID_RAID_RADIUS_SQR: number;
        static MAX_NO_ACTION_TIME: number;
        static DEFAULT_MAX_RAID_OMEN_LEVEL: number;
        constructor(arg0: $ServerLevel, arg1: $CompoundTag_);
        constructor(arg0: number, arg1: $ServerLevel, arg2: $BlockPos_);
        get center(): $BlockPos;
        get maxRaidOmenLevel(): number;
        get groupsSpawned(): number;
        get loss(): boolean;
        get over(): boolean;
        get enchantOdds(): number;
        get level(): $Level;
        get victory(): boolean;
        get betweenWaves(): boolean;
        get totalRaidersAlive(): number;
        get totalHealth(): number;
        get allRaiders(): $Set<$Raider>;
        get healthOfLivingRaiders(): number;
        get started(): boolean;
        get active(): boolean;
        get stopped(): boolean;
        get id(): number;
    }
    export class $Raid$RaiderType extends $Enum<$Raid$RaiderType> implements $IExtensibleEnum {
        static getExtensionInfo(): $ExtensionInfo;
        static values(): $Raid$RaiderType[];
        static valueOf(arg0: string): $Raid$RaiderType;
        static EVOKER: $Raid$RaiderType;
        static VINDICATOR: $Raid$RaiderType;
        static WITCH: $Raid$RaiderType;
        static PILLAGER: $Raid$RaiderType;
        static RAVAGER: $Raid$RaiderType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $Raid$RaiderType}.
     */
    export type $Raid$RaiderType_ = "vindicator" | "evoker" | "pillager" | "witch" | "ravager";
    export class $Raider$RaiderMoveThroughVillageGoal extends $Goal {
    }
    export class $Raid$RaidStatus extends $Enum<$Raid$RaidStatus> {
    }
    /**
     * Values that may be interpreted as {@link $Raid$RaidStatus}.
     */
    export type $Raid$RaidStatus_ = "ongoing" | "victory" | "loss" | "stopped";
    export class $Raider$HoldGroundAttackGoal extends $Goal {
    }
    export class $Raids extends $SavedData implements $RaidsAccessor {
        static getFileId(arg0: $Holder_<$DimensionType>): string;
        getNearbyRaid(arg0: $BlockPos_, arg1: number): $Raid;
        createOrExtendRaid(arg0: $ServerPlayer, arg1: $BlockPos_): $Raid;
        static canJoinRaid(arg0: $Raider, arg1: $Raid): boolean;
        tick(): void;
        get(arg0: number): $Raid;
        static load(arg0: $ServerLevel, arg1: $CompoundTag_): $Raids;
        static factory(arg0: $ServerLevel): $SavedData$Factory<$Raids>;
        dpt$getRaids(): $Map<number, $Raid>;
        constructor(arg0: $ServerLevel);
    }
    export class $Raider extends $PatrollingMonster {
        canJoinRaid(): boolean;
        applyRaidBuffs(arg0: $ServerLevel, arg1: number, arg2: boolean): void;
        setCanJoinRaid(arg0: boolean): void;
        getCurrentRaid(): $Raid;
        getWave(): number;
        hasActiveRaid(): boolean;
        setCurrentRaid(arg0: $Raid): void;
        isCaptain(): boolean;
        hasRaid(): boolean;
        setWave(arg0: number): void;
        isCelebrating(): boolean;
        setCelebrating(arg0: boolean): void;
        getTicksOutsideRaid(): number;
        setTicksOutsideRaid(arg0: number): void;
        getCelebrateSound(): $SoundEvent;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        lastHurtByPlayerTime: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        xRot: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        lootTable: $ResourceKey<$LootTable>;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        armorDropChances: number[];
        persistenceRequired: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        activeEffects: $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        castingSpell: $SpellData;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        hasUsedSingleAttack: boolean;
        lastHurtByPlayer: $Player;
        asbTickCount: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        level: $Level;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        drinkTime: number;
        create_diesel_generators$turretPos: $BlockPos;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        spells: $HashMap<any, any>;
        lastDamageStamp: number;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        target: $LivingEntity;
        yBodyRot: number;
        blocksBuilding: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        get captain(): boolean;
        get celebrateSound(): $SoundEvent;
    }
}
