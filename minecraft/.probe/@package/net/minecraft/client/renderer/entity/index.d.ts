import { $EntityRenderDispatcherAccessor as $EntityRenderDispatcherAccessor$1 } from "@package/dev/tr7zw/notenoughanimations/mixins";
import { $EntityRendererAccessor as $EntityRendererAccessor$3 } from "@package/com/aetherteam/cumulus/mixin/mixins/client/accessor";
import { $ItemInHandRenderer, $BlockEntityWithoutLevelRenderer, $MultiBufferSource_, $RenderType, $ItemModelShaper } from "@package/net/minecraft/client/renderer";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntityRendererAccessor as $LivingEntityRendererAccessor$1 } from "@package/net/fabricmc/fabric/mixin/client/rendering";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $LightningBolt, $EntityType_, $Display, $Display$BlockDisplay, $Display$ItemDisplay, $Entity, $GlowSquid, $Display$ItemDisplay$ItemRenderState_, $EntityType, $Display$BlockDisplay$BlockRenderState, $ExperienceOrb, $Display$ItemDisplay$ItemRenderState, $LivingEntity, $Mob, $Display$BlockDisplay$BlockRenderState_, $Display$TextDisplay$TextRenderState, $Display$TextDisplay, $OminousItemSpawner, $Display$TextDisplay$TextRenderState_ } from "@package/net/minecraft/world/entity";
import { $AbstractWindCharge } from "@package/net/minecraft/world/entity/projectile/windcharge";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManagerReloadListener, $ResourceManager, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Minecraft, $Camera, $Options } from "@package/net/minecraft/client";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $AccessorLivingEntityRenderer } from "@package/com/railwayteam/railways/mixin/client";
import { $EntityRendererAccessor as $EntityRendererAccessor$4 } from "@package/org/figuramc/figura/ducks";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $Parrot$Variant_, $Turtle, $Salmon, $Panda, $Fox, $SnowGolem, $Wolf, $Cod, $Chicken, $Pufferfish, $IronGolem, $Ocelot, $Cat, $Squid, $PolarBear, $Sheep, $Cow, $Pig, $Bee, $TropicalFish, $Dolphin, $MushroomCow, $Rabbit, $Parrot } from "@package/net/minecraft/world/entity/animal";
import { $RandomSource } from "@package/net/minecraft/util";
import { $LivingEntityRendererAccessor as $LivingEntityRendererAccessor$2 } from "@package/artifacts/mixin/accessors/client";
import { $ItemRendererAccessor as $ItemRendererAccessor$1 } from "@package/net/caffeinemc/mods/sodium/mixin/features/render/frapi";
import { $LivingEntityRendererAccessor } from "@package/io/wispforest/accessories/mixin/client";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $LivingEntityRendererAccessor as $LivingEntityRendererAccessor$3 } from "@package/com/github/L_Ender/cataclysm/mixin/accessor";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ExtendedItemRenderer } from "@package/ca/fxco/moreculling/api/renderers";
import { $Bat } from "@package/net/minecraft/world/entity/ambient";
import { $EntityRendererAccessor as $EntityRendererAccessor$2 } from "@package/com/blackgear/vanillabackport/core/mixin/access";
import { $Axolotl } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $EntityRendererExtension } from "@package/com/supermartijn642/fusion/extensions";
import { $DyeColor_, $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EntityRenderersAccessor } from "@package/com/telepathicgrunt/the_bumblezone/mixin/client";
import { $FireworkRocketEntity, $ShulkerBullet, $Arrow, $AbstractArrow, $FishingHook, $WitherSkull, $DragonFireball, $ThrownTrident, $EvokerFangs, $SpectralArrow, $LlamaSpit } from "@package/net/minecraft/world/entity/projectile";
import { $PlayerSkin$Model } from "@package/net/minecraft/client/resources";
import { $Allay } from "@package/net/minecraft/world/entity/animal/allay";
import { $Stray, $Silverfish, $Drowned, $WitherSkeleton, $Zoglin, $Creeper, $Shulker, $CaveSpider, $Endermite, $Spider, $Blaze, $Illusioner, $EnderMan, $AbstractSkeleton, $MagmaCube, $SpellcasterIllager, $Witch, $Bogged, $Vindicator, $Zombie, $ZombieVillager, $Pillager, $Strider, $Guardian, $Ravager, $Phantom, $Vex, $AbstractIllager, $Ghast, $Slime, $Giant } from "@package/net/minecraft/world/entity/monster";
import { $Vec3, $AABB } from "@package/net/minecraft/world/phys";
import { $AbstractMinecart, $MinecartTNT, $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $Quaternionf } from "@package/org/joml";
import { $EndCrystal, $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $EntityRendererAccessor as $EntityRendererAccessor$1 } from "@package/com/aetherteam/aether/mixin/mixins/client/accessor";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $BakedModel, $ModelResourceLocation, $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $EntityRenderDispatcherAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $ItemFrame, $Painting, $LeashFenceKnotEntity, $ArmorStand } from "@package/net/minecraft/world/entity/decoration";
import { $Map, $List, $List_, $Collection, $Iterator } from "@package/java/util";
import { $EntityRendererAccessor } from "@package/de/dafuqs/additionalentityattributes/mixin/client";
import { $AbstractHorse, $Llama, $Horse, $AbstractChestedHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $PiglinModel, $ZombieModel, $RavagerModel, $SkeletonModel, $SalmonModel, $GhastModel, $CodModel, $VillagerModel, $TurtleModel, $IronGolemModel, $BlazeModel, $VexModel, $LlamaModel, $TadpoleModel, $SnifferModel, $CatModel, $PolarBearModel, $EndermiteModel, $ZombieVillagerModel, $ArmorStandArmorModel, $CowModel, $FoxModel, $SheepModel, $SnowGolemModel, $DolphinModel, $EntityModel, $ChestedHorseModel, $OcelotModel, $ArmadilloModel, $WolfModel, $ColorableHierarchicalModel, $SquidModel, $ParrotModel, $ChickenModel, $EndermanModel, $DrownedModel, $BatModel, $RabbitModel, $WitherBossModel, $WardenModel, $IllagerModel, $PandaModel, $SlimeModel, $GoatModel, $SpiderModel, $HorseModel, $StriderModel, $FrogModel, $AxolotlModel, $WitchModel, $BeeModel, $CamelModel, $SilverfishModel, $CreeperModel, $LavaSlimeModel, $AllayModel, $ListModel, $PhantomModel, $HumanoidModel, $PigModel, $HoglinModel, $ShulkerModel, $BreezeModel, $GuardianModel } from "@package/net/minecraft/client/model";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $OwoEntityRenderDispatcherExtension } from "@package/io/wispforest/owo/util/pond";
import { $EntityRendererInter } from "@package/dev/tr7zw/entityculling/access";
import { $LivingRendererAccess } from "@package/com/tom/cpm/client";
import { $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $GoggleTextureOverlayRenderer } from "@package/com/robocraft999/creategoggles/client";
import { $Object } from "@package/java/lang";
import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $LivingEntityRendererAccessor as $LivingEntityRendererAccessor$4 } from "@package/net/sweenus/simplyswords/mixin/client";
import { $EntityModelSet, $ModelPart, $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $PrimedTnt, $ItemEntity, $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $Villager, $WanderingTrader } from "@package/net/minecraft/world/entity/npc";
import { $ItemRendererAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $Camel } from "@package/net/minecraft/world/entity/animal/camel";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $Frog, $Tadpole } from "@package/net/minecraft/world/entity/animal/frog";
import { $MinecartRendererAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack$Pose, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Font } from "@package/net/minecraft/client/gui";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";
import { $AccessorEntityRenderDispatcher } from "@package/org/violetmoon/quark/mixin/mixins/client/accessor";
export * as layers from "@package/net/minecraft/client/renderer/entity/layers";
export * as player from "@package/net/minecraft/client/renderer/entity/player";

declare module "@package/net/minecraft/client/renderer/entity" {
    export class $EnderDragonRenderer$DragonModel extends $EntityModel<$EnderDragon> {
        handler$hij002$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        setupAnim(arg0: $EnderDragon, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        prepareMobModel(arg0: $EnderDragon, arg1: number, arg2: number, arg3: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        entity: $EnderDragon;
        constructor(arg0: $ModelPart);
    }
    export class $NoopRenderer<T extends $Entity> extends $EntityRenderer<T> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $UndeadHorseRenderer extends $AbstractHorseRenderer<$AbstractHorse, $HorseModel<$AbstractHorse>> {
        getTextureLocation(arg0: $AbstractHorse): $ResourceLocation;
        isShaking(horse: $AbstractHorse): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$AbstractHorse, $HorseModel<$AbstractHorse>>>;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation);
    }
    export class $WolfRenderer extends $MobRenderer<$Wolf, $WolfModel<$Wolf>> {
        getTextureLocation(arg0: $Wolf): $ResourceLocation;
        render(arg0: $Wolf, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Wolf, $WolfModel<$Wolf>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $VindicatorRenderer extends $IllagerRenderer<$Vindicator> {
        getTextureLocation(arg0: $Vindicator): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Vindicator, $IllagerModel<$Vindicator>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $VillagerRenderer extends $MobRenderer<$Villager, $VillagerModel<$Villager>> {
        getTextureLocation(arg0: $Villager): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Villager, $VillagerModel<$Villager>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ThrownTridentRenderer extends $EntityRenderer<$ThrownTrident> {
        getTextureLocation(arg0: $ThrownTrident): $ResourceLocation;
        render(arg0: $ThrownTrident, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        static TRIDENT_LOCATION: $ResourceLocation;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $TntRenderer extends $EntityRenderer<$PrimedTnt> {
        getTextureLocation(arg0: $PrimedTnt): $ResourceLocation;
        render(arg0: $PrimedTnt, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EntityRendererProvider$Context {
        getResourceManager(): $ResourceManager;
        getFont(): $Font;
        getItemRenderer(): $ItemRenderer;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        getItemInHandRenderer(): $ItemInHandRenderer;
        getModelManager(): $ModelManager;
        getBlockRenderDispatcher(): $BlockRenderDispatcher;
        getModelSet(): $EntityModelSet;
        bakeLayer(arg0: $ModelLayerLocation): $ModelPart;
        constructor(arg0: $EntityRenderDispatcher, arg1: $ItemRenderer, arg2: $BlockRenderDispatcher, arg3: $ItemInHandRenderer, arg4: $ResourceManager, arg5: $EntityModelSet, arg6: $Font);
        get resourceManager(): $ResourceManager;
        get font(): $Font;
        get itemRenderer(): $ItemRenderer;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get itemInHandRenderer(): $ItemInHandRenderer;
        get modelManager(): $ModelManager;
        get blockRenderDispatcher(): $BlockRenderDispatcher;
        get modelSet(): $EntityModelSet;
    }
    export class $TropicalFishRenderer extends $MobRenderer<$TropicalFish, $ColorableHierarchicalModel<$TropicalFish>> {
        getTextureLocation(arg0: $TropicalFish): $ResourceLocation;
        render(arg0: $TropicalFish, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$TropicalFish, $ColorableHierarchicalModel<$TropicalFish>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $PigRenderer extends $MobRenderer<$Pig, $PigModel<$Pig>> {
        getTextureLocation(arg0: $Pig): $ResourceLocation;
        render(entity: $Pig, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Pig, $PigModel<$Pig>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EntityRenderer<T extends $Entity> implements $EntityRendererAccessor$3, $EntityRendererExtension, $EntityRendererAccessor, $EntityRendererAccessor$2, $EntityRendererInter<any>, $EntityRendererAccessor$4, $EntityRendererAccessor$1 {
        getPackedLightCoords(arg0: $Object, arg1: number): number;
        getFont(): $Font;
        shouldRender(arg0: $Object, arg1: $Frustum, arg2: number, arg3: number, arg4: number): boolean;
        getTextureLocation(arg0: $Object): $ResourceLocation;
        shadowShouldShowName(entity: $Entity): boolean;
        getRenderOffset(arg0: $Object, arg1: number): $Vec3;
        shadowRenderNameTag(entity: $Entity, component: $Component_, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, light: number, delta: number): void;
        modifyReturnValue$lca000$sable$getPackedLightCoords(arg0: number, arg1: $Entity, arg2: number): number;
        handler$fap000$irons_spellbooks$renderRayOverride(arg0: $Entity, arg1: $Frustum, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfoReturnable<any>): void;
        renderLeash<E extends $Entity>(arg0: $Object, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: E): void;
        getFusionModelParts(): $List<any>;
        setFusionModelParts(parts: $List_<any>): void;
        entityCullingIgnoresCulling(entity: $Entity): boolean;
        entityCullingGetCullingBox(entity: $Entity): $AABB;
        render(arg0: $Object, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        figura$isRenderingName(): boolean;
        figura$hasScore(): boolean;
        cumulus$getShadowRadius(): number;
        cumulus$setShadowRadius(arg0: number): void;
        additionalEntityAttributes$getShadowRadius(): number;
        callGetBlockLightLevel<T extends $Entity>(arg0: T, arg1: $BlockPos_): number;
        aether$getShadowRadius(): number;
        aether$setShadowRadius(arg0: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        get font(): $Font;
    }
    export class $PaintingRenderer extends $EntityRenderer<$Painting> {
        getTextureLocation(arg0: $Painting): $ResourceLocation;
        render(arg0: $Painting, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SquidRenderer<T extends $Squid> extends $MobRenderer<T, $SquidModel<T>> {
        getTextureLocation(arg0: T): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, $SquidModel<T>>>;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $SquidModel<T>);
    }
    export class $OminousItemSpawnerRenderer extends $EntityRenderer<$OminousItemSpawner> {
        getTextureLocation(arg0: $OminousItemSpawner): $ResourceLocation;
        render(arg0: $OminousItemSpawner, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
    }
    export class $PolarBearRenderer extends $MobRenderer<$PolarBear, $PolarBearModel<$PolarBear>> {
        getTextureLocation(arg0: $PolarBear): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$PolarBear, $PolarBearModel<$PolarBear>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ArmorStandRenderer extends $LivingEntityRenderer<$ArmorStand, $ArmorStandArmorModel> {
        getTextureLocation(arg0: $ArmorStand): $ResourceLocation;
        handler$zcg000$doapi$onConstruct(ctx: $EntityRendererProvider$Context, ci: $CallbackInfo): void;
        static DEFAULT_SKIN_LOCATION: $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$ArmorStand, $ArmorStandArmorModel>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ZombieRenderer extends $AbstractZombieRenderer<$Zombie, $ZombieModel<$Zombie>> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Zombie, $ZombieModel<$Zombie>>>;
        constructor(arg0: $EntityRendererProvider$Context);
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation, arg2: $ModelLayerLocation, arg3: $ModelLayerLocation);
    }
    export class $IllusionerRenderer extends $IllagerRenderer<$Illusioner> {
        getTextureLocation(arg0: $Illusioner): $ResourceLocation;
        render(arg0: $Illusioner, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Illusioner, $IllagerModel<$Illusioner>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $RabbitRenderer extends $MobRenderer<$Rabbit, $RabbitModel<$Rabbit>> {
        getTextureLocation(arg0: $Rabbit): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Rabbit, $RabbitModel<$Rabbit>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $CowRenderer extends $MobRenderer<$Cow, $CowModel<$Cow>> {
        getTextureLocation(arg0: $Cow): $ResourceLocation;
        render(entity: $Cow, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Cow, $CowModel<$Cow>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $DolphinRenderer extends $MobRenderer<$Dolphin, $DolphinModel<$Dolphin>> {
        getTextureLocation(arg0: $Dolphin): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Dolphin, $DolphinModel<$Dolphin>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $WindChargeRenderer extends $EntityRenderer<$AbstractWindCharge> {
        getTextureLocation(arg0: $AbstractWindCharge): $ResourceLocation;
        render(arg0: $AbstractWindCharge, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SheepRenderer extends $MobRenderer<$Sheep, $SheepModel<$Sheep>> {
        getTextureLocation(arg0: $Sheep): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Sheep, $SheepModel<$Sheep>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $GhastRenderer extends $MobRenderer<$Ghast, $GhastModel<$Ghast>> {
        getTextureLocation(arg0: $Ghast): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Ghast, $GhastModel<$Ghast>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ShulkerBulletRenderer extends $EntityRenderer<$ShulkerBullet> {
        getTextureLocation(arg0: $ShulkerBullet): $ResourceLocation;
        render(arg0: $ShulkerBullet, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $LightningBoltRenderer extends $EntityRenderer<$LightningBolt> {
        getTextureLocation(arg0: $LightningBolt): $ResourceLocation;
        render(arg0: $LightningBolt, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ThrownItemRenderer<T extends $Entity> extends $EntityRenderer<T> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
        constructor(arg0: $EntityRendererProvider$Context, arg1: number, arg2: boolean);
    }
    export class $ChestedHorseRenderer<T extends $AbstractChestedHorse> extends $AbstractHorseRenderer<T, $ChestedHorseModel<T>> {
        getTextureLocation(arg0: T): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, $ChestedHorseModel<T>>>;
        constructor(arg0: $EntityRendererProvider$Context, arg1: number, arg2: $ModelLayerLocation);
    }
    export class $LlamaRenderer extends $MobRenderer<$Llama, $LlamaModel<$Llama>> {
        getTextureLocation(arg0: $Llama): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Llama, $LlamaModel<$Llama>>>;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation);
    }
    export class $ParrotRenderer extends $MobRenderer<$Parrot, $ParrotModel> {
        getTextureLocation(arg0: $Parrot): $ResourceLocation;
        static getVariantTexture(arg0: $Parrot$Variant_): $ResourceLocation;
        getBob(arg0: $Parrot, arg1: number): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Parrot, $ParrotModel>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SlimeRenderer extends $MobRenderer<$Slime, $SlimeModel<$Slime>> {
        getTextureLocation(arg0: $Slime): $ResourceLocation;
        render(arg0: $Slime, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Slime, $SlimeModel<$Slime>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $GlowSquidRenderer extends $SquidRenderer<$GlowSquid> {
        getTextureLocation(arg0: $GlowSquid): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$GlowSquid, $SquidModel<$GlowSquid>>>;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $SquidModel<$GlowSquid>);
    }
    export class $StrayRenderer extends $SkeletonRenderer<$Stray> {
        getTextureLocation(arg0: $Stray): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Stray, $SkeletonModel<$Stray>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $PiglinRenderer extends $HumanoidMobRenderer<$Mob, $PiglinModel<$Mob>> {
        getTextureLocation(arg0: $Mob): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Mob, $PiglinModel<$Mob>>>;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation, arg2: $ModelLayerLocation, arg3: $ModelLayerLocation, arg4: boolean);
    }
    export class $TippableArrowRenderer extends $ArrowRenderer<$Arrow> {
        getTextureLocation(arg0: $Arrow): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        static TIPPED_ARROW_LOCATION: $ResourceLocation;
        entityRenderDispatcher: $EntityRenderDispatcher;
        static NORMAL_ARROW_LOCATION: $ResourceLocation;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $HoglinRenderer extends $MobRenderer<$Hoglin, $HoglinModel<$Hoglin>> {
        getTextureLocation(arg0: $Hoglin): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Hoglin, $HoglinModel<$Hoglin>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $CreeperRenderer extends $MobRenderer<$Creeper, $CreeperModel<$Creeper>> {
        getTextureLocation(arg0: $Creeper): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Creeper, $CreeperModel<$Creeper>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $PufferfishRenderer extends $MobRenderer<$Pufferfish, $EntityModel<$Pufferfish>> {
        getTextureLocation(arg0: $Pufferfish): $ResourceLocation;
        render(arg0: $Pufferfish, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Pufferfish, $EntityModel<$Pufferfish>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $PandaRenderer extends $MobRenderer<$Panda, $PandaModel<$Panda>> {
        getTextureLocation(arg0: $Panda): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Panda, $PandaModel<$Panda>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $WitchRenderer extends $MobRenderer<$Witch, $WitchModel<$Witch>> {
        getTextureLocation(arg0: $Witch): $ResourceLocation;
        render(arg0: $Witch, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Witch, $WitchModel<$Witch>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $AbstractZombieRenderer<T extends $Zombie, M extends $ZombieModel<T>> extends $HumanoidMobRenderer<T, M> {
        getTextureLocation(arg0: $Zombie): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, M>>;
    }
    export class $EntityRendererProvider<T extends $Entity> {
    }
    export interface $EntityRendererProvider<T extends $Entity> {
        create(arg0: $EntityRendererProvider$Context): $EntityRenderer<T>;
    }
    /**
     * Values that may be interpreted as {@link $EntityRendererProvider}.
     */
    export type $EntityRendererProvider_<T> = ((arg0: $EntityRendererProvider$Context) => $EntityRenderer<T>);
    export class $PhantomRenderer extends $MobRenderer<$Phantom, $PhantomModel<$Phantom>> {
        getTextureLocation(arg0: $Phantom): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Phantom, $PhantomModel<$Phantom>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SalmonRenderer extends $MobRenderer<$Salmon, $SalmonModel<$Salmon>> {
        getTextureLocation(arg0: $Salmon): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Salmon, $SalmonModel<$Salmon>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EvokerFangsRenderer extends $EntityRenderer<$EvokerFangs> {
        getTextureLocation(arg0: $EvokerFangs): $ResourceLocation;
        render(arg0: $EvokerFangs, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $DragonFireballRenderer extends $EntityRenderer<$DragonFireball> {
        getTextureLocation(arg0: $DragonFireball): $ResourceLocation;
        render(arg0: $DragonFireball, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EndermanRenderer extends $MobRenderer<$EnderMan, $EndermanModel<$EnderMan>> {
        getTextureLocation(arg0: $EnderMan): $ResourceLocation;
        getRenderOffset(arg0: $EnderMan, arg1: number): $Vec3;
        render(arg0: $EnderMan, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$EnderMan, $EndermanModel<$EnderMan>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EntityRenderDispatcher implements $ResourceManagerReloadListener, $EntityRenderDispatcherAccessor$1, $OwoEntityRenderDispatcherExtension, $EntityRenderDispatcherAccessor, $AccessorEntityRenderDispatcher {
        getPackedLightCoords<E extends $Entity>(arg0: E, arg1: number): number;
        getItemInHandRenderer(): $ItemInHandRenderer;
        onResourceManagerReload(arg0: $ResourceManager): void;
        distanceToSqr(arg0: number, arg1: number, arg2: number): number;
        distanceToSqr(arg0: $Entity): number;
        shouldRender<E extends $Entity>(arg0: E, arg1: $Frustum, arg2: number, arg3: number, arg4: number): boolean;
        overrideCameraOrientation(arg0: $Quaternionf): void;
        setRenderShadow(arg0: boolean): void;
        getRenderer<T extends $Entity>(arg0: T): $EntityRenderer<T>;
        shouldRenderHitBoxes(): boolean;
        setRenderHitBoxes(arg0: boolean): void;
        setLevel(arg0: $Level_): void;
        cameraOrientation(): $Quaternionf;
        owo$showNametag(): boolean;
        owo$counterRotate(): boolean;
        owo$setCounterRotate(counterRotate: boolean): void;
        owo$setShowNametag(showNametag: boolean): void;
        getSkinMap(): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        handler$eik000$chloride$inject$shouldRender(arg0: $Entity, arg1: $Frustum, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfoReturnable<any>): void;
        handler$nbn001$spectrum$render(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $PoseStack, arg7: $MultiBufferSource_, arg8: number, arg9: $CallbackInfo): void;
        handler$nbn000$spectrum$render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Entity, arg3: $Quaternionf, arg4: $CallbackInfo): void;
        prepare(arg0: $Level_, arg1: $Camera, arg2: $Entity): void;
        render<E extends $Entity>(arg0: E, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $PoseStack, arg7: $MultiBufferSource_, arg8: number): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        getRenderers(): $Map<$EntityType<never>, $EntityRenderer<never>>;
        create$getRenderers(): $Map<$EntityType<never>, $EntityRenderer<never>>;
        entityModels: $EntityModelSet;
        crosshairPickEntity: $Entity;
        renderers: $Map<$EntityType<never>, $EntityRenderer<never>>;
        options: $Options;
        textureManager: $TextureManager;
        camera: $Camera;
        constructor(arg0: $Minecraft, arg1: $TextureManager, arg2: $ItemRenderer, arg3: $BlockRenderDispatcher, arg4: $Font, arg5: $Options, arg6: $EntityModelSet);
        get itemInHandRenderer(): $ItemInHandRenderer;
        set renderShadow(value: boolean);
        set renderHitBoxes(value: boolean);
        set level(value: $Level_);
        get skinMap(): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        get name(): string;
    }
    export class $MagmaCubeRenderer extends $MobRenderer<$MagmaCube, $LavaSlimeModel<$MagmaCube>> {
        getTextureLocation(arg0: $MagmaCube): $ResourceLocation;
        render(arg0: $MagmaCube, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$MagmaCube, $LavaSlimeModel<$MagmaCube>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $TurtleRenderer extends $MobRenderer<$Turtle, $TurtleModel<$Turtle>> {
        getTextureLocation(arg0: $Turtle): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Turtle, $TurtleModel<$Turtle>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $PillagerRenderer extends $IllagerRenderer<$Pillager> {
        getTextureLocation(arg0: $Pillager): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Pillager, $IllagerModel<$Pillager>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer$TextDisplayRenderer extends $DisplayRenderer<$Display$TextDisplay, $Display$TextDisplay$TextRenderState> {
        renderInner(arg0: $Display$TextDisplay, arg1: $Display$TextDisplay$TextRenderState_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
    }
    export class $FrogRenderer extends $MobRenderer<$Frog, $FrogModel<$Frog>> {
        getTextureLocation(arg0: $Frog): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Frog, $FrogModel<$Frog>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ZoglinRenderer extends $MobRenderer<$Zoglin, $HoglinModel<$Zoglin>> {
        getTextureLocation(arg0: $Zoglin): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Zoglin, $HoglinModel<$Zoglin>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer$ItemDisplayRenderer extends $DisplayRenderer<$Display$ItemDisplay, $Display$ItemDisplay$ItemRenderState> {
        renderInner(arg0: $Display$ItemDisplay, arg1: $Display$ItemDisplay$ItemRenderState_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
    }
    export class $FoxRenderer extends $MobRenderer<$Fox, $FoxModel<$Fox>> {
        getTextureLocation(arg0: $Fox): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Fox, $FoxModel<$Fox>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ZombieVillagerRenderer extends $HumanoidMobRenderer<$ZombieVillager, $ZombieVillagerModel<$ZombieVillager>> {
        getTextureLocation(arg0: $ZombieVillager): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$ZombieVillager, $ZombieVillagerModel<$ZombieVillager>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $VexRenderer extends $MobRenderer<$Vex, $VexModel> {
        getTextureLocation(arg0: $Vex): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Vex, $VexModel>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EndCrystalRenderer extends $EntityRenderer<$EndCrystal> {
        shouldRender(arg0: $EndCrystal, arg1: $Frustum, arg2: number, arg3: number, arg4: number): boolean;
        getTextureLocation(arg0: $EndCrystal): $ResourceLocation;
        static getY(arg0: $EndCrystal, arg1: number): number;
        static createBodyLayer(): $LayerDefinition;
        render(arg0: $EndCrystal, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $AbstractHorseRenderer<T extends $AbstractHorse, M extends $HorseModel<T>> extends $MobRenderer<T, M> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, M>>;
        constructor(arg0: $EntityRendererProvider$Context, arg1: M, arg2: number);
    }
    export class $WanderingTraderRenderer extends $MobRenderer<$WanderingTrader, $VillagerModel<$WanderingTrader>> {
        getTextureLocation(arg0: $WanderingTrader): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$WanderingTrader, $VillagerModel<$WanderingTrader>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ExperienceOrbRenderer extends $EntityRenderer<$ExperienceOrb> {
        getTextureLocation(arg0: $ExperienceOrb): $ResourceLocation;
        render(arg0: $ExperienceOrb, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SkeletonRenderer<T extends $AbstractSkeleton> extends $HumanoidMobRenderer<T, $SkeletonModel<T>> {
        getTextureLocation(arg0: T): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, $SkeletonModel<T>>>;
        constructor(arg0: $EntityRendererProvider$Context);
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation, arg2: $ModelLayerLocation, arg3: $SkeletonModel<T>);
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation, arg2: $ModelLayerLocation, arg3: $ModelLayerLocation);
    }
    export class $GoatRenderer extends $MobRenderer<$Goat, $GoatModel<$Goat>> {
        getTextureLocation(arg0: $Goat): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Goat, $GoatModel<$Goat>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EndermiteRenderer extends $MobRenderer<$Endermite, $EndermiteModel<$Endermite>> {
        getTextureLocation(arg0: $Endermite): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Endermite, $EndermiteModel<$Endermite>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $IllagerRenderer<T extends $AbstractIllager> extends $MobRenderer<T, $IllagerModel<T>> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, $IllagerModel<T>>>;
    }
    export class $BeeRenderer extends $MobRenderer<$Bee, $BeeModel<$Bee>> {
        getTextureLocation(arg0: $Bee): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Bee, $BeeModel<$Bee>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $RenderLayerParent<T extends $Entity, M extends $EntityModel<T>> {
    }
    export interface $RenderLayerParent<T extends $Entity, M extends $EntityModel<T>> {
        getTextureLocation(arg0: T): $ResourceLocation;
        getModel(): M;
        get model(): M;
    }
    export class $AllayRenderer extends $MobRenderer<$Allay, $AllayModel> {
        getTextureLocation(arg0: $Allay): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Allay, $AllayModel>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $LeashKnotRenderer extends $EntityRenderer<$LeashFenceKnotEntity> {
        getTextureLocation(arg0: $LeashFenceKnotEntity): $ResourceLocation;
        render(arg0: $LeashFenceKnotEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $AxolotlRenderer extends $MobRenderer<$Axolotl, $AxolotlModel<$Axolotl>> {
        getTextureLocation(arg0: $Axolotl): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Axolotl, $AxolotlModel<$Axolotl>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SpectralArrowRenderer extends $ArrowRenderer<$SpectralArrow> {
        getTextureLocation(arg0: $SpectralArrow): $ResourceLocation;
        shadowRadius: number;
        static SPECTRAL_ARROW_LOCATION: $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $CatRenderer extends $MobRenderer<$Cat, $CatModel<$Cat>> {
        getTextureLocation(arg0: $Cat): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Cat, $CatModel<$Cat>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SilverfishRenderer extends $MobRenderer<$Silverfish, $SilverfishModel<$Silverfish>> {
        getTextureLocation(arg0: $Silverfish): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Silverfish, $SilverfishModel<$Silverfish>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $StriderRenderer extends $MobRenderer<$Strider, $StriderModel<$Strider>> {
        getTextureLocation(arg0: $Strider): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Strider, $StriderModel<$Strider>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $LivingEntityRenderer<T extends $LivingEntity, M extends $EntityModel<T>> extends $EntityRenderer<T> implements $RenderLayerParent<T, M>, $LivingEntityRendererAccessor<any, any>, $LivingEntityRendererAccessor$3, $LivingEntityRendererAccessor$2<any, any>, $LivingRendererAccess, $LivingEntityRendererAccessor$1<any, any>, $AccessorLivingEntityRenderer<any>, $LivingEntityRendererAccessor$4 {
        addLayer(arg0: $RenderLayer<T, M>): boolean;
        static getOverlayCoords(arg0: $LivingEntity, arg1: number): number;
        static isEntityUpsideDown(arg0: $LivingEntity): boolean;
        cpm$onGetRenderType(arg0: $LivingEntity, arg1: boolean, arg2: boolean, arg3: $CallbackInfoReturnable<any>): void;
        handler$enc000$cpm$onGetRenderType(arg0: $LivingEntity, arg1: boolean, arg2: boolean, arg3: boolean, arg4: $CallbackInfoReturnable<any>): void;
        wrapMethod$cdg000$irons_lib$irons_spellbooks$handleTransmog(arg0: $LivingEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: $Operation_<any>): void;
        handler$mkp000$quark$pushChickenDown(arg0: $LivingEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: $CallbackInfo): void;
        render(arg0: T, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        getModel(): M;
        getLayers(): $List<$RenderLayer<T, M>>;
        invokeAddFeature<T extends $LivingEntity, M extends $EntityModel<T>>(arg0: $RenderLayer<T, M>): boolean;
        accessorScale(arg0: $LivingEntity, arg1: $PoseStack, arg2: number): void;
        callAddFeature(arg0: $RenderLayer<T, M>): boolean;
        callSetupRotations(arg0: T, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, M>>;
        constructor(arg0: $EntityRendererProvider$Context, arg1: M, arg2: number);
        get model(): M;
    }
    export class $BoatRenderer extends $EntityRenderer<$Boat> {
        /**
         * @deprecated
         */
        getTextureLocation(arg0: $Boat): $ResourceLocation;
        modifyExpressionValue$bhl000$supplementaries$supp$changeTexture(original: $Object, boat: $Boat): $Object;
        getModelWithLocation(arg0: $Boat): $Pair<$ResourceLocation, $ListModel<$Boat>>;
        render(arg0: $Boat, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context, arg1: boolean);
    }
    export class $MobRenderer<T extends $Mob, M extends $EntityModel<T>> extends $LivingEntityRenderer<T, M> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, M>>;
        constructor(arg0: $EntityRendererProvider$Context, arg1: M, arg2: number);
    }
    export class $BreezeRenderer extends $MobRenderer<$Breeze, $BreezeModel<$Breeze>> {
        getTextureLocation(arg0: $Breeze): $ResourceLocation;
        static enable(arg0: $BreezeModel<$Breeze>, ...arg1: $ModelPart[]): $BreezeModel<$Breeze>;
        render(arg0: $Breeze, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Breeze, $BreezeModel<$Breeze>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $RavagerRenderer extends $MobRenderer<$Ravager, $RavagerModel> {
        getTextureLocation(arg0: $Ravager): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Ravager, $RavagerModel>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $IronGolemRenderer extends $MobRenderer<$IronGolem, $IronGolemModel<$IronGolem>> {
        getTextureLocation(arg0: $IronGolem): $ResourceLocation;
        handler$bid000$supplementaries$supp$swag(entity: $IronGolem, info: $CallbackInfoReturnable<any>): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$IronGolem, $IronGolemModel<$IronGolem>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $HuskRenderer extends $ZombieRenderer {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Zombie, $ZombieModel<$Zombie>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $GiantMobRenderer extends $MobRenderer<$Giant, $HumanoidModel<$Giant>> {
        getTextureLocation(arg0: $Giant): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Giant, $HumanoidModel<$Giant>>>;
        constructor(arg0: $EntityRendererProvider$Context, arg1: number);
    }
    export class $WitherBossRenderer extends $MobRenderer<$WitherBoss, $WitherBossModel<$WitherBoss>> {
        getTextureLocation(arg0: $WitherBoss): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$WitherBoss, $WitherBossModel<$WitherBoss>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $WitherSkullRenderer extends $EntityRenderer<$WitherSkull> {
        getTextureLocation(arg0: $WitherSkull): $ResourceLocation;
        static createSkullLayer(): $LayerDefinition;
        render(arg0: $WitherSkull, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ArrowRenderer<T extends $AbstractArrow> extends $EntityRenderer<T> {
        vertex(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        render(arg0: T, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $FishingHookRenderer extends $EntityRenderer<$FishingHook> {
        getTextureLocation(arg0: $FishingHook): $ResourceLocation;
        render(arg0: $FishingHook, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $FallingBlockRenderer extends $EntityRenderer<$FallingBlockEntity> {
        getTextureLocation(arg0: $FallingBlockEntity): $ResourceLocation;
        render(arg0: $FallingBlockEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ElderGuardianRenderer extends $GuardianRenderer {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Guardian, $GuardianModel>>;
        static GUARDIAN_ELDER_LOCATION: $ResourceLocation;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $CodRenderer extends $MobRenderer<$Cod, $CodModel<$Cod>> {
        getTextureLocation(arg0: $Cod): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Cod, $CodModel<$Cod>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SpiderRenderer<T extends $Spider> extends $MobRenderer<T, $SpiderModel<T>> {
        getTextureLocation(arg0: T): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, $SpiderModel<T>>>;
        constructor(arg0: $EntityRendererProvider$Context);
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation);
    }
    export class $TadpoleRenderer extends $MobRenderer<$Tadpole, $TadpoleModel<$Tadpole>> {
        getTextureLocation(arg0: $Tadpole): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Tadpole, $TadpoleModel<$Tadpole>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $BlazeRenderer extends $MobRenderer<$Blaze, $BlazeModel<$Blaze>> {
        getTextureLocation(arg0: $Blaze): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Blaze, $BlazeModel<$Blaze>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ItemFrameRenderer<T extends $ItemFrame> extends $EntityRenderer<T> {
        getTextureLocation(arg0: T): $ResourceLocation;
        getRenderOffset(arg0: T, arg1: number): $Vec3;
        getLightVal(arg0: T, arg1: number, arg2: number): number;
        render(arg0: T, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        static BRIGHT_MAP_LIGHT_ADJUSTMENT: number;
        static GLOW_FRAME_BRIGHTNESS: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer<T extends $Display, S> extends $EntityRenderer<T> {
        getTextureLocation(arg0: T): $ResourceLocation;
        render(arg0: T, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
    }
    export class $HorseRenderer extends $AbstractHorseRenderer<$Horse, $HorseModel<$Horse>> {
        getTextureLocation(arg0: $Horse): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Horse, $HorseModel<$Horse>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ShulkerRenderer extends $MobRenderer<$Shulker, $ShulkerModel<$Shulker>> {
        shouldRender(arg0: $Shulker, arg1: $Frustum, arg2: number, arg3: number, arg4: number): boolean;
        getTextureLocation(arg0: $Shulker): $ResourceLocation;
        static getTextureLocation(arg0: $DyeColor_): $ResourceLocation;
        getRenderOffset(arg0: $Shulker, arg1: number): $Vec3;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Shulker, $ShulkerModel<$Shulker>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $WitherSkeletonRenderer extends $SkeletonRenderer<$WitherSkeleton> {
        getTextureLocation(arg0: $WitherSkeleton): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$WitherSkeleton, $SkeletonModel<$WitherSkeleton>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $CaveSpiderRenderer extends $SpiderRenderer<$CaveSpider> {
        getTextureLocation(arg0: $CaveSpider): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$CaveSpider, $SpiderModel<$CaveSpider>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $BoggedRenderer extends $SkeletonRenderer<$Bogged> {
        getTextureLocation(arg0: $Bogged): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Bogged, $SkeletonModel<$Bogged>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EnderDragonRenderer extends $EntityRenderer<$EnderDragon> {
        getTextureLocation(arg0: $EnderDragon): $ResourceLocation;
        static renderCrystalBeams(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $PoseStack, arg6: $MultiBufferSource_, arg7: number): void;
        static createBodyLayer(): $LayerDefinition;
        render(arg0: $EnderDragon, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        static CRYSTAL_BEAM_LOCATION: $ResourceLocation;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SnifferRenderer extends $MobRenderer<$Sniffer, $SnifferModel<$Sniffer>> {
        getTextureLocation(arg0: $Sniffer): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Sniffer, $SnifferModel<$Sniffer>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $MinecartRenderer<T extends $AbstractMinecart> extends $EntityRenderer<T> implements $MinecartRendererAccess {
        getTextureLocation(arg0: T): $ResourceLocation;
        render(arg0: T, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        getModel(): $EntityModel<never>;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation);
        get model(): $EntityModel<never>;
    }
    export class $TntMinecartRenderer extends $MinecartRenderer<$MinecartTNT> {
        static renderWhiteSolidBlock(arg0: $BlockRenderDispatcher, arg1: $BlockState_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: boolean): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $MushroomCowRenderer extends $MobRenderer<$MushroomCow, $CowModel<$MushroomCow>> {
        getTextureLocation(arg0: $MushroomCow): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$MushroomCow, $CowModel<$MushroomCow>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ArmadilloRenderer extends $MobRenderer<$Armadillo, $ArmadilloModel> {
        getTextureLocation(arg0: $Armadillo): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Armadillo, $ArmadilloModel>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $HumanoidMobRenderer<T extends $Mob, M extends $HumanoidModel<T>> extends $MobRenderer<T, M> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, M>>;
        constructor(arg0: $EntityRendererProvider$Context, arg1: M, arg2: number);
        constructor(arg0: $EntityRendererProvider$Context, arg1: M, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $LlamaSpitRenderer extends $EntityRenderer<$LlamaSpit> {
        getTextureLocation(arg0: $LlamaSpit): $ResourceLocation;
        render(arg0: $LlamaSpit, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $DrownedRenderer extends $AbstractZombieRenderer<$Drowned, $DrownedModel<$Drowned>> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Drowned, $DrownedModel<$Drowned>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EntityRenderers implements $EntityRenderersAccessor {
        static validateRegistrations(): boolean;
        static bumblezone$getPROVIDERS$the_bumblezone_$md$68cb88$0(): $Map<any, any>;
        static createEntityRenderers(arg0: $EntityRendererProvider$Context): $Map<$EntityType<never>, $EntityRenderer<never>>;
        static createPlayerRenderers(arg0: $EntityRendererProvider$Context): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        static register<T extends $Entity>(arg0: $EntityType_<T>, arg1: $EntityRendererProvider_<T>): void;
        constructor();
    }
    export class $OcelotRenderer extends $MobRenderer<$Ocelot, $OcelotModel<$Ocelot>> {
        getTextureLocation(arg0: $Ocelot): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Ocelot, $OcelotModel<$Ocelot>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $FireworkEntityRenderer extends $EntityRenderer<$FireworkRocketEntity> {
        getTextureLocation(arg0: $FireworkRocketEntity): $ResourceLocation;
        render(arg0: $FireworkRocketEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ItemRenderer implements $ResourceManagerReloadListener, $ItemRendererAccessor$1, $IdentifiableResourceReloadListener, $ItemRendererAccessor, $ExtendedItemRenderer, $GoggleTextureOverlayRenderer {
        onResourceManagerReload(arg0: $ResourceManager): void;
        getItemModelShaper(): $ItemModelShaper;
        renderModelLists(arg0: $BakedModel, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer): void;
        renderStatic(arg0: $ItemStack_, arg1: $ItemDisplayContext_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: $Level_, arg7: number): void;
        renderStatic(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $ItemDisplayContext_, arg3: boolean, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: $Level_, arg7: number, arg8: number, arg9: number): void;
        static hasAnimatedTexture(arg0: $ItemStack_): boolean;
        static getArmorFoilBuffer(arg0: $MultiBufferSource_, arg1: $RenderType, arg2: boolean): $VertexConsumer;
        static getCompassFoilBuffer(arg0: $MultiBufferSource_, arg1: $RenderType, arg2: $PoseStack$Pose): $VertexConsumer;
        static getFoilBuffer(arg0: $MultiBufferSource_, arg1: $RenderType, arg2: boolean, arg3: boolean): $VertexConsumer;
        static getFoilBufferDirect(arg0: $MultiBufferSource_, arg1: $RenderType, arg2: boolean, arg3: boolean): $VertexConsumer;
        renderQuadList(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $List_<$BakedQuad>, arg3: $ItemStack_, arg4: number, arg5: number): void;
        getBlockEntityRenderer(): $BlockEntityWithoutLevelRenderer;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        handler$enk000$azurelib$itemModelHook(arg0: $ItemStack_, arg1: $ItemDisplayContext_, arg2: boolean, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: $BakedModel, arg8: $CallbackInfo): void;
        moreculling$renderBakedItemModelWithoutFace(arg0: $BakedModel, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer, arg6: $Direction_): void;
        moreculling$renderBakedItemModelOnly3Faces(arg0: $BakedModel, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer, arg6: $Direction_, arg7: $Direction_, arg8: $Direction_): void;
        moreculling$renderBakedItemModelForFace(arg0: $BakedModel, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer, arg6: $Direction_): void;
        moreculling$renderItemFrameItem(arg0: $ItemStack_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: $ItemFrame, arg5: $Camera): void;
        handler$kkh000$creategoggles$onRender(itemStack: $ItemStack_, itemDisplayContext: $ItemDisplayContext_, bl: boolean, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, i: number, j: number, bakedModel: $BakedModel, ci: $CallbackInfo, bl2: boolean, bl3: boolean, iter: $Iterator<any>, bakedModel2: $BakedModel, iter2: $Iterator<any>, renderType: $RenderType, vertexConsumer: $VertexConsumer): void;
        handler$nfo000$codechickenl$onRenderItem(arg0: $ItemStack_, arg1: $ItemDisplayContext_, arg2: boolean, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: $BakedModel, arg8: $CallbackInfo): void;
        modifyExpressionValue$mkn000$quark$renderQuads(arg0: number): number;
        static hasAnimatedTexture$sodium_$md$68cb88$1(arg0: $ItemStack_): boolean;
        render(arg0: $ItemStack_, arg1: $ItemDisplayContext_, arg2: boolean, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: $BakedModel): void;
        getModel(arg0: $ItemStack_, arg1: $Level_, arg2: $LivingEntity, arg3: number): $BakedModel;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        renderInjection(itemModelShaper: $ItemModelShaper, itemStack: $ItemStack_, poseStack: $PoseStack, i: number, j: number, vertexConsumer: $VertexConsumer): void;
        renderGoggleTexture(itemModelShaper: $ItemModelShaper, itemStack: $ItemStack_, poseStack: $PoseStack, i: number, j: number, vertexConsumer: $VertexConsumer): void;
        getName(): string;
        catnip$getTextureManager(): $TextureManager;
        static GUI_SLOT_CENTER_X: number;
        static COMPASS_FOIL_UI_SCALE: number;
        static COMPASS_FOIL_FIRST_PERSON_SCALE: number;
        static COMPASS_FOIL_TEXTURE_SCALE: number;
        static ENCHANTED_GLINT_ENTITY: $ResourceLocation;
        blockEntityRenderer: $BlockEntityWithoutLevelRenderer;
        static GUI_SLOT_CENTER_Y: number;
        static ITEM_COUNT_BLIT_OFFSET: number;
        static ENCHANTED_GLINT_ITEM: $ResourceLocation;
        static SPYGLASS_IN_HAND_MODEL: $ModelResourceLocation;
        textureManager: $TextureManager;
        static TRIDENT_IN_HAND_MODEL: $ModelResourceLocation;
        constructor(arg0: $Minecraft, arg1: $TextureManager, arg2: $ModelManager, arg3: $ItemColors, arg4: $BlockEntityWithoutLevelRenderer);
        get itemModelShaper(): $ItemModelShaper;
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get name(): string;
    }
    export class $WardenRenderer extends $MobRenderer<$Warden, $WardenModel<$Warden>> {
        getTextureLocation(arg0: $Warden): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Warden, $WardenModel<$Warden>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SnowGolemRenderer extends $MobRenderer<$SnowGolem, $SnowGolemModel<$SnowGolem>> {
        getTextureLocation(arg0: $SnowGolem): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$SnowGolem, $SnowGolemModel<$SnowGolem>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ItemEntityRenderer extends $EntityRenderer<$ItemEntity> {
        getTextureLocation(arg0: $ItemEntity): $ResourceLocation;
        static getSeedForItemStack(arg0: $ItemStack_): number;
        static renderMultipleFromCount(arg0: $ItemRenderer, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: $ItemStack_, arg5: $BakedModel, arg6: boolean, arg7: $RandomSource): void;
        static renderMultipleFromCount(arg0: $ItemRenderer, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: $ItemStack_, arg5: $RandomSource, arg6: $Level_): void;
        render(arg0: $ItemEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $BatRenderer extends $MobRenderer<$Bat, $BatModel> {
        getTextureLocation(arg0: $Bat): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Bat, $BatModel>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer$BlockDisplayRenderer extends $DisplayRenderer<$Display$BlockDisplay, $Display$BlockDisplay$BlockRenderState> {
        renderInner(arg0: $Display$BlockDisplay, arg1: $Display$BlockDisplay$BlockRenderState_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
    }
    export class $CamelRenderer extends $MobRenderer<$Camel, $CamelModel<$Camel>> {
        getTextureLocation(arg0: $Camel): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Camel, $CamelModel<$Camel>>>;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation);
    }
    export class $GuardianRenderer extends $MobRenderer<$Guardian, $GuardianModel> {
        shouldRender(arg0: $Guardian, arg1: $Frustum, arg2: number, arg3: number, arg4: number): boolean;
        getTextureLocation(arg0: $Guardian): $ResourceLocation;
        render(arg0: $Guardian, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Guardian, $GuardianModel>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EvokerRenderer<T extends $SpellcasterIllager> extends $IllagerRenderer<T> {
        getTextureLocation(arg0: T): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, $IllagerModel<T>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ChickenRenderer extends $MobRenderer<$Chicken, $ChickenModel<$Chicken>> {
        getTextureLocation(arg0: $Chicken): $ResourceLocation;
        render(entity: $Chicken, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Chicken, $ChickenModel<$Chicken>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
}
