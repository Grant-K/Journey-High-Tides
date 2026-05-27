import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SpellData } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $EntityType_, $VariantHolder, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $AgeableMob, $WalkAnimationState, $Mob, $PortalProcessor, $Entity, $ReputationEventHandler } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GossipContainer } from "@package/net/minecraft/world/entity/ai/gossip";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $InteractionHand, $SimpleContainer, $InteractionHand_ } from "@package/net/minecraft/world";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $MerchantOffers, $MerchantOffer, $Merchant, $ItemCost_ } from "@package/net/minecraft/world/item/trading";
import { $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $MemoryModuleType_, $MemoryModuleType } from "@package/net/minecraft/world/entity/ai/memory";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $HashMap, $Set_, $Map, $Set, $List, $Map_ } from "@package/java/util";
import { $Predicate_, $Predicate, $BiPredicate } from "@package/java/util/function";
import { $BlockPos, $GlobalPos, $BlockPos_, $GlobalPos_, $HolderLookup$Provider, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $VillagerAccessor } from "@package/ovh/corail/tombstone/mixin/accessor";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $ItemLike_, $Level, $CustomSpawner, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $SuspiciousStewEffects_ } from "@package/net/minecraft/world/item/component";
import { $ImmutableList, $ImmutableSet } from "@package/com/google/common/collect";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $EnchantmentProvider } from "@package/net/minecraft/world/item/enchantment/providers";
import { $VillagerEntityAccessor } from "@package/net/fabricmc/fabric/mixin/content/registry";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/entity/npc" {
    export class $VillagerProfession extends $Record {
        workSound(): $SoundEvent;
        secondaryPoi(): $ImmutableSet<$Block>;
        requestedItems(): $ImmutableSet<$Item>;
        heldJobSite(): $Predicate<$Holder<$PoiType>>;
        acquirableJobSite(): $Predicate<$Holder<$PoiType>>;
        name(): string;
        static CARTOGRAPHER: $VillagerProfession;
        static MASON: $VillagerProfession;
        static SHEPHERD: $VillagerProfession;
        static ARMORER: $VillagerProfession;
        static TOOLSMITH: $VillagerProfession;
        static FARMER: $VillagerProfession;
        static FLETCHER: $VillagerProfession;
        static NITWIT: $VillagerProfession;
        static LEATHERWORKER: $VillagerProfession;
        static LIBRARIAN: $VillagerProfession;
        static CLERIC: $VillagerProfession;
        static FISHERMAN: $VillagerProfession;
        static BUTCHER: $VillagerProfession;
        static WEAPONSMITH: $VillagerProfession;
        static ALL_ACQUIRABLE_JOBS: $Predicate<$Holder<$PoiType>>;
        static NONE: $VillagerProfession;
        constructor(arg0: string, arg1: $Predicate_<$Holder<$PoiType>>, arg2: $Predicate_<$Holder<$PoiType>>, arg3: $ImmutableSet<$Item_>, arg4: $ImmutableSet<$Block_>, arg5: $SoundEvent_);
    }
    /**
     * Values that may be interpreted as {@link $VillagerProfession}.
     */
    export type $VillagerProfession_ = RegistryTypes.VillagerProfession | { secondaryPoi?: $ImmutableSet<$Block_>, heldJobSite?: $Predicate_<$Holder<$PoiType>>, name?: string, requestedItems?: $ImmutableSet<$Item_>, workSound?: $SoundEvent_, acquirableJobSite?: $Predicate_<$Holder<$PoiType>>,  } | [secondaryPoi?: $ImmutableSet<$Block_>, heldJobSite?: $Predicate_<$Holder<$PoiType>>, name?: string, requestedItems?: $ImmutableSet<$Item_>, workSound?: $SoundEvent_, acquirableJobSite?: $Predicate_<$Holder<$PoiType>>, ];
    export class $AbstractVillager extends $AgeableMob implements $InventoryCarrier, $Npc, $Merchant {
        isClientSide(): boolean;
        getInventory(): $SimpleContainer;
        getOffers(): $MerchantOffers;
        getVillagerXp(): number;
        modifyExpressionValue$mgh000$quark$replaceRandom(arg0: $RandomSource, arg1: $MerchantOffers, arg2: $LocalRef<any>): $RandomSource;
        getUnhappyCounter(): number;
        setUnhappyCounter(arg0: number): void;
        isTrading(): boolean;
        setTradingPlayer(arg0: $Player): void;
        getTradingPlayer(): $Player;
        showProgressBar(): boolean;
        overrideOffers(arg0: $MerchantOffers): void;
        overrideXp(arg0: number): void;
        notifyTrade(arg0: $MerchantOffer): void;
        notifyTradeUpdated(arg0: $ItemStack_): void;
        getNotifyTradeSound(): $SoundEvent;
        playCelebrateSound(): void;
        handler$mgh000$quark$replaceRandom(arg0: $MerchantOffers, arg1: $VillagerTrades$ItemListing_[], arg2: number, arg3: $CallbackInfo, arg4: $LocalRef<any>): void;
        modifyExpressionValue$mgh000$quark$setTierForOffer(arg0: $MerchantOffer): $MerchantOffer;
        writeInventoryToTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readInventoryFromTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        openTradingScreen(arg0: $Player, arg1: $Component_, arg2: number): void;
        canRestock(): boolean;
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
        static VILLAGER_SLOT_OFFSET: number;
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
        static BABY_START_AGE: number;
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
        offers: $MerchantOffers;
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
        constructor(arg0: $EntityType_<$AbstractVillager>, arg1: $Level_);
        get clientSide(): boolean;
        get inventory(): $SimpleContainer;
        get villagerXp(): number;
        get trading(): boolean;
        get notifyTradeSound(): $SoundEvent;
    }
    export class $WanderingTrader extends $AbstractVillager {
        mobInteract(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        setDespawnDelay(arg0: number): void;
        getDespawnDelay(): number;
        handler$bhi000$supplementaries$supp$addOpenDoor(ci: $CallbackInfo): void;
        setWanderTarget(arg0: $BlockPos_): void;
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
        static VILLAGER_SLOT_OFFSET: number;
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
        static BABY_START_AGE: number;
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
        offers: $MerchantOffers;
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
        constructor(arg0: $EntityType_<$WanderingTrader>, arg1: $Level_);
        set wanderTarget(value: $BlockPos_);
    }
    export class $VillagerTrades$ItemsForEmeralds implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $ResourceKey_<$EnchantmentProvider>);
        constructor(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        constructor(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: ($ResourceKey_<$EnchantmentProvider>) | undefined);
        constructor(arg0: $Block_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export interface $VillagerProfession extends RegistryMarked<RegistryTypes.VillagerProfessionTag, RegistryTypes.VillagerProfession> {}
    export class $VillagerTrades$EnchantBookForEmeralds implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $TagKey_<$Enchantment>);
        constructor(arg0: number, arg1: $TagKey_<$Enchantment>);
    }
    export class $WanderingTrader$WanderToPositionGoal extends $Goal {
    }
    export class $InventoryCarrier {
        static pickUpItem(arg0: $Mob, arg1: $InventoryCarrier_, arg2: $ItemEntity): void;
        static TAG_INVENTORY: string;
    }
    export interface $InventoryCarrier {
        getInventory(): $SimpleContainer;
        writeInventoryToTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readInventoryFromTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        get inventory(): $SimpleContainer;
    }
    /**
     * Values that may be interpreted as {@link $InventoryCarrier}.
     */
    export type $InventoryCarrier_ = (() => $SimpleContainer);
    export class $VillagerTrades$TreasureMapForEmeralds implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        handler$bed000$supplementaries$turnToQuill(trader: $Entity, random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        constructor(arg0: number, arg1: $TagKey_<$Structure>, arg2: string, arg3: $Holder_<$MapDecorationType>, arg4: number, arg5: number);
    }
    export class $Villager extends $AbstractVillager implements $ReputationEventHandler, $VillagerDataHolder, $VillagerAccessor, $VillagerEntityAccessor {
        static createAttributes(): $AttributeSupplier$Builder;
        restock(): void;
        onReputationEventFrom(arg0: $ReputationEventType, arg1: $Entity): void;
        mobInteract(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        getBreedOffspring(arg0: $ServerLevel, arg1: $AgeableMob): $Villager;
        setOffers(arg0: $MerchantOffers): void;
        refreshBrain(arg0: $ServerLevel): void;
        getVillagerData(): $VillagerData;
        setVillagerData(arg0: $VillagerData): void;
        getGossips(): $GossipContainer;
        setGossips(arg0: $Tag_): void;
        setVillagerXp(arg0: number): void;
        getPlayerReputation(arg0: $Player): number;
        wantsToSpawnGolem(arg0: number): boolean;
        wantsMoreFood(): boolean;
        assignProfessionWhenSpawned(): boolean;
        increaseMerchantCareer(): void;
        startTrading(arg0: $Player): void;
        handler$mjl000$quark$restock(arg0: $CallbackInfo): void;
        shouldRestock(): boolean;
        playWorkSound(): void;
        shouldIncreaseLevel(): boolean;
        setChasing(arg0: boolean): void;
        isChasing(): boolean;
        releasePoi(arg0: $MemoryModuleType_<$GlobalPos_>): void;
        eatAndDigestFood(): void;
        hasExcessFood(): boolean;
        hasFarmSeeds(): boolean;
        gossip(arg0: $ServerLevel, arg1: $Villager, arg2: number): void;
        spawnGolemIfNeeded(arg0: $ServerLevel, arg1: number, arg2: number): void;
        handler$mjl000$quark$resetRestocks(arg0: $CallbackInfo): void;
        static fabric_setItemFoodValues$fabric_content_registries_v0_$md$68cb88$0(arg0: $Map_<any, any>): void;
        static fabric_setGatherableItems$fabric_content_registries_v0_$md$68cb88$1(arg0: $Set_<any>): void;
        static fabric_getGatherableItems$fabric_content_registries_v0_$md$68cb88$2(): $Set<any>;
        setVariant(arg0: $VillagerType_): void;
        callIncreaseMerchantCareer(): void;
        getVariant(): $VillagerType;
        serializeNBT(arg0: $HolderLookup$Provider): $VillagerType;
        static MAX_WEARING_ARMOR_CHANCE: number;
        lastHurtByPlayerTime: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        lastRestockGameTime: number;
        xRot: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        lootTable: $ResourceKey<$LootTable>;
        yHeadRot: number;
        static VILLAGER_SLOT_OFFSET: number;
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
        increaseProfessionLevelOnUpdate: boolean;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        static FOOD_POINTS: $Map<$Item, number>;
        attackAnim: number;
        zOld: number;
        static WANTED_ITEMS: $Set<$Item>;
        static BABY_START_AGE: number;
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
        offers: $MerchantOffers;
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
        static MEMORY_TYPES: $ImmutableList<$MemoryModuleType<never>>;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static BREEDING_FOOD_THRESHOLD: number;
        static POI_MEMORIES: $Map<$MemoryModuleType<$GlobalPos>, $BiPredicate<$Villager, $Holder<$PoiType>>>;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static SPEED_MODIFIER: number;
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
        constructor(arg0: $EntityType_<$Villager>, arg1: $Level_);
        constructor(arg0: $EntityType_<$Villager>, arg1: $Level_, arg2: $VillagerType_);
        set villagerXp(value: number);
    }
    export class $VillagerTrades$DyedArmorForEmeralds implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Item_, arg1: number);
    }
    export class $VillagerTrades$TypeSpecificTrade extends $Record implements $VillagerTrades$ItemListing {
        static oneTradeInBiomes(arg0: $VillagerTrades$ItemListing_, ...arg1: $VillagerType_[]): $VillagerTrades$TypeSpecificTrade;
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        trades(): $Map<$VillagerType, $VillagerTrades$ItemListing>;
        constructor(trades: $Map_<$VillagerType_, $VillagerTrades$ItemListing_>);
    }
    /**
     * Values that may be interpreted as {@link $VillagerTrades$TypeSpecificTrade}.
     */
    export type $VillagerTrades$TypeSpecificTrade_ = { trades?: $Map_<$VillagerType_, $VillagerTrades$ItemListing_>,  } | [trades?: $Map_<$VillagerType_, $VillagerTrades$ItemListing_>, ];
    export class $ClientSideMerchant implements $Merchant {
        isClientSide(): boolean;
        getOffers(): $MerchantOffers;
        getVillagerXp(): number;
        setTradingPlayer(arg0: $Player): void;
        getTradingPlayer(): $Player;
        showProgressBar(): boolean;
        overrideOffers(arg0: $MerchantOffers): void;
        overrideXp(arg0: number): void;
        notifyTrade(arg0: $MerchantOffer): void;
        notifyTradeUpdated(arg0: $ItemStack_): void;
        getNotifyTradeSound(): $SoundEvent;
        openTradingScreen(arg0: $Player, arg1: $Component_, arg2: number): void;
        canRestock(): boolean;
        constructor(arg0: $Player);
        get clientSide(): boolean;
        get offers(): $MerchantOffers;
        get villagerXp(): number;
        get notifyTradeSound(): $SoundEvent;
    }
    export class $VillagerTrades$EnchantedItemForEmeralds implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number);
    }
    export class $VillagerTrades {
        static EXPERIMENTAL_WANDERING_TRADER_TRADES: $List<$Pair<$VillagerTrades$ItemListing[], number>>;
        static EXPERIMENTAL_TRADES: $Map<$VillagerProfession, $Int2ObjectMap<$VillagerTrades$ItemListing[]>>;
        static TRADES: $Map<$VillagerProfession, $Int2ObjectMap<$VillagerTrades$ItemListing[]>>;
        static WANDERING_TRADER_TRADES: $Int2ObjectMap<$VillagerTrades$ItemListing[]>;
        constructor();
    }
    export class $Npc {
    }
    export interface $Npc {
    }
    export class $VillagerTrades$SuspiciousStewForEmerald implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: $SuspiciousStewEffects_, arg1: number, arg2: number);
        constructor(arg0: $Holder_<$MobEffect>, arg1: number, arg2: number);
    }
    export class $VillagerData {
        static getMinXpPerLevel(arg0: number): number;
        getProfession(): $VillagerProfession;
        setProfession(arg0: $VillagerProfession_): $VillagerData;
        static canLevelUp(arg0: number): boolean;
        static getMaxXpPerLevel(arg0: number): number;
        getLevel(): number;
        setLevel(arg0: number): $VillagerData;
        setType(arg0: $VillagerType_): $VillagerData;
        getType(): $VillagerType;
        static CODEC: $Codec<$VillagerData>;
        static MIN_VILLAGER_LEVEL: number;
        static MAX_VILLAGER_LEVEL: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $VillagerData>;
        constructor(arg0: $VillagerType_, arg1: $VillagerProfession_, arg2: number);
    }
    export class $VillagerTrades$ItemsAndEmeraldsToItems implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: $ItemLike_, arg1: number, arg2: number, arg3: $Item_, arg4: number, arg5: number, arg6: number, arg7: number);
        constructor(arg0: $ItemCost_, arg1: number, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: ($ResourceKey_<$EnchantmentProvider>) | undefined);
    }
    export class $VillagerTrades$EmeraldsForVillagerTypeItem implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Map_<$VillagerType_, $Item_>);
    }
    export interface $VillagerType extends RegistryMarked<RegistryTypes.VillagerTypeTag, RegistryTypes.VillagerType> {}
    export class $CatSpawner implements $CustomSpawner {
        tick(arg0: $ServerLevel, arg1: boolean, arg2: boolean): number;
        constructor();
    }
    export class $VillagerDataHolder {
    }
    export interface $VillagerDataHolder extends $VariantHolder<$VillagerType> {
        getVillagerData(): $VillagerData;
        setVillagerData(arg0: $VillagerData): void;
        setVariant(arg0: $VillagerType_): void;
        getVariant(): $VillagerType;
    }
    export class $VillagerTrades$TippedArrowForItemsAndEmeralds implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: $Item_, arg1: number, arg2: $Item_, arg3: number, arg4: number, arg5: number, arg6: number);
    }
    export class $VillagerType {
        static byBiome(arg0: $Holder_<$Biome>): $VillagerType;
        /**
         * @deprecated
         */
        static BY_BIOME: $Map<$ResourceKey<$Biome>, $VillagerType>;
        static SAVANNA: $VillagerType;
        static JUNGLE: $VillagerType;
        static SNOW: $VillagerType;
        static PLAINS: $VillagerType;
        static TAIGA: $VillagerType;
        static DESERT: $VillagerType;
        static SWAMP: $VillagerType;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $VillagerType}.
     */
    export type $VillagerType_ = RegistryTypes.VillagerType;
    export class $VillagerTrades$ItemListing {
    }
    export interface $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
    }
    /**
     * Values that may be interpreted as {@link $VillagerTrades$ItemListing}.
     */
    export type $VillagerTrades$ItemListing_ = ((arg0: $Entity, arg1: $RandomSource) => $MerchantOffer);
    export class $WanderingTraderSpawner implements $CustomSpawner {
        handler$bgp000$supplementaries$supp$tickRedMerchant(serverLevel: $ServerLevel, b: boolean, b1: boolean, cir: $CallbackInfoReturnable<any>): void;
        constant$gje000$apotheosis$replaceMaxChance(arg0: number): number;
        handler$bgp000$supplementaries$supp$spawnRedMerchant(world: $ServerLevel, cir: $CallbackInfoReturnable<any>): void;
        constant$gje000$apotheosis$replaceRng(arg0: number): number;
        constant$gje000$apotheosis$replaceDespawnDelay(arg0: number): number;
        tick(arg0: $ServerLevel, arg1: boolean, arg2: boolean): number;
        static DEFAULT_SPAWN_DELAY: number;
        constructor(arg0: $ServerLevelData);
    }
    export class $VillagerTrades$EmeraldForItems implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        constructor(arg0: $ItemLike_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $ItemCost_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $ItemLike_, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $VillagerTrades$FailureItemListing implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
    }
}
