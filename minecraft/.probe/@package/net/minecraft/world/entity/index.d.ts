import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag_, $Tag, $CompoundTag, $Tag_ } from "@package/net/minecraft/nbt";
import { $SpellData, $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $EntityExtension as $EntityExtension$1 } from "@package/dev/ryanhcode/sable/mixinterface/entity/entity_collision";
import { $AttachmentTargetImpl } from "@package/net/fabricmc/fabric/impl/attachment";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $ILivingEntityExtension, $IEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $EntityAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $ScriptType } from "@package/dev/latvian/mods/kubejs/script";
import { $Axolotl } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $LivingEntityExtensions as $LivingEntityExtensions$1 } from "@package/artifacts/extensions/pocketpiston";
import { $DynamicLightSource } from "@package/toni/sodiumdynamiclights";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $Snowball, $Projectile, $ShulkerBullet, $FishingHook, $WitherSkull, $DragonFireball, $SmallFireball, $SpectralArrow, $LargeFireball, $FireworkRocketEntity, $ThrownExperienceBottle, $EyeOfEnder, $Arrow, $ThrownEgg, $ThrownPotion, $ThrownTrident, $EvokerFangs, $ProjectileDeflection, $LlamaSpit, $ThrownEnderpearl } from "@package/net/minecraft/world/entity/projectile";
import { $TheFasterEntityCollisionContext } from "@package/dev/ryanhcode/sable/mixinhelpers/entity/entity_collision";
import { $BalmEntity } from "@package/net/blay09/mods/balm/api/entity";
import { $Endimatable, $PlayableEndimation, $Endimatable$EndimatedState, $PlayableEndimation_ } from "@package/com/teamabnormals/blueprint/core/endimator";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $SubLevelEntityCollision$CollisionInfo } from "@package/dev/ryanhcode/sable/sublevel/entity_collision";
import { $StepSoundSource, $SoundEngine } from "@package/eu/ha3/presencefootsteps/sound";
import { $Allay } from "@package/net/minecraft/world/entity/animal/allay";
import { $InvokerSpawnPlacements } from "@package/org/violetmoon/zeta/mixin/mixins";
import { $AccessorEntity as $AccessorEntity$1 } from "@package/net/darkhax/bookshelf/common/mixin/access/entity";
import { $GameEvent, $DynamicGameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $AccessorEntity as $AccessorEntity$2 } from "@package/top/theillusivec4/curios/mixin/core";
import { $HashMap, $UUID_, $Set_, $List, $Collection_, $List_, $UUID, $Optional, $Map, $Map_, $Collection, $Set } from "@package/java/util";
import { $Painting, $ArmorStand, $ItemFrame, $GlowItemFrame, $LeashFenceKnotEntity } from "@package/net/minecraft/world/entity/decoration";
import { $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";
import { $Donkey, $Llama, $Mule, $ZombieHorse, $Horse, $SkeletonHorse, $TraderLlama } from "@package/net/minecraft/world/entity/animal/horse";
import { $HolderLookup$Provider, $Direction, $Holder_, $Position, $BlockPos, $HolderSet_, $BlockPos_, $Holder$Reference, $Holder, $Direction$Axis_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $MobAccessor as $MobAccessor$1, $LivingEntityAccessor as $LivingEntityAccessor$10, $EntityAccessor as $EntityAccessor$5 } from "@package/artifacts/mixin/accessors";
import { $ExperienceOrbAccessor, $AgeableMobAccessor, $LivingEntityAccessor as $LivingEntityAccessor$1, $MobAccessor, $EntityAccessor as $EntityAccessor$9 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/entities";
import { $Tickable } from "@package/me/kall/doespotatotick/ext";
import { $Enum, $Iterable, $Class, $Object, $Record } from "@package/java/lang";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $EntityAccessor as $EntityAccessor$1 } from "@package/dev/tr7zw/transition/mixin";
import { $LivingEntityAccessor as $LivingEntityAccessor$8 } from "@package/me/kall/doespotatotick/mixin/access";
import { $EntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Fluid, $FluidState, $PushReaction } from "@package/net/minecraft/world/level/material";
import { $AzAnimatorAccessor, $AzAnimator } from "@package/mod/azure/azurelib/common/animation";
import { $Inactive, $ActivationEntity } from "@package/me/wesley1808/servercore/common/interfaces/activation_range";
import { $ImmutableList, $Multimap, $ImmutableSet } from "@package/com/google/common/collect";
import { $PrimedTnt, $ItemEntity, $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $KubeRayTraceResult, $EntityPotionEffectsJS } from "@package/dev/latvian/mods/kubejs/entity";
import { $SyncedDataHolder, $EntityDataAccessor_, $EntityDataAccessor, $SynchedEntityData, $SynchedEntityData$DataValue_ } from "@package/net/minecraft/network/syncher";
import { $IMobCategory } from "@package/me/wesley1808/servercore/common/interfaces";
import { $EntityStickExtension, $LivingEntityStickExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entities_stick_sublevels";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $ITransmogPreview } from "@package/io/redspace/ironslib/patreon/transmog";
import { $CapeData, $ICapeDataProvider } from "@package/io/redspace/ironslib/game/client";
import { $EntityAccess } from "@package/snownee/jade/mixin";
import { $DamageSource, $DamageSources, $DamageSource_, $CombatTracker } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $MobExRule } from "@package/com/crackerjackbox/mobcontrol/rule";
import { $Triple, $Triple_ } from "@package/com/supermartijn642/fusion/util";
import { $ILivingEntity } from "@package/eu/ha3/presencefootsteps/mixins";
import { $RegistryEntry } from "@package/me/kall/duplicationless/ext";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $LivingEntityExtensions } from "@package/artifacts/extensions/ability";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $SyncedSpellData } from "@package/io/redspace/ironsspellbooks/capabilities/magic";
import { $AccessorWalkAnimationState, $AccessorEntity } from "@package/com/railwayteam/railways/mixin/client";
import { $SlotResult } from "@package/top/theillusivec4/curios/api";
import { $SoundEvent, $SoundSource, $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $CrashReportCategory, $BlockUtil$FoundRectangle } from "@package/net/minecraft";
import { $EntityAccessor as $EntityAccessor$10 } from "@package/net/caffeinemc/mods/lithium/mixin/block/hopper";
import { $ConfigurableKnockback } from "@package/net/bettercombat/logic/knockback";
import { $Bat } from "@package/net/minecraft/world/entity/ambient";
import { $ActivationType } from "@package/me/wesley1808/servercore/common/config/data/activation_range";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $SoundAction, $IShearable, $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $EntityAccess as $EntityAccess$1, $EntityInLevelCallback, $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $EntityExtension } from "@package/com/supermartijn642/fusion/extensions";
import { $SlotReference } from "@package/io/wispforest/accessories/api/slot";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DynamicLightHandler, $DynamicLightHandler_ } from "@package/dev/lambdaurora/lambdynlights/api";
import { $EntityMovementExtension, $LivingEntityMovementExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entity_sublevel_collision";
import { $Errorable } from "@package/com/bawnorton/neruina/extend";
import { $Portal_, $Mirror_, $Portal$Transition, $Rotation_, $Block_ } from "@package/net/minecraft/world/level/block";
import { $EnchantmentLocationBasedEffect } from "@package/net/minecraft/world/item/enchantment/effects";
import { $EntityKJS, $EntityTypeKJS, $LivingEntityKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $MinecartFurnace, $MinecartHopper, $MinecartChest, $MinecartTNT, $MinecartCommandBlock, $Boat, $ChestBoat, $MinecartSpawner, $Minecart } from "@package/net/minecraft/world/entity/vehicle";
import { $Transformation } from "@package/com/mojang/math";
import { $EnderDragon, $EndCrystal } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $MoveControl, $LookControl, $JumpControl } from "@package/net/minecraft/world/entity/ai/control";
import { $EndimationEffectHandler } from "@package/com/teamabnormals/blueprint/core/endimator/effects";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $SplashPlaneParticle } from "@package/com/leclowndu93150/wakes/particle/custom";
import { $ParticleEmitter } from "@package/foundry/veil/api/quasar/particle";
import { $ICitadelDataEntity } from "@package/com/github/alexthe666/citadel/server/entity";
import { $LootParams, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Heightmap$Types_, $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $EntityTracker$Filterable } from "@package/me/kall/duplicationless/data";
import { $IEntity } from "@package/com/jesz/createdieselgenerators/mixin_interfaces";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Camel } from "@package/net/minecraft/world/entity/animal/camel";
import { $LivingEntityAccessor as $LivingEntityAccessor$6 } from "@package/umpaz/brewinandchewin/common/mixin";
import { $IMagicEntity } from "@package/io/redspace/ironsspellbooks/api/entity";
import { $PotionContents_ } from "@package/net/minecraft/world/item/alchemy";
import { $PlayerTeam, $ScoreHolder, $Team } from "@package/net/minecraft/world/scores";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";
import { $Goal, $PanicGoal, $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $Sensing } from "@package/net/minecraft/world/entity/ai/sensing";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $IClumpedOrb } from "@package/com/blamejared/clumps/helper";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureElement, $FeatureFlag, $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Panda, $Fox, $SnowGolem, $Wolf, $Animal, $Cod, $Chicken, $Cat, $Squid, $Sheep, $Bee, $Dolphin, $Parrot, $Turtle, $Salmon, $Pufferfish, $IronGolem, $Ocelot, $PolarBear, $Cow, $Pig, $TropicalFish, $MushroomCow, $Rabbit } from "@package/net/minecraft/world/entity/animal";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $IRenderableEntity } from "@package/me/srrapero720/chloride/api";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $AccessoriesCapability, $AccessoriesHolder } from "@package/io/wispforest/accessories/api";
import { $IHealthFixable } from "@package/net/darkhax/maxhealthfix/common/impl";
import { $Component_, $HoverEvent, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $ISlotType } from "@package/top/theillusivec4/curios/api/type";
import { $EntityExtension as $EntityExtension$2 } from "@package/foundry/veil/ext";
import { $ExperienceOrbAccess } from "@package/com/blamejared/clumps/mixin";
import { $LivingEntityAccessor as $LivingEntityAccessor$7 } from "@package/io/wispforest/accessories/mixin";
import { $CommandSourceStack, $CommandSource } from "@package/net/minecraft/commands";
import { $EntityAccessForge } from "@package/ru/magistu/siegemachines/mixin";
import { $Husk, $Evoker, $Drowned, $WitherSkeleton, $Creeper, $Shulker, $Endermite, $Spider, $Blaze, $EnderMan, $MagmaCube, $Witch, $Bogged, $Vindicator, $Zombie, $Strider, $Guardian, $Slime, $ZombifiedPiglin, $Stray, $Silverfish, $Zoglin, $CaveSpider, $Skeleton, $Illusioner, $ZombieVillager, $Pillager, $ElderGuardian, $Ravager, $Phantom, $Vex, $Ghast, $Giant } from "@package/net/minecraft/world/entity/monster";
import { $EntityCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $Vector3d, $Vector3f } from "@package/org/joml";
import { $LeashExtension, $LeashDataExtension } from "@package/com/blackgear/vanillabackport/common/api/leash";
import { $LivingEntityAccessor as $LivingEntityAccessor$3 } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Attribute, $AttributeMap, $AttributeSupplier$Builder, $AttributeModifier, $AttributeInstance, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $IMob } from "@package/com/crackerjackbox/mobcontrol/iface";
import { $KubeJSCuriosHelper } from "@package/net/zhaiji/kubejscurios/curios";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $DynamicLightHandlerHolder } from "@package/toni/sodiumdynamiclights/accessor";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $EntityAccessor as $EntityAccessor$2 } from "@package/com/brandon3055/brandonscore/mixin";
import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $ChunkPos, $Level_, $LevelReader, $EntityGetter, $Level, $ServerLevelAccessor, $Explosion, $LevelAccessor, $BlockGetter } from "@package/net/minecraft/world/level";
import { $CustomData } from "@package/net/minecraft/world/item/component";
import { $AccessorLivingEntity } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $MagicEntityKJS } from "@package/com/squoshi/irons_spells_js/spell";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Tadpole, $Frog } from "@package/net/minecraft/world/entity/animal/frog";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $DimensionTransition_, $DimensionTransition } from "@package/net/minecraft/world/level/portal";
import { $ExtensionHolder } from "@package/dev/tr7zw/transition/mc/extending";
import { $ICurioStacksHandler } from "@package/top/theillusivec4/curios/api/type/inventory";
import { $ChangeSubscriber$CountChangeSubscriber } from "@package/net/caffeinemc/mods/lithium/common/util/change_tracking";
import { $Codec } from "@package/com/mojang/serialization";
import { $FluidType, $FluidType_ } from "@package/net/neoforged/neoforge/fluids";
import { $BreezeWindCharge, $WindCharge } from "@package/net/minecraft/world/entity/projectile/windcharge";
import { $LivingEntityInvoker } from "@package/dev/shadowsoffire/apotheosis/mixin";
import { $StringRepresentable$EnumCodec, $FormattedCharSequence_, $Brightness, $FormattedCharSequence, $RandomSource, $Brightness_, $OptionEnum, $StringRepresentable } from "@package/net/minecraft/util";
import { $InteractionHand_, $Nameable, $Container, $InteractionResult, $DifficultyInstance, $InteractionHand } from "@package/net/minecraft/world";
import { $EntityLootDropInterface } from "@package/com/telepathicgrunt/the_bumblezone/loot";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $MobSpawn } from "@package/com/crackerjackbox/mobcontrol/data";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $Cullable } from "@package/dev/tr7zw/entityculling/versionless/access";
import { $EntityAccessor as $EntityAccessor$6, $LivingEntityAccessor as $LivingEntityAccessor$11 } from "@package/com/blackgear/vanillabackport/core/mixin/access";
import { $ProjectileWeaponItem, $ItemStack_, $ItemStack, $ItemDisplayContext_, $ItemDisplayContext, $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $EquipmentEntity, $EquipmentEntity$TickableEnchantmentTrackingEntity, $NavigatingEntity, $EquipmentEntity$EquipmentTrackingEntity } from "@package/net/caffeinemc/mods/lithium/common/entity";
import { $MobEntityAccessor } from "@package/de/dafuqs/spectrum/mixin/accessors";
import { $EntityExtension as $EntityExtension$3 } from "@package/dev/ryanhcode/sable/mixinterface";
import { $ProducesWake } from "@package/com/leclowndu93150/wakes/duck";
import { $InjectedEntityTypeExtension } from "@package/dev/architectury/extensions/injected";
import { $AccessoriesLivingEntityExtension, $AccessoriesAPIAccess, $CosmeticArmorLookupTogglable } from "@package/io/wispforest/accessories/pond";
import { $EntityAccessor as $EntityAccessor$7, $LivingEntityAccessor as $LivingEntityAccessor$9 } from "@package/io/redspace/ironsspellbooks/mixin";
import { $AABB_, $Vec3_, $HitResult, $AABB, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $LivingEntityAccessor, $EntityAccessor as $EntityAccessor$4 } from "@package/com/aetherteam/aether/mixin/mixins/common/accessor";
import { $IDataManager, $TrackedData } from "@package/com/teamabnormals/blueprint/common/world/storage/tracking";
import { $FabricEntityTypeImpl, $FabricEntityTypeImpl$Builder, $FabricEntityTypeImpl$Builder$Mob, $FabricEntityTypeImpl$Builder$Living } from "@package/net/fabricmc/fabric/impl/object/builder";
import { $SpawnPlacementsAccessor } from "@package/com/blackgear/platform/core/mixin/access";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $FabricEntityType$Builder } from "@package/net/fabricmc/fabric/api/object/builder/v1/entity";
import { $EntityAccessor as $EntityAccessor$8, $LivingEntityAccessor as $LivingEntityAccessor$2 } from "@package/org/figuramc/figura/mixin";
import { $EntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $IntFunction, $Predicate_, $Function_, $Supplier_, $BiConsumer_, $ToIntFunction_, $Consumer_, $Predicate, $Consumer, $BiPredicate_ } from "@package/java/util/function";
import { $Object2ObjectMap, $ObjectList } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerEntity, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $DisplayAccessor } from "@package/dev/tr7zw/entityculling/mixin";
import { LocalPlayer, AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $PiglinBrute, $Piglin } from "@package/net/minecraft/world/entity/monster/piglin";
import { $EntityAnchorArgument$Anchor_ } from "@package/net/minecraft/commands/arguments";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $LivingEntityAccessor as $LivingEntityAccessor$4, $EntityAccessor as $EntityAccessor$3 } from "@package/net/mehvahdjukaar/supplementaries/mixins";
import { $VecDeltaCodec, $ClientboundAddEntityPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $LivingEntityAccessor as $LivingEntityAccessor$5 } from "@package/net/bettercombat/mixin/player";
import { $Villager, $WanderingTrader } from "@package/net/minecraft/world/entity/npc";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $LEInvoker } from "@package/dev/shadowsoffire/apothic_attributes/util";
import { $Stream } from "@package/java/util/stream";
import { $ICuriosItemHandler, $ICurio } from "@package/top/theillusivec4/curios/api/type/capability";
export * as ai from "@package/net/minecraft/world/entity/ai";
export * as animal from "@package/net/minecraft/world/entity/animal";
export * as projectile from "@package/net/minecraft/world/entity/projectile";
export * as npc from "@package/net/minecraft/world/entity/npc";
export * as boss from "@package/net/minecraft/world/entity/boss";
export * as player from "@package/net/minecraft/world/entity/player";
export * as monster from "@package/net/minecraft/world/entity/monster";
export * as decoration from "@package/net/minecraft/world/entity/decoration";
export * as vehicle from "@package/net/minecraft/world/entity/vehicle";
export * as schedule from "@package/net/minecraft/world/entity/schedule";
export * as ambient from "@package/net/minecraft/world/entity/ambient";
export * as raid from "@package/net/minecraft/world/entity/raid";
export * as item from "@package/net/minecraft/world/entity/item";

declare module "@package/net/minecraft/world/entity" {
    export class $GlowSquid extends $Squid {
        getDarkTicksRemaining(): number;
        static checkGlowSquidSpawnRules(arg0: $EntityType_<$LivingEntity>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
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
        tentacleAngle: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        oldTentacleAngle: number;
        armorDropChances: number[];
        persistenceRequired: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zBodyRot: number;
        zo: number;
        xBodyRot: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        zBodyRotO: number;
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
        xBodyRotO: number;
        tentacleMovement: number;
        spells: $HashMap<any, any>;
        lastDamageStamp: number;
        levelCallback: $EntityInLevelCallback;
        oldTentacleMovement: number;
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
        constructor(arg0: $EntityType_<$GlowSquid>, arg1: $Level_);
        get darkTicksRemaining(): number;
    }
    export class $LivingEntity extends $Entity implements $Attackable, $ILivingEntityExtension, $KubeJSCuriosHelper, $LivingEntityAccessor$4, $LivingEntityAccessor$7, $AccessoriesAPIAccess, $AccessoriesLivingEntityExtension, $CosmeticArmorLookupTogglable, $LivingEntityAccessor$1, $ICapeDataProvider, $ITransmogPreview, $EquipmentEntity, $ChangeSubscriber$CountChangeSubscriber<any>, $EquipmentEntity$TickableEnchantmentTrackingEntity, $EquipmentEntity$EquipmentTrackingEntity, $LivingEntityAccessor$6, $LivingEntityExtensions, $LivingEntityAccessor$10, $LivingEntityExtensions$1, $LivingEntityAccessor$9, $LivingEntityAccessor$8, $MagicEntityKJS, $LivingEntityAccessor$11, $LEInvoker, $LivingEntityInvoker, $LivingEntityAccessor$5, $ConfigurableKnockback, $LivingEntityAccessor$2, $LivingEntityAccessor, $ICitadelDataEntity, $DynamicLightSource, $LivingEntityKJS, $LivingEntityAccessor$3, $LivingEntityStickExtension, $LivingEntityMovementExtension, $AccessorLivingEntity, $ILivingEntity, $StepSoundSource, $EntityAccessor$2, $IHealthFixable {
        redirect$kne000$sable$maxAltitude$mixinextras$bridge$583(arg0: number, arg1: number, arg2: $LocalRef<any>): number;
        isDeadOrDying(): boolean;
        isUsingItem(): boolean;
        swing(arg0: $InteractionHand_): void;
        swing(arg0: $InteractionHand_, arg1: boolean): void;
        getItemInHand(arg0: $InteractionHand_): $ItemStack;
        isSleeping(): boolean;
        releaseUsingItem(): void;
        hasEffect(arg0: $Holder_<$MobEffect>): boolean;
        getMainHandItem(): $ItemStack;
        hasInfiniteMaterials(): boolean;
        getScale(): number;
        skipDropExperience(): void;
        activeLocationDependentEnchantments(): $Map<$Enchantment, $Set<$EnchantmentLocationBasedEffect>>;
        artifacts$hasTickingAbilities(): boolean;
        getMaxHealth(): number;
        setHealth(arg0: number): void;
        getBrain(): $Brain<never>;
        canAttackType(arg0: $EntityType_<never>): boolean;
        static createLivingAttributes(): $AttributeSupplier$Builder;
        /**
         * @deprecated
         */
        canBreatheUnderwater(): boolean;
        getSwimAmount(arg0: number): number;
        hasLandedInLiquid(): boolean;
        getSleepingPos(): ($BlockPos) | undefined;
        setLastHurtByMob(arg0: $LivingEntity): void;
        isBaby(): boolean;
        getAgeScale(): number;
        shouldDropExperience(): boolean;
        getExperienceReward(arg0: $ServerLevel, arg1: $Entity): number;
        getLastHurtByMob(): $LivingEntity;
        getLastAttacker(): $LivingEntity;
        getLastHurtByMobTimestamp(): number;
        setLastHurtByPlayer(arg0: $Player): void;
        getLastHurtMob(): $LivingEntity;
        getLastHurtMobTimestamp(): number;
        setLastHurtMob(arg0: $Entity): void;
        getNoActionTime(): number;
        setNoActionTime(arg0: number): void;
        shouldDiscardFriction(): boolean;
        setDiscardFriction(arg0: boolean): void;
        onEquipItem(arg0: $EquipmentSlot_, arg1: $ItemStack_, arg2: $ItemStack_): void;
        onEquipItem(slotReference: $SlotReference, oldItem: $ItemStack_, newItem: $ItemStack_): void;
        getActiveEffects(): $Collection<$MobEffectInstance>;
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        getHealth(): number;
        getAbsorptionAmount(): number;
        isFallFlying(): boolean;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        getEffect(arg0: $Holder_<$MobEffect>): $MobEffectInstance;
        setSleepingPos(arg0: $BlockPos_): void;
        handler$ebp000$spacecatasb$tickEffects(arg0: $CallbackInfo): void;
        onEffectRemoved(arg0: $MobEffectInstance): void;
        onEffectUpdated(arg0: $MobEffectInstance, arg1: boolean, arg2: $Entity): void;
        handler$fag000$irons_spellbooks$updateInvisibilityStatus(arg0: $CallbackInfo): void;
        static areAllEffectsAmbient(arg0: $Collection_<$MobEffectInstance>): boolean;
        getVisibilityPercent(arg0: $Entity): number;
        getArmorCoverPercentage(): number;
        getItemBySlot(arg0: $EquipmentSlot_): $ItemStack;
        canAttack(arg0: $LivingEntity): boolean;
        canAttack(arg0: $LivingEntity, arg1: $TargetingConditions): boolean;
        handler$ece000$cataclysm$onCanAttack(arg0: $LivingEntity, arg1: $CallbackInfoReturnable<any>): void;
        canBeSeenAsEnemy(): boolean;
        canBeSeenByAnyone(): boolean;
        removeAllEffects(): boolean;
        getActiveEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        addEffect(arg0: $MobEffectInstance, arg1: $Entity): boolean;
        addEffect(arg0: $MobEffectInstance): boolean;
        onEffectAdded(arg0: $MobEffectInstance, arg1: $Entity): void;
        /**
         * @deprecated
         */
        canBeAffected(arg0: $MobEffectInstance): boolean;
        handler$zid000$undergroundworlds$canBeAffected(arg0: $MobEffectInstance, arg1: $CallbackInfoReturnable<any>): void;
        handler$ebp001$spacecatasb$canBeAffected(arg0: $MobEffectInstance, arg1: $CallbackInfoReturnable<any>): void;
        forceAddEffect(arg0: $MobEffectInstance, arg1: $Entity): void;
        isInvertedHealAndHarm(): boolean;
        removeEffectNoUpdate(arg0: $Holder_<$MobEffect>): $MobEffectInstance;
        removeEffect(arg0: $Holder_<$MobEffect>): boolean;
        handler$fag000$irons_spellbooks$onEffectAdded(arg0: $MobEffectInstance, arg1: $Entity, arg2: $CallbackInfo): void;
        sendEffectToPassengers(arg0: $MobEffectInstance): void;
        handler$fag000$irons_spellbooks$onEffectUpdated(arg0: $MobEffectInstance, arg1: boolean, arg2: $Entity, arg3: $CallbackInfo): void;
        handler$fag000$irons_spellbooks$onEffectRemoved(arg0: $MobEffectInstance, arg1: $CallbackInfo): void;
        getMaxAbsorption(): number;
        setAbsorptionAmount(arg0: number): void;
        heal(arg0: number): void;
        handler$jme000$simplyswords$tick(cir: $CallbackInfoReturnable<any>): void;
        handler$fag000$irons_spellbooks$changeSummonHurtCredit(arg0: $DamageSource_, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        stopSleeping(): void;
        isDamageSourceBlocked(arg0: $DamageSource_): boolean;
        hurtCurrentlyUsedShield(arg0: number): void;
        hurtHelmet(arg0: $DamageSource_, arg1: number): void;
        setSpeed(arg0: number): void;
        actuallyHurt(arg0: $DamageSource_, arg1: number): void;
        knockback(arg0: number, arg1: number, arg2: number): void;
        indicateDamage(arg0: number, arg1: number): void;
        makeSound(arg0: $SoundEvent_): void;
        die(arg0: $DamageSource_): void;
        handler$zid001$undergroundworlds$hurt(arg0: $DamageSource_, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        removeEffectsCuredBy(arg0: $EffectCure): boolean;
        getLastDamageSource(): $DamageSource;
        getVoicePitch(): number;
        getKillCredit(): $LivingEntity;
        getCombatTracker(): $CombatTracker;
        wasExperienceConsumed(): boolean;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        localvar$heo000$bettercombat$takeKnockback_HEAD_changeStrength(knockbackStrength: number): number;
        getFallSounds(): $LivingEntity$Fallsounds;
        getHurtDir(): number;
        getHitbox(): $AABB;
        getEatingSound(arg0: $ItemStack_): $SoundEvent;
        getLastClimbablePos(): ($BlockPos) | undefined;
        onClimbable(): boolean;
        handler$jlg000$vinery$modifyJumpBoostFallDamage(fallDistance: number, damageMultiplier: number, cir: $CallbackInfoReturnable<any>): void;
        getArmorValue(): number;
        hurtArmor(arg0: $DamageSource_, arg1: number): void;
        redirect$gbd000$apothic_attributes$apoth_sunderingHasEffect(arg0: $LivingEntity, arg1: $Holder_<any>): boolean;
        redirect$gbd000$apothic_attributes$apoth_sunderingGetAmplifier(arg0: $MobEffectInstance): number;
        redirect$gbd000$apothic_attributes$apoth_sunderingApplyEffect(arg0: number, arg1: number, arg2: $DamageSource_, arg3: number): number;
        redirect$gbd000$apothic_attributes$apoth_applyProtPen(arg0: number, arg1: number, arg2: $DamageSource_, arg3: number): number;
        getArrowCount(): number;
        setArrowCount(arg0: number): void;
        getStingerCount(): number;
        setStingerCount(arg0: number): void;
        getCurrentSwingDuration(): number;
        setItemSlot(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        handler$heo000$bettercombat$getAttributeValue_Inject(attribute: $Holder_<any>, cir: $CallbackInfoReturnable<any>): void;
        getAttributeBaseValue(arg0: $Holder_<$Attribute>): number;
        getOffhandItem(): $ItemStack;
        isHolding(arg0: $Predicate_<$ItemStack>): boolean;
        isHolding(arg0: $Item_): boolean;
        setItemInHand(arg0: $InteractionHand_, arg1: $ItemStack_): void;
        hasItemInSlot(arg0: $EquipmentSlot_): boolean;
        canUseSlot(arg0: $EquipmentSlot_): boolean;
        getArmorSlots(): $Iterable<$ItemStack>;
        getHandSlots(): $Iterable<$ItemStack>;
        getArmorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        getAllSlots(): $Iterable<$ItemStack>;
        dismountVehicle(arg0: $Entity): void;
        wrapOperation$kne000$sable$onDismountVehicle(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>): void;
        getJumpPower(): number;
        getJumpBoostPower(): number;
        jumpFromGround(): void;
        handler$kne000$sable$jumpFromGround(arg0: $CallbackInfo): void;
        canStandOnFluid(arg0: $FluidState): boolean;
        travel(arg0: $Vec3_): void;
        wrapOperation$bec000$supplementaries$supp$onTravel(instance: $LivingEntity, state: $FluidState, original: $Operation_<any>): boolean;
        getSpeed(): number;
        modify$fjo000$additionalentityattributes$additionalEntityAttributes$waterSpeed(arg0: number): number;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: $Vec3_): $Vec3;
        wrapOperation$emi000$artifacts$travel(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, entity: $Entity, original: $Operation_<any>): number;
        handleRelativeFrictionAndCalculateMovement(arg0: $Vec3_, arg1: number): $Vec3;
        calculateEntityAnimation(arg0: boolean): void;
        handler$knl000$sable$beforeAnimation(arg0: $Vec3_, arg1: $CallbackInfo): void;
        isSuppressingSlidingDownLadder(): boolean;
        doHurtTarget(arg0: $Entity): boolean;
        handler$jme00b$simplyswords$tick(ci: $CallbackInfo): void;
        updatingUsingItem(): void;
        aiStep(): void;
        equipmentHasChanged(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        handler$fag000$irons_spellbooks$handleEquipmentChanges(arg0: $CallbackInfoReturnable<any>): void;
        wrapOperation$hph000$geckolib$allowLazyStackIdParity(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        isSensitiveToWater(): boolean;
        isAutoSpinAttack(): boolean;
        handler$chi000$lithium$handleStopRiding(arg0: $CallbackInfo): void;
        setJumping(arg0: boolean): void;
        onItemPickup(arg0: $ItemEntity): void;
        hasLineOfSight(arg0: $Entity): boolean;
        getAttackAnim(arg0: number): number;
        static resetForwardDirectionOfRelativePortalPosition(arg0: $Vec3_): $Vec3;
        onEnterCombat(): void;
        onLeaveCombat(): void;
        getMainArm(): $HumanoidArm;
        getUsedItemHand(): $InteractionHand;
        stopUsingItem(): void;
        getUseItemRemainingTicks(): number;
        startUsingItem(arg0: $InteractionHand_): void;
        getUseItem(): $ItemStack;
        getTicksUsingItem(): number;
        getFallFlyingTicks(): number;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        isAffectedByPotions(): boolean;
        attackable(): boolean;
        setRecordPlayingNearby(arg0: $BlockPos_, arg1: boolean): void;
        canTakeItem(arg0: $ItemStack_): boolean;
        getDismountPoses(): $ImmutableList<$Pose>;
        getLocalBoundsForPose(arg0: $Pose_): $AABB;
        clearSleepingPos(): void;
        startSleeping(arg0: $BlockPos_): void;
        handler$mih000$quark$overrideForFoxhounds(arg0: $CallbackInfoReturnable<any>): void;
        getBedOrientation(): $Direction;
        getProjectile(arg0: $ItemStack_): $ItemStack;
        eat(arg0: $Level_, arg1: $ItemStack_, arg2: $FoodProperties_): $ItemStack;
        eat(arg0: $Level_, arg1: $ItemStack_): $ItemStack;
        onEquippedItemBroken(arg0: $Item_, arg1: $EquipmentSlot_): void;
        static getSlotForHand(arg0: $InteractionHand_): $EquipmentSlot;
        shouldRiderFaceForward(arg0: $Player): boolean;
        getEquipmentSlotForItem(arg0: $ItemStack_): $EquipmentSlot;
        handler$gei000$curios$curio$canFreeze(arg0: $CallbackInfoReturnable<any>): void;
        handler$fag000$irons_spellbooks$isCurrentlyGlowing(arg0: $CallbackInfoReturnable<any>): void;
        handler$kln001$sable$recreateFromPacket(arg0: $ClientboundAddEntityPacket, arg1: $CallbackInfo): void;
        canDisableShield(): boolean;
        accessoriesCapability(): $AccessoriesCapability;
        accessoriesHolder(): $AccessoriesHolder;
        setLookupToggle(value: boolean): void;
        getLookupToggle(): boolean;
        irons_lib$getCapeData(): $CapeData;
        irons_lib$isTransmogPreview(): boolean;
        irons_lib$setTransmogPreview(arg0: boolean): void;
        lithium$onEquipmentReplaced(arg0: $ItemStack_, arg1: $ItemStack_): void;
        lithium$notify(arg0: $ItemStack_, arg1: number): void;
        lithium$onEquipmentChanged(): void;
        lithium$notifyCount(arg0: $ItemStack_, arg1: number, arg2: number): void;
        lithium$forceUnsubscribe(arg0: $ItemStack_, arg1: number): void;
        lithium$updateHasTickableEnchantments(arg0: $ItemStack_, arg1: $ItemStack_): void;
        lithium$notifyAfterEnchantmentChange(arg0: $ItemStack_, arg1: number): void;
        artifacts$setTickingAbilities(hasTickingAbilities: boolean): void;
        artifacts$getPocketPistonLength(): number;
        rarcompat$travel(arg0: $Vec3_, arg1: $Mob): void;
        apoth_setInternalAbsorption(arg0: number): void;
        setKnockbackMultiplier_BetterCombat(value: number): void;
        getCitadelEntityData(): $CompoundTag;
        setCitadelEntityData(arg0: $CompoundTag_): void;
        sable$setupLerp(): void;
        sable$applyLerp(): void;
        sable$getLerpTarget(): $Vec3;
        redirect$kne000$sable$maxAltitude(arg0: number, arg1: number, arg2: $Entity): number;
        sable$getInheritedVelocity(): $Vector3d;
        getStepGenerator(arg0: $SoundEngine): $Optional<any>;
        isStepBlocked(): boolean;
        maxhealthfix$setRestorePoint(arg0: number): void;
        getAttributeValue(arg0: $Holder_<$Attribute>): number;
        take(arg0: $Entity, arg1: number): void;
        isBlocking(): boolean;
        getAttributes(): $AttributeMap;
        getAttribute(arg0: $Holder_<$Attribute>): $AttributeInstance;
        onDamageTaken(arg0: $DamageContainer): void;
        sinkInFluid(arg0: $FluidType_): void;
        moveInFluid(arg0: $FluidState, arg1: $Vec3_, arg2: number): boolean;
        jumpInFluid(arg0: $FluidType_): void;
        modifyExpressionValue$fkl000$additionalentityattributes$additionalEntityAttributes$modifyUpwardSwimming(arg0: number, arg1: $FluidType_): number;
        modifyExpressionValue$fkl000$additionalentityattributes$additionalEntityAttributes$knockDownwards(arg0: number, arg1: $FluidType_): number;
        canDrownInFluidType(arg0: $FluidType_): boolean;
        self(): $LivingEntity;
        getCuriosInventory(): $ICuriosItemHandler;
        findFirstCurio(arg0: $Item_): ($SlotResult) | undefined;
        findFirstCurio(arg0: $Predicate_<$ItemStack>): ($SlotResult) | undefined;
        getEquippedCurios(): $IItemHandlerModifiable;
        getCuriosStacksHandler(arg0: string): ($ICurioStacksHandler) | undefined;
        isCuriosEquipped(arg0: $Predicate_<$ItemStack>): boolean;
        isCuriosEquipped(arg0: $Item_): boolean;
        addCuriosSlotModifier(arg0: string, arg1: $ResourceLocation_, arg2: number, arg3: $AttributeModifier$Operation_): void;
        removeCuriosSlotModifier(arg0: string, arg1: $ResourceLocation_): void;
        clearCuriosSlotModifiers(): void;
        getCuriosSlotModifiers(): $Multimap<string, $AttributeModifier>;
        getEntityCuriosRegistrySlots(): $Map<string, $ISlotType>;
        setEquippedCurio(arg0: string, arg1: number, arg2: $ItemStack_): void;
        findCurios(arg0: $Predicate_<$ItemStack>): $List<$SlotResult>;
        findCurios(...arg0: string[]): $List<$SlotResult>;
        findCurios(arg0: $Item_): $List<$SlotResult>;
        findCurio(arg0: string, arg1: number): ($SlotResult) | undefined;
        getCuriosRegistrySlot(arg0: string): ($ISlotType) | undefined;
        getCuriosRegistrySlots(): $Map<string, $ISlotType>;
        getCurioCapability(arg0: $ItemStack_): ($ICurio) | undefined;
        getAllCurios(): $Map<string, $ICurioStacksHandler>;
        getStackInCuriosSlots(arg0: $ItemStack_): $Map<string, $ISlotType>;
        getMagicData(): $MagicData;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageHeldItem(): void;
        getDefaultMovementSpeed(): number;
        getReachDistance(): number;
        rayTrace(): $KubeRayTraceResult;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        isUndead(): boolean;
        getPotionEffects(): $EntityPotionEffectsJS;
        swing(): void;
        swing(hand: $InteractionHand_): void;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        getMainHandItem(): $ItemStack;
        setMainHandItem(item: $ItemStack_): void;
        getOffHandItem(): $ItemStack;
        setOffHandItem(item: $ItemStack_): void;
        getHeadArmorItem(): $ItemStack;
        setHeadArmorItem(item: $ItemStack_): void;
        getChestArmorItem(): $ItemStack;
        setChestArmorItem(item: $ItemStack_): void;
        getLegsArmorItem(): $ItemStack;
        setLegsArmorItem(item: $ItemStack_): void;
        getFeetArmorItem(): $ItemStack;
        setFeetArmorItem(item: $ItemStack_): void;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        getTotalMovementSpeed(): number;
        setDefaultMovementSpeed(speed: number): void;
        setMovementSpeedAddition(speed: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        invokeShouldDropLoot(): boolean;
        setUseItem(arg0: $ItemStack_): void;
        accessors$breakItem(arg0: $ItemStack_): void;
        bumblezone$isJumping(): boolean;
        bumblezone$callIsAlwaysExperienceDropper(): boolean;
        bumblezone$setLastDamageSource(arg0: $DamageSource_): void;
        bumblezone$setLastDamageStamp(arg0: number): void;
        bumblezone$callHurtArmor(arg0: $DamageSource_, arg1: number): void;
        brewinandchewin$invokeUpdateEffectVisibility(): void;
        getLastHurtByPlayerTime(): number;
        getLastHurtByPlayer(): $Player;
        setLivingEntityFlagInvoker(arg0: number, arg1: boolean): void;
        dpt$isDead(): boolean;
        isJumping(): boolean;
        callActuallyHurt(arg0: $DamageSource_, arg1: number): void;
        callCheckTotemDeathProtection(arg0: $DamageSource_): boolean;
        callGetDeathSound(): $SoundEvent;
        callGetSoundVolume(): number;
        callOnEffectUpdated(arg0: $MobEffectInstance, arg1: boolean, arg2: $Entity): void;
        getAttackStrengthTicker(): number;
        setLastAttackedTicks(arg0: number): void;
        invokeTurnHead(arg0: number, arg1: number): number;
        getSwingDuration(): number;
        invokeUpdateWalkAnimation(arg0: number): void;
        callUpdateEffectVisibility(): void;
        create$callSpawnItemParticles(arg0: $ItemStack_, arg1: number): void;
        quark$lastHurtByPlayer(): $Player;
        quark$lastHurtByPlayerTime(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        lastHurtByPlayerTime: number;
        static DEFAULT_BASE_GRAVITY: number;
        xRot: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
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
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        lastHurtByPlayer: $Player;
        asbTickCount: number;
        static BOARDING_COOLDOWN: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
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
        lastDamageStamp: number;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        get deadOrDying(): boolean;
        get usingItem(): boolean;
        get sleeping(): boolean;
        get scale(): number;
        get brain(): $Brain<never>;
        get baby(): boolean;
        get ageScale(): number;
        get lastAttacker(): $LivingEntity;
        get lastHurtByMobTimestamp(): number;
        get lastHurtMobTimestamp(): number;
        set discardFriction(value: boolean);
        get fallFlying(): boolean;
        get armorCoverPercentage(): number;
        get activeEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        get invertedHealAndHarm(): boolean;
        get maxAbsorption(): number;
        get lastDamageSource(): $DamageSource;
        get voicePitch(): number;
        get killCredit(): $LivingEntity;
        get combatTracker(): $CombatTracker;
        get lootTable(): $ResourceKey<$LootTable>;
        get lootTableSeed(): number;
        get fallSounds(): $LivingEntity$Fallsounds;
        get hurtDir(): number;
        get hitbox(): $AABB;
        get lastClimbablePos(): ($BlockPos) | undefined;
        get armorValue(): number;
        get currentSwingDuration(): number;
        get offhandItem(): $ItemStack;
        get armorSlots(): $Iterable<$ItemStack>;
        get handSlots(): $Iterable<$ItemStack>;
        get armorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        get allSlots(): $Iterable<$ItemStack>;
        get jumpPower(): number;
        get jumpBoostPower(): number;
        get suppressingSlidingDownLadder(): boolean;
        get sensitiveToWater(): boolean;
        get autoSpinAttack(): boolean;
        get mainArm(): $HumanoidArm;
        get usedItemHand(): $InteractionHand;
        get useItemRemainingTicks(): number;
        get ticksUsingItem(): number;
        get fallFlyingTicks(): number;
        get affectedByPotions(): boolean;
        get dismountPoses(): $ImmutableList<$Pose>;
        get bedOrientation(): $Direction;
        set knockbackMultiplier_BetterCombat(value: number);
        get stepBlocked(): boolean;
        get blocking(): boolean;
        get attributes(): $AttributeMap;
        get curiosInventory(): $ICuriosItemHandler;
        get equippedCurios(): $IItemHandlerModifiable;
        get curiosSlotModifiers(): $Multimap<string, $AttributeModifier>;
        get entityCuriosRegistrySlots(): $Map<string, $ISlotType>;
        get curiosRegistrySlots(): $Map<string, $ISlotType>;
        get allCurios(): $Map<string, $ICurioStacksHandler>;
        get magicData(): $MagicData;
        get reachDistance(): number;
        get undead(): boolean;
        get potionEffects(): $EntityPotionEffectsJS;
        get totalMovementSpeed(): number;
        set movementSpeedAddition(value: number);
        set defaultMovementSpeedMultiplier(value: number);
        set totalMovementSpeedMultiplier(value: number);
        set lastAttackedTicks(value: number);
        get swingDuration(): number;
    }
    export class $SpawnGroupData {
    }
    export interface $SpawnGroupData {
    }
    export class $Display$TextDisplay$CachedInfo extends $Record {
        width(): number;
        lines(): $List<$Display$TextDisplay$CachedLine>;
        constructor(arg0: $List_<$Display$TextDisplay$CachedLine_>, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$CachedInfo}.
     */
    export type $Display$TextDisplay$CachedInfo_ = { width?: number, lines?: $List_<$Display$TextDisplay$CachedLine_>,  } | [width?: number, lines?: $List_<$Display$TextDisplay$CachedLine_>, ];
    export class $EntityAttachments$Builder {
        build(arg0: number, arg1: number): $EntityAttachments;
        attach(arg0: $EntityAttachment_, arg1: $Vec3_): $EntityAttachments$Builder;
        attach(arg0: $EntityAttachment_, arg1: number, arg2: number, arg3: number): $EntityAttachments$Builder;
    }
    export class $EntityEvent {
        static STOP_ATTACKING: number;
        static REDUCED_DEBUG_INFO: number;
        static OFFER_FLOWER: number;
        static MAINHAND_BREAK: number;
        static DEATH: number;
        static DOLPHIN_LOOKING_FOR_TREASURE: number;
        static JUMP: number;
        static SHAKE_WETNESS: number;
        static SILVERFISH_MERGE_ANIM: number;
        static TRUSTING_SUCCEEDED: number;
        static HONEY_SLIDE: number;
        static HEAD_BREAK: number;
        static STOP_OFFER_FLOWER: number;
        static TRUSTING_FAILED: number;
        static EAT_GRASS: number;
        static TALISMAN_ACTIVATE: number;
        static TENDRILS_SHIVER: number;
        static SONIC_CHARGE: number;
        static OFFHAND_BREAK: number;
        static FEET_BREAK: number;
        static PERMISSION_LEVEL_GAMEMASTERS: number;
        static VILLAGER_ANGRY: number;
        static CANCEL_SHAKE_WETNESS: number;
        static LOVE_HEARTS: number;
        static ZOMBIE_CONVERTING: number;
        static PERMISSION_LEVEL_ALL: number;
        static POOF: number;
        static RAVAGER_STUNNED: number;
        static TELEPORT: number;
        static FISHING_ROD_REEL_IN: number;
        static ARMADILLO_PEEK: number;
        static SQUID_ANIM_SYNCH: number;
        static GUARDIAN_ATTACK_SOUND: number;
        static START_RAM: number;
        static VILLAGER_HAPPY: number;
        static SHIELD_DISABLED: number;
        static ARMORSTAND_WOBBLE: number;
        static IN_LOVE_HEARTS: number;
        static BODY_BREAK: number;
        static START_ATTACKING: number;
        static FIREWORKS_EXPLODE: number;
        static ATTACK_BLOCKED: number;
        static USE_ITEM_COMPLETE: number;
        static TAMING_FAILED: number;
        static SNIFFER_DIGGING_SOUND: number;
        static CHEST_BREAK: number;
        static END_RAM: number;
        static PERMISSION_LEVEL_ADMINS: number;
        static TAMING_SUCCEEDED: number;
        static FOX_EAT: number;
        static FULL_DEBUG_INFO: number;
        static PERMISSION_LEVEL_OWNERS: number;
        static LEGS_BREAK: number;
        static SWAP_HANDS: number;
        static PERMISSION_LEVEL_MODERATORS: number;
        static VILLAGER_SWEAT: number;
        static HONEY_JUMP: number;
        static WITCH_HAT_MAGIC: number;
        constructor();
    }
    export class $Entity extends $AttachmentHolder implements $SyncedDataHolder, $Nameable, $EntityAccess$1, $CommandSource, $ScoreHolder, $IEntityExtension, $EntityExtension$2, $EntityAccessor$3, $ExtensionHolder, $EntityAccessor$1, $EntityAccessor$9, $EntityAccessor$10, $EntityExtension, $AccessorEntity$1, $EntityTracker$Filterable, $EntityAccessForge, $EntityAccessor$5, $AzAnimatorAccessor<any, any>, $EntityAccessor$7, $Tickable, $ProducesWake, $EntityAccessor, $BalmEntity, $EntityAccessor$6, $ActivationEntity, $Inactive, $AccessorEntity$2, $Errorable, $Cullable, $EntityAccessor$8, $EntityAccessor$4, $AttachmentTargetImpl, $AccessorEntity, $DynamicLightSource, $EntityKJS, $EntityStickExtension, $EntityExtension$1, $EntityExtension$3, $IDataManager, $Endimatable, $EntityAccess, $EntityAccessor$2, $IEntity, $EntityMovementExtension, $EntityLootDropInterface {
        setInvisible(arg0: boolean): void;
        isRemoved(): boolean;
        revive(): void;
        getTags(): $Set<string>;
        handler$gbj000$servercore$onPistonMove(moverType: $MoverType_, vec3: $Vec3_, ci: $CallbackInfo): void;
        hasGlowingTag(): boolean;
        getZ(): number;
        getZ(arg0: number): number;
        getHorizontalFacing(): $Direction;
        blockPosition(): $BlockPos;
        interactAt(arg0: $Player, arg1: $Vec3_, arg2: $InteractionHand_): $InteractionResult;
        interact(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        getBlockX(): number;
        getBlockY(): number;
        getBlockZ(): number;
        isSpectator(): boolean;
        getUuid(): $UUID;
        registryAccess(): $RegistryAccess;
        isUnderWater(): boolean;
        isGlowing(): boolean;
        isShiftKeyDown(): boolean;
        isInvisibleTo(arg0: $Player): boolean;
        getLookAngle(): $Vec3;
        lookAt(arg0: $EntityAnchorArgument$Anchor_, arg1: $Vec3_): void;
        setUUID(arg0: $UUID_): void;
        removeTag(arg0: string): boolean;
        damageSources(): $DamageSources;
        isInWater(): boolean;
        setPos(arg0: $Vec3_): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        getDeltaMovement(): $Vec3;
        isInLiquid(): boolean;
        baseTick(): void;
        fireImmune(): boolean;
        clearFire(): void;
        isInWall(): boolean;
        getBoundingBox(): $AABB;
        getAirSupply(): number;
        isInWaterRainOrBubble(): boolean;
        isInFluidType(): boolean;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>, arg1: boolean): boolean;
        extinguish(): void;
        getTicksFrozen(): number;
        getPercentFrozen(): number;
        getMaxAirSupply(): number;
        getSoundSource(): $SoundSource;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Entity): void;
        gameEvent(arg0: $Holder_<$GameEvent>): void;
        getStringUuid(): string;
        setSharedFlag(arg0: number, arg1: boolean): void;
        isInvisible(): boolean;
        getRandom(): $RandomSource;
        getRandomX(arg0: number): number;
        getRandomY(): number;
        getRandomZ(arg0: number): number;
        isDiscrete(): boolean;
        isInvulnerable(): boolean;
        isInvulnerableTo(arg0: $DamageSource_): boolean;
        playSound(arg0: $SoundEvent_): void;
        playSound(arg0: $SoundEvent_, arg1: number, arg2: number): void;
        getYHeadRot(): number;
        calculateViewVector(arg0: number, arg1: number): $Vec3;
        awardKillScore(arg0: $Entity, arg1: number, arg2: $DamageSource_): void;
        hasCustomName(): boolean;
        setPose(arg0: $Pose_): void;
        captureDrops(arg0: $Collection_<$ItemEntity>): $Collection<$ItemEntity>;
        captureDrops(): $Collection<$ItemEntity>;
        getWeaponItem(): $ItemStack;
        getServer(): $MinecraftServer;
        spawnAtLocation(arg0: $ItemStack_, arg1: number): $ItemEntity;
        spawnAtLocation(arg0: $ItemStack_): $ItemEntity;
        onGround(): boolean;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: $Vec3_): void;
        getVehicle(): $Entity;
        getPassengerRidingPosition(arg0: $Entity): $Vec3;
        getMaxFallDistance(): number;
        causeFallDamage(arg0: number, arg1: number, arg2: $DamageSource_): boolean;
        animateHurt(arg0: number): void;
        handleDamageEvent(arg0: $DamageSource_): void;
        handleEntityEvent(arg0: number): void;
        getBbWidth(): number;
        getBbHeight(): number;
        setSprinting(arg0: boolean): void;
        getDismountLocationForPassenger(arg0: $LivingEntity): $Vec3;
        shouldShowName(): boolean;
        isCustomNameVisible(): boolean;
        isSprinting(): boolean;
        addDeltaMovement(arg0: $Vec3_): void;
        isControlledByLocalInstance(): boolean;
        getGravity(): number;
        moveRelative(arg0: number, arg1: $Vec3_): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        isInLava(): boolean;
        /**
         * @deprecated
         */
        getFluidHeight(arg0: $TagKey_<$Fluid>): number;
        getFluidJumpThreshold(): number;
        checkSlowFallDistance(): void;
        getBlockPosBelowThatAffectsMyMovement(): $BlockPos;
        getInBlockState(): $BlockState;
        resetFallDistance(): void;
        getControllingPassenger(): $LivingEntity;
        refreshDimensions(): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        isEffectiveAi(): boolean;
        getMaxHeightFluidType(): $FluidType;
        getFluidTypeHeight(arg0: $FluidType_): number;
        canFreeze(): boolean;
        getTicksRequiredToFreeze(): number;
        setTicksFrozen(arg0: number): void;
        isFullyFrozen(): boolean;
        isPassenger(): boolean;
        stopRiding(): void;
        rideTick(): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        lerpTargetX(): number;
        lerpTargetY(): number;
        lerpTargetZ(): number;
        lerpTargetXRot(): number;
        lerpTargetYRot(): number;
        lerpHeadTo(arg0: number, arg1: number): void;
        getEyeY(): number;
        distanceTo(arg0: $Entity): number;
        getViewYRot(arg0: number): number;
        isPickable(): boolean;
        isPushable(): boolean;
        setYHeadRot(arg0: number): void;
        /**
         * Sets the entity's body yaw.
         */
        setBodyYaw(arg0: number): void;
        getRelativePortalPosition(arg0: $Direction$Axis_, arg1: $BlockUtil$FoundRectangle): $Vec3;
        isVisuallySwimming(): boolean;
        onSyncedDataUpdated(arg0: $EntityDataAccessor_<never>): void;
        onSyncedDataUpdated(arg0: $List_<$SynchedEntityData$DataValue_<never>>): void;
        getPreciseBodyRotation(arg0: number): number;
        hasPose(arg0: $Pose_): boolean;
        canUsePortal(arg0: boolean): boolean;
        getBoundingBoxForCulling(): $AABB;
        /**
         * Gets the entity's body yaw (if the entity is a `LivingEntity`), or the entity's visual rotation (if the entity is an item entity or an item frame).
         */
        getBodyYaw(): number;
        recreateFromPacket(arg0: $ClientboundAddEntityPacket): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        maxUpStep(): number;
        getPose(): $Pose;
        igniteForTicks(arg0: number): void;
        getBlockStateOn(): $BlockState;
        getOnPos(): $BlockPos;
        servercore$inactiveTick(): void;
        getCommandSenderWorld(): $Level;
        sdl$dynamicLightTick(): void;
        isOnFire(): boolean;
        sdl$getLuminance(): number;
        sable$getInBlockStatePos(): $BlockPos;
        sable$getPlotPosition(): $Vec3;
        sable$setPlotPosition(arg0: $Vec3_): void;
        sable$plotLerpTo(arg0: $Vec3_, arg1: number): void;
        sable$getCollisionInfo(): $SubLevelEntityCollision$CollisionInfo;
        sable$vanillaCollide(arg0: $Vec3_): $Vec3;
        killedEntity(arg0: $ServerLevel, arg1: $LivingEntity): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        getEncodeId(): string;
        saveWithoutId(arg0: $CompoundTag_): $CompoundTag;
        getPickResult(): $ItemStack;
        getEyeInFluidType(): $FluidType;
        /**
         * @deprecated
         */
        isPushedByFluid(): boolean;
        getForgePersistentData(): $CompoundTag;
        canTrample(arg0: $BlockState_, arg1: $BlockPos_, arg2: number): boolean;
        isAddedToLevel(): boolean;
        onAddedToLevel(): void;
        onRemovedFromLevel(): void;
        canStartSwimming(): boolean;
        sdl$shouldUpdateDynamicLight(): boolean;
        sdl$getDynamicLightX(): number;
        sdl$getDynamicLightY(): number;
        sdl$getDynamicLightZ(): number;
        sdl$getDynamicLightLevel(): $Level;
        sdl$resetDynamicLight(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: $LevelRenderer): boolean;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: $LevelRenderer): void;
        chunkPosition(): $ChunkPos;
        filter$matched(): $ObjectList<any>;
        dpt$tickable(): boolean;
        dpt$alwaysTick(): boolean;
        servercore$isInactive(): boolean;
        thebumblezone_performedEntityDrops(): void;
        handler$gbj000$servercore$setupActivationStates(type: $EntityType_<any>, level: $Level_, ci: $CallbackInfo): void;
        isColliding(arg0: $BlockPos_, arg1: $BlockState_): boolean;
        getTeamColor(): number;
        handler$fao000$irons_spellbooks$changeGlowOutline(arg0: $CallbackInfoReturnable<any>): void;
        handler$gin000$apotheosis$apoth_getTeamColor(arg0: $CallbackInfoReturnable<any>): void;
        unRide(): void;
        isVehicle(): boolean;
        ejectPassengers(): void;
        getCustomName(): $Component;
        sendSystemMessage(arg0: $Component_): void;
        createCommandSourceStack(): $CommandSourceStack;
        setOnGround(arg0: boolean): void;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        moveTo(arg0: $Vec3_, arg1: number, arg2: number): void;
        moveToBlockPos(arg0: $BlockPos_, arg1: number, arg2: number): void;
        moveTo(arg0: $Vec3_): void;
        getTeam(): $PlayerTeam;
        isOnSameTeam(arg0: $Entity): boolean;
        isAlliedTo(arg0: $Team): boolean;
        distanceToSqr(arg0: $Vec3_): number;
        distanceToSqr(arg0: number, arg1: number, arg2: number): number;
        /**
         * Measures the **square** of a distance of entity to another entity.
         */
        distanceToEntitySqr(arg0: $Entity): number;
        getEyePosition(arg0: number): $Vec3;
        getEyePosition(): $Vec3;
        getViewVector(arg0: number): $Vec3;
        getPersistentData(): $CompoundTag;
        getPositionCodec(): $VecDeltaCodec;
        addTag(arg0: string): boolean;
        getEntityData(): $SynchedEntityData;
        setRemoved(arg0: $Entity$RemovalReason_): void;
        handler$jhk000$sodiumdynamiclights$onRemove(ci: $CallbackInfo): void;
        onClientRemoval(): void;
        handler$bbj000$veil$remove(arg0: $CallbackInfo): void;
        modifyReturnValue$mon000$spectrum$forceSleepPose(arg0: $Pose_): $Pose;
        closerThan(arg0: $Entity, arg1: number, arg2: number): boolean;
        closerThan(arg0: $Entity, arg1: number): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        setBoundingBox(arg0: $AABB_): void;
        turn(arg0: number, arg1: number): void;
        wrapMethod$glh000$createbigcannons$turn(arg0: number, arg1: number, arg2: $Operation_<any>): void;
        handler$jhk008$sodiumdynamiclights$onTick(ci: $CallbackInfo): void;
        handler$knj000$sable$tickInject(arg0: $CallbackInfo): void;
        updateSwimming(): void;
        setRemainingFireTicks(arg0: number): void;
        lavaHurt(): void;
        checkBelowWorld(): void;
        setSharedFlagOnFire(arg0: boolean): void;
        setPortalCooldown(): void;
        setPortalCooldown(arg0: number): void;
        getDimensionChangingDelay(): number;
        getPortalCooldown(): number;
        isOnPortalCooldown(): boolean;
        igniteForSeconds(arg0: number): void;
        getRemainingFireTicks(): number;
        setOnGroundWithMovement(arg0: boolean, arg1: $Vec3_): void;
        redirect$knj000$sable$collideRedirect(arg0: $Entity, arg1: $Vec3_): $Vec3;
        localvar$eca000$lionfishapi$fluidCollision(arg0: $Vec3_): $Vec3;
        localvar$inn001$relics$fluidCollision(arg0: $Vec3_): $Vec3;
        wrapOperation$knj000$sable$moveInject(arg0: $Entity, arg1: boolean, arg2: $Vec3_, arg3: $Operation_<any>): void;
        /**
         * @deprecated
         */
        getOnPosLegacy(): $BlockPos;
        wrapOperation$knj000$sable$updateEntityAfterFallOn(arg0: $Block_, arg1: $BlockGetter, arg2: $Entity, arg3: $Operation_<any>): void;
        handler$knj000$sable$moveInject(arg0: $MoverType_, arg1: $Vec3_, arg2: $CallbackInfo): void;
        isCrouching(): boolean;
        isOnRails(): boolean;
        isSwimming(): boolean;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        handler$inn000$relics$getBlockSpeedFactor(arg0: $CallbackInfoReturnable<any>): void;
        adjustSpawnLocation(arg0: $ServerLevel, arg1: $BlockPos_): $BlockPos;
        isNoGravity(): boolean;
        setNoGravity(arg0: boolean): void;
        dampensVibrations(): boolean;
        localvar$gbc000$apothic_attributes$apoth_checkFallDamageWithGravity(arg0: number): number;
        modifyReturnValue$mmd000$create_sa$create$onFireImmune(arg0: boolean): boolean;
        isInWaterOrRain(): boolean;
        handler$inn000$relics$setWet(arg0: $CallbackInfoReturnable<any>): void;
        isInWaterOrBubble(): boolean;
        wrapOperation$laj000$sable$inWaterCheck(arg0: $Entity, arg1: boolean, arg2: $Operation_<any>): void;
        /**
         * @deprecated
         */
        updateFluidHeightAndDoFluidPushing(arg0: $TagKey_<$Fluid>, arg1: number): boolean;
        updateFluidHeightAndDoFluidPushing(): void;
        /**
         * @deprecated
         */
        isEyeInFluid(arg0: $TagKey_<$Fluid>): boolean;
        wrapOperation$laj000$sable$occludeFluidOnEyes(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $FluidState;
        handler$lik000$sable$subLevelFluidOnEyes(arg0: $CallbackInfo): void;
        canSpawnSprintParticle(): boolean;
        handler$knc000$sable$moveRelative(arg0: number, arg1: $Vec3_, arg2: $CallbackInfo): void;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(): number;
        absRotateTo(arg0: number, arg1: number): void;
        setOldPosAndRot(): void;
        playerTouch(arg0: $Player): void;
        isPassengerOfSameVehicle(arg0: $Entity): boolean;
        handler$gbj000$servercore$ignorePushingWhileInactive(x: number, y: number, z: number, ci: $CallbackInfo): void;
        getViewXRot(arg0: number): number;
        getNearestViewDirection(): $Direction;
        handler$lao000$sable$calculateViewVector(arg0: number, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        getUpVector(arg0: number): $Vec3;
        getLightProbePosition(arg0: number): $Vec3;
        canBeHitByProjectile(): boolean;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        saveAsPassenger(arg0: $CompoundTag_): boolean;
        handler$nhe000$createdieselgenerators$save(arg0: $CompoundTag_, arg1: $CallbackInfoReturnable<any>): void;
        redirect$knc000$sable$fixPassengerSaving(arg0: $CompoundTag_, arg1: string, arg2: $Tag_): $Tag;
        handler$nhe002$createdieselgenerators$load(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        setAirSupply(arg0: number): void;
        setCustomName(arg0: $Component_): void;
        setCustomNameVisible(arg0: boolean): void;
        setGlowing(arg0: boolean): void;
        handler$lmn000$blueprint$read(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$mon000$spectrum$dropStack(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        canCollideWith(arg0: $Entity): boolean;
        canBeCollidedWith(): boolean;
        positionRider(arg0: $Entity): void;
        handler$knc000$sable$onRidingTick(arg0: $CallbackInfo): void;
        hasPassenger(arg0: $Predicate_<$Entity>): boolean;
        hasPassenger(arg0: $Entity): boolean;
        handler$knc000$sable$onPositionRider(arg0: $Entity, arg1: $CallbackInfo): void;
        getVehicleAttachmentPoint(arg0: $Entity): $Vec3;
        onPassengerTurned(arg0: $Entity): void;
        getAttachments(): $EntityAttachments;
        startRiding(arg0: $Entity, arg1: boolean): boolean;
        startRiding(arg0: $Entity): boolean;
        showVehicleHealth(): boolean;
        canRide(arg0: $Entity): boolean;
        canAddPassenger(arg0: $Entity): boolean;
        removeVehicle(): void;
        getFirstPassenger(): $Entity;
        getPickRadius(): number;
        getHandHoldingItemAngle(arg0: $Item_): $Vec3;
        getRotationVector(): $Vec2;
        getForward(): $Vec3;
        setAsInsidePortal(arg0: $Portal_, arg1: $BlockPos_): void;
        canChangeDimensions(arg0: $Level_, arg1: $Level_): boolean;
        changeDimension(arg0: $DimensionTransition_): $Entity;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        modifyReturnValue$mon000$spectrum$considerPrimfireAsFire(arg0: boolean): boolean;
        dismountsUnderwater(): boolean;
        canControlVehicle(): boolean;
        setShiftKeyDown(arg0: boolean): void;
        isSteppingCarefully(): boolean;
        isSuppressingBounce(): boolean;
        isDescending(): boolean;
        isVisuallyCrawling(): boolean;
        setSwimming(arg0: boolean): void;
        handler$faa000$irons_spellbooks$isInvisibleTo(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        updateDynamicGameEventListener(arg0: $BiConsumer_<$DynamicGameEventListener<never>, $ServerLevel>): void;
        getScoreboardName(): string;
        handler$faa000$irons_spellbooks$isAlliedTo(arg0: $Entity, arg1: $CallbackInfoReturnable<any>): void;
        thunderHit(arg0: $ServerLevel, arg1: $LightningBolt): void;
        onAboveBubbleCol(arg0: boolean): void;
        onInsideBubbleColumn(arg0: boolean): void;
        makeStuckInBlock(arg0: $BlockState_, arg1: $Vec3_): void;
        isAttackable(): boolean;
        skipAttackInteraction(arg0: $Entity): boolean;
        modifyReturnValue$ekk000$artifacts$isInvulnerableTo(original: boolean, damageSource: $DamageSource_): boolean;
        setInvulnerable(arg0: boolean): void;
        copyPosition(arg0: $Entity): void;
        restoreFrom(arg0: $Entity): void;
        handler$jnk000$dimthread$moveToWorld(arg0: $DimensionTransition_, arg1: $CallbackInfoReturnable<any>): void;
        placePortalTicket(arg0: $BlockPos_): void;
        getBlockExplosionResistance(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $FluidState, arg5: number): number;
        shouldBlockExplode(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: number): boolean;
        isIgnoringBlockTriggers(): boolean;
        displayFireAnimation(): boolean;
        static getViewScale(): number;
        static setViewScale(arg0: number): void;
        teleportPassengers(): void;
        getSelfAndPassengers(): $Stream<any>;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        fudgePositionAfterSizeChange(arg0: $EntityDimensions_): boolean;
        getMotionDirection(): $Direction;
        broadcastToPlayer(arg0: $ServerPlayer): boolean;
        getEyeHeight(arg0: $Pose_): number;
        getEyeHeight(): number;
        getLeashOffset(arg0: number): $Vec3;
        getLeashOffset(): $Vec3;
        ignoreExplosion(arg0: $Explosion): boolean;
        startSeenByPlayer(arg0: $ServerPlayer): void;
        stopSeenByPlayer(arg0: $ServerPlayer): void;
        onlyOpCanSetNbt(): boolean;
        deflection(arg0: $Projectile): $ProjectileDeflection;
        hasControllingPassenger(): boolean;
        countPlayerPassengers(): number;
        hasExactlyOnePlayerPassenger(): boolean;
        getRootVehicle(): $Entity;
        hasIndirectPassenger(arg0: $Entity): boolean;
        getControlledVehicle(): $Entity;
        getPistonPushReaction(): $PushReaction;
        acceptsSuccess(): boolean;
        acceptsFailure(): boolean;
        shouldInformAdmins(): boolean;
        handler$laj000$sable$updateFluidHeightAndDoFluidPushing(arg0: $TagKey_<any>, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        touchingUnloadedChunk(): boolean;
        getAddEntityPacket(arg0: $ServerEntity): $Packet<$ClientGamePacketListener>;
        trackingPosition(): $Vec3;
        checkDespawn(): void;
        getRopeHoldPosition(arg0: number): $Vec3;
        handler$klm000$sable$recreateFromPacket(arg0: $ClientboundAddEntityPacket, arg1: $CallbackInfo): void;
        setIsInPowderSnow(arg0: boolean): void;
        isFreezing(): boolean;
        canSprint(): boolean;
        onExplosionHit(arg0: $Entity): void;
        getRemovalReason(): $Entity$RemovalReason;
        setLevelCallback(arg0: $EntityInLevelCallback): void;
        shouldBeSaved(): boolean;
        isAlwaysTicking(): boolean;
        mayInteract(arg0: $Level_, arg1: $BlockPos_): boolean;
        getCapability<T, C>(arg0: $EntityCapability<T, C>, arg1: C): T;
        getCapability<T>(arg0: $EntityCapability<T, void>): T;
        getKnownMovement(): $Vec3;
        sable$setTrackingSubLevel(arg0: $SubLevel): void;
        veil$getEmitters(): $List<any>;
        veil$addEmitter(arg0: $ParticleEmitter): void;
        getIndirectPassengers(): $Iterable<any>;
        getPassengersAndSelf(): $Stream<any>;
        static collideBoundingBox(arg0: $Entity, arg1: $Vec3_, arg2: $AABB_, arg3: $Level_, arg4: $List_<any>): $Vec3;
        getFusionModel(layerIndex: number): $Triple<any, any, any>;
        setFusionModel(layerIndex: number, model: $Triple_<any, any, any>): void;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        markFusionRecomputeModels(): void;
        filter$initialize(filters: $Object2ObjectMap<any, any>): void;
        filter$initialized(): boolean;
        setAnimator(arg0: $AzAnimator<any, any>): void;
        getAnimatorOrNull(): $AzAnimator<any, any>;
        dpt$setTickable(tickable: boolean): void;
        dpt$setAlwaysTick(alwaysTick: boolean): void;
        dpt$checkAlwaysTick(): boolean;
        wakes$onFluidSurface(): boolean;
        wakes$getNumericalVelocity(): $Vec3;
        wakes$getHorizontalVelocity(): number;
        wakes$getPrevPos(): $Vec3;
        wakes$setPrevPos(arg0: $Vec3_): void;
        wakes$wakeHeight(): number;
        wakes$setWakeHeight(arg0: number): void;
        wakes$setSplashPlane(arg0: $SplashPlaneParticle): void;
        wakes$setRecentlyTeleported(arg0: boolean): void;
        wakes$getSplashPlane(): $SplashPlaneParticle;
        getFabricBalmData(): $CompoundTag;
        setFabricBalmData(arg0: $CompoundTag_): void;
        servercore$getActivationType(): $ActivationType;
        servercore$isExcluded(): boolean;
        servercore$getActivatedTick(): number;
        servercore$setActivatedTick(tick: number): void;
        servercore$getActivatedImmunityTick(): number;
        servercore$setActivatedImmunityTick(tick: number): void;
        servercore$setInactive(inactive: boolean): void;
        servercore$getFullTickCount(): number;
        servercore$incFullTickCount(): void;
        neruina$isErrored(): boolean;
        neruina$setErrored(): void;
        neruina$clearErrored(): void;
        neruina$setTickingEntryId(arg0: $UUID_): void;
        neruina$getTickingEntryId(): $UUID;
        isForcedVisible(): boolean;
        setCulled(value: boolean): void;
        isCulled(): boolean;
        setOutOfCamera(value: boolean): void;
        isOutOfCamera(): boolean;
        sable$setLastTrackingSubLevelID(arg0: $UUID_): void;
        sable$getCollisionContext(): $TheFasterEntityCollisionContext;
        sable$setPosSuperRaw(arg0: $Vec3_): void;
        setDataMap(arg0: $Map_<any, any>): void;
        getDataMap(): $Map<any, any>;
        getDirtyEntries(): $Set<any>;
        getEndimatedState(): $Endimatable$EndimatedState;
        getPos(): $Position;
        getTurretPos(): $BlockPos;
        setTurretPos(arg0: $BlockPos_): void;
        sable$getTrackingSubLevel(): $SubLevel;
        sable$getLastTrackingSubLevelID(): $UUID;
        sable$setPosField(arg0: $Vec3_): void;
        thebumblezone_hasPerformedEntityDrops(): boolean;
        getY(): number;
        getY(arg0: number): number;
        getX(): number;
        getX(arg0: number): number;
        setLevel(arg0: $Level_): void;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        push(arg0: $Entity): void;
        push(arg0: $Vec3_): void;
        getDimensions(arg0: $Pose_): $EntityDimensions;
        move(arg0: $MoverType_, arg1: $Vec3_): void;
        getExtension(key: $Object, type: $Class<any>): $Object;
        getDisplayName(): $Component;
        setExtension(key: $Object, value: $Object): void;
        tick(): void;
        hasPermissions(arg0: number): boolean;
        getPosition(arg0: number): $Vec3;
        isDirty(): boolean;
        kill(): void;
        setTimeout(): void;
        getSlot(arg0: number): $SlotAccess;
        is(arg0: $Entity): boolean;
        getEntries(arg0: boolean): $Set<any>;
        pick(arg0: number, arg1: number, arg2: boolean): $HitResult;
        isActive(): boolean;
        collide(arg0: $Vec3_): $Vec3;
        rotate(arg0: $Rotation_): number;
        mirror(arg0: $Mirror_): number;
        isSupportedBy(arg0: $BlockPos_): boolean;
        discard(): void;
        setId(arg0: number): void;
        isSilent(): boolean;
        setSilent(arg0: boolean): void;
        getName(): $Component;
        remove(arg0: $Entity$RemovalReason_): void;
        load(arg0: $CompoundTag_): void;
        position(): $Vec3;
        getValue(arg0: $TrackedData<any>): $Object;
        clean(): void;
        isAlive(): boolean;
        getId(): number;
        save(arg0: $CompoundTag_): boolean;
        setValue(arg0: $TrackedData<any>, arg1: $Object): void;
        getEntityType(): $EntityType<never>;
        alwaysAccepts(): boolean;
        getFeedbackDisplayName(): $Component;
        getPickedResult(arg0: $HitResult): $ItemStack;
        isInFluidType(arg0: $FluidType_): boolean;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>): boolean;
        isInFluidType(arg0: $FluidState): boolean;
        canFluidExtinguish(arg0: $FluidType_): boolean;
        canSwimInFluidType(arg0: $FluidType_): boolean;
        isPushedByFluid(arg0: $FluidType_): boolean;
        /**
         * @deprecated
         */
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        shouldRiderSit(): boolean;
        canRiderInteract(): boolean;
        canBeRiddenUnderFluidType(arg0: $FluidType_, arg1: $Entity): boolean;
        getClassification(arg0: boolean): $MobCategory;
        isMultipartEntity(): boolean;
        getParts(): $PartEntity<never>[];
        isEyeInFluidType(arg0: $FluidType_): boolean;
        getFluidMotionScale(arg0: $FluidType_): number;
        getFluidFallDistanceModifier(arg0: $FluidType_): number;
        canHydrateInFluidType(arg0: $FluidType_): boolean;
        getSoundFromFluidType(arg0: $FluidType_, arg1: $SoundAction): $SoundEvent;
        hasCustomOutlineRendering(arg0: $Player): boolean;
        sendPairingData(arg0: $ServerPlayer, arg1: $Consumer_<$CustomPacketPayload>): void;
        copyAttachmentsFrom(arg0: $Entity, arg1: boolean): void;
        getAnimator(): ($AzAnimator<$Object, $CompoundTag>) | undefined;
        sdl$isDynamicLightEnabled(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        rayTrace(distance: number): $KubeRayTraceResult;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        getLevel(): $Level;
        getType(): string;
        setPosition(x: number, y: number, z: number): void;
        setPosition(block: $LevelBlock): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        getServer(): $MinecraftServer;
        /**
         * Teleports an entity to a specified `ServerLevel`, to specified coordinates and rotation.
         * 
         * @param level A `ServerLevel` to teleport the entity to.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportToLevel(level: $ServerLevel, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param dimension A `ResourceLocation` of the target dimension. It can be a string representing the dimension ID.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(dimension: $ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, z: number): void;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        getNbt(): $CompoundTag;
        setNbt(nbt: $CompoundTag_): void;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        getScriptType(): $ScriptType;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Checks if the entity is an item entity.
         */
        isItem(): this is $ItemEntity;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
        /**
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        /**
         * Checks if the entity is a water creature.
         */
        isWaterCreature(): boolean;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
        setX(x: number): void;
        setY(y: number): void;
        setZ(z: number): void;
        getMotionX(): number;
        setMotionX(x: number): void;
        getMotionY(): number;
        setMotionY(y: number): void;
        getMotionZ(): number;
        setMotionZ(z: number): void;
        setRotation(yaw: number, pitch: number): void;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
        /**
         * Checks, whether the entity is part of any team.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(teamName: string): boolean;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         */
        getFacing(): $Direction;
        mergeNbt(tag: $CompoundTag_): $Entity;
        spawn(): void;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         */
        attack(source: $DamageSource_, hp: number): boolean;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToSqr(x, y, z)`.
         */
        getDistanceSq(x: number, y: number, z: number): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToBlockSqr(pos)`.
         */
        getDistanceSq(pos: $BlockPos_): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        endimateTick(): void;
        onEndimationEnd(arg0: $PlayableEndimation_, arg1: $PlayableEndimation_): void;
        onEndimationStart(arg0: $PlayableEndimation_, arg1: $PlayableEndimation_): void;
        setPlayingEndimation(arg0: $PlayableEndimation_): void;
        resetEndimation(): void;
        getPlayingEndimation(): $PlayableEndimation;
        getAnimationTick(): number;
        setAnimationTick(arg0: number): void;
        getEffectHandler(): $EndimationEffectHandler;
        isNoEndimationPlaying(): boolean;
        isEndimationPlaying(arg0: $PlayableEndimation_): boolean;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getXRot(): number;
        getYRot(): number;
        setYRot(arg0: number): void;
        setXRot(arg0: number): void;
        invokeSetSharedFlag(arg0: number, arg1: boolean): void;
        invokeCanAddPassenger(arg0: $Entity): boolean;
        invokeCanRide(arg0: $Entity): boolean;
        transition$getRawPosition(): $Vec3;
        transition$setRawPosition(arg0: $Vec3_): void;
        bumblezone$setNextStep(arg0: number): void;
        bumblezone$getNextStep(): number;
        bumblezone$callVibrationAndSoundEffectsFromBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: boolean, arg3: boolean, arg4: $Vec3_): boolean;
        bumblezone$callGetTypeName(): $Component;
        bumblezone$getDimensions(): $EntityDimensions;
        bumblezone$callCollide(arg0: $Vec3_): $Vec3;
        getChangeListener(): $EntityInLevelCallback;
        bookshelf$createHoverEvent(): $HoverEvent;
        setIsAddedToLevel(arg0: boolean): void;
        callGetBlockPosBelowThatAffectsMyMovement(): $BlockPos;
        setRemovalReason(arg0: $Entity$RemovalReason_): void;
        catnip$callSetLevel(arg0: $Level_): void;
        callReapplyPosition(): void;
        callSetRot(arg0: number, arg1: number): void;
        getFirstTick(): boolean;
        aether$getRandom(): $RandomSource;
        callGetTypeName(): $Component;
        getDimensions(): $EntityDimensions;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get tags(): $Set<string>;
        get horizontalFacing(): $Direction;
        get blockX(): number;
        get blockY(): number;
        get blockZ(): number;
        get spectator(): boolean;
        get uuid(): $UUID;
        get underWater(): boolean;
        get lookAngle(): $Vec3;
        set UUID(value: $UUID_);
        get inWater(): boolean;
        get inLiquid(): boolean;
        get inWall(): boolean;
        get inWaterRainOrBubble(): boolean;
        get percentFrozen(): number;
        get maxAirSupply(): number;
        get soundSource(): $SoundSource;
        get stringUuid(): string;
        get random(): $RandomSource;
        get randomY(): number;
        get discrete(): boolean;
        get weaponItem(): $ItemStack;
        get maxFallDistance(): number;
        get bbWidth(): number;
        get bbHeight(): number;
        get controlledByLocalInstance(): boolean;
        get gravity(): number;
        get inLava(): boolean;
        get fluidJumpThreshold(): number;
        get blockPosBelowThatAffectsMyMovement(): $BlockPos;
        get inBlockState(): $BlockState;
        get controllingPassenger(): $LivingEntity;
        get effectiveAi(): boolean;
        get maxHeightFluidType(): $FluidType;
        get ticksRequiredToFreeze(): number;
        get fullyFrozen(): boolean;
        get passenger(): boolean;
        get eyeY(): number;
        get pickable(): boolean;
        get pushable(): boolean;
        get visuallySwimming(): boolean;
        get boundingBoxForCulling(): $AABB;
        get blockStateOn(): $BlockState;
        get onPos(): $BlockPos;
        get commandSenderWorld(): $Level;
        get onFire(): boolean;
        get encodeId(): string;
        get pickResult(): $ItemStack;
        get forgePersistentData(): $CompoundTag;
        get addedToLevel(): boolean;
        get teamColor(): number;
        get team(): $PlayerTeam;
        get persistentData(): $CompoundTag;
        get positionCodec(): $VecDeltaCodec;
        get entityData(): $SynchedEntityData;
        set sharedFlagOnFire(value: boolean);
        get dimensionChangingDelay(): number;
        get onPortalCooldown(): boolean;
        get onPosLegacy(): $BlockPos;
        get crouching(): boolean;
        get onRails(): boolean;
        get inWaterOrRain(): boolean;
        get inWaterOrBubble(): boolean;
        get lightLevelDependentMagicValue(): number;
        get nearestViewDirection(): $Direction;
        get attachments(): $EntityAttachments;
        get firstPassenger(): $Entity;
        get pickRadius(): number;
        get rotationVector(): $Vec2;
        get forward(): $Vec3;
        get steppingCarefully(): boolean;
        get suppressingBounce(): boolean;
        get descending(): boolean;
        get visuallyCrawling(): boolean;
        get scoreboardName(): string;
        get attackable(): boolean;
        get ignoringBlockTriggers(): boolean;
        get selfAndPassengers(): $Stream<any>;
        get motionDirection(): $Direction;
        get rootVehicle(): $Entity;
        get controlledVehicle(): $Entity;
        get pistonPushReaction(): $PushReaction;
        get freezing(): boolean;
        get alwaysTicking(): boolean;
        get knownMovement(): $Vec3;
        get indirectPassengers(): $Iterable<any>;
        get passengersAndSelf(): $Stream<any>;
        get animatorOrNull(): $AzAnimator<any, any>;
        get forcedVisible(): boolean;
        get dirtyEntries(): $Set<any>;
        get endimatedState(): $Endimatable$EndimatedState;
        get dirty(): boolean;
        get active(): boolean;
        get alive(): boolean;
        get entityType(): $EntityType<never>;
        get feedbackDisplayName(): $Component;
        get multipartEntity(): boolean;
        get parts(): $PartEntity<never>[];
        get living(): boolean;
        get type(): string;
        get teamName(): string;
        get block(): $LevelBlock;
        get scriptType(): $ScriptType;
        get self(): boolean;
        get profile(): $GameProfile;
        get username(): string;
        get player(): boolean;
        get serverPlayer(): boolean;
        get clientPlayer(): boolean;
        get frame(): boolean;
        get monster(): boolean;
        get animal(): boolean;
        get ambientCreature(): boolean;
        get waterCreature(): boolean;
        get peacefulCreature(): boolean;
        get passengers(): $EntityArrayList;
        get teamId(): string;
        get facing(): $Direction;
        get effectHandler(): $EndimationEffectHandler;
        get noEndimationPlaying(): boolean;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get changeListener(): $EntityInLevelCallback;
        get firstTick(): boolean;
    }
    export class $Display$ColorInterpolator extends $Record implements $Display$IntInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$ColorInterpolator}.
     */
    export type $Display$ColorInterpolator_ = { current?: number, previous?: number,  } | [current?: number, previous?: number, ];
    export class $SpawnPlacements$Data extends $Record {
        heightMap(): $Heightmap$Types;
        placement(): $SpawnPlacementType;
        predicate(): $SpawnPlacements$SpawnPredicate<never>;
        constructor(heightMap: $Heightmap$Types_, placement: $SpawnPlacementType_, predicate: $SpawnPlacements$SpawnPredicate_<never>);
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacements$Data}.
     */
    export type $SpawnPlacements$Data_ = { heightMap?: $Heightmap$Types_, predicate?: $SpawnPlacements$SpawnPredicate_<never>, placement?: $SpawnPlacementType_,  } | [heightMap?: $Heightmap$Types_, predicate?: $SpawnPlacements$SpawnPredicate_<never>, placement?: $SpawnPlacementType_, ];
    export class $Display$TextDisplay$LineSplitter {
    }
    export interface $Display$TextDisplay$LineSplitter {
        split(arg0: $Component_, arg1: number): $Display$TextDisplay$CachedInfo;
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$LineSplitter}.
     */
    export type $Display$TextDisplay$LineSplitter_ = ((arg0: $Component, arg1: number) => $Display$TextDisplay$CachedInfo_);
    export class $EntityType<T extends $Entity> implements $FeatureElement, $EntityTypeTest<$Entity, T>, $EntityTypeExtension<any>, $FabricEntityTypeImpl, $RegistryEntry, $IRenderableEntity, $DynamicLightHandlerHolder<any>, $InjectedEntityTypeExtension, $EntityTypeKJS {
        requiredFeatures(): $FeatureFlagSet;
        static byString(arg0: string): ($EntityType<never>) | undefined;
        getTags(): $Stream<$TagKey<$EntityType<never>>>;
        kjs$getKey(): $ResourceKey<any>;
        getDescriptionId(): string;
        spawn(arg0: $ServerLevel, arg1: $Consumer_<T>, arg2: $BlockPos_, arg3: $MobSpawnType_, arg4: boolean, arg5: boolean): T;
        spawn(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $MobSpawnType_): T;
        spawn(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Player, arg3: $BlockPos_, arg4: $MobSpawnType_, arg5: boolean, arg6: boolean): T;
        fireImmune(): boolean;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        kjs$getId(): string;
        canSerialize(): boolean;
        tryCast(arg0: $Entity): T;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$EntityType<never>>;
        canSpawnFarFromPlayer(): boolean;
        clientTrackingRange(): number;
        updateInterval(): number;
        chloride$whitelisted(): boolean;
        static createDefaultStackConfig<T extends $Entity>(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Player): $Consumer<T>;
        static appendDefaultStackConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ServerLevel, arg2: $ItemStack_, arg3: $Player): $Consumer<T>;
        static appendCustomNameConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ItemStack_): $Consumer<T>;
        static appendCustomEntityStackConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ServerLevel, arg2: $ItemStack_, arg3: $Player): $Consumer<T>;
        static updateCustomEntityTag(arg0: $Level_, arg1: $Player, arg2: $Entity, arg3: $CustomData): void;
        canSummon(): boolean;
        getSpawnAABB(arg0: number, arg1: number, arg2: number): $AABB;
        isBlockDangerous(arg0: $BlockState_): boolean;
        static loadEntityRecursive(arg0: $CompoundTag_, arg1: $Level_, arg2: $Function_<$Entity, $Entity>): $Entity;
        static loadEntitiesRecursive(arg0: $List_<$Tag_>, arg1: $Level_): $Stream<$Entity>;
        trackDeltas(): boolean;
        handler$dkn000$fabric_object_builder_api_v1$alwaysUpdateVelocity(arg0: $CallbackInfoReturnable<any>): void;
        handler$moo001$spectrum$alwaysUpdateVelocity(arg0: $CallbackInfoReturnable<any>): void;
        getBaseClass(): $Class<$Entity>;
        registry$getName(): $ResourceLocation;
        kjs$asHolder(): $Holder<any>;
        flywheel$getVisualizer(): $EntityVisualizer<any>;
        flywheel$setVisualizer(visualizer: $EntityVisualizer<any>): void;
        fabric_setAlwaysUpdateVelocity(arg0: boolean): void;
        embPlus$resourceLocation(): $ResourceLocation;
        sodiumdynamiclights$getDynamicLightHandler(): $DynamicLightHandler<any>;
        sodiumdynamiclights$setDynamicLightHandler(handler: $DynamicLightHandler_<any>): void;
        sodiumdynamiclights$getSetting(): boolean;
        sodiumdynamiclights$getName(): $Component;
        getDimensions(): $EntityDimensions;
        getWidth(): number;
        getHeight(): number;
        create(arg0: $Level_): T;
        static create(arg0: $CompoundTag_, arg1: $Level_): ($Entity) | undefined;
        create(arg0: $ServerLevel, arg1: $Consumer_<T>, arg2: $BlockPos_, arg3: $MobSpawnType_, arg4: boolean, arg5: boolean): T;
        is(arg0: $TagKey_<$EntityType<never>>): boolean;
        is(arg0: $HolderSet_<$EntityType<never>>): boolean;
        getDescription(): $Component;
        getCategory(): $MobCategory;
        static by(arg0: $CompoundTag_): ($EntityType<never>) | undefined;
        static getKey(arg0: $EntityType_<never>): $ResourceLocation;
        toShortString(): string;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        arch$holder(): $Holder<$EntityType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
        kjs$getRegistry(): $Registry<$EntityType<never>>;
        arch$registryName(): $ResourceLocation;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getMod(): string;
        getTagKeys(): $List<$TagKey<T>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        static MOOSHROOM: $EntityType<$MushroomCow>;
        static MAGMA_CUBE: $EntityType<$MagmaCube>;
        static SILVERFISH: $EntityType<$Silverfish>;
        static MULE: $EntityType<$Mule>;
        static HOGLIN: $EntityType<$Hoglin>;
        static LEASH_KNOT: $EntityType<$LeashFenceKnotEntity>;
        static HUSK: $EntityType<$Husk>;
        static VINDICATOR: $EntityType<$Vindicator>;
        static WARDEN: $EntityType<$Warden>;
        static OMINOUS_ITEM_SPAWNER: $EntityType<$OminousItemSpawner>;
        static HOPPER_MINECART: $EntityType<$MinecartHopper>;
        static PILLAGER: $EntityType<$Pillager>;
        static SHULKER_BULLET: $EntityType<$ShulkerBullet>;
        static VILLAGER: $EntityType<$Villager>;
        static AREA_EFFECT_CLOUD: $EntityType<$AreaEffectCloud>;
        static PAINTING: $EntityType<$Painting>;
        static TURTLE: $EntityType<$Turtle>;
        static TRADER_LLAMA: $EntityType<$TraderLlama>;
        static SMALL_FIREBALL: $EntityType<$SmallFireball>;
        static TNT: $EntityType<$PrimedTnt>;
        static CAVE_SPIDER: $EntityType<$CaveSpider>;
        static SLIME: $EntityType<$Slime>;
        static DROWNED: $EntityType<$Drowned>;
        static FIREBALL: $EntityType<$LargeFireball>;
        static EVOKER: $EntityType<$Evoker>;
        static MARKER: $EntityType<$Marker>;
        static ENDERMITE: $EntityType<$Endermite>;
        static EXPERIENCE_BOTTLE: $EntityType<$ThrownExperienceBottle>;
        static AXOLOTL: $EntityType<$Axolotl>;
        static COMMAND_BLOCK_MINECART: $EntityType<$MinecartCommandBlock>;
        static PLAYER: $EntityType<$Player>;
        static ITEM: $EntityType<$ItemEntity>;
        static TEXT_DISPLAY: $EntityType<$Display$TextDisplay>;
        static SALMON: $EntityType<$Salmon>;
        static ZOMBIE: $EntityType<$Zombie>;
        static GOAT: $EntityType<$Goat>;
        static STRIDER: $EntityType<$Strider>;
        static PANDA: $EntityType<$Panda>;
        static OCELOT: $EntityType<$Ocelot>;
        static ENDERMAN: $EntityType<$EnderMan>;
        static CHEST_MINECART: $EntityType<$MinecartChest>;
        static ZOMBIE_VILLAGER: $EntityType<$ZombieVillager>;
        static LLAMA: $EntityType<$Llama>;
        static ENDER_DRAGON: $EntityType<$EnderDragon>;
        static WITCH: $EntityType<$Witch>;
        static EXPERIENCE_ORB: $EntityType<$ExperienceOrb>;
        static ARMADILLO: $EntityType<$Armadillo>;
        static ITEM_FRAME: $EntityType<$ItemFrame>;
        static WITHER: $EntityType<$WitherBoss>;
        static ARROW: $EntityType<$Arrow>;
        static CREEPER: $EntityType<$Creeper>;
        static BOGGED: $EntityType<$Bogged>;
        static ILLUSIONER: $EntityType<$Illusioner>;
        static BREEZE: $EntityType<$Breeze>;
        static CAMEL: $EntityType<$Camel>;
        static COD: $EntityType<$Cod>;
        static ZOMBIE_HORSE: $EntityType<$ZombieHorse>;
        static FURNACE_MINECART: $EntityType<$MinecartFurnace>;
        static RAVAGER: $EntityType<$Ravager>;
        static BOAT: $EntityType<$Boat>;
        static SHULKER: $EntityType<$Shulker>;
        static SNIFFER: $EntityType<$Sniffer>;
        static BEE: $EntityType<$Bee>;
        static ITEM_DISPLAY: $EntityType<$Display$ItemDisplay>;
        static PHANTOM: $EntityType<$Phantom>;
        static BLAZE: $EntityType<$Blaze>;
        static SKELETON_HORSE: $EntityType<$SkeletonHorse>;
        static COW: $EntityType<$Cow>;
        static WANDERING_TRADER: $EntityType<$WanderingTrader>;
        static END_CRYSTAL: $EntityType<$EndCrystal>;
        static PIG: $EntityType<$Pig>;
        static ZOGLIN: $EntityType<$Zoglin>;
        static BREEZE_WIND_CHARGE: $EntityType<$BreezeWindCharge>;
        static WOLF: $EntityType<$Wolf>;
        static IRON_GOLEM: $EntityType<$IronGolem>;
        static FROG: $EntityType<$Frog>;
        static SHEEP: $EntityType<$Sheep>;
        static VEX: $EntityType<$Vex>;
        static ENDER_PEARL: $EntityType<$ThrownEnderpearl>;
        static BLOCK_DISPLAY: $EntityType<$Display$BlockDisplay>;
        static TRIDENT: $EntityType<$ThrownTrident>;
        static PIGLIN_BRUTE: $EntityType<$PiglinBrute>;
        static POLAR_BEAR: $EntityType<$PolarBear>;
        static MINECART: $EntityType<$Minecart>;
        static LIGHTNING_BOLT: $EntityType<$LightningBolt>;
        static POTION: $EntityType<$ThrownPotion>;
        static FISHING_BOBBER: $EntityType<$FishingHook>;
        static CHEST_BOAT: $EntityType<$ChestBoat>;
        static SQUID: $EntityType<$Squid>;
        static DRAGON_FIREBALL: $EntityType<$DragonFireball>;
        static ELDER_GUARDIAN: $EntityType<$ElderGuardian>;
        static HORSE: $EntityType<$Horse>;
        static TNT_MINECART: $EntityType<$MinecartTNT>;
        static ARMOR_STAND: $EntityType<$ArmorStand>;
        static PARROT: $EntityType<$Parrot>;
        static EVOKER_FANGS: $EntityType<$EvokerFangs>;
        static FOX: $EntityType<$Fox>;
        static GIANT: $EntityType<$Giant>;
        static STRAY: $EntityType<$Stray>;
        static SPECTRAL_ARROW: $EntityType<$SpectralArrow>;
        static CAT: $EntityType<$Cat>;
        static RABBIT: $EntityType<$Rabbit>;
        static DONKEY: $EntityType<$Donkey>;
        static EYE_OF_ENDER: $EntityType<$EyeOfEnder>;
        static SPAWNER_MINECART: $EntityType<$MinecartSpawner>;
        static GLOW_ITEM_FRAME: $EntityType<$GlowItemFrame>;
        static INTERACTION: $EntityType<$Interaction>;
        static TROPICAL_FISH: $EntityType<$TropicalFish>;
        static ALLAY: $EntityType<$Allay>;
        static SPIDER: $EntityType<$Spider>;
        static SKELETON: $EntityType<$Skeleton>;
        static WITHER_SKELETON: $EntityType<$WitherSkeleton>;
        static CHICKEN: $EntityType<$Chicken>;
        static ZOMBIFIED_PIGLIN: $EntityType<$ZombifiedPiglin>;
        static SNOWBALL: $EntityType<$Snowball>;
        static GLOW_SQUID: $EntityType<$GlowSquid>;
        static SNOW_GOLEM: $EntityType<$SnowGolem>;
        static WITHER_SKULL: $EntityType<$WitherSkull>;
        static PUFFERFISH: $EntityType<$Pufferfish>;
        static GUARDIAN: $EntityType<$Guardian>;
        static EGG: $EntityType<$ThrownEgg>;
        static LLAMA_SPIT: $EntityType<$LlamaSpit>;
        static WIND_CHARGE: $EntityType<$WindCharge>;
        static FALLING_BLOCK: $EntityType<$FallingBlockEntity>;
        static PIGLIN: $EntityType<$Piglin>;
        static GHAST: $EntityType<$Ghast>;
        static BAT: $EntityType<$Bat>;
        static DOLPHIN: $EntityType<$Dolphin>;
        static TADPOLE: $EntityType<$Tadpole>;
        static FIREWORK_ROCKET: $EntityType<$FireworkRocketEntity>;
        constructor(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ImmutableSet<$Block_>, arg7: $EntityDimensions_, arg8: number, arg9: number, arg10: number, arg11: $FeatureFlagSet);
        constructor(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ImmutableSet<$Block_>, arg7: $EntityDimensions_, arg8: number, arg9: number, arg10: number, arg11: $FeatureFlagSet, arg12: $Predicate_<$EntityType<never>>, arg13: $ToIntFunction_<$EntityType<never>>, arg14: $ToIntFunction_<$EntityType<never>>);
        get descriptionId(): string;
        get defaultLootTable(): $ResourceKey<$LootTable>;
        get baseClass(): $Class<$Entity>;
        get dimensions(): $EntityDimensions;
        get width(): number;
        get height(): number;
        get description(): $Component;
        get category(): $MobCategory;
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get tagKeys(): $List<$TagKey<T>>;
    }
    /**
     * Values that may be interpreted as {@link $EntityType}.
     */
    export type $EntityType_<T> = RegistryTypes.EntityType;
    export class $LerpingModel {
    }
    export interface $LerpingModel {
        getModelRotationValues(): $Map<string, $Vector3f>;
        get modelRotationValues(): $Map<string, $Vector3f>;
    }
    /**
     * Values that may be interpreted as {@link $LerpingModel}.
     */
    export type $LerpingModel_ = (() => $Map_<string, $Vector3f>);
    export class $Display$TransformationInterpolator extends $Record implements $Display$GenericInterpolator<$Transformation> {
    }
    /**
     * Values that may be interpreted as {@link $Display$TransformationInterpolator}.
     */
    export type $Display$TransformationInterpolator_ = { current?: $Transformation, previous?: $Transformation,  } | [current?: $Transformation, previous?: $Transformation, ];
    export class $SpawnPlacements implements $InvokerSpawnPlacements, $SpawnPlacementsAccessor {
        static getPlacementType(arg0: $EntityType_<never>): $SpawnPlacementType;
        static getHeightmapType(arg0: $EntityType_<never>): $Heightmap$Types;
        static hasPlacement(arg0: $EntityType_<never>): boolean;
        static getDATA_BY_TYPE$platform_$md$68cb88$0(): $Map<any, any>;
        static register$zeta_$md$68cb88$0(arg0: $EntityType_<any>, arg1: $SpawnPlacementType_, arg2: $Heightmap$Types_, arg3: $SpawnPlacements$SpawnPredicate_<any>): void;
        static fireSpawnPlacementEvent(): void;
        static checkSpawnRules<T extends $Entity>(arg0: $EntityType_<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
        static isSpawnPositionOk(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        static register<T extends $Mob>(arg0: $EntityType_<T>, arg1: $SpawnPlacementType_, arg2: $Heightmap$Types_, arg3: $SpawnPlacements$SpawnPredicate_<T>): void;
        static DATA_BY_TYPE: $Map<$EntityType<never>, $SpawnPlacements$Data>;
        constructor();
        static get DATA_BY_TYPE$platform_$md$68cb88$0(): $Map<any, any>;
    }
    export class $Display$FloatInterpolator {
        static constant(arg0: number): $Display$FloatInterpolator;
    }
    export interface $Display$FloatInterpolator {
        get(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Display$FloatInterpolator}.
     */
    export type $Display$FloatInterpolator_ = ((arg0: number) => number);
    export class $Display$IntInterpolator {
        static constant(arg0: number): $Display$IntInterpolator;
    }
    export interface $Display$IntInterpolator {
        get(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Display$IntInterpolator}.
     */
    export type $Display$IntInterpolator_ = ((arg0: number) => number);
    export class $Leashable {
        static tickLeash<E extends $Entity>(arg0: E): void;
        static callRestoreLeashFromSave$vanillabackport_$md$68cb88$0(arg0: $Entity, arg1: $Leashable$LeashData): void;
        static callDropLeash$vanillabackport_$md$68cb88$1(arg0: $Entity, arg1: boolean, arg2: boolean): void;
        static LEASH_TAG: string;
        static LEASH_ELASTIC_DIST: number;
        static LEASH_TOO_FAR_DIST: number;
    }
    export interface $Leashable extends $LeashExtension {
        getLeashHolder(): $Entity;
        dropLeash(arg0: boolean, arg1: boolean): void;
        canHaveALeashAttachedToIt(): boolean;
        setLeashedTo(arg0: $Entity, arg1: boolean): void;
        writeLeashData(arg0: $CompoundTag_, arg1: $Leashable$LeashData): void;
        readLeashData(arg0: $CompoundTag_): $Leashable$LeashData;
        getLeashData(): $Leashable$LeashData;
        setLeashData(arg0: $Leashable$LeashData): void;
        leashTooFarBehaviour(): void;
        canBeLeashed(): boolean;
        isLeashed(): boolean;
        mayBeLeashed(): boolean;
        setDelayedLeashHolderId(arg0: number): void;
        handleLeashAtDistance(arg0: $Entity, arg1: number): boolean;
        elasticRangeLeashBehaviour(arg0: $Entity, arg1: number): void;
        closeRangeLeashBehaviour(arg0: $Entity): void;
        get leashHolder(): $Entity;
        get leashed(): boolean;
        set delayedLeashHolderId(value: number);
    }
    export class $EntityAttachment$Fallback {
        static ZERO: $List<$Vec3>;
        static AT_CENTER: $EntityAttachment$Fallback;
        static AT_FEET: $EntityAttachment$Fallback;
        static AT_HEIGHT: $EntityAttachment$Fallback;
    }
    export interface $EntityAttachment$Fallback {
        create(arg0: number, arg1: number): $List<$Vec3>;
    }
    /**
     * Values that may be interpreted as {@link $EntityAttachment$Fallback}.
     */
    export type $EntityAttachment$Fallback_ = ((arg0: number, arg1: number) => $List_<$Vec3_>);
    export class $Display$BillboardConstraints extends $Enum<$Display$BillboardConstraints> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $Display$BillboardConstraints[];
        static valueOf(arg0: string): $Display$BillboardConstraints;
        getRemappedEnumConstantName(): string;
        static CENTER: $Display$BillboardConstraints;
        static CODEC: $Codec<$Display$BillboardConstraints>;
        static VERTICAL: $Display$BillboardConstraints;
        static FIXED: $Display$BillboardConstraints;
        static BY_ID: $IntFunction<$Display$BillboardConstraints>;
        static HORIZONTAL: $Display$BillboardConstraints;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Display$BillboardConstraints}.
     */
    export type $Display$BillboardConstraints_ = "fixed" | "vertical" | "horizontal" | "center";
    export class $Attackable {
    }
    export interface $Attackable {
        getLastAttacker(): $LivingEntity;
        get lastAttacker(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $Attackable}.
     */
    export type $Attackable_ = (() => $LivingEntity);
    export class $Display$GenericInterpolator<T> {
        static constant<T>(arg0: T): $Display$GenericInterpolator<T>;
    }
    export interface $Display$GenericInterpolator<T> {
        get(arg0: number): T;
    }
    /**
     * Values that may be interpreted as {@link $Display$GenericInterpolator}.
     */
    export type $Display$GenericInterpolator_<T> = ((arg0: number) => T);
    export class $HasCustomInventoryScreen {
    }
    export interface $HasCustomInventoryScreen {
        openCustomInventoryScreen(arg0: $Player): void;
    }
    /**
     * Values that may be interpreted as {@link $HasCustomInventoryScreen}.
     */
    export type $HasCustomInventoryScreen_ = ((arg0: $Player) => void);
    export class $PowerableMob {
    }
    export interface $PowerableMob {
        isPowered(): boolean;
        get powered(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PowerableMob}.
     */
    export type $PowerableMob_ = (() => boolean);
    export class $SpawnPlacementType {
    }
    export interface $SpawnPlacementType {
        isSpawnPositionOk(arg0: $LevelReader, arg1: $BlockPos_, arg2: $EntityType_<never>): boolean;
        adjustSpawnPosition(arg0: $LevelReader, arg1: $BlockPos_): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacementType}.
     */
    export type $SpawnPlacementType_ = ((arg0: $LevelReader, arg1: $BlockPos, arg2: $EntityType<never>) => boolean);
    export class $Interaction extends $Entity implements $Attackable, $Targeting {
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getLastAttacker(): $LivingEntity;
        setResponse(arg0: boolean): void;
        getResponse(): boolean;
        getWidth(): number;
        getHeight(): number;
        getTarget(): $LivingEntity;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get lastAttacker(): $LivingEntity;
        get target(): $LivingEntity;
    }
    export class $FlyingMob extends $Mob {
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
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
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
    }
    export class $Display$TextDisplay$Align extends $Enum<$Display$TextDisplay$Align> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $Display$TextDisplay$Align[];
        static valueOf(arg0: string): $Display$TextDisplay$Align;
        getRemappedEnumConstantName(): string;
        static CENTER: $Display$TextDisplay$Align;
        static CODEC: $Codec<$Display$TextDisplay$Align>;
        static LEFT: $Display$TextDisplay$Align;
        static RIGHT: $Display$TextDisplay$Align;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$Align}.
     */
    export type $Display$TextDisplay$Align_ = "center" | "left" | "right";
    export interface $EntityType<T> extends RegistryMarked<RegistryTypes.EntityTypeTag, RegistryTypes.EntityType> {}
    export class $Display$BlockDisplay$BlockRenderState extends $Record {
        blockState(): $BlockState;
        constructor(arg0: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $Display$BlockDisplay$BlockRenderState}.
     */
    export type $Display$BlockDisplay$BlockRenderState_ = { blockState?: $BlockState_,  } | [blockState?: $BlockState_, ];
    export class $SpawnPlacementTypes {
        static IN_LAVA: $SpawnPlacementType;
        static IN_WATER: $SpawnPlacementType;
        static NO_RESTRICTIONS: $SpawnPlacementType;
        static ON_GROUND: $SpawnPlacementType;
    }
    export interface $SpawnPlacementTypes {
    }
    export class $TamableAnimal extends $Animal implements $OwnableEntity {
        isTame(): boolean;
        setOwnerUUID(arg0: $UUID_): void;
        isInSittingPose(): boolean;
        getOwnerUUID(): $UUID;
        setInSittingPose(arg0: boolean): void;
        wantsToAttack(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        tryToTeleportToOwner(): void;
        shouldTryTeleportToOwner(): boolean;
        canTeleportTo(arg0: $BlockPos_): boolean;
        unableToMoveToOwner(): boolean;
        setTame(arg0: boolean, arg1: boolean): void;
        isOrderedToSit(): boolean;
        setOrderedToSit(arg0: boolean): void;
        tame(arg0: $Player): void;
        isOwnedBy(arg0: $LivingEntity): boolean;
        getOwner(): $LivingEntity;
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
        static TELEPORT_WHEN_DISTANCE_IS_SQ: number;
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
        get owner(): $LivingEntity;
    }
    export class $PlayerRideable {
    }
    export interface $PlayerRideable {
    }
    export class $Crackiness {
        byFraction(arg0: number): $Crackiness$Level;
        byDamage(arg0: $ItemStack_): $Crackiness$Level;
        byDamage(arg0: number, arg1: number): $Crackiness$Level;
        static GOLEM: $Crackiness;
        static WOLF_ARMOR: $Crackiness;
    }
    export class $Interaction$PlayerAction extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Interaction$PlayerAction}.
     */
    export type $Interaction$PlayerAction_ = { player?: $UUID_, timestamp?: number,  } | [player?: $UUID_, timestamp?: number, ];
    export class $MobCategory extends $Enum<$MobCategory> implements $StringRepresentable, $IExtensibleEnum, $IMobCategory {
        getSerializedName(): string;
        isFriendly(): boolean;
        isPersistent(): boolean;
        getMaxInstancesPerChunk(): number;
        getDespawnDistance(): number;
        getNoDespawnDistance(): number;
        servercore$getSpawnInterval(): number;
        servercore$getOriginalCapacity(): number;
        servercore$modifyCapacity(modifier: number): void;
        servercore$modifySpawningConfig(max: number, interval: number): void;
        static getExtensionInfo(): $ExtensionInfo;
        getName(): string;
        static values(): $MobCategory[];
        static valueOf(arg0: string): $MobCategory;
        getRemappedEnumConstantName(): string;
        static WATER_CREATURE: $MobCategory;
        static WATER_AMBIENT: $MobCategory;
        static CODEC: $Codec<$MobCategory>;
        static AMBIENT: $MobCategory;
        static MISC: $MobCategory;
        static WHALEBORNE_HULLBACK: $MobCategory;
        static AETHER_AETHER_DARKNESS_MONSTER: $MobCategory;
        static AETHER_AETHER_SKY_MONSTER: $MobCategory;
        static UNDERGROUND_WATER_CREATURE: $MobCategory;
        static AXOLOTLS: $MobCategory;
        static CREATURE: $MobCategory;
        static MONSTER: $MobCategory;
        static AETHER_AETHER_SURFACE_MONSTER: $MobCategory;
        static AETHER_AETHER_AERWHALE: $MobCategory;
        get serializedName(): string;
        get friendly(): boolean;
        get persistent(): boolean;
        get maxInstancesPerChunk(): number;
        get despawnDistance(): number;
        get noDespawnDistance(): number;
        static get extensionInfo(): $ExtensionInfo;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MobCategory}.
     */
    export type $MobCategory_ = string | "monster" | "creature" | "ambient" | "axolotls" | "underground_water_creature" | "water_creature" | "water_ambient" | "misc" | "aether:aether_aerwhale" | "aether:aether_darkness_monster" | "aether:aether_sky_monster" | "aether:aether_surface_monster" | "whaleborne:hullback" | string;
    export class $Display$TextDisplay$TextRenderState extends $Record {
        backgroundColor(): $Display$IntInterpolator;
        textOpacity(): $Display$IntInterpolator;
        lineWidth(): number;
        text(): $Component;
        flags(): number;
        constructor(arg0: $Component_, arg1: number, arg2: $Display$IntInterpolator_, arg3: $Display$IntInterpolator_, arg4: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$TextRenderState}.
     */
    export type $Display$TextDisplay$TextRenderState_ = { backgroundColor?: $Display$IntInterpolator_, textOpacity?: $Display$IntInterpolator_, flags?: number, text?: $Component_, lineWidth?: number,  } | [backgroundColor?: $Display$IntInterpolator_, textOpacity?: $Display$IntInterpolator_, flags?: number, text?: $Component_, lineWidth?: number, ];
    export class $Display$BlockDisplay extends $Display {
        getBlockState(): $BlockState;
        setBlockState(arg0: $BlockState_): void;
        blockRenderState(): $Display$BlockDisplay$BlockRenderState;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        static NO_BRIGHTNESS_OVERRIDE: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        static TAG_BLOCK_STATE: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $ItemSteerable {
    }
    export interface $ItemSteerable {
        boost(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemSteerable}.
     */
    export type $ItemSteerable_ = (() => boolean);
    export class $PlayerRideableJumping {
    }
    export interface $PlayerRideableJumping extends $PlayerRideable {
        canJump(): boolean;
        getJumpCooldown(): number;
        onPlayerJump(arg0: number): void;
        handleStartJump(arg0: number): void;
        handleStopJump(): void;
        get jumpCooldown(): number;
    }
    export class $Marker extends $Entity {
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $SpawnPlacements$SpawnPredicate<T extends $Entity> {
    }
    export interface $SpawnPlacements$SpawnPredicate<T extends $Entity> {
        test(arg0: $EntityType_<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacements$SpawnPredicate}.
     */
    export type $SpawnPlacements$SpawnPredicate_<T> = ((arg0: $EntityType<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType, arg3: $BlockPos, arg4: $RandomSource) => boolean);
    export class $EquipmentSlot$Type extends $Enum<$EquipmentSlot$Type> {
        static invokeNew$accessories_$md$68cb88$0(arg0: string, arg1: number): $EquipmentSlot$Type;
        static values(): $EquipmentSlot$Type[];
        static valueOf(arg0: string): $EquipmentSlot$Type;
        static ANIMAL_ARMOR: $EquipmentSlot$Type;
        static HUMANOID_ARMOR: $EquipmentSlot$Type;
        static HAND: $EquipmentSlot$Type;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlot$Type}.
     */
    export type $EquipmentSlot$Type_ = "hand" | "humanoid_armor" | "animal_armor";
    export class $Display$TextDisplay extends $Display {
        getBackgroundColor(): number;
        textRenderState(): $Display$TextDisplay$TextRenderState;
        handler$hma000$figura$applyEmojis(cir: $CallbackInfoReturnable<any>): void;
        getLineWidth(): number;
        setLineWidth(arg0: number): void;
        getTextOpacity(): number;
        setTextOpacity(arg0: number): void;
        setBackgroundColor(arg0: number): void;
        static getAlign(arg0: number): $Display$TextDisplay$Align;
        cacheDisplay(arg0: $Display$TextDisplay$LineSplitter_): $Display$TextDisplay$CachedInfo;
        setText(arg0: $Component_): void;
        getFlags(): number;
        getText(): $Component;
        setFlags(arg0: number): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static FLAG_SHADOW: number;
        xRot: number;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        static NO_BRIGHTNESS_OVERRIDE: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ALIGN_RIGHT: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static TAG_TEXT: string;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        static INITIAL_BACKGROUND: number;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static FLAG_SEE_THROUGH: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        static FLAG_USE_DEFAULT_BACKGROUND: number;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FLAG_ALIGN_LEFT: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $Display$LinearFloatInterpolator extends $Record implements $Display$FloatInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$LinearFloatInterpolator}.
     */
    export type $Display$LinearFloatInterpolator_ = { current?: number, previous?: number,  } | [current?: number, previous?: number, ];
    export class $EquipmentSlot extends $Enum<$EquipmentSlot> implements $StringRepresentable {
        getSerializedName(): string;
        isArmor(): boolean;
        static invokeNew$accessories_$md$68cb88$0(arg0: string, arg1: number, arg2: $EquipmentSlot$Type_, arg3: number, arg4: number, arg5: string): $EquipmentSlot;
        getFilterFlag(): number;
        getIndex(): number;
        getIndex(arg0: number): number;
        static byName(targetName: string): $EquipmentSlot;
        getName(): string;
        static values(): $EquipmentSlot[];
        static valueOf(arg0: string): $EquipmentSlot;
        limit(arg0: $ItemStack_): $ItemStack;
        getType(): $EquipmentSlot$Type;
        getRemappedEnumConstantName(): string;
        static CHEST: $EquipmentSlot;
        static HEAD: $EquipmentSlot;
        static CODEC: $StringRepresentable$EnumCodec<$EquipmentSlot>;
        static OFFHAND: $EquipmentSlot;
        static MAINHAND: $EquipmentSlot;
        static LEGS: $EquipmentSlot;
        static NO_COUNT_LIMIT: number;
        static BODY: $EquipmentSlot;
        static FEET: $EquipmentSlot;
        get serializedName(): string;
        get armor(): boolean;
        get filterFlag(): number;
        get type(): $EquipmentSlot$Type;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlot}.
     */
    export type $EquipmentSlot_ = "mainhand" | "offhand" | "feet" | "legs" | "chest" | "head" | "body";
    export class $VariantHolder<T> {
    }
    export interface $VariantHolder<T> {
        getVariant(): T;
        setVariant(arg0: T): void;
    }
    export class $EquipmentUser {
    }
    export interface $EquipmentUser {
        getItemBySlot(arg0: $EquipmentSlot_): $ItemStack;
        setItemSlot(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $EquipmentTable_, arg1: $LootParams): void;
        setDropChance(arg0: $EquipmentSlot_, arg1: number): void;
        resolveSlot(arg0: $ItemStack_, arg1: $List_<$EquipmentSlot_>): $EquipmentSlot;
    }
    export class $WalkAnimationState implements $AccessorWalkAnimationState {
        speed(arg0: number): number;
        speed(): number;
        setSpeed(arg0: number): void;
        isMoving(): boolean;
        update(arg0: number, arg1: number): void;
        position(): number;
        position(arg0: number): number;
        setPosition(arg0: number): void;
        getSpeedOld(): number;
        setSpeedOld(arg0: number): void;
        speedOld: number;
        constructor();
        get moving(): boolean;
    }
    export class $SlotAccess {
        static forContainer(arg0: $Container, arg1: number): $SlotAccess;
        static forContainer(arg0: $Container, arg1: number, arg2: $Predicate_<$ItemStack>): $SlotAccess;
        static forEquipmentSlot(arg0: $LivingEntity, arg1: $EquipmentSlot_): $SlotAccess;
        static forEquipmentSlot(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $Predicate_<$ItemStack>): $SlotAccess;
        static of(arg0: $Supplier_<$ItemStack>, arg1: $Consumer_<$ItemStack>): $SlotAccess;
        static NULL: $SlotAccess;
    }
    export interface $SlotAccess {
        get(): $ItemStack;
        set(arg0: $ItemStack_): boolean;
    }
    export class $LightningBolt extends $Entity {
        getDamage(): number;
        setVisualOnly(arg0: boolean): void;
        setDamage(arg0: number): void;
        handler$jlb000$architectury$handleLightning(ci: $CallbackInfo, list: $List_<any>): void;
        getBlocksSetOnFire(): number;
        getHitEntities(): $Stream<$Entity>;
        getCause(): $ServerPlayer;
        setCause(arg0: $ServerPlayer): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        seed: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        visualOnly: boolean;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<$LightningBolt>, arg1: $Level_);
        get blocksSetOnFire(): number;
        get hitEntities(): $Stream<$Entity>;
    }
    export class $LivingEntity$Fallsounds extends $Record {
        small(): $SoundEvent;
        big(): $SoundEvent;
        constructor(small: $SoundEvent_, big: $SoundEvent_);
    }
    /**
     * Values that may be interpreted as {@link $LivingEntity$Fallsounds}.
     */
    export type $LivingEntity$Fallsounds_ = { small?: $SoundEvent_, big?: $SoundEvent_,  } | [small?: $SoundEvent_, big?: $SoundEvent_, ];
    export class $Display$ItemDisplay extends $Display {
        getItemStack(): $ItemStack;
        itemRenderState(): $Display$ItemDisplay$ItemRenderState;
        setItemStack(arg0: $ItemStack_): void;
        setItemTransform(arg0: $ItemDisplayContext_): void;
        getItemTransform(): $ItemDisplayContext;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        static NO_BRIGHTNESS_OVERRIDE: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $EntitySelector$MobCanWearArmorEntitySelector implements $Predicate<$Entity> {
        test(arg0: $Entity): boolean;
        or(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        negate(): $Predicate<$Entity>;
        and(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        constructor(arg0: $ItemStack_);
    }
    export class $Entity$MovementEmission extends $Enum<$Entity$MovementEmission> {
        emitsAnything(): boolean;
        emitsSounds(): boolean;
        emitsEvents(): boolean;
        static values(): $Entity$MovementEmission[];
        static valueOf(arg0: string): $Entity$MovementEmission;
        static ALL: $Entity$MovementEmission;
        static EVENTS: $Entity$MovementEmission;
        static SOUNDS: $Entity$MovementEmission;
        static NONE: $Entity$MovementEmission;
    }
    /**
     * Values that may be interpreted as {@link $Entity$MovementEmission}.
     */
    export type $Entity$MovementEmission_ = "none" | "sounds" | "events" | "all";
    export class $AnimationState {
        startIfStopped(arg0: number): void;
        getAccumulatedTime(): number;
        fastForward(arg0: number, arg1: number): void;
        animateWhen(arg0: boolean, arg1: number): void;
        updateTime(arg0: number, arg1: number): void;
        ifStarted(arg0: $Consumer_<$AnimationState>): void;
        isStarted(): boolean;
        start(arg0: number): void;
        stop(): void;
        constructor();
        get accumulatedTime(): number;
        get started(): boolean;
    }
    /**
     * @deprecated
     */
    export class $Shearable {
    }
    export interface $Shearable extends $IShearable {
        /**
         * @deprecated
         */
        shear(arg0: $SoundSource_): void;
        /**
         * @deprecated
         */
        readyForShearing(): boolean;
    }
    export class $AreaEffectCloud extends $Entity implements $TraceableEntity {
        addEffect(arg0: $MobEffectInstance): void;
        getRadius(): number;
        setRadius(arg0: number): void;
        setPotionContents(arg0: $PotionContents_): void;
        getParticle(): $ParticleOptions;
        setParticle(arg0: $ParticleOptions_): void;
        isWaiting(): boolean;
        getRadiusOnUse(): number;
        setRadiusOnUse(arg0: number): void;
        getRadiusPerTick(): number;
        setRadiusPerTick(arg0: number): void;
        getDurationOnUse(): number;
        setDurationOnUse(arg0: number): void;
        getWaitTime(): number;
        setWaitTime(arg0: number): void;
        setDuration(arg0: number): void;
        setOwner(arg0: $LivingEntity): void;
        getDuration(): number;
        getOwner(): $Entity;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        static DEFAULT_WIDTH: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static HEIGHT: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<$AreaEffectCloud>, arg1: $Level_);
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number);
        set potionContents(value: $PotionContents_);
        get waiting(): boolean;
    }
    export class $PathfinderMob extends $Mob implements $IMagicEntity {
        getMagicData(): $MagicData;
        isDrinkingPotion(): boolean;
        setDrinkingPotion(arg0: boolean): void;
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
        getWalkTargetValue(arg0: $BlockPos_): number;
        getWalkTargetValue(arg0: $BlockPos_, arg1: $LevelReader): number;
        handler$fnj000$irons_spells_js$init(arg0: $EntityType_<any>, arg1: $Level_, arg2: $CallbackInfo): void;
        isPathFinding(): boolean;
        isPanicking(): boolean;
        self(): $PathfinderMob;
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
        get magicData(): $MagicData;
        get casting(): boolean;
        set syncedSpellData(value: $SyncedSpellData);
        set teleportLocationBehindTarget(value: number);
        get pathFinding(): boolean;
        get panicking(): boolean;
    }
    export class $Display$RenderState extends $Record {
        transformation(): $Display$GenericInterpolator<$Transformation>;
        brightnessOverride(): number;
        billboardConstraints(): $Display$BillboardConstraints;
        shadowRadius(): $Display$FloatInterpolator;
        shadowStrength(): $Display$FloatInterpolator;
        glowColorOverride(): number;
        constructor(arg0: $Display$GenericInterpolator_<$Transformation>, arg1: $Display$BillboardConstraints_, arg2: number, arg3: $Display$FloatInterpolator_, arg4: $Display$FloatInterpolator_, arg5: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$RenderState}.
     */
    export type $Display$RenderState_ = { shadowStrength?: $Display$FloatInterpolator_, transformation?: $Display$GenericInterpolator_<$Transformation>, shadowRadius?: $Display$FloatInterpolator_, brightnessOverride?: number, glowColorOverride?: number, billboardConstraints?: $Display$BillboardConstraints_,  } | [shadowStrength?: $Display$FloatInterpolator_, transformation?: $Display$GenericInterpolator_<$Transformation>, shadowRadius?: $Display$FloatInterpolator_, brightnessOverride?: number, glowColorOverride?: number, billboardConstraints?: $Display$BillboardConstraints_, ];
    export class $RelativeMovement extends $Enum<$RelativeMovement> {
        static pack(arg0: $Set_<$RelativeMovement_>): number;
        static unpack(arg0: number): $Set<$RelativeMovement>;
        static values(): $RelativeMovement[];
        static valueOf(arg0: string): $RelativeMovement;
        static ROTATION: $Set<$RelativeMovement>;
        static ALL: $Set<$RelativeMovement>;
        static Y_ROT: $RelativeMovement;
        static X_ROT: $RelativeMovement;
        static X: $RelativeMovement;
        static Y: $RelativeMovement;
        static Z: $RelativeMovement;
    }
    /**
     * Values that may be interpreted as {@link $RelativeMovement}.
     */
    export type $RelativeMovement_ = "x" | "y" | "z" | "y_rot" | "x_rot";
    export class $Display$PosRotInterpolationTarget {
    }
    export class $OminousItemSpawner extends $Entity {
        addParticles(): void;
        getItem(): $ItemStack;
        static create(arg0: $Level_, arg1: $ItemStack_): $OminousItemSpawner;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static TICKS_BEFORE_ABOUT_TO_SPAWN_SOUND: number;
        xRot: number;
        hasImpulse: boolean;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<$OminousItemSpawner>, arg1: $Level_);
        get item(): $ItemStack;
    }
    export class $EntityType$Builder<T extends $Entity> implements $FabricEntityTypeImpl$Builder, $FabricEntityType$Builder<any> {
        requiredFeatures(...arg0: $FeatureFlag[]): $EntityType$Builder<$Object>;
        eyeHeight(arg0: number): $EntityType$Builder<$Object>;
        fireImmune(): $EntityType$Builder<$Object>;
        noSave(): $EntityType$Builder<$Object>;
        immuneTo(...arg0: $Block_[]): $EntityType$Builder<$Object>;
        canSpawnFarFromPlayer(): $EntityType$Builder<$Object>;
        clientTrackingRange(arg0: number): $EntityType$Builder<$Object>;
        updateInterval(arg0: number): $EntityType$Builder<$Object>;
        spawnDimensionsScale(arg0: number): $EntityType$Builder<$Object>;
        alwaysUpdateVelocity(arg0: boolean): $EntityType$Builder<any>;
        sized(arg0: number, arg1: number): $EntityType$Builder<$Object>;
        ridingOffset(arg0: number): $EntityType$Builder<$Object>;
        passengerAttachments(...arg0: number[]): $EntityType$Builder<$Object>;
        passengerAttachments(...arg0: $Vec3_[]): $EntityType$Builder<$Object>;
        nameTagOffset(arg0: number): $EntityType$Builder<$Object>;
        static createNothing<T extends $Entity>(arg0: $MobCategory_): $EntityType$Builder<T>;
        noSummon(): $EntityType$Builder<$Object>;
        vehicleAttachment(arg0: $Vec3_): $EntityType$Builder<$Object>;
        setShouldReceiveVelocityUpdates(arg0: boolean): $EntityType$Builder<$Object>;
        setUpdateInterval(arg0: number): $EntityType$Builder<$Object>;
        setTrackingRange(arg0: number): $EntityType$Builder<$Object>;
        fabric_setLivingEntityBuilder(arg0: $FabricEntityTypeImpl$Builder$Living<any>): void;
        fabric_setMobEntityBuilder(arg0: $FabricEntityTypeImpl$Builder$Mob<any>): void;
        build(arg0: string): $EntityType<$Object>;
        build(): $EntityType<any>;
        attach(arg0: $EntityAttachment_, arg1: number, arg2: number, arg3: number): $EntityType$Builder<$Object>;
        attach(arg0: $EntityAttachment_, arg1: $Vec3_): $EntityType$Builder<$Object>;
        static of<T extends $Entity>(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_): $EntityType$Builder<T>;
        set shouldReceiveVelocityUpdates(value: boolean);
        set trackingRange(value: number);
    }
    export class $Display$TextDisplay$CachedLine extends $Record {
        contents(): $FormattedCharSequence;
        width(): number;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$CachedLine}.
     */
    export type $Display$TextDisplay$CachedLine_ = { contents?: $FormattedCharSequence_, width?: number,  } | [contents?: $FormattedCharSequence_, width?: number, ];
    export class $EquipmentTable extends $Record {
        lootTable(): $ResourceKey<$LootTable>;
        slotDropChances(): $Map<$EquipmentSlot, number>;
        static CODEC: $Codec<$EquipmentTable>;
        static DROP_CHANCES_CODEC: $Codec<$Map<$EquipmentSlot, number>>;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: $Map_<$EquipmentSlot_, number>);
    }
    /**
     * Values that may be interpreted as {@link $EquipmentTable}.
     */
    export type $EquipmentTable_ = { lootTable?: $ResourceKey_<$LootTable>, slotDropChances?: $Map_<$EquipmentSlot_, number>,  } | [lootTable?: $ResourceKey_<$LootTable>, slotDropChances?: $Map_<$EquipmentSlot_, number>, ];
    export class $PortalProcessor {
        isSamePortal(arg0: $Portal_): boolean;
        updateEntryPosition(arg0: $BlockPos_): void;
        setAsInsidePortalThisTick(arg0: boolean): void;
        processPortalTeleportation(arg0: $ServerLevel, arg1: $Entity, arg2: boolean): boolean;
        getPortalDestination(arg0: $ServerLevel, arg1: $Entity): $DimensionTransition;
        hasExpired(): boolean;
        getPortalLocalTransition(): $Portal$Transition;
        isInsidePortalThisTick(): boolean;
        getEntryPosition(): $BlockPos;
        getPortalTime(): number;
        constructor(arg0: $Portal_, arg1: $BlockPos_);
        set asInsidePortalThisTick(value: boolean);
        get portalLocalTransition(): $Portal$Transition;
        get insidePortalThisTick(): boolean;
        get entryPosition(): $BlockPos;
        get portalTime(): number;
    }
    export class $MobSpawnType extends $Enum<$MobSpawnType> {
        static isSpawner(arg0: $MobSpawnType_): boolean;
        static ignoresLightRequirements(arg0: $MobSpawnType_): boolean;
        static values(): $MobSpawnType[];
        static valueOf(arg0: string): $MobSpawnType;
        static CONVERSION: $MobSpawnType;
        static STRUCTURE: $MobSpawnType;
        static BUCKET: $MobSpawnType;
        static DISPENSER: $MobSpawnType;
        static SPAWNER: $MobSpawnType;
        static EVENT: $MobSpawnType;
        static MOB_SUMMONED: $MobSpawnType;
        static NATURAL: $MobSpawnType;
        static SPAWN_EGG: $MobSpawnType;
        static PATROL: $MobSpawnType;
        static CHUNK_GENERATION: $MobSpawnType;
        static TRIAL_SPAWNER: $MobSpawnType;
        static BREEDING: $MobSpawnType;
        static REINFORCEMENT: $MobSpawnType;
        static COMMAND: $MobSpawnType;
        static TRIGGERED: $MobSpawnType;
        static JOCKEY: $MobSpawnType;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnType}.
     */
    export type $MobSpawnType_ = "natural" | "chunk_generation" | "spawner" | "structure" | "breeding" | "mob_summoned" | "jockey" | "event" | "conversion" | "reinforcement" | "triggered" | "bucket" | "spawn_egg" | "command" | "dispenser" | "patrol" | "trial_spawner";
    export class $ExperienceOrb extends $Entity implements $ExperienceOrbAccessor, $ExperienceOrbAccess, $IClumpedOrb {
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        static award(arg0: $ServerLevel, arg1: $Vec3_, arg2: number): void;
        handler$jle001$vinery$onPlayerTouch(player: $Player, ci: $CallbackInfo): void;
        static getExperienceValue(arg0: number): number;
        static tryMergeToExisting(arg0: $ServerLevel, arg1: $Vec3_, arg2: number): boolean;
        handler$eki000$clumps$merge(arg0: $ExperienceOrb, arg1: $CallbackInfo): void;
        handler$eki002$clumps$addAdditionalSaveData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$eki002$clumps$readAdditionalSaveData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$eki000$clumps$playerTouch(arg0: $Player, arg1: $CallbackInfo): void;
        repairPlayerItems(arg0: $ServerPlayer, arg1: number): number;
        localvar$eki000$clumps$captureCurrentEntry(arg0: $Optional<any>): $Optional<any>;
        handler$eki000$clumps$repairPlayerItems(arg0: $ServerPlayer, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        clumps$resolve(): boolean;
        clumps$getClumpedMap(): $Map<any, any>;
        clumps$setClumpedMap(arg0: $Map_<any, any>): void;
        getIcon(): number;
        getValue(): number;
        clumps$getAge(): number;
        clumps$setCount(arg0: number): void;
        clumps$setAge(arg0: number): void;
        bumblezone$setValue(arg0: number): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        clumps$clumpedMap: $Map<any, any>;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        count: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        clumps$currentEntry: $Optional<any>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        value: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $EntityType_<$ExperienceOrb>, arg1: $Level_);
        get icon(): number;
    }
    export class $Display$LinearIntInterpolator extends $Record implements $Display$IntInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$LinearIntInterpolator}.
     */
    export type $Display$LinearIntInterpolator_ = { current?: number, previous?: number,  } | [current?: number, previous?: number, ];
    export class $EntityDimensions extends $Record {
        eyeHeight(): number;
        static scalable(arg0: number, arg1: number): $EntityDimensions;
        withAttachments(arg0: $EntityAttachments$Builder): $EntityDimensions;
        makeBoundingBox(arg0: $Vec3_): $AABB;
        makeBoundingBox(arg0: number, arg1: number, arg2: number): $AABB;
        withEyeHeight(arg0: number): $EntityDimensions;
        attachments(): $EntityAttachments;
        fixed(): boolean;
        static fixed(arg0: number, arg1: number): $EntityDimensions;
        width(): number;
        height(): number;
        scale(arg0: number, arg1: number): $EntityDimensions;
        scale(arg0: number): $EntityDimensions;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $EntityAttachments, arg4: boolean);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EntityDimensions}.
     */
    export type $EntityDimensions_ = { attachments?: $EntityAttachments, width?: number, eyeHeight?: number, height?: number, fixed?: boolean,  } | [attachments?: $EntityAttachments, width?: number, eyeHeight?: number, height?: number, fixed?: boolean, ];
    export class $EntityAttachment extends $Enum<$EntityAttachment> {
        createFallbackPoints(arg0: number, arg1: number): $List<$Vec3>;
        static values(): $EntityAttachment[];
        static valueOf(arg0: string): $EntityAttachment;
        static VEHICLE: $EntityAttachment;
        static NAME_TAG: $EntityAttachment;
        static PASSENGER: $EntityAttachment;
        static WARDEN_CHEST: $EntityAttachment;
    }
    /**
     * Values that may be interpreted as {@link $EntityAttachment}.
     */
    export type $EntityAttachment_ = "passenger" | "vehicle" | "name_tag" | "warden_chest";
    export class $TraceableEntity {
    }
    export interface $TraceableEntity {
        getOwner(): $Entity;
        get owner(): $Entity;
    }
    /**
     * Values that may be interpreted as {@link $TraceableEntity}.
     */
    export type $TraceableEntity_ = (() => $Entity);
    export class $HumanoidArm extends $Enum<$HumanoidArm> implements $OptionEnum, $StringRepresentable {
        getOpposite(): $HumanoidArm;
        getSerializedName(): string;
        static values(): $HumanoidArm[];
        static valueOf(arg0: string): $HumanoidArm;
        getKey(): string;
        getId(): number;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$HumanoidArm>;
        static LEFT: $HumanoidArm;
        static BY_ID: $IntFunction<$HumanoidArm>;
        static RIGHT: $HumanoidArm;
        get opposite(): $HumanoidArm;
        get serializedName(): string;
        get key(): string;
        get id(): number;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $HumanoidArm}.
     */
    export type $HumanoidArm_ = "left" | "right";
    export class $EntityType$EntityFactory<T extends $Entity> {
    }
    export interface $EntityType$EntityFactory<T extends $Entity> {
        create(arg0: $EntityType_<T>, arg1: $Level_): T;
    }
    /**
     * Values that may be interpreted as {@link $EntityType$EntityFactory}.
     */
    export type $EntityType$EntityFactory_<T> = ((arg0: $EntityType<T>, arg1: $Level) => T);
    export class $MoverType extends $Enum<$MoverType> {
        static values(): $MoverType[];
        static valueOf(arg0: string): $MoverType;
        static PLAYER: $MoverType;
        static PISTON: $MoverType;
        static SHULKER_BOX: $MoverType;
        static SELF: $MoverType;
        static SHULKER: $MoverType;
    }
    /**
     * Values that may be interpreted as {@link $MoverType}.
     */
    export type $MoverType_ = "self" | "player" | "piston" | "shulker_box" | "shulker";
    export class $Entity$RemovalReason extends $Enum<$Entity$RemovalReason> {
        shouldSave(): boolean;
        shouldDestroy(): boolean;
        static values(): $Entity$RemovalReason[];
        static valueOf(arg0: string): $Entity$RemovalReason;
        static UNLOADED_TO_CHUNK: $Entity$RemovalReason;
        static UNLOADED_WITH_PLAYER: $Entity$RemovalReason;
        static DISCARDED: $Entity$RemovalReason;
        static CHANGED_DIMENSION: $Entity$RemovalReason;
        static KILLED: $Entity$RemovalReason;
    }
    /**
     * Values that may be interpreted as {@link $Entity$RemovalReason}.
     */
    export type $Entity$RemovalReason_ = "killed" | "discarded" | "unloaded_to_chunk" | "unloaded_with_player" | "changed_dimension";
    export class $Saddleable {
    }
    export interface $Saddleable {
        isSaddled(): boolean;
        isSaddleable(): boolean;
        equipSaddle(arg0: $ItemStack_, arg1: $SoundSource_): void;
        getSaddleSoundEvent(): $SoundEvent;
        get saddled(): boolean;
        get saddleable(): boolean;
        get saddleSoundEvent(): $SoundEvent;
    }
    export class $Targeting {
    }
    export interface $Targeting {
        getTarget(): $LivingEntity;
        get target(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $Targeting}.
     */
    export type $Targeting_ = (() => $LivingEntity);
    export class $Pose extends $Enum<$Pose> {
        static values(): $Pose[];
        static valueOf(arg0: string): $Pose;
        id(): number;
        static SLEEPING: $Pose;
        static SNIFFING: $Pose;
        static EMERGING: $Pose;
        static INHALING: $Pose;
        static FALL_FLYING: $Pose;
        static LONG_JUMPING: $Pose;
        static BY_ID: $IntFunction<$Pose>;
        static DYING: $Pose;
        static CROAKING: $Pose;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Pose>;
        static STANDING: $Pose;
        static SWIMMING: $Pose;
        static SITTING: $Pose;
        static SHOOTING: $Pose;
        static SLIDING: $Pose;
        static USING_TONGUE: $Pose;
        static CROUCHING: $Pose;
        static ROARING: $Pose;
        static DIGGING: $Pose;
        static SPIN_ATTACK: $Pose;
    }
    /**
     * Values that may be interpreted as {@link $Pose}.
     */
    export type $Pose_ = "standing" | "fall_flying" | "sleeping" | "swimming" | "spin_attack" | "crouching" | "long_jumping" | "dying" | "croaking" | "using_tongue" | "sitting" | "roaring" | "sniffing" | "emerging" | "digging" | "sliding" | "shooting" | "inhaling";
    export class $OwnableEntity {
    }
    export interface $OwnableEntity {
        getOwnerUUID(): $UUID;
        getOwner(): $LivingEntity;
        level(): $EntityGetter;
        get ownerUUID(): $UUID;
        get owner(): $LivingEntity;
    }
    export class $EquipmentSlotGroup extends $Enum<$EquipmentSlotGroup> implements $StringRepresentable {
        getSerializedName(): string;
        static bySlot(arg0: $EquipmentSlot_): $EquipmentSlotGroup;
        static values(): $EquipmentSlotGroup[];
        test(arg0: $EquipmentSlot_): boolean;
        static valueOf(arg0: string): $EquipmentSlotGroup;
        getRemappedEnumConstantName(): string;
        static HEAD: $EquipmentSlotGroup;
        static CODEC: $Codec<$EquipmentSlotGroup>;
        static OFFHAND: $EquipmentSlotGroup;
        static ARMOR: $EquipmentSlotGroup;
        static MAINHAND: $EquipmentSlotGroup;
        static LEGS: $EquipmentSlotGroup;
        static BY_ID: $IntFunction<$EquipmentSlotGroup>;
        static ANY: $EquipmentSlotGroup;
        static HAND: $EquipmentSlotGroup;
        static FEET: $EquipmentSlotGroup;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EquipmentSlotGroup>;
        static CHEST: $EquipmentSlotGroup;
        static BODY: $EquipmentSlotGroup;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlotGroup}.
     */
    export type $EquipmentSlotGroup_ = "any" | "mainhand" | "offhand" | "hand" | "feet" | "legs" | "chest" | "head" | "armor" | "body";
    export class $Display extends $Entity implements $DisplayAccessor {
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        renderState(): $Display$RenderState;
        static createTransformation(arg0: $SynchedEntityData): $Transformation;
        getTransformationInterpolationDelay(): number;
        getTransformationInterpolationDuration(): number;
        setTransformationInterpolationDuration(arg0: number): void;
        setTransformationInterpolationDelay(arg0: number): void;
        setPosRotInterpolationDuration(arg0: number): void;
        setViewRange(arg0: number): void;
        setShadowRadius(arg0: number): void;
        setShadowStrength(arg0: number): void;
        setGlowColorOverride(arg0: number): void;
        setBrightnessOverride(arg0: $Brightness_): void;
        setTransformation(arg0: $Transformation): void;
        getBillboardConstraints(): $Display$BillboardConstraints;
        getPosRotInterpolationDuration(): number;
        getViewRange(): number;
        getShadowRadius(): number;
        getShadowStrength(): number;
        getGlowColorOverride(): number;
        getBrightnessOverride(): $Brightness;
        setBillboardConstraints(arg0: $Display$BillboardConstraints_): void;
        getPackedBrightnessOverride(): number;
        calculateInterpolationProgress(arg0: number): number;
        getWidth(): number;
        getHeight(): number;
        invokeSetWidth(arg0: number): void;
        invokeSetHeight(arg0: number): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        xRot: number;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        static NO_BRIGHTNESS_OVERRIDE: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        set transformation(value: $Transformation);
        get packedBrightnessOverride(): number;
    }
    export class $Crackiness$Level extends $Enum<$Crackiness$Level> {
        static values(): $Crackiness$Level[];
        static valueOf(arg0: string): $Crackiness$Level;
        static HIGH: $Crackiness$Level;
        static MEDIUM: $Crackiness$Level;
        static LOW: $Crackiness$Level;
        static NONE: $Crackiness$Level;
    }
    /**
     * Values that may be interpreted as {@link $Crackiness$Level}.
     */
    export type $Crackiness$Level_ = "none" | "low" | "medium" | "high";
    export class $Mob extends $LivingEntity implements $EquipmentUser, $Leashable, $Targeting, $CosmeticArmorLookupTogglable, $MobAccessor, $EquipmentEntity, $NavigatingEntity, $MobAccessor$1, $IMob, $MobEntityAccessor {
        lookAt(arg0: $Entity, arg1: number, arg2: number): void;
        convertTo<T extends $Mob>(arg0: $EntityType_<T>, arg1: boolean): T;
        getNavigation(): $PathNavigation;
        lithium$updateNavigationRegistration(): void;
        dropLeash(arg0: boolean, arg1: boolean): void;
        mobControl$getRule(): $MobExRule;
        isLeftHanded(): boolean;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $EquipmentTable_): void;
        isSpawnCancelled(): boolean;
        playAmbientSound(): void;
        mobControl$setMobSpawn(arg0: $MobSpawn): void;
        mobControl$getMobSpawn(): $MobSpawn;
        lithium$getRegisteredNavigation(): $PathNavigation;
        lithium$isRegisteredToWorld(): boolean;
        spawnAnim(): void;
        setBaby(arg0: boolean): void;
        setPersistenceRequired(): void;
        isBodyArmorItem(arg0: $ItemStack_): boolean;
        isWearingBodyArmor(): boolean;
        setBodyArmorItem(arg0: $ItemStack_): void;
        canPickUpLoot(): boolean;
        static createMobAttributes(): $AttributeSupplier$Builder;
        getPathfindingMalus(arg0: $PathType_): number;
        setPathfindingMalus(arg0: $PathType_, arg1: number): void;
        onPathfindingStart(): void;
        onPathfindingDone(): void;
        getLookControl(): $LookControl;
        getMoveControl(): $MoveControl;
        getJumpControl(): $JumpControl;
        handler$fgh000$rarcompat$getControllingPassenger(arg0: $CallbackInfoReturnable<any>): void;
        getSensing(): $Sensing;
        canFireProjectileWeapon(arg0: $ProjectileWeaponItem): boolean;
        ate(): void;
        getAmbientSoundInterval(): number;
        redirect$lpo000$moonlight$fixSpawnAnimX(instance: $Mob, v: number): number;
        getBodyArmorItem(): $ItemStack;
        setCanPickUpLoot(arg0: boolean): void;
        isNoAi(): boolean;
        isPersistenceRequired(): boolean;
        setNoAi(arg0: boolean): void;
        isWithinMeleeAttackRange(arg0: $LivingEntity): boolean;
        static checkMobSpawnRules(arg0: $EntityType_<$Mob>, arg1: $LevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
        getMaxHeadXRot(): number;
        setLeftHanded(arg0: boolean): void;
        handler$gjc000$apotheosis$apoth_dropBonusLootTables(arg0: $DamageSource_, arg1: boolean, arg2: $CallbackInfo): void;
        setZza(arg0: number): void;
        setYya(arg0: number): void;
        setXxa(arg0: number): void;
        stopInPlace(): void;
        wantsToPickUp(arg0: $ItemStack_): boolean;
        equipItemIfPossible(arg0: $ItemStack_): $ItemStack;
        canHoldItem(arg0: $ItemStack_): boolean;
        setGuaranteedDrop(arg0: $EquipmentSlot_): void;
        canReplaceEqualItem(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        removeWhenFarAway(arg0: number): boolean;
        requiresCustomPersistence(): boolean;
        handler$nae000$spectrum$slowDownAIticks(arg0: $CallbackInfo): void;
        getMaxHeadYRot(): number;
        getHeadRotSpeed(): number;
        checkSpawnRules(arg0: $LevelAccessor, arg1: $MobSpawnType_): boolean;
        checkSpawnObstruction(arg0: $LevelReader): boolean;
        getMaxSpawnClusterSize(): number;
        isMaxGroupSizeReached(arg0: number): boolean;
        dropPreservedEquipment(): void;
        dropPreservedEquipment(arg0: $Predicate_<$ItemStack>): $Set<$EquipmentSlot>;
        static getEquipmentForSlot(arg0: $EquipmentSlot_, arg1: number): $Item;
        setDropChance(arg0: $EquipmentSlot_, arg1: number): void;
        isWithinRestriction(arg0: $BlockPos_): boolean;
        isWithinRestriction(): boolean;
        restrictTo(arg0: $BlockPos_, arg1: number): void;
        getRestrictCenter(): $BlockPos;
        getRestrictRadius(): number;
        clearRestriction(): void;
        hasRestriction(): boolean;
        getLeashData(): $Leashable$LeashData;
        setLeashData(arg0: $Leashable$LeashData): void;
        leashTooFarBehaviour(): void;
        canBeLeashed(): boolean;
        setAggressive(arg0: boolean): void;
        isAggressive(): boolean;
        modifyExpressionValue$kih000$create$mobRidingContraptionsMaintainTheirAttackBox(arg0: $Entity): $Entity;
        removeFreeWill(): void;
        removeAllGoals(arg0: $Predicate_<$Goal>): void;
        getSpawnType(): $MobSpawnType;
        setSpawnCancelled(arg0: boolean): void;
        lithium$setRegisteredToWorld(arg0: $PathNavigation): void;
        mobControl$setRule(arg0: $MobExRule): void;
        mobControl$addMob(arg0: $Mob): void;
        mobControl$setCancelBossFight(arg0: boolean): void;
        mobControl$getCancelBossFight(): boolean;
        getTarget(): $LivingEntity;
        setTarget(arg0: $LivingEntity): void;
        /**
         * @deprecated
         */
        finalizeSpawn(arg0: $ServerLevelAccessor, arg1: $DifficultyInstance, arg2: $MobSpawnType_, arg3: $SpawnGroupData): $SpawnGroupData;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $EquipmentTable_, arg1: $LootParams): void;
        resolveSlot(arg0: $ItemStack_, arg1: $List_<$EquipmentSlot_>): $EquipmentSlot;
        getLeashHolder(): $Entity;
        canHaveALeashAttachedToIt(): boolean;
        setLeashedTo(arg0: $Entity, arg1: boolean): void;
        writeLeashData(arg0: $CompoundTag_, arg1: $Leashable$LeashData): void;
        readLeashData(arg0: $CompoundTag_): $Leashable$LeashData;
        isLeashed(): boolean;
        mayBeLeashed(): boolean;
        setDelayedLeashHolderId(arg0: number): void;
        handleLeashAtDistance(arg0: $Entity, arg1: number): boolean;
        elasticRangeLeashBehaviour(arg0: $Entity, arg1: number): void;
        closeRangeLeashBehaviour(arg0: $Entity): void;
        vb$leashDistanceTo(entity: $Entity): number;
        vb$whenLeashedTo(entity: $Entity): void;
        vb$leashSnapDistance(): number;
        vb$leashElasticDistance(): number;
        vb$checkElasticInteractions(entity: $Entity, data: $Leashable$LeashData): boolean;
        vb$onElasticLeashPull(): void;
        vb$canHaveALeashAttachedTo(target: $Entity): boolean;
        vb$notifyLeashHolder(leashable: $Leashable): void;
        vb$resetAngularMomentum(): void;
        vb$supportQuadLeashAsHolder(): boolean;
        vb$supportQuadLeash(): boolean;
        vb$getQuadLeashOffsets(): $Vec3[];
        vb$getQuadLeashHolderOffsets(): $Vec3[];
        bumblezone$getTargetSelector(): $GoalSelector;
        getGoalSelector(): $GoalSelector;
        invokeGetEquipmentDropChance(arg0: $EquipmentSlot_): number;
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
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
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
        get navigation(): $PathNavigation;
        set baby(value: boolean);
        get wearingBodyArmor(): boolean;
        get moveControl(): $MoveControl;
        get jumpControl(): $JumpControl;
        get sensing(): $Sensing;
        get ambientSoundInterval(): number;
        get maxHeadXRot(): number;
        set guaranteedDrop(value: $EquipmentSlot_);
        get maxHeadYRot(): number;
        get headRotSpeed(): number;
        get maxSpawnClusterSize(): number;
        get restrictCenter(): $BlockPos;
        get restrictRadius(): number;
        get spawnType(): $MobSpawnType;
        get leashHolder(): $Entity;
        get leashed(): boolean;
        set delayedLeashHolderId(value: number);
    }
    export class $Leashable$LeashData implements $LeashDataExtension {
        setLeashHolder(arg0: $Entity): void;
        angularMomentum(): number;
        setAngularMomentum(angularMomentum: number): void;
        leashHolder: $Entity;
        delayedLeashInfo: $Either<$UUID, $BlockPos>;
    }
    export class $Entity$MoveFunction {
    }
    export interface $Entity$MoveFunction {
        accept(arg0: $Entity, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Entity$MoveFunction}.
     */
    export type $Entity$MoveFunction_ = ((arg0: $Entity, arg1: number, arg2: number, arg3: number) => void);
    export class $EntityAttachments {
        getClamped(arg0: $EntityAttachment_, arg1: number, arg2: number): $Vec3;
        getNullable(arg0: $EntityAttachment_, arg1: number, arg2: number): $Vec3;
        static createDefault(arg0: number, arg1: number): $EntityAttachments;
        get(arg0: $EntityAttachment_, arg1: number, arg2: number): $Vec3;
        scale(arg0: number, arg1: number, arg2: number): $EntityAttachments;
        static builder(): $EntityAttachments$Builder;
    }
    export class $EntitySelector {
        static pushableBy(arg0: $Entity): $Predicate<$Entity>;
        static notRiding(arg0: $Entity): $Predicate<$Entity>;
        static withinDistance(arg0: number, arg1: number, arg2: number, arg3: number): $Predicate<$Entity>;
        static ENTITY_STILL_ALIVE: $Predicate<$Entity>;
        static NO_SPECTATORS: $Predicate<$Entity>;
        static ENTITY_NOT_BEING_RIDDEN: $Predicate<$Entity>;
        static LIVING_ENTITY_STILL_ALIVE: $Predicate<$Entity>;
        static CAN_BE_COLLIDED_WITH: $Predicate<$Entity>;
        static NO_CREATIVE_OR_SPECTATOR: $Predicate<$Entity>;
        static CONTAINER_ENTITY_SELECTOR: $Predicate<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $EntitySelector}.
     */
    export type $EntitySelector_ = string;
    export class $AgeableMob extends $PathfinderMob implements $AgeableMobAccessor {
        setAge(arg0: number): void;
        getBreedOffspring(arg0: $ServerLevel, arg1: $AgeableMob): $AgeableMob;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
        ageUp(arg0: number): void;
        ageUp(arg0: number, arg1: boolean): void;
        canBreed(): boolean;
        static bumblezone$getDATA_BABY_ID$the_bumblezone_$md$68cb88$0(): $EntityDataAccessor<any>;
        getAge(): number;
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
    }
    export class $ItemBasedSteering {
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        boost(arg0: $RandomSource): boolean;
        onSynced(): void;
        hasSaddle(): boolean;
        setSaddle(arg0: boolean): void;
        tickBoost(): void;
        boostFactor(): number;
        constructor(arg0: $SynchedEntityData, arg1: $EntityDataAccessor_<number>, arg2: $EntityDataAccessor_<boolean>);
        set saddle(value: boolean);
    }
    export class $NeutralMob {
        static TAG_ANGRY_AT: string;
        static TAG_ANGER_TIME: string;
    }
    export interface $NeutralMob {
        setLastHurtByMob(arg0: $LivingEntity): void;
        getLastHurtByMob(): $LivingEntity;
        setLastHurtByPlayer(arg0: $Player): void;
        canAttack(arg0: $LivingEntity): boolean;
        playerDied(arg0: $Player): void;
        getPersistentAngerTarget(): $UUID;
        setPersistentAngerTarget(arg0: $UUID_): void;
        setRemainingPersistentAngerTime(arg0: number): void;
        readPersistentAngerSaveData(arg0: $Level_, arg1: $CompoundTag_): void;
        getRemainingPersistentAngerTime(): number;
        isAngryAt(arg0: $LivingEntity): boolean;
        updatePersistentAnger(arg0: $ServerLevel, arg1: boolean): void;
        addPersistentAngerSaveData(arg0: $CompoundTag_): void;
        startPersistentAngerTimer(): void;
        stopBeingAngry(): void;
        isAngryAtAllPlayers(arg0: $Level_): boolean;
        isAngry(): boolean;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        getTarget(): $LivingEntity;
        setTarget(arg0: $LivingEntity): void;
        set lastHurtByPlayer(value: $Player);
        get angry(): boolean;
    }
    export class $AgeableMob$AgeableMobGroupData implements $SpawnGroupData {
        isShouldSpawnBaby(): boolean;
        getGroupSize(): number;
        getBabySpawnChance(): number;
        increaseGroupSizeByOne(): void;
        constructor(arg0: boolean);
        constructor(arg0: number);
        get shouldSpawnBaby(): boolean;
        get groupSize(): number;
        get babySpawnChance(): number;
    }
    export class $ReputationEventHandler {
    }
    export interface $ReputationEventHandler {
        onReputationEventFrom(arg0: $ReputationEventType, arg1: $Entity): void;
    }
    /**
     * Values that may be interpreted as {@link $ReputationEventHandler}.
     */
    export type $ReputationEventHandler_ = ((arg0: $ReputationEventType, arg1: $Entity) => void);
    export class $TamableAnimal$TamableAnimalPanicGoal extends $PanicGoal {
        static WATER_CHECK_DISTANCE_VERTICAL: number;
    }
    export class $Display$ItemDisplay$ItemRenderState extends $Record {
        itemStack(): $ItemStack;
        itemTransform(): $ItemDisplayContext;
        constructor(arg0: $ItemStack_, arg1: $ItemDisplayContext_);
    }
    /**
     * Values that may be interpreted as {@link $Display$ItemDisplay$ItemRenderState}.
     */
    export type $Display$ItemDisplay$ItemRenderState_ = { itemStack?: $ItemStack_, itemTransform?: $ItemDisplayContext_,  } | [itemStack?: $ItemStack_, itemTransform?: $ItemDisplayContext_, ];
}
